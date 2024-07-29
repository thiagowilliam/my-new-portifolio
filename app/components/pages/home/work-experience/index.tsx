import { SectionTitle } from "@/app/components/section-title";
import { ExperienceItem } from "./experience-item";
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nobis
          provident pariatur saepe suscipit quibusdam, mollitia unde nesciunt
          explicabo vel excepturi culpa autem. Dolorem, corrupti neque unde
          perferendis quas recusandae!
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
