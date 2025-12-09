import Link from "next/link";
import React, { ReactElement } from "react";
import Image from "next/image";
import { projects, Project } from "./constants";

export default function ProjectsSection(): ReactElement {
  return (
    <section className="px-8 lg:px-12 pb-10">
      {/* Heading */}
      <div className="mx-auto max-w-4xl text-3xl leading-7 text-plain font-bold mb-4">Projects</div>
      <div className="mx-auto max-w-4xl text-text-body font-normal md:font-medium mb-6 text-sm md:text-base">
        As a self-taught developer, I learn to code by building apps that I would enjoy sharing, using technologies that
        I find interesting. I build to learn, so I carefully design my projects to grant myself experience with various
        languages, frameworks and design patterns.
      </div>
      {/* Projects grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 max-w-4xl">
        {projects.map((project: Project) => (
          <div
            key={project.name}
            className="relative flex items-center gap-x-3 rounded-lg px-6 py-5
            bg-primary-600 hover:bg-primary-500
            shadow-xs focus-within:ring-2 focus-within:ring-accent-500 focus-within:ring-offset-2
            border border-accent-500
            hover:border-accent-200"
          >
            <Image className="rounded-full" width={50} height={50} src={project.image} alt={"Project Logo"} />
            <div className="min-w-0 flex-1">
              <Link href={project.url} className="focus:outline-none" target="_blank">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="font-semibold text-xl pb-1 text-plain">{project.name}</p>
                <p className="text-sm text-text-body">{project.description}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
