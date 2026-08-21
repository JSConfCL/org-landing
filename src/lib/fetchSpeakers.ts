import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

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

export async function fetchSpeakers(): Promise<Speaker[]> {
  try {
    const raw = await readFile(join(process.cwd(), 'public', 'speakers.json'), 'utf-8');
    const data = JSON.parse(raw);
    return (data.speakers as Speaker[]).map(s => ({
      ...s,
      avatar:    s.avatar    ?? undefined,
      linkedin:  s.linkedin  ?? undefined,
      instagram: s.instagram ?? undefined,
      github:    s.github    ?? undefined,
      website:   s.website   ?? undefined,
    }));
  } catch {
    return [];
  }
}
