import { BlogCard } from "./blog-card";

const posts = [
  {
    id: "quantization",
    title: "Fully Quantized vs Mixed Precision: What Actually Matters?",
    description:
      "Breaking down latency, memory, and accuracy trade-offs in real-world ML systems.",
    href: "/blogs/quantization-vs-mixed-precision",
    imageTitle: "Efficient ML Systems: Quantization vs Mixed Precision",
  },
  {
    id: "rmsnorm",
    title: "Why RMSNorm Works Better Than LayerNorm in LLMs",
    description:
      "Understanding normalization choices in transformers and their impact on stability and efficiency.",
    href: "/blogs/rmsnorm-vs-layernorm",
    imageTitle: "RMSNorm vs LayerNorm in LLMs",
  },
  {
    id: "split-learning",
    title: "Split Learning for LLMs: Training Without Seeing Data",
    description:
      "How split learning enables privacy-preserving training and where it fits in modern ML systems.",
    href: "/blogs/split-learning-llms",
    imageTitle: "Split Learning for LLMs",
  },
  {
    id: "llm-systems",
    title: "From Model to System: What It Takes to Deploy LLMs",
    description:
      "Why building LLM applications is more about systems design than model training.",
    href: "/blogs/llm-systems",
    imageTitle: "Designing Production-Ready LLM Systems",
  },
  {
    id: "tinyml",
    title: "Is TinyML Still Relevant in 2026?",
    description:
      "Exploring the future of low-resource ML and where efficient models are heading.",
    href: "/blogs/tinyml-2026",
    imageTitle: "The Future of TinyML",
  },
  {
    id: "multimodal",
    title: "Multimodal Learning: Lessons from Bitcoin Prediction",
    description:
      "What combining news + time series taught me about real-world ML modeling.",
    href: "/blogs/multimodal-learning",
    imageTitle: "Multimodal ML Systems in Practice",
  },
];

export function BlogsContent() {
  return (
    <main className="md:ml-[220px] 2xl:ml-[16%] ml-0 flex-1 min-h-0 bg-white overflow-y-auto pb-20">
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Writing & Insights
          </h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Thoughts on building efficient ML systems, LLMs, and real-world AI.  
            I write about what I build, break, and learn along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {posts.map((p) => (
            <BlogCard
              key={p.id}
              title={p.title}
              description={p.description}
              href={p.href}
              imageTitle={p.imageTitle}
            />
          ))}
        </div>
      </div>
    </main>
  );
}