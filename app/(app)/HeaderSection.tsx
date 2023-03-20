import React, { ReactElement } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

export default function HeaderSection(): ReactElement {
  return (
    <header className="w-full flex flex-row items-center justify-end py-4 md:py-6 px-6 md:px-8">
      <DarkModeToggle />
    </header>
  );
}

// Toggle Button to change theme
const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 shadow-sm
      bg-primary-200 hover:bg-primary-100 focus-visible:outline-primary-200
      text-accent-600 hover:text-accent-500 dark:text-shade-100 dark:hover:text-shade-50
      dark:bg-accent-600 dark:hover:bg-accent-500 dark:focus-visible:outline-accent-500"
    >
      {theme === "light" ? (
        <SunIcon className="h-6 w-6 sm:h-10 sm:w-10" aria-hidden="true" />
      ) : (
        <MoonIcon className="h-6 w-6 sm:h-10 sm:w-10" aria-hidden="true" />
      )}
    </button>
  );
};
