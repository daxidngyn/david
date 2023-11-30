import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import ThemeProvider from "./theme-provider";

export const metadata: Metadata = {
  title: "David Nguyen",
  description: "Software engineer. Fullstack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen h-full">
      <body className={GeistSans.className}>
        <ThemeProvider>
          <div className="bg-white text-black dark:bg-[#0d121d] dark:text-white">
            <Header />
            <div className="px-4 md:px-8 mt-12 max-w-7xl mx-auto md:grid grid-cols-7 gap-4 grid-flow-col">
              <Sidebar />
              <div className="mt-8 md:mt-0 col-span-5 pb-6">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
