import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import ThemeProvider from "./theme-provider";
import Footer from "@/components/footer";

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
    <html lang="en" className="h-full min-h-screen">
      <body className={GeistSans.className}>
        <ThemeProvider>
          <div className="bg-white text-black dark:bg-[#0d121d] dark:text-white">
            <Header />
            <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 px-4 md:mt-12 md:flex-row md:px-8">
              <Sidebar />
              <div className="mt-4 flex-1 pb-6 md:mt-0">{children}</div>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
