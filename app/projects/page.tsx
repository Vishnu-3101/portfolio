import { Sidebar } from "@/components/sidebar";
import { ProjectsContent } from "@/components/projects-content";
import { Footer } from "@/components/footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Sidebar activePage="/projects" />
      <ProjectsContent />
      <Footer />
    </div>
  );
}
