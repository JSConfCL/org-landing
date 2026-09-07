/**
 * Build script: fetches the Luma iCal feed, scrapes og:image covers,
 * and writes public/events.json ready for the Next.js static export.
 *
 * Run:  node scripts/fetch-events.mjs
 * Env:  none required — uses the public iCal feed only.
 */

import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import ical from 'node-ical';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT        = join(__dirname, '..');
const CACHE_FILE  = join(__dirname, 'og-cache.json');
const OUTPUT_FILE = join(ROOT, 'public', 'events.json');
const ICAL_URL    = 'https://api.lu.ma/ics/get?entity=calendar&id=cal-k2TNsuCIp2uuGla';

// ──────────────────────────────────────────────
// Cache (persists og:image lookups across runs)
// ──────────────────────────────────────────────

async function loadCache() {
  if (existsSync(CACHE_FILE)) {
    return JSON.parse(await readFile(CACHE_FILE, 'utf-8'));
  }
  return {};
}

async function saveCache(cache) {
  await writeFile(CACHE_FILE, JSON.stringify(cache, null, 2));
}

// ──────────────────────────────────────────────
// og:image scraping
// ──────────────────────────────────────────────

async function fetchOgImage(url, cache, skipCache = false) {
  if (!skipCache && url in cache) return cache[url];

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; JSChile-EventBot/1.0)' },
      signal: AbortSignal.timeout(12_000),
    });
    const html = await res.text();

    // Priority 1: find the actual event cover from the page HTML.
    // Luma renders the square/portrait cover via srcset using /uploads/ paths.
    const uploadMatch = html.match(/\/uploads\/([a-z0-9]+\/[a-zA-Z0-9_-]+\.[a-z]+)/);
    if (uploadMatch) {
      const coverUrl = `https://images.lumacdn.com/uploads/${uploadMatch[1]}`;
      cache[url] = coverUrl;
      return coverUrl;
    }

    // Priority 2: event-covers path with extension (older events)
    const coversMatch = html.match(/\/event-covers\/([a-z0-9]+\/[a-zA-Z0-9_-]+\.[a-z]+)/);
    if (coversMatch) {
      const coverUrl = `https://images.lumacdn.com/event-covers/${coversMatch[1]}`;
      cache[url] = coverUrl;
      return coverUrl;
    }

    // Fallback: og:image meta tag
    const match = html.match(/property=["']og:image["'][^>]+content=["']([^"']+)["']/);
    if (!match) {
      cache[url] = null;
      return null;
    }

    const raw = match[1].replace(/&amp;/g, '&');

    // og.luma.com: extract cover from ?img= param
    if (raw.includes('og.luma.com')) {
      try {
        const parsed = new URL(raw);
        const imgParam = parsed.searchParams.get('img');
        if (imgParam) {
          cache[url] = imgParam;
          return imgParam;
        }
      } catch { /* fall through to raw */ }
    }

    // Generic default social image → no cover
    if (raw.includes('/social-images/')) {
      cache[url] = null;
      return null;
    }

    cache[url] = raw;
    return raw;
  } catch (err) {
    console.warn(`  ⚠ og:image fetch failed for ${url}: ${err.message}`);
    cache[url] = null;
    return null;
  }
}

// ──────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────

function extractUrlFromDescription(description) {
  if (!description) return null;
  // description may have literal '\n' or real newlines depending on node-ical version
  const clean = description.replace(/\\n/g, '\n');
  const match = clean.match(/https:\/\/luma\.com\/([^\s\n\\]+)/);
  if (!match) return null;
  return `https://luma.com/${match[1]}`;
}

function classifyEvent(start, end, now) {
  if (end < now)                         return 'past';
  if (start <= now && now <= end)        return 'ongoing';
  return 'upcoming';
}

function isCancelled(summary) {
  return /\[CANCELADO\]/i.test(summary ?? '');
}

// ──────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────

async function main() {
  console.log('📅 Fetching Luma iCal feed…');
  const res  = await fetch(ICAL_URL, { signal: AbortSignal.timeout(20_000) });
  const text = await res.text();

  const parsed = ical.parseICS(text);
  const cache  = await loadCache();
  const now    = new Date();

  const events = [];
  const vevents = Object.values(parsed).filter(e => e.type === 'VEVENT');

  console.log(`   Found ${vevents.length} VEVENTs. Scraping og:image covers…`);

  for (const ev of vevents) {
    const summary = (ev.summary ?? '').trim();

    if (isCancelled(summary)) continue;

    const start = ev.start instanceof Date ? ev.start : new Date(ev.start);
    const end   = ev.end   instanceof Date ? ev.end   : new Date(ev.end);
    const status = classifyEvent(start, end, now);

    const url = extractUrlFromDescription(ev.description);

    // Skip events with no real URL (shouldn't happen in practice)
    const eventUrl = url ?? `https://lu.ma/jschile`;

    let cover_url = null;
    if (url) {
      process.stdout.write(`  → ${summary.slice(0, 50)}`);
      // Skip cache for upcoming/ongoing AND for events that ended within the last 7 days,
      // so a freshly-past event always shows the current Luma image.
      const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
      const skipCache =
        status === 'upcoming' ||
        status === 'ongoing' ||
        (status === 'past' && now - end < sevenDaysMs);
      cover_url = await fetchOgImage(url, cache, skipCache);
      console.log(cover_url ? ' ✓' : ' (no cover)');
    }

    // Don't treat location as address when Luma fills it with their own URL
    const location =
      ev.location && !ev.location.startsWith('https://luma.com')
        ? ev.location
        : null;

    events.push({
      uid:       ev.uid ?? `${summary}-${start.toISOString()}`,
      title:     summary,
      start:     start.toISOString(),
      end:       end.toISOString(),
      location,
      url:       eventUrl,
      cover_url,
      status,
    });
  }

  await saveCache(cache);

  const upcoming = events
    .filter(e => e.status === 'upcoming' || e.status === 'ongoing')
    .sort((a, b) => new Date(a.start) - new Date(b.start));

  const past = events
    .filter(e => e.status === 'past')
    .sort((a, b) => new Date(b.start) - new Date(a.start));

  // Only write if events actually changed (ignore generated_at drift)
  const newHash = createHash('sha256')
    .update(JSON.stringify({ upcoming, past }))
    .digest('hex');

  let existingHash = '';
  if (existsSync(OUTPUT_FILE)) {
    try {
      const existing = JSON.parse(await readFile(OUTPUT_FILE, 'utf-8'));
      existingHash = createHash('sha256')
        .update(JSON.stringify({ upcoming: existing.upcoming, past: existing.past }))
        .digest('hex');
    } catch { /* corrupt file — will overwrite */ }
  }

  if (newHash === existingHash) {
    console.log(`\n✅ No changes detected — events.json unchanged.`);
    console.log(`   ${upcoming.length} próximos / ${past.length} pasados`);
    return;
  }

  await writeFile(OUTPUT_FILE, JSON.stringify({
    generated_at: now.toISOString(),
    upcoming,
    past,
  }, null, 2));

  console.log(`\n✅ events.json updated:`);
  console.log(`   ${upcoming.length} próximos / ${past.length} pasados`);
  console.log(`   → ${OUTPUT_FILE}`);
}

main().catch(err => {
  console.error('❌ fetch-events failed:', err);
  process.exit(1);
});
