import { Sidebar } from "@/components/sidebar";
import { MainContent } from "@/components/main-content";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Sidebar activePage="/" />
      <MainContent />
      <Footer />
    </div>
  );
}
