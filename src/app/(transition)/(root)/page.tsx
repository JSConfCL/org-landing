import { API } from "@/api";

import ClientPage from './client-page'
import { seo } from "@/utils/data";

export const metadata = {
  ...seo
};

export default async function Page() {
  const data = await API.allEvents()
  const communityEvents = data?.allEvent ?? []

  return <ClientPage communityEvents={communityEvents} />
}
