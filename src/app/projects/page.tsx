import projects from "@/src/content/projects/projects.json";
import { ProjectCard } from "@/src/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="mb-10 text-5xl font-bold">
          Projects
        </h1>

        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              type={project.type}
              description={project.description}
              status={project.status}
            />
          ))}
        </div>
      </div>
    </main>
  );
}