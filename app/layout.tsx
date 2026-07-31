import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["700"],
});

const becomeActors = localFont({
  src: "../public/font/BECOME ACTORS DEMO.otf",
  variable: "--font-become-actors",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevFest Ilorin 2026 — We Build The Future",
  description: "The largest community developer festival in Ilorin. Join us for inspiring talks, workshops, and networking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakarta.variable} ${caveat.variable} ${becomeActors.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FCF4F4] text-[#121212]">
        {children}
      </body>
    </html>
  );
}

