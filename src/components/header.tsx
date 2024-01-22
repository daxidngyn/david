import Image from "next/image";

import Nav from "./nav";
import ThemeController from "./theme-controller";

export default function Header() {
  return (
    <header className="border-b bg-gray-100 px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Image
            src="/apple-touch-icon.png"
            width={32}
            height={32}
            alt="David Nguyen logo"
            className="rounded-full"
          />
          <span className="font-medium tracking-tight dark:text-white">
            David Nguyen
          </span>
        </div>

        <div className="flex items-center justify-center gap-x-4">
          <ThemeController />
        </div>
      </div>
      <Nav />
    </header>
  );
}
