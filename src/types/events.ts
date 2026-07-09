export interface CalEvent {
  uid: string;
  title: string;
  start: string;
  end: string;
  location: string | null;
  url: string;
  cover_url: string | null;
  status: 'upcoming' | 'ongoing' | 'past';
}

export interface EventsJson {
  generated_at: string;
  upcoming: CalEvent[];
  past: CalEvent[];
}
