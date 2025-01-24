import clsx from "clsx";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";

import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Take The Reins",
  description: "Youth Stable For Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(merriweather.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
