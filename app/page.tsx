"use client";

import React, { ReactElement } from "react";
import HeaderSection from "./(app)/HeaderSection";
import IntroSection from "./(app)/IntroSection";
import TimelineSection from "./(app)/TimelineSection";

export default function HomePage(): ReactElement {
  return (
    <div className="mx-auto px-4 sm:px-12 lg:px-24 bg-primary-200 dark:bg-primary-900">
      <div className="mx-auto max-w-5xl bg-primary-100 dark:bg-primary-700">
        <HeaderSection />
        <IntroSection />
        <TimelineSection />
      </div>
    </div>
  );
}
