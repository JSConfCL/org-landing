import { client } from "@/utils/sanity";

import ClientPage from './client-page'
import { seo } from "@/utils/data";

export const metadata = {
  ...seo
};

export default async function Page () {
  const communityEvents = await client.fetch(`*[_type == "eventInstance"]{title, mergedTitle, startDate, endDate, url, image, eventType->}`);

  return <ClientPage communityEvents={communityEvents} />
}
