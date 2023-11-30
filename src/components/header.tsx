import Image from "next/image";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="bg-gray-100 px-4 pt-4 pb-3 border-b">
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
      <Nav />
    </header>
  );
}
