import ArrowRightIcon from "@/icons/arrow-right";

type ProjectData = {
  title: string;
  subtitle: string;
  content: string;
  date: string;
  images: string[];
  technologies: string[];
  link: string;
};

export const ProjectCard = ({ data }: { data: ProjectData }) => {
  return (
    <article>
      <div>
        <div>hello.</div>
      </div>
    </article>
  );
};

export const ProjectCardMini = ({ data }: { data: ProjectData }) => {
  return (
    <article className="border rounded-lg p-4 group dark:border-gray-700">
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col md:flex-row items-start md:items-center justify-between"
      >
        <div>
          <div className="font-medium">{data.title}</div>
          <div className="text-xs leading-6">{data.subtitle}</div>
          <div className="flex text-xs gap-x-1 lg:gap-x-2 leading-6">
            {data.technologies.map((tech, i) => (
              <div key={tech} className="text-gray-700 dark:text-gray-300">
                <span className="mr-1 lg:mr-2">{tech}</span>
                {i < data.technologies.length - 1 && <span>&#8226;</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="text-sm flex items-center mt-4 md:mt-0 w-28">
          <span className="mr-0.5 lg:mr-1 transition duration-300 ease-in-out group-hover:underline">
            Learn more
          </span>
          <ArrowRightIcon className="w-4 h-4 transition duration-300 ease-in-out group-hover:translate-x-1" />
        </div>
      </a>
    </article>
  );
};
