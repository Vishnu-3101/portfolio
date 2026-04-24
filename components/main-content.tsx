import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog-card";
import { Send, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function MainContent() {
  return (
    <main className="md:ml-[220px] 2xl:ml-[16%] ml-0 flex-1 min-h-0 bg-white overflow-y-auto pb-20">
      <div className="max-w-4xl mx-auto px-8 py-12">
        
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hey, I&apos;m Vishnu
          </h1>

          <div className="flex items-center gap-2 mb-6">
            <p className="text-lg text-gray-600">
              Machine Learning Engineer · LLM Systems · Efficient AI
            </p>
            <Send className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 mb-8">
            <Button
              variant="outline"
              className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 h-auto py-2.5 px-4 text-base"
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

            <Button
              variant="default"
              className="bg-black text-white hover:bg-gray-800 h-auto py-2.5 px-4 text-base"
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/Vishnu-3101"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Link>
            </Button>
          </div>

          {/* Bio Section */}
          <div className="space-y-4 text-base text-gray-700 leading-relaxed">
            
            <p>
              I build <strong>production-ready AI systems</strong> with a focus on 
              <strong> LLMs, efficient ML, and scalable pipelines</strong>.
            </p>

            <p>
              Currently working as a <strong>Machine Learning Engineer at Quantiphi</strong>, 
              where I design and deploy end-to-end ML solutions — from model development 
              to real-world production systems.
            </p>

            <p>
              My work spans <strong>LLM fine-tuning, privacy-preserving AI, computer vision,</strong> 
              and <strong>MLOps pipelines</strong>. I&apos;ve built systems that improve inference 
              latency, automate ML workflows, and solve real business problems.
            </p>

            <p>
              Recently, I&apos;ve been exploring <strong>low-resource ML</strong>, including 
              <strong> quantization, split learning, and efficient LLM architectures</strong>.
            </p>

            <p>
              I enjoy thinking about <strong>how to make AI systems faster, smaller, and deployable</strong>.
            </p>

            <p>
              Feel free to reach out — I&apos;m always up for discussions on AI systems, 
              research, or interesting problems.
            </p>
          </div>
        </div>

        {/* Blog Section */}
        <div className="mt-16">
          <h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
            WRITING & INSIGHTS
          </h2>

          <BlogCard
            title="AutoDiff Explained: How PyTorch Computes Gradients"
            description="Breaking down automatic differentiation using computation graphs and backprop."
            href="/blogs/autodiff"
            imageTitle="Automatic Differentiation"
            imageUrl="/blogs/autodiff.png"
            horizontal
          />
        </div>

      </div>
    </main>
  );
}