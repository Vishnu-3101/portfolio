import { Sidebar } from "@/components/sidebar";
import { ContactContent } from "@/components/contact-content";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Sidebar activePage="/contact" />
      <ContactContent />
      <Footer />
    </div>
  );
}
