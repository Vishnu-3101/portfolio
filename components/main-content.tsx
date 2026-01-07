import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog-card";
import { Send, Twitter } from "lucide-react";
import Link from "next/link";

export function MainContent() {
  return (
    <main className="ml-[20%] min-h-screen bg-white overflow-y-auto pb-20">
      <div className="max-w-4xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Hey, I&apos;m Aman</h1>
          <div className="flex items-center gap-2 mb-6">
            <p className="text-lg text-gray-600">AI Product Engineer</p>
            <Send className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          </div>

          {/* Social CTA */}
          <div className="flex items-center gap-3 mb-8">
            <Button
              variant="outline"
              className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 h-auto py-2.5 px-4 text-base"
              asChild
            >
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-4 h-4" />
                Connect with me on X
              </Link>
            </Button>
            <Button
              variant="default"
              className="bg-black text-white hover:bg-gray-800 h-auto py-2.5 px-4 text-base"
              asChild
            >
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Follow
              </Link>
            </Button>
          </div>

          {/* Bio Section */}
          <div className="space-y-4 text-base text-gray-700 leading-relaxed">
            <p>
              I turn fuzzy ideas into live Products (quickly) full-stack AI Builder.
            </p>
            <p>
              Currently working as a Founding Engineer at{" "}
              <Link
                href="https://kay.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                kay.ai
              </Link>
            </p>
            <p>
              I have built multiple products in past 5 years. Raised{" "}
              <Link
                href="#"
                className="text-blue-600 hover:underline"
              >
                $100K funding
              </Link>{" "}
              for my startup{" "}
              <Link
                href="#"
                className="text-blue-600 hover:underline"
              >
                Dreamboat.ai
              </Link>
              , built{" "}
              <Link
                href="#"
                className="text-blue-600 hover:underline"
              >
                Engagebud
              </Link>
              ,{" "}
              <Link
                href="#"
                className="text-blue-600 hover:underline"
              >
                Influencerbit
              </Link>
              .
            </p>
            <p>
              You can talk to me about <strong>AI</strong>, new ideas, life, or anything else.
            </p>
            <p>
              Say Hi on{" "}
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                X
              </Link>
            </p>
          </div>
        </div>

        {/* Blog Section */}
        <div className="mt-16">
          <h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
            CHECK THIS OUT
          </h2>
          <BlogCard
            title="My 2025: shipping, signal, and a few uncomfortable rules"
            description="A candid review of 2025 into 2026."
            href="/blogs/2025-reflection"
            imageTitle="REFLECTING ON 2025: A Personal Lookback"
          />
        </div>
      </div>
    </main>
  );
}
