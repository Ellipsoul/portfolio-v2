import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { Analytics } from "@vercel/analytics/next"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aron Teh",
  description:
    "Portfolio website for Aron Teh. Ambitious and enthusiastic fullstack software engineer, \
    with interest in quantitative finance and machine learning. Lifelong competitive chess player.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="text-text-body">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
