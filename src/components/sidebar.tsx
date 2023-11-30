import Image from "next/image";

import GithubIcon from "@/icons/github";
import LinkedInIcon from "@/icons/linkedin";
import MailIcon from "@/icons/mail";
import ResumeIcon from "@/icons/resume";

const socials = [
  {
    name: "@daxidngyn",
    link: "https://github.com/daxidngyn",
    icon: GithubIcon,
  },
  {
    name: "@davidngyn",
    link: "https://www.linkedin.com/in/davidngyn",
    icon: LinkedInIcon,
  },
  {
    name: "daxidnguyen@gmail.com",
    link: "mailto:daxidnguyen@gmail.com",
    icon: MailIcon,
  },
  {
    name: "Resume",
    link: "https://docs.google.com/document/d/1xL3zLZNoR7UqMyGOlppvSfMhnUUV3q_hgk9gP90edw8/edit?usp=sharing",
    icon: ResumeIcon,
  },
];

export default function Sidebar() {
  return (
    <div className="col-span-3">
      <div>
        <Image
          src="/me.jpg"
          alt="David Nguyen"
          width={200}
          height={200}
          className="rounded-full w-80 h-80 object-cover object-[center_top]"
        />
        <div className="flex flex-col mt-4">
          <span className="font-semibold text-xl">David Nguyen</span>
          <span className="leading-6 mt-2">
            Software Engineer. Fullstack Developer.
          </span>
          <span className="leading-6">CS @ UCSC</span>

          <div className="mt-6 flex flex-col gap-y-1">
            {socials.map((social) => (
              <div key={social.name} className="flex items-center gap-x-2">
                <social.icon className="w-4 h-4" />
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-sky-600"
                >
                  {social.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
