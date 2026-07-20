import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LearnLift Digital | Learn Skills. Build Your Future.",
    template: "%s | LearnLift Digital",
  },
  description:
    "LearnLift Digital helps ambitious learners build practical digital skills, earn valuable certifications, and prepare for careers in a world shaped by technology.",
  keywords: [
    "LearnLift Digital",
    "digital skills",
    "online learning",
    "career development",
    "professional certifications",
    "digital education",
    "career readiness",
    "technology skills",
  ],
  authors: [{ name: "LearnLift Digital" }],
  creator: "LearnLift Digital",
  publisher: "LearnLift Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
