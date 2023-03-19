import { ReactElement } from "react";
import { classNames, timeline } from "./constants";

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
              <span className="absolute top-4 left-4 lg:left-6 -ml-px h-full w-0.5 bg-primary-200" aria-hidden="true" />
            ) : null}
            <div className="relative flex space-x-3 lg:pl-2">
              <span
                className={classNames(
                  event.iconBackground,
                  "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white",
                )}
              >
                <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
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
