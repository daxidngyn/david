import { GeistMono } from "geist/font/mono";
import Link from "next/link";

import projects from "@/../projects.json";
import InfoCard from "@/components/info-card";
import { ProjectCardMini } from "@/components/project-card";

export default function HomePage() {
  return (
    <main className={`${GeistMono.className} space-y-8 md:space-y-12`}>
      <InfoCard id="readme" title="davidnguyen / README.md">
        <span className="relative text-lg font-medium text-sky-500 dark:text-sky-400 md:text-xl">
          Hey there! I{"'"}m
        </span>
        <h1 className="font-bold text-3xl md:text-4xl">David Nguyen.</h1>

        <p className="text-lg font-medium md:text-xl mt-4 text-gray-950 dark:text-white">
          Software Engineer. Fullstack Developer.{" "}
          <span className="text-gray-700 dark:text-gray-300">
            An avid developer consistently seeking to expand my knowledge in the
            fields of Computer science, Web Development, and Cybersecurity.
          </span>
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 md:text-xl mt-4">
          &#127891; B.S. Computer Science @ University of California, Santa Cruz
        </p>
      </InfoCard>

      <InfoCard id="about-me" title="about me">
        <p className="dark:text-gray-300 text-gray-700">
          I{"'"}m David Nguyen, a current senior pursuing Computer Science at UC
          Santa Cruz.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          I{"'"}m a self-taught developer that specializes in fullstack web
          development. I love to fuel my innovation by exploring creative ideas
          and executing them. I{"'"}ve always been fascinated with the idea of
          how things worked — which paired with my love of computers and digital
          media, led me to where I am today and kickstarted my foray into
          software development.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Outside of work, I enjoy playing video games such as Valorant,
          tinkering with the latest technologies, and exploring new places with
          my friends!
        </p>
      </InfoCard>

      <InfoCard id="featured-projects" title="featured projects">
        <span>
          For a more in-depth view of my projects and experiences,&nbsp;
          <Link
            href="/projects"
            className="cursor-pointer text-black dark:text-gray-50 transition duration-150 ease-in-out hover:text-sky-600 dark:hover:text-sky-400 underline"
          >
            click here
          </Link>
          .
        </span>

        <div className="space-y-4 mt-4">
          {projects.slice(0, 3).map((project) => (
            <ProjectCardMini data={project} key={project.title} />
          ))}
        </div>
      </InfoCard>
    </main>
  );
}
