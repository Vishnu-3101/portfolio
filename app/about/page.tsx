import { Sidebar } from "@/components/sidebar";
import { AboutContent } from "@/components/about-content";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar activePage="/about" />
      <AboutContent />
      <Footer />
    </div>
  );
}
