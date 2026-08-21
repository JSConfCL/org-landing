/**
 * Build script: fetches the speakers Google Sheet (CSV export) and writes
 * public/speakers.json. Column order: avatar, name, showInSection, linkedin,
 * instagram, github, website.
 *
 * Run:  node scripts/fetch-speakers.mjs
 */

import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT        = join(__dirname, '..');
const OUTPUT_FILE = join(ROOT, 'public', 'speakers.json');

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1cqTsGP4EvlwEo4ByIRwnu_PAmRx6uZHYL_skx02Osps/export?format=csv&gid=0';

function parseCSVRow(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (const ch of line) {
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result;
}

function clean(s) {
  return (s ?? '').replace(/[​‌‍﻿]/g, '').trim();
}

async function main() {
  console.log('👤 Fetching speakers from Google Sheets…');

  const res = await fetch(SHEET_URL, { signal: AbortSignal.timeout(20_000) });
  if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);

  const text = await res.text();
  const rows = text.trim().split('\n').slice(1); // skip header

  const speakers = [];
  rows.forEach((line, i) => {
    const cols = parseCSVRow(line);
    const name = clean(cols[1]);
    if (!name) return;

    speakers.push({
      id: String(i + 1),
      name,
      avatar:        clean(cols[0]) || null,
      showInSection: clean(cols[2]).toUpperCase() === 'TRUE',
      linkedin:      clean(cols[3]) || null,
      instagram:     clean(cols[4]) || null,
      github:        clean(cols[5]) || null,
      website:       clean(cols[6]) || null,
    });
  });

  const newHash = createHash('sha256').update(JSON.stringify(speakers)).digest('hex');

  let existingHash = '';
  if (existsSync(OUTPUT_FILE)) {
    try {
      const existing = JSON.parse(await readFile(OUTPUT_FILE, 'utf-8'));
      existingHash = createHash('sha256').update(JSON.stringify(existing.speakers)).digest('hex');
    } catch { /* corrupt — will overwrite */ }
  }

  if (newHash === existingHash) {
    console.log(`✅ No changes — speakers.json unchanged. (${speakers.length} speakers)`);
    return;
  }

  await writeFile(OUTPUT_FILE, JSON.stringify({
    generated_at: new Date().toISOString(),
    speakers,
  }, null, 2));

  const visible = speakers.filter(s => s.showInSection).length;
  console.log(`✅ speakers.json updated: ${speakers.length} total / ${visible} visibles en index`);
}

main().catch(err => {
  console.error('❌ fetch-speakers failed:', err);
  process.exit(1);
});
