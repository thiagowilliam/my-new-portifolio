import { SectionTitle } from "@/app/components/section-title";
import { ExperienceItem } from "./experience-item";
// biome-ignore lint/style/useImportType: <explanation>
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience";

type WorkExperienceProps = {
  experiencies: IWorkExperience[]
}

export const WorkExperience = ({experiencies} : WorkExperienceProps) => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle subtitle="experiências" title="Experiência Profissonal" />
        <p className="text-gray-400 mt-6">
          Planejar e executar um projeto do início ao fim é uma grande satisfação para mim, sempre visando entregar interfaces que proporcionem uma experiência única e agradável para o usuário.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiencies?.map((experience) => (
          <ExperienceItem 
            key={experience.companyName}
            experience={experience}
          />

        ))}
      </div>
    </section>
  );
};
