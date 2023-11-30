import BlogIcon from "@/icons/blog";
import HomeIcon from "@/icons/home";
import ProjectsIcon from "@/icons/projects";
import ResumeIcon from "@/icons/resume";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  {
    name: "Home",
    href: "/home",
    icon: HomeIcon,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: ProjectsIcon,
  },
  { name: "Blog", href: "/blog", icon: BlogIcon },
];

export default function Header({ activeTab }: { activeTab: string }) {
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
      <nav className="mt-4 space-x-6 flex items-center">
        {navigation.map((path) => (
          <Link
            href={path.href}
            key={path.name}
            className="flex items-center gap-x-1"
          >
            <path.icon className="w-4 h-4" />
            <span>{path.name}</span>
          </Link>
        ))}
        <a
          href="https://docs.google.com/document/d/1xL3zLZNoR7UqMyGOlppvSfMhnUUV3q_hgk9gP90edw8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-1"
        >
          <ResumeIcon className="w-4 h-4" />
          <span>Resume</span>
        </a>
      </nav>
    </header>
  );
}
