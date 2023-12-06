import "./globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import ThemeProvider from "./theme-provider";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://davidngn.com"),
  title: { default: "David Nguyen", template: "%s | David Nguyen" },
  description: "Software engineer. Fullstack developer.",
  openGraph: {
    title: "David Nguyen",
    description: "Software engineer. Fullstack developer.",
    url: "https://davidngn.com",
    siteName: "David Nguyen",
    images: {
      url: "https://davidngn.com/og.png",
      width: 1920,
      height: 1080,
    },
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "David Nguyen",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "j3DCDCSW1yeb5Q7s7qoQiaCTz0xf2nrsJRAgaouzi7E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full min-h-screen">
      <body className={GeistSans.className}>
        <ThemeProvider>
          <div className="bg-white text-black dark:bg-[#0d121d] dark:text-white">
            <Header />
            <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-4 px-4 md:mt-12 md:flex-row md:px-8">
              <Sidebar />
              <div className="mt-4 flex-1 pb-6 md:mt-0">{children}</div>
            </div>
            <Footer />
          </div>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
