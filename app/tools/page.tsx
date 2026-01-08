import { Sidebar } from "@/components/sidebar";
import { ToolsContent } from "@/components/tools-content";
import { Footer } from "@/components/footer";

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar activePage="/tools" />
      <ToolsContent />
      <Footer />
    </div>
  );
}
