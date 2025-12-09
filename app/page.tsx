"use client";

import React, { ReactElement } from "react";
import HeaderSection from "./(app)/HeaderSection";
import IntroSection from "./(app)/IntroSection";
import TimelineSection from "./(app)/TimelineSection";
import ProjectsSection from "./(app)/ProjectsSection";
import InterestsSection from "./(app)/InterestsSection";
import ContactSection from "./(app)/ContactSection";

export default function HomePage(): ReactElement {
  return (
    <div className="mx-auto px-4 sm:px-12 lg:px-24
      bg-gradient-to-r from-primary-900 via-accent-900 to-primary-900">
      <div className="mx-auto max-w-5xl bg-primary-900">
        <HeaderSection />
        <IntroSection />
        <TimelineSection />
        <ProjectsSection />
        <InterestsSection />
        <ContactSection />
      </div>
    </div>
  );
}
