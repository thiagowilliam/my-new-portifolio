import { PageIntroduction } from "../components/pages/project/projects/page-introduction";
import { ProjectsList } from "../components/pages/project/projects/projects-list";
import { ProjectsPageData } from "../types/page-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

export const metadata = {
  title: 'Projetos',
}

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technology {
          name
        }
      }
    }
    `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}

export default async function Projects() {
  const { projects } = await getPageData()
  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  );
}
