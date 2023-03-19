import { ReactElement } from "react";
import { classNames, timeline } from "./constants";
import Image from "next/image";

export default function TimelineSection(): ReactElement {
  return (
    <section className="px-8 lg:px-12 pb-10">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-3xl leading-7 text-shade-800 dark:text-plain font-bold mb-10">
        Experience
      </div>
      {/* Experience list */}
      <ul role="list" className="mx-auto max-w-3xl">
        {timeline.map((event, eventIdx) => (
          <li key={event.id} className="relative pb-8 mb-8">
            {/* Vertical timeline segment */}
            {eventIdx !== timeline.length - 1 ? (
              <span
                className="absolute top-4 left-6 md:left-8 lg:left-10 -ml-px h-11/10 sm:h-6/5 w-0.5 bg-primary-300"
                aria-hidden="true"
              />
            ) : null}
            {/* Main timeline event container */}
            <div className="relative flex space-x-3 lg:pl-2">
              {/* Image */}
              <Image
                className="h-12 w-12 md:h-16 md:w-16 rounded-full flex items-center justify-center
                ring-8 ring-white ring-inset border border-primary-300"
                src={event.imageSrc}
                width={50}
                height={50}
                aria-hidden="true"
                alt={""}
              />
              {/* Experience description */}
              <div className="flex flex-col w-full px-3 -mt-3 leading-tight sm:leading-snug gap-y-1">
                {/* Company, location, dates, position */}
                <div className="flex flex-col sm:flex-row justify-between mb-2 gap-y-1">
                  <div className="flex flex-col">
                    <span className="font-bold text-xl">{event.organisation}</span>
                    <span className="text-lg leading-tight">{event.role}</span>
                  </div>
                  <div className="flex flex-col gap-x-3 sm:text-right text-sm sm:text-base">
                    <span>{event.location}</span>
                    <span>{event.time}</span>
                  </div>
                </div>
                {/* Roles/responsibilities */}
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis impedit laudantium laboriosam
                  rerum illum quibusdam obcaecati quo quas, quos, et perspiciatis deleniti error molestiae nisi ipsa,
                  pariatur ipsum beatae modi!
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
