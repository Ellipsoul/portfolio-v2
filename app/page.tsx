"use client";

import { useTheme } from "next-themes";
import React, { ReactElement, useEffect, useState } from "react";

export default function HomePage(): ReactElement {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-primary-100 dark:bg-primary-900">
      <div className="mx-auto max-w-4xl bg-primary-200 dark:bg-primary-700">Hello</div>
      <DarkModeBtn />
    </div>
  );
}

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) return null;

  return (
    <select value={theme} onChange={e => setTheme(e.target.value)}>
      <option value="light">Light</option>
      <option value="dark">dark</option>
    </select>
  );
};
