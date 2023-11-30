import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { tab: string };
}) {
  return (
    <html lang="en" className="bg-white text-black min-h-screen h-full">
      <body className={GeistSans.className}>
        <Header />
        <div className="px-4 mt-12 max-w-7xl mx-auto grid grid-cols-11 gap-2">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
