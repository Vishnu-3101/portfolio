import { Timeline } from "@/components/timeline";

const experienceEntries = [
  {
    id: "kay-ai",
    dateRange: "Mar 2024 - Present",
    title: "Founding Engineer",
    company: "kay.ai",
    description: "Leading UI/UX for Copilot to automate insurance workflows",
    bullets: [
      "Building Copilot for Insurance Industry, leading Frontend and UX.",
      "Leading UI/UX for Copilot to automate insurance workflows",
      "Built the Kay Admin App, Client App, and Demo Instance for seamless AI-driven automation.",
      "Experimenting with emerging AI models, techniques and UX paradigms to enhance usability and system design.",
    ],
    technologies: ["React", "Typescript", "Tailwind", "ShadCN", "Python", "LLM"],
    color: "blue" as const,
  },
  {
    id: "dreamboat-ai",
    dateRange: "Feb - Nov 2023",
    title: "Co-Founder / CTO",
    company: "DreamboatAI",
    description: "Designed and developed LLMOps Platform, built multiple LLM apps.",
    bullets: [
      "Led the team for design and development of LLMOps Platform to help monitor, manage, and debug LLM apps following Agile Principles.",
      "Built a high-performance proxy middleware using Cloudflare Workers, achieving sub-20ms response times.",
      "Created multiple LLM-Powered Apps: Divedash - Chrome extension suggesting prompt templates for ChatGPT. Almada - Linkedin Icebreaker generator from profile URLs.",
    ],
    technologies: ["React", "Typescript", "Rails", "Node", "AWS"],
    color: "purple" as const,
  },
];

export function ExperienceContent() {
  return (
    <main className="md:ml-[220px] 2xl:ml-[16%] ml-0 flex-1 min-h-0 bg-white overflow-y-auto pb-20">
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Changelog from my journey
          </h1>
          <p className="text-base text-gray-700 leading-relaxed mb-2">
            I&apos;ve been working at Kay.ai for the past 1.5 years.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Here&apos;s a timeline of my journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <Timeline entries={experienceEntries} />
        </div>

        {/* Resume Link */}
        <div className="mt-16 text-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-700 hover:text-gray-900"
          >
            <span className="mr-2">View Full Resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
