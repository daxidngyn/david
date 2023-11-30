"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import BlogIcon from "@/icons/blog";
import HomeIcon from "@/icons/home";
import ProjectsIcon from "@/icons/projects";
import ResumeIcon from "@/icons/resume";

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

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="mt-4 space-x-4 flex items-center">
      {navigation.map((path) => (
        <Link
          href={path.href}
          key={path.name}
          className={`flex items-center gap-x-1.5 relative px-2 justify-center ${
            pathname.includes(path.href)
              ? "text-black dark:text-white"
              : "text-gray-700 dark:text-gray-100"
          }`}
        >
          <path.icon className="w-4 h-4" />
          <span className="text-sm">{path.name}</span>

          {pathname.includes(path.href) && (
            <div className="absolute w-full -bottom-3 bg-sky-500 dark:bg-sky-400 h-0.5" />
          )}
        </Link>
      ))}
      <a
        href="https://docs.google.com/document/d/1xL3zLZNoR7UqMyGOlppvSfMhnUUV3q_hgk9gP90edw8/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-x-1.5 text-gray-700 dark:text-gray-100"
      >
        <ResumeIcon className="w-4 h-4" />
        <span className="text-sm">Resume</span>
      </a>
    </nav>
  );
}
