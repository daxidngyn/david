import RightArrowIcon from "@/icons/right-arrow";

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
    <article className="border rounded-md p-4 flex items-center justify-between group">
      <div>
        <div>{data.title}</div>
        <div className="text-xs leading-6">{data.subtitle}</div>
        <div className="flex text-xs gap-x-2">
          {data.technologies.map((tech, i) => (
            <div key={tech} className="text-gray-700">
              <span className="mr-2">{tech}</span>
              {i < data.technologies.length - 1 && <span>&#8226;</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="text-sm flex items-center">
        <span className="mr-1 transition duration-300 ease-in-out group-hover:underline">
          Learn more
        </span>
        <RightArrowIcon className="w-4 h-4 transition duration-300 ease-in-out group-hover:translate-x-1" />
      </div>
    </article>
  );
};
