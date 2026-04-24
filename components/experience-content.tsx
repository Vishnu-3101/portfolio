import { Timeline } from "@/components/timeline";

const experienceEntries = [
  {
    id: "quantiphi-fulltime",
    dateRange: "Jan 2025 - Present",
    title: "Machine Learning Engineer",
    company: "Quantiphi",
    description:
      "Building production-grade GenAI and ML systems across RAG pipelines, LLM applications, and scalable data workflows.",
    bullets: [
      "Improved retrieval relevance by ~25–30% by designing a RAG pipeline using AWS Bedrock (Titan v2, OpenSearch) with query decomposition and reranking across ~3,500 Confluence pages.",
      "Enhanced response quality by ~20% by building conversational memory (STM + LTM) using DynamoDB for multi-turn interactions.",
      "Owned end-to-end development of a document processing platform handling multi-format inputs across 19 departments and 400+ entities.",
      "Reduced manual processing effort by ~90–95% with <2 min document processing time via modular extraction, mapping, and validation pipelines.",
      "Finetuned Qwen-8B LLM for PHI de-identification achieving 90% recall with ~0.35s latency.",
      "Built scalable BigQuery ML pipelines reducing inference time by ~40% and improving MLOps efficiency.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "HuggingFace",
      "AWS Bedrock",
      "OpenSearch",
      "DynamoDB",
      "BigQuery ML",
      "RAG",
      "MLOps",
    ],
    color: "blue" as const,
  },
  {
    id: "quantiphi-intern",
    dateRange: "Jan 2025 - Jun 2025",
    title: "Machine Learning Engineer Intern",
    company: "Quantiphi",
    description:
      "Worked on computer vision systems for broadcast analytics and brand visibility measurement.",
    bullets: [
      "Built a YOLOv11-based detection system to quantify Paytm logo visibility in cricket broadcasts.",
      "Achieved 92.2 mAP for detection and 96.7% classification accuracy using VGG16.",
      "Developed a Streamlit interface for automated visual analytics and reporting workflows.",
    ],
    technologies: [
      "Python",
      "YOLO",
      "VGG16",
      "OpenCV",
      "Streamlit",
      "Deep Learning",
    ],
    color: "purple" as const,
  },
  {
    id: "vit-research",
    dateRange: "Aug 2023 - Dec 2023",
    title: "Research Intern",
    company: "VIT Chennai",
    description:
      "Worked on efficient deep learning architectures for plant disease classification.",
    bullets: [
      "Designed a dual-track model combining Swin Transformer and GSRDN for grape leaf classification.",
      "Achieved 98.6% accuracy with ~30% fewer parameters, improving efficiency.",
      "Published work in Scientific Reports.",
    ],
    technologies: [
      "PyTorch",
      "Swin Transformer",
      "Computer Vision",
      "Deep Learning",
    ],
    color: "green" as const,
  },
];

export function ExperienceContent() {
  return (
    <main className="md:ml-[220px] 2xl:ml-[16%] ml-0 flex-1 min-h-0 bg-white overflow-y-auto pb-20">
      <div className="max-w-4xl mx-auto px-8 py-12">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            My Journey in Building AI Systems
          </h1>
          <p className="text-base text-gray-700 leading-relaxed mb-2">
            I work on building scalable, efficient, and production-ready machine learning systems.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Here&apos;s a timeline of my experience across industry and research.
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