import { ProjectCard } from "./project-card";

const projects = [
  {
    id: "split-dora",
    title: "Split-DoRA: Privacy-Preserving LLM Training",
    description:
      "A split learning framework for GPT-2 enabling client-side privacy with DoRA fine-tuning, reducing accuracy gap vs LoRA by 20–30%.",
    href: "#",
    repo: "https://github.com/Vishnu-3101",
    tags: ["LLMs", "Distributed Training", "DoRA", "Privacy", "PyTorch"],
    status: "research",
  },
  {
    id: "phi-llm",
    title: "PHI De-identification using LLMs",
    description:
      "Fine-tuned LLMs to remove PHI from clinical notes with 90% recall and ~0.35s latency per chunk, balancing accuracy and performance.",
    href: "#",
    repo: "https://github.com/Vishnu-3101",
    tags: ["LLMs", "Healthcare AI", "NLP", "HuggingFace"],
    status: "production",
  },
  {
    id: "churn-prediction",
    title: "Gamer Churn Prediction Pipeline",
    description:
      "Built an end-to-end ML pipeline achieving 78% precision, enabling targeted retention strategies in production.",
    href: "#",
    repo: "https://github.com/Vishnu-3101",
    tags: ["MLOps", "BigQuery ML", "Pipelines", "GCP"],
    status: "production",
  },
  {
    id: "bitcoin-forecasting",
    title: "Bitcoin Price Prediction (Multimodal)",
    description:
      "Transformer-based model combining 130K+ news articles and market data to forecast trends with 0.001 MSE and 7% MAPE.",
    href: "#",
    repo: "https://github.com/Vishnu-3101",
    tags: ["Time Series", "Transformers", "Multimodal", "Finance"],
    status: "research",
  },
  {
    id: "logo-detection",
    title: "Brand Visibility Detection (YOLO)",
    description:
      "YOLOv11-based system to detect Paytm logos in cricket broadcasts, achieving 92.2 mAP and real-time analytics.",
    href: "#",
    repo: "https://github.com/Vishnu-3101",
    tags: ["Computer Vision", "YOLO", "OpenCV", "Deep Learning"],
    status: "production",
  },
  {
    id: "grape-disease",
    title: "Grape Leaf Disease Classification",
    description:
      "Dual-track model combining Swin Transformer and GSRDN achieving 98.6% accuracy with 30% fewer parameters.",
    href: "#",
    repo: "https://github.com/Vishnu-3101",
    tags: ["Computer Vision", "Swin Transformer", "Efficiency"],
    status: "research",
  },
];

export function ProjectsContent() {
  return (
    <main className="md:ml-[220px] 2xl:ml-[16%] ml-0 flex-1 min-h-0 bg-white overflow-y-auto pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Selected Work
          </h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Real-world ML systems, research prototypes, and production deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              description={p.description}
              href={p.href}
              repo={p.repo}
              tags={p.tags}
              status={p.status as any}
            />
          ))}
        </div>
      </div>
    </main>
  );
}