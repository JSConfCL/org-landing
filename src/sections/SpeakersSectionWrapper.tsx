import { fetchSpeakers } from '@/lib/fetchSpeakers';
import { SpeakersSection } from './SpeakersSection';

export async function SpeakersSectionWrapper() {
  const speakers = await fetchSpeakers();
  const sectionSpeakers = speakers.filter((s) => s.showInSection);
  return <SpeakersSection sectionSpeakers={sectionSpeakers} allSpeakers={speakers} />;
}
