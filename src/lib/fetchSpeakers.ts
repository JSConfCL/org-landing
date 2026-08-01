export interface Speaker {
  id: string;
  name: string;
  avatar?: string;
  showInSection: boolean;
  linkedin?: string;
  instagram?: string;
  github?: string;
  website?: string;
}

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1cqTsGP4EvlwEo4ByIRwnu_PAmRx6uZHYL_skx02Osps/export?format=csv&gid=0';

function parseCSVRow(line: string): string[] {
  const result: string[] = [];
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

function clean(s: string): string {
  // strip zero-width spaces that Google Sheets sometimes injects
  return s.replace(/[​‌‍﻿]/g, '').trim();
}

export async function fetchSpeakers(): Promise<Speaker[]> {
  try {
    const res = await fetch(SHEET_URL, { next: { revalidate: 300 } });
    if (!res.ok) return [];

    const text = await res.text();
    const rows = text.trim().split('\n').slice(1); // skip header row

    const speakers: Speaker[] = [];
    rows.forEach((line, i) => {
      const cols = parseCSVRow(line);
      const name = clean(cols[1] ?? '');
      if (!name) return;

      speakers.push({
        id: String(i + 1),
        name,
        avatar: clean(cols[0] ?? '') || undefined,
        showInSection: clean(cols[2] ?? '').toUpperCase() === 'TRUE',
        linkedin: clean(cols[3] ?? '') || undefined,
        instagram: clean(cols[4] ?? '') || undefined,
        github: clean(cols[5] ?? '') || undefined,
        website: clean(cols[6] ?? '') || undefined,
      });
    });
    return speakers;
  } catch {
    return [];
  }
}
