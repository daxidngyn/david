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
    <div className="col-span-2 md:w-72 lg:w-80">
      <div className="flex flex-row md:flex-col gap-x-4 md:gap-x-0 items-center md:items-start">
        <Image
          src="/me.jpg"
          alt="David Nguyen"
          width={250}
          height={250}
          className="ring-1 ring-gray-950 flex flex-shrink-0 dark:ring-gray-600 rounded-full w-36 h-36 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover object-[center_top]"
        />

        <div className="flex flex-col">
          <span className="font-semibold text-2xl md:mt-6">David Nguyen</span>
          <span className="leading-6 mt-2 text-base">
            Software Engineer. Fullstack Developer.
          </span>
          <span className="leading-6 text-base">CS @ UCSC</span>
        </div>
      </div>

      <div className="mt-6 md:mt-4 flex flex-col gap-y-1">
        {socials.map((social) => (
          <div key={social.name} className="flex items-center gap-x-2.5">
            <social.icon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-sky-600 dark:hover:text-sky-400 text-gray-700 dark:text-gray-300"
            >
              {social.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
