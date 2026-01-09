import { Sidebar } from "@/components/sidebar";
import { BlogsContent } from "@/components/blogs-content";
import { Footer } from "@/components/footer";

export default function BlogsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Sidebar activePage="/blogs" />
      <BlogsContent />
      <Footer />
    </div>
  );
}
