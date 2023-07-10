import { urlFor } from "../utils/sanity";

import type { CommunityEvent } from "../types"

interface EventCardProps {
  event: CommunityEvent;
}

export default function EventCard({ event: { title, mergedTitle, startDate, endDate, image, bgColor, url, eventType } } : EventCardProps) {
  const showEnd = startDate !== endDate
  const showImage = image ?? eventType.image
  const showTitle = mergedTitle ? `${eventType.title} | ${title}` : title

  const Wrapper = url
    ? ({ children }: { children: any }) => <a className={`block h-80`} target="_blank" href={url}>{children}</a>
    : ({ children }: { children: any }) => <div className={`block h-80 cursor-not-allowed`} >{children}</div>

  return (
    <Wrapper>
      <div className={`w-full h-full group/item overflow-hidden relative bg-[${bgColor}]`} style={{backgroundColor: bgColor }}>
        <div className={`absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover group-hover/item:scale-125`} style={{backgroundImage: `url("${showImage ? urlFor(showImage).url() : ''}")`}}>
        </div>
        <div className="absolute bottom-2 left-2 group-hover/item:text-[1.2em] transition-all transform flex flex-col">
          <div className="font-noto font-bold  text-white">
            <span className="inline-block bg-black p-2">{showTitle}</span>
          </div>
          <div className="text-gray-400 mt-2">
            <span className="inline-block bg-black p-2 ">{startDate} {showEnd ? `- ${endDate}` : ""}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
