import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

import type { Image } from 'sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
});

const builder = imageUrlBuilder(client)

export const urlFor = (source: Image) => {
  return builder?.image(source).auto('format').fit('max')
}