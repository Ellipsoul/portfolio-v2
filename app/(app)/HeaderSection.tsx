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
      bg-primary-300 hover:bg-primary-200 focus-visible:outline-primary-200
      text-shade-700 hover:text-shade-600 dark:text-shade-100 dark:hover:text-shade-50
      dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus-visible:outline-primary-500"
    >
      {theme === "light" ? (
        <SunIcon className="h-10 w-10" aria-hidden="true" />
      ) : (
        <MoonIcon className="h-10 w-10" aria-hidden="true" />
      )}
    </button>
  );
};
