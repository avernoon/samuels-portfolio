import { projects, Project } from "@/lib/projects"
import ProjectContent from "./ProjectContent"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <a href="/work" className="text-gray-400 hover:text-white underline">
          Back to Projects
        </a>
      </div>
    )
  }

  return <ProjectContent initialProject={project} />
}

