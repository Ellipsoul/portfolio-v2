import Link from "next/link";
import React, { ReactElement } from "react";
import Image from "next/image";
import { projects, Project } from "./constants";

export default function ProjectsSection(): ReactElement {
  return (
    <section className="px-8 lg:px-12 pb-10">
      {/* Heading */}
      <div className="mx-auto max-w-4xl text-3xl leading-7 text-shade-800 dark:text-plain font-bold mb-10">
        Projects
      </div>
      {/* Projects grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 max-w-4xl md:px-4">
        {projects.map((project: Project) => (
          <div
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5
            shadow-sm focus-within:ring-2 focus-within:ring-accent-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <Link href={project.url} className="focus:outline-none">
              <Image width={50} height={50} src={project.image} alt={"Project Logo"} />
            </Link>
            <div className="min-w-0 flex-1">
              <Link href={project.url} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">{project.name}</p>
                <p className="text-sm text-gray-500">{project.description}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
