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
    href: "/",
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

  const isCurrentPath = (href: string) => {
    return (pathname.includes(href) && pathname === "/") || pathname === href;
  };

  return (
    <nav className="mt-4 flex items-center space-x-3 md:space-x-4">
      {navigation.map((path) => (
        <Link
          href={path.href}
          key={path.name}
          className={`relative flex items-center justify-center gap-x-1.5 px-1 md:px-2 ${
            isCurrentPath(path.href)
              ? "font-medium text-black dark:text-white"
              : "text-gray-700 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-100"
          }`}
        >
          <path.icon className="h-4 w-4" />
          <span className="text-sm">{path.name}</span>

          {isCurrentPath(path.href) && (
            <div className="absolute -bottom-[13px] h-0.5 w-full bg-sky-500 dark:bg-sky-400" />
          )}
        </Link>
      ))}

      <a
        href="https://docs.google.com/document/d/1xL3zLZNoR7UqMyGOlppvSfMhnUUV3q_hgk9gP90edw8/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-x-1.5 px-1  text-gray-700 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-100"
      >
        <ResumeIcon className="h-4 w-4" />
        <span className="text-sm">Resume</span>
      </a>
    </nav>
  );
}
