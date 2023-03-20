import Providers from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";

export const metadata = {
  title: "Aron Teh",
  description: "Portfolio website for Aron Teh",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
