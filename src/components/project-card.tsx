import ArrowRightIcon from "@/icons/arrow-right";
import Image from "next/image";

type ProjectData = {
  title: string;
  subtitle: string;
  content: string;
  date: string;
  image: string;
  technologies: string[];
  link: string;
};

export const ProjectCard = ({ data }: { data: ProjectData }) => {
  return (
    <article className="grid-cols-12 gap-16 rounded-lg border px-4 py-6 shadow-sm dark:border-gray-700 md:py-8 lg:grid">
      <div className="col-span-5 flex flex-col">
        <h3 className="text-xl font-semibold">{data.title}</h3>
        <div className="flex gap-x-1 text-sm leading-6 lg:gap-x-2">
          {data.technologies.map((tech, i) => (
            <div key={tech} className="text-gray-700 dark:text-gray-300">
              <span className="mr-1 lg:mr-2">{tech}</span>
              {i < data.technologies.length - 1 && <span>&#8226;</span>}
            </div>
          ))}
        </div>

        <div className="relative mt-6 h-48 w-full rounded-xl shadow-2xl lg:hidden">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="rounded-2xl object-cover object-top"
          />
        </div>

        <div className="mt-4 lg:mt-6">
          <span className="leading-6">{data.subtitle}</span>
          <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
            {data.content}
          </p>
        </div>

        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 flex w-fit items-center rounded-full bg-gray-800 px-4 py-2 text-gray-100 dark:text-gray-200"
        >
          <span className="mr-0.5 text-sm group-hover:underline">Discover</span>
          <ArrowRightIcon className="h-4 w-4 transition duration-300 ease-in-out group-hover:translate-x-1" />
        </a>
      </div>

      <div className="relative col-span-7 hidden h-full w-full rounded-xl shadow-md drop-shadow-sm lg:block">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="rounded-xl object-cover object-top"
        />
      </div>
    </article>
  );
};

export const ProjectCardMini = ({ data }: { data: ProjectData }) => {
  return (
    <article className="group rounded-lg border p-4 shadow-sm dark:border-gray-700">
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-start justify-between md:flex-row md:items-center"
      >
        <div>
          <h3 className="font-medium">{data.title}</h3>
          <div className="text-xs leading-6">{data.subtitle}</div>
          <div className="flex gap-x-1 text-xs leading-6 lg:gap-x-2">
            {data.technologies.map((tech, i) => (
              <div key={tech} className="text-gray-700 dark:text-gray-300">
                <span className="mr-1 lg:mr-2">{tech}</span>
                {i < data.technologies.length - 1 && <span>&#8226;</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex w-28 items-center text-sm md:mt-0">
          <span className="mr-0.5 transition duration-300 ease-in-out group-hover:underline lg:mr-1">
            Learn more
          </span>
          <ArrowRightIcon className="h-4 w-4 transition duration-300 ease-in-out group-hover:translate-x-1" />
        </div>
      </a>
    </article>
  );
};
