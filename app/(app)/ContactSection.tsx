import React, { ReactElement } from "react";
import { ContactButton, contactButtons } from "./constants";
import Link from "next/link";

export default function ContactSection(): ReactElement {
  return (
    <section className="px-8 lg:px-12 pb-10">
      {/* Heading */}
      <div className="mx-auto max-w-4xl text-3xl leading-7 text-shade-800 dark:text-plain font-bold mb-2">Contact</div>
      <div className="mx-auto max-w-4xl text-shade-800 dark:text-plain font-normal md:font-medium mb-6 text-sm md:text-base">
        Still here? Want to reach out?
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        {contactButtons.map((contactButton: ContactButton) => (
          <Link
            key={contactButton.id}
            href={contactButton.href}
            target="_blank"
            className="inline-flex items-center gap-x-4 rounded-md bg-accent-600 py-4 px-5
            text-lg md:text-xl
            font-semibold text-white shadow-sm hover:bg-accent-500 focus-visible:outline
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
          >
            <contactButton.icon className="-ml-0.5 h-8 w-8" aria-hidden="true" />
            {contactButton.text}
          </Link>
        ))}
      </div>
    </section>
  );
}
