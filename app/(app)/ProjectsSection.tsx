import Link from "next/link";
import React, { ReactElement } from "react";
import Image from "next/image";
import { projects, Project } from "./constants";

export default function ProjectsSection(): ReactElement {
  return (
    <section className="px-8 lg:px-12 pb-10">
      {/* Heading */}
      <div className="mx-auto max-w-4xl text-3xl leading-7 text-shade-800 dark:text-plain font-bold mb-4">Projects</div>
      <div className="mx-auto max-w-4xl text-shade-800 dark:text-plain font-normal md:font-medium mb-6 text-sm md:text-base">
        As a self-taught developer, I learned to code by building apps that I would enjoy sharing, using technologies
        that I found interesting. I build to learn, so I design my projects to give me experience with a wide spectrum
        of languages, frameworks and design patterns.
      </div>
      {/* Projects grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 max-w-4xl">
        {projects.map((project: Project) => (
          <div
            key={project.name}
            className="relative flex items-center space-x-3 rounded-lg border px-6 py-5
            bg-primary-200 dark:bg-primary-600 hover:bg-primary-50 dark:hover:bg-primary-500
            shadow-sm focus-within:ring-2 focus-within:ring-accent-500 focus-within:ring-offset-2 hover:border-primary-400"
          >
            <Image className="rounded-full" width={50} height={50} src={project.image} alt={"Project Logo"} />
            <div className="min-w-0 flex-1">
              <Link href={project.url} className="focus:outline-none" target="_blank">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="font-semibold text-xl">{project.name}</p>
                <p className="text-sm">{project.description}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
