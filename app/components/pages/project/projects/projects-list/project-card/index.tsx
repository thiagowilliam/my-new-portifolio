import { Project } from "@/app/types/projects";
import Image from "next/image";

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({project}: ProjectCardProps) => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 group transition-all cursor-pointer">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src={project.thumbnail.url}
          alt={`thumbnail do projeto ${project.title}`}
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">
          {project.title}
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          {project.shortDescription}
        </p>
        <span className="text-gray-300 text-sn font-medim block mt-auto truncate">
          {project.technology.map(tech => tech.name).join(", ")}
        </span>
      </div>
    </div>
  );
};
