import InfoCard from "@/components/info-card";
import projects from "@/../projects.json";
import { ProjectCard, ProjectCardMini } from "@/components/project-card";

const skills = ["Python", "Java", "C++/C", "Typescript", "HTML/CSS", "SQL"];

const technologies = [
  "React",
  "Next.js",
  "Svelte",
  "Remix",
  "React Native",
  "Express",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "Node.js",
  "Electron",
  "Flask",
  "AWS",
];

export default function ProjectsPage() {
  return (
    <main className="space-y-8">
      <InfoCard id="projects/readme" title="davidnguyen / projects / README.md">
        <h1 className="text-3xl font-bold md:text-4xl">Projects</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 md:text-xl">
          Projects that I{"'"}ve worked on, many of which I{"'"}m still
          developing or have published.
        </p>
      </InfoCard>

      <InfoCard id="skills and technologies" title="skills & technologies">
        <div className="flex flex-wrap gap-x-1 leading-6 lg:gap-x-2">
          {skills.map((skill, i) => (
            <div key={skill} className="text-gray-700 dark:text-gray-300">
              <span className="mr-1 lg:mr-2">{skill}</span>
              {i < skills.length - 1 && <span>&#8226;</span>}
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-x-1 leading-6 lg:gap-x-2">
          {technologies.map((technology, i) => (
            <div key={technology} className="text-gray-700 dark:text-gray-300">
              <span className="mr-1 lg:mr-2">{technology}</span>
              {i < technologies.length - 1 && <span>&#8226;</span>}
            </div>
          ))}
        </div>
      </InfoCard>

      <section className="space-y-8">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard data={project} key={project.title} />
        ))}
      </section>

      <section className="space-y-4">
        {projects.slice(3, projects.length).map((project) => (
          <ProjectCardMini data={project} key={project.title} />
        ))}
      </section>
    </main>
  );
}
