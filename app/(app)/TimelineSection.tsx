import { ReactElement } from "react";
import { classNames, timeline } from "./constants";
import Image from "next/image";

export default function TimelineSection(): ReactElement {
  return (
    <section className="px-8 lg:px-12 pb-10">
      <div className="mx-auto max-w-3xl text-3xl leading-7 text-shade-800 dark:text-plain font-bold mb-10">
        Experience
      </div>
      <ul role="list" className="mx-auto max-w-3xl">
        {timeline.map((event, eventIdx) => (
          <li key={event.id} className="relative pb-8">
            {/* Vertical timeline segment */}
            {eventIdx !== timeline.length - 1 ? (
              <span
                className="absolute top-4 left-6 lg:left-10 -ml-px h-full w-0.5 bg-primary-300"
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
              <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5 border border-green-400">
                <div>
                  <p className="text-sm text-primary-500">
                    {event.content}{" "}
                    <a href={event.href} className="font-medium text-primary-900">
                      {event.target}
                    </a>
                  </p>
                </div>
                <div className="whitespace-nowrap text-right text-sm text-primary-500">
                  <time dateTime={event.datetime}>{event.date}</time>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
