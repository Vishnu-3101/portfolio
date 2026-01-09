import { Sidebar } from "@/components/sidebar";
import { ExperienceContent } from "@/components/experience-content";
import { Footer } from "@/components/footer";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Sidebar activePage="/experience" />
      <ExperienceContent />
      <Footer />
    </div>
  );
}
