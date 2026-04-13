import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AboutContent() {
  return (
    <main className="md:ml-[220px] 2xl:ml-[16%] ml-0 flex-1 min-h-0 bg-white overflow-y-auto pb-20">
      <div className="max-w-3xl mx-auto px-8 py-12">
        
        <h1 className="text-6xl font-bold text-center mb-2">Vishnu</h1>

        <div className="text-center uppercase text-gray-600 tracking-wide text-xs mb-3">
          MACHINE LEARNING ENGINEER • LLMS • EFFICIENT AI • SYSTEMS • COMPUTER VISION
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            "PyTorch",
            "Transformers",
            "LLMs",
            "GCP",
            "MLOps",
            "Computer Vision",
            "Distributed Systems",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-7 max-w-xl mx-auto mt-10">
          
          {/* Who I Am */}
          <section>
            <h2 className="text-xl font-bold">Who I Am</h2>
            <p className="text-gray-800">
              I’m Vishnu, a Machine Learning Engineer focused on building 
              <strong> scalable and efficient AI systems</strong>. I enjoy working at the intersection 
              of <strong>LLMs, systems design, and real-world deployment</strong>.
            </p>
          </section>

          {/* What I Do */}
          <section>
            <h2 className="text-xl font-bold mt-3">What I Do</h2>
            <p className="text-gray-800">
              Currently working at <strong>Quantiphi</strong>, where I build end-to-end ML systems — 
              from model development to production deployment. My work includes 
              <strong> LLM fine-tuning, MLOps pipelines, and computer vision systems</strong> 
              applied to real-world problems.
            </p>
          </section>

          {/* My Work */}
          <section>
            <h2 className="text-xl font-bold mt-3">What I’ve Built</h2>
            <p className="text-gray-800">
              I’ve worked on systems like <strong>churn prediction pipelines</strong>, 
              <strong> PHI de-identification using LLMs</strong>, and 
              <strong> real-time vision models</strong>. I’m particularly interested in 
              making models <strong>faster, smaller, and more deployable</strong>.
            </p>
          </section>

          {/* Interests */}
          <section>
            <h2 className="text-xl font-bold mt-3">What I’m Exploring</h2>
            <p className="text-gray-800">
              Lately, I’ve been exploring <strong>low-resource ML</strong> — including 
              <strong> quantization, split learning, and efficient LLM architectures</strong>. 
              I’m curious about how far we can push performance under real-world constraints.
            </p>
          </section>

          {/* Vision */}
          <section>
            <h2 className="text-xl font-bold mt-3">How I Think</h2>
            <p className="text-gray-800">
              I believe building good AI systems is less about chasing bigger models 
              and more about <strong>designing efficient, reliable systems</strong> that 
              actually work in production.
            </p>
          </section>

          {/* Beyond */}
          <section>
            <h2 className="text-xl font-bold mt-3">Beyond Code</h2>
            <p className="text-gray-800">
              Outside of work, I enjoy exploring new ideas in AI, reading research papers, 
              and thinking about how technology shapes real-world systems.
            </p>
          </section>

          {/* CTA Buttons */}
          <div className="flex justify-center mt-8 gap-3">
            <Button asChild>
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:vishnugadige2003@gmail.com">
                E-Mail
              </a>
            </Button>
          </div>

        </div>
      </div>
    </main>
  );
}