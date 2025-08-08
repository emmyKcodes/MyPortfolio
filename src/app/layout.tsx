import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";

import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emmanuel Kehinde",
  description: "My portfolio, Front End Developer, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={josefinSans.variable}>
      <body className="font-josefin antialiased bg-black text-white">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
