import Image from "next/image";
import Link from "next/link";

import { Tabs, TabList, Tab, TabPanel } from "react-aria-components";

const navigation = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export default function Header() {
  return (
    <header className="bg-gray-100 p-4 border-b">
      <div className="flex items-center gap-x-4">
        <Image
          src="/apple-touch-icon.png"
          width={32}
          height={32}
          alt="David Nguyen logo"
          className="rounded-full"
        />
        <span className="font-medium tracking-tight">David Nguyen</span>
      </div>
      <nav className="mt-4 space-x-4">
        {navigation.map((path) => (
          <Link href={path.href} key={path.name}>
            {path.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
