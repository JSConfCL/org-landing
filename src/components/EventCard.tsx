import { urlFor } from "../utils/sanity";

import type { AllEventsQuery } from "@/api/types";
import type { Image } from 'sanity'

interface EventCardProps {
  event: AllEventsQuery["allEventInstance"][0];
}

export default function EventCard({ event: { title, mergedTitle, startDate, endDate, image, bgColor, url, eventType } } : EventCardProps) {
  const showEnd = startDate !== endDate
  const showImage = image ?? eventType?.image
  const showTitle = mergedTitle ? `${eventType?.title ?? ''} | ${title ?? ''}` : title

  const Wrapper = url
    ? ({ children }: { children: JSX.Element }) => <a className={`block h-80`} target="_blank" href={url}>{children}</a>
    : ({ children }: { children: JSX.Element }) => <div className={`block h-80 cursor-not-allowed`} >{children}</div>

  return (
    <Wrapper>
      <div className={`group/item relative h-full w-full overflow-hidden ${bgColor ? 'bg-['+bgColor+']' : ''}`} style={{backgroundColor: bgColor || '' }}>
        <div className={`absolute h-full w-full bg-cover bg-center transition-all duration-500 ease-in-out group-hover/item:scale-125`} style={{backgroundImage: `url("${showImage != null ? urlFor(showImage as unknown as Image).url() : ''}")`}}>
        </div>
        <div className="absolute bottom-2 left-2 flex flex-col transition-all group-hover/item:text-[1.2em]">
          <div className="font-noto font-bold  text-white">
            <span className="inline-block bg-black p-2">{showTitle}</span>
          </div>
          <div className="mt-2 text-gray-400">
            <span className="inline-block bg-black p-2 ">{startDate} {showEnd ? `- ${endDate ?? ''}` : ""}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
