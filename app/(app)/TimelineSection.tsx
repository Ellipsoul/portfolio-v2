import { ReactElement } from "react";
import { timeline } from "./constants";
import Image from "next/image";
import Link from "next/link";

export default function TimelineSection(): ReactElement {
  return (
    <section className="px-8 lg:px-12">
      {/* Heading */}
      <div className="mx-auto max-w-4xl text-3xl leading-7 text-shade-800 dark:text-plain font-bold mb-2">
        Experience
      </div>
      <div className="mx-auto max-w-4xl text-shade-800 dark:text-plain font-normal md:font-medium mb-10 text-sm md:text-base">
        A 60-second tour of my last decade
      </div>
      {/* Experience list */}
      <ul role="list" className="mx-auto max-w-4xl">
        {timeline.map((event, eventIdx) => (
          <li key={event.id} className="relative pb-8 mb-8">
            {/* Vertical timeline segment */}
            {eventIdx !== timeline.length - 1 ? (
              <span
                className="absolute top-4 left-6 md:left-8 lg:left-10 -ml-px h-11/10 md:h-6/5 w-0.5
                bg-accent-500 dark:bg-accent-300"
                aria-hidden="true"
              />
            ) : null}
            {/* Main timeline event container */}
            <div className="relative flex space-x-3 lg:pl-2" tabIndex={0}>
              {/* Image */}
              <Image
                className="h-12 w-12 md:h-16 md:w-16 rounded-full flex items-center justify-center
                  ring-8 ring-white ring-inset border border-accent-500 dark:border-accent-300"
                src={event.imageSrc}
                width={50}
                height={50}
                aria-hidden="true"
                alt={"Organisation Logo"}
              />
              {/* Experience description */}
              <div className="flex flex-col w-full px-3 -mt-3 leading-tight md:leading-snug gap-y-1">
                {/* Company, location, dates, position */}
                <div className="flex flex-col md:flex-row justify-between mb-2 gap-y-1">
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">{event.organisation}</span>
                    <span className="text-lg leading-tight">{event.role}</span>
                  </div>
                  <div className="flex flex-col gap-x-3 md:text-right text-sm md:text-base">
                    <span>{event.location}</span>
                    <span>{event.time}</span>
                  </div>
                </div>
                {/* Roles/responsibilities */}
                <div className="flex flex-col gap-y-2">
                  {event.content.map(paragraph => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
