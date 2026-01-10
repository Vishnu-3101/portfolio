import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AboutContent() {
  return (
    <main className="md:ml-[220px] 2xl:ml-[16%] ml-0 flex-1 min-h-0 bg-white overflow-y-auto pb-20">
      <div className="max-w-3xl mx-auto px-8 py-12">
        <h1 className="text-6xl font-bold text-center mb-2">Aman</h1>
        <div className="text-center uppercase text-gray-600 tracking-wide text-xs mb-3">
          FULL-STACK DEV • AI ENGINEER • LLMS • TRAVEL • MUSIC • F1 • READING
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["React", "LLM", "Rails", "Next.js", "TypeScript", "Postgres", "Redis"]
            .map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                {tech}
              </span>
          ))}
        </div>

        <div className="space-y-7 max-w-xl mx-auto mt-10">
          <section>
            <h2 className="text-xl font-bold">Who I Am</h2>
            <p className="text-gray-800">
              Hello! I'm Vishnu, a Bengaluru-based engineer passionate about building tools that simplify people's lives. I’ve been coding since 2018, writing about AI, LLMs, frontend, backend, Rails and databases.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold mt-3">What I Do</h2>
            <p className="text-gray-800">
              Currently a Founding Engineer at <a href="https://kay.ai" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Kay.ai</a>, building workflow automation for insurance brokers. I focus on building practical, user-facing products - less demo energy, more things people actually use daily.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold mt-3">My Journey</h2>
            <p className="text-gray-800">
              Co-founder of Dreamboat.ai, Engagebud and Influencerbit — led product development and design across multiple startups. Recently shipped Promptsmint (100+ daily users), an iOS app, and several micro-builds, keeping the shipping momentum going.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold mt-3">Vision</h2>
            <p className="text-gray-800">LLMs and AI will automate the mundane and reshape how we work. I strive to stay at the forefront of this transformation.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold mt-3">Beyond Code</h2>
            <p className="text-gray-800">Love techno & house music, follow F1 (Max), play chess, and read regularly. Travelled recently to Bali, and a month in Thailand/Vietnam in 2025.</p>
          </section>

          {/* CTA Buttons */}
          <div className="flex justify-center mt-8 gap-3">
            <Button asChild>
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:aman@email.com">
                E-Mail
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
