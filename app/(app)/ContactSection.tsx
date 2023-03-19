import { CheckCircleIcon } from "@heroicons/react/20/solid";
import React, { ReactElement } from "react";

export default function ContactSection(): ReactElement {
  return (
    <section className="px-8 lg:px-12 pb-10">
      {/* Heading */}
      <div className="mx-auto max-w-4xl text-3xl leading-7 text-shade-800 dark:text-plain font-bold mb-2">Contact</div>
      <div className="mx-auto max-w-4xl text-shade-800 dark:text-plain font-normal md:font-medium mb-6 text-sm md:text-base">
        Still here? Want to reach out?
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        <button
          type="button"
          className="inline-flex items-center gap-x-2 rounded-md bg-accent-600 py-2.5 px-3.5 text-sm
          font-semibold text-white shadow-sm hover:bg-accent-500 focus-visible:outline
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
        >
          <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Send me an Email
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-x-2 rounded-md bg-accent-600 py-2.5 px-3.5 text-sm
          font-semibold text-white shadow-sm hover:bg-accent-500 focus-visible:outline
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
        >
          <CheckCircleIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Download my Resume
        </button>
      </div>
    </section>
  );
}
