import Github from "~/icons/Github";

type ProjectProps = {
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  liveLink: string;
  sourceCodeLink: string;
  technologies: string[];
};

const Project = ({
  title,
  description,
  thumbnail,
  liveLink,
  sourceCodeLink,
  technologies,
}: ProjectProps) => {
  return (
    <div className="rounded-lg border mb-10 last:mb-0 shadow-lg text-gray-700 bg-white">
      <div className="h-96 relative">
        <img
          loading="lazy"
          src={thumbnail}
          alt={`${title} thumbnail`}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className="absolute top-0 left-0 w-full p-4 flex flex-col justify-between h-full">
          <div className="flex justify-between">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-2xl font-bold tracking-wider text-white backdrop-blur-md backdrop-saturate-100 backdrop-brightness-[0.7] hover:backdrop-brightness-[0.4] px-2 rounded-full transition duration-200 transform hover:scale-105"
            >
              {title}
            </a>
            <a
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white backdrop-blur-md backdrop-saturate-100 backdrop-brightness-[0.8] rounded-full flex justify-center items-center min-w-[32px] transition duration-200 transform hover:rotate-180"
            >
              <Github fill="white" height={24} />
            </a>
          </div>
          <div className="flex gap-2 flex-wrap">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 text-gray-100 font-semibold backdrop-blur-md backdrop-saturate-100 backdrop-brightness-[0.7] rounded-full hover:backdrop-brightness-[0.4]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Project;
