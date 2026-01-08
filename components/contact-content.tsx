import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export function ContactContent() {
  return (
    <main className="ml-[16%] min-h-screen bg-white overflow-y-auto pb-20 flex items-center justify-center relative">
      {/* SVG grid pattern background */}
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
          If you're building in / excited about AI, or just wanna chat, say hi on X!
        </p>
        <div className="w-full flex items-center justify-center mb-4">
          <div className="flex gap-2 shadow-xl bg-white rounded-2xl py-2 px-5 border border-gray-200 items-center">
            <span className="text-2xl">𝕏</span>
            <span className="font-medium text-base pr-2">Connect with me on X</span>
            <Button
              className="px-3 bg-black text-white font-semibold h-8"
              style={{borderRadius: 9999, minWidth:64, fontSize:'15px'}}
            >
              Follow
            </Button>
          </div>
        </div>
        <Button variant="default" className="bg-black px-6 flex gap-2 text-base mt-5 h-10" asChild>
          <a href="https://cal.com/aman" target="_blank" rel="noopener noreferrer">
            <PhoneCall className="w-5 h-5 mr-1 -ml-1" />Book a call
          </a>
        </Button>
      </div>
    </main>
  );
}
