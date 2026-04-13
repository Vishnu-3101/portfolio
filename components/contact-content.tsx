import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function ContactContent() {
  return (
    <main className="md:ml-[220px] 2xl:ml-[16%] ml-0 flex-1 min-h-0 bg-white overflow-y-auto pb-20 flex items-center justify-center relative">
      
      {/* Background grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none select-none"
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 0 }}
      >
        <defs>
          <pattern
            id="grid"
            width="36"
            height="36"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(20)"
          >
            <rect x="18" y="18" width="2" height="2" rx="1" fill="#d1d5db" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative z-10 flex flex-col items-center w-full max-w-lg px-5 pt-16 pb-32 mx-auto">
        
        <h1 className="font-bold text-5xl text-center mb-2">Contact</h1>

        <p className="text-lg text-center mb-8 text-gray-700 max-w-xl">
          Interested in building AI systems, discussing research, or collaborating on ML projects?  
          Feel free to reach out.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
          
          <Button
            variant="outline"
            className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 h-auto py-2.5 px-4 text-base"
            asChild
          >
            <a href="mailto:vishnugadige2003@gmail.com">
              <Mail className="w-4 h-4" />
              Email Me
            </a>
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 h-auto py-2.5 px-4 text-base"
            asChild
          >
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Link>
          </Button>

          <Button
            variant="default"
            className="bg-black text-white hover:bg-gray-800 h-auto py-2.5 px-4 text-base"
            asChild
          >
            <Link
              href="https://github.com/Vishnu-3101"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              GitHub
            </Link>
          </Button>

        </div>

        {/* Optional note */}
        <p className="text-sm text-gray-500 mt-6 text-center">
          Open to ML engineering roles, research collaborations, and interesting AI problems.
        </p>

      </div>
    </main>
  );
}