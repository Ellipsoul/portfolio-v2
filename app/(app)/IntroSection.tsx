import React, { ReactElement } from "react";
import { NavigationSocialItem, social } from "./constants";
import Link from "next/link";
import Image from "next/image";

export default function IntroSection(): ReactElement {
  return (
    <section className="px-8 lg:px-12 pb-10">
      {/* Greeting and introduction */}
      <div className="mx-auto max-w-4xl text-base leading-7 text-shade-800 dark:text-plain">
        <div className="flex flex-row items-center justify-between w-full">
          <div>
            <h1 className="mt-2 text-4xl md:text-6xl font-bold tracking-normal">Hello</h1>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-normal">I am Aron Teh</h1>
          </div>
          <Image className="rounded-full" width={120} height={120} src="/profile.jpg" alt={"Profile Photo"} />
        </div>
        <p className="mt-6 text-md md:text-xl leading-6 md:leading-8">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
          aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
          egestas fringilla sapien.
        </p>
      </div>
      {/* Social Links */}
      <div
        className="mt-10 grid grid-cols-3 sm:flex sm:justify-center md:justify-evenly items-center
        sm:flex-wrap gap-x-5 gap-y-3 lg:px-8"
      >
        {social.map((item: NavigationSocialItem) => (
          <Link
            key={item.name}
            target="_blank"
            href={item.href}
            className="text-zinc-700 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-plain mx-auto"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className={item.class} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}
