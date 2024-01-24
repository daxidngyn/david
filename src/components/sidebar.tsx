import Image from "next/image";

import GithubIcon from "@/icons/github";
import LinkedInIcon from "@/icons/linkedin";
import MailIcon from "@/icons/mail";
import ResumeIcon from "@/icons/resume";

const socials = [
  {
    name: "daxidngyn",
    link: "https://github.com/daxidngyn",
    icon: GithubIcon,
  },
  {
    name: "davidngyn",
    link: "https://www.linkedin.com/in/davidngyn",
    icon: LinkedInIcon,
  },
  {
    name: "daxidnguyen@gmail.com",
    link: "mailto:daxidnguyen@gmail.com",
    icon: MailIcon,
  },
  {
    name: "resume",
    link: "https://docs.google.com/document/d/1xL3zLZNoR7UqMyGOlppvSfMhnUUV3q_hgk9gP90edw8/edit?usp=sharing",
    icon: ResumeIcon,
  },
];

export default function Sidebar() {
  return (
    <div className="md:w-72 lg:w-80">
      <div className="flex flex-row items-center gap-x-4 md:flex-col md:items-start md:gap-x-0">
        <Image
          src="/me.jpg"
          alt="David Nguyen"
          width={250}
          height={250}
          className="flex h-32 w-32 flex-shrink-0 rounded-full object-cover object-[center_top] shadow-md drop-shadow sm:h-36 sm:w-36 md:h-60 md:w-60 lg:h-72 lg:w-72"
        />

        <div className="flex flex-col">
          <span className="text-2xl font-semibold md:mt-6">David Nguyen</span>
          <span className="mt-2 text-base leading-6">
            Software Engineer. Fullstack Developer.
          </span>
          <span className="text-base leading-6">CS @ UCSC</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-y-2 md:mt-4 md:gap-y-1.5">
        {socials.map((social) => (
          <div key={social.name} className="flex items-center gap-x-2.5">
            <social.icon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-700 hover:text-sky-600 hover:underline dark:text-gray-300 dark:hover:text-sky-400 md:text-base"
            >
              {social.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
