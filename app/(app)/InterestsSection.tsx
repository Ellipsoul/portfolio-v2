import Image from "next/image";
import React, { ReactElement } from "react";
import { Interest, interests } from "./constants";
import Link from "next/link";

export default function InterestsSection(): ReactElement {
  return (
    <section className="px-8 lg:px-12 pb-10">
      {/* Heading */}
      <div className="mx-auto max-w-4xl text-3xl leading-7 text-shade-800 dark:text-plain font-bold mb-4">
        Interests
      </div>
      <div className="mx-auto max-w-4xl text-shade-800 dark:text-plain font-normal md:font-medium mb-6 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eaque vel excepturi ipsa reprehenderit impedit,
        aspernatur aut incidunt in, optio laudantium perspiciatis deleniti quo error quis, fugiat et commodi eos!
      </div>
      {/* Projects grid */}
      <div className="grid grid-cols-1 gap-4 max-w-4xl">
        <ul role="list" className="divide-y divide-primary-400 dark:divide-primary-200">
          {interests.map((interest: Interest) => (
            <Link href={interest.url} target="_blank">
              <li
                key={interest.id}
                className="relative py-5 px-4
              bg-primary-100 dark:bg-primary-700 hover:bg-primary-200 dark:hover:bg-primary-600 "
              >
                <div className="flex justify-between space-x-3">
                  <div className="flex-1">
                    <div className="block focus:outline-none">
                      <p className="text-lg font-medium">{interest.name}</p>
                      <p className="text-sm">{interest.time}</p>
                    </div>
                  </div>
                  <Image src={interest.logo} width={50} height={50} alt={"Interest Image"} className="rounded-full" />
                </div>

                <div className="mt-1">
                  <p className="text-sm">{interest.description}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
}
