import { ProjectCard } from "./project-card";

const projects = [
  {
    id: "promptsmint",
    title: "Promptsmint",
    description: "A curated prompt library with optimized prompts for business and personal tasks.",
    href: "https://promptsmint.example",
    repo: "https://github.com/example/promptsmint",
    tags: ["AI", "Prompts", "Productivity"],
    status: "active",
  },
  {
    id: "website",
    title: "amanKumar.ai Website",
    description: "Personal website built with Next.js, TailwindCSS, and ShadCN.",
    href: "/",
    repo: "https://github.com/example/website",
    tags: ["Personal"],
    status: "personal",
  },
  {
    id: "tools",
    title: "Productivity Tools",
    description: "A collection of small tools to improve developer productivity.",
    href: "https://tools.example",
    repo: "https://github.com/example/tools",
    tags: ["Tools", "Utilities"],
    status: "active",
  },
];

export function ProjectsContent() {
  return (
    <main className="md:ml-[16%] ml-0 min-h-screen bg-white overflow-y-auto pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">Playground — Small MVPs to production apps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              description={p.description}
              href={p.href}
              repo={p.repo}
              tags={p.tags}
              status={p.status as any}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
