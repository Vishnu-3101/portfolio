import { Timeline } from "@/components/timeline";

const experienceEntries = [
  {
    id: "quantiphi-fulltime",
    dateRange: "Jul 2025 - Present",
    title: "Machine Learning Engineer",
    company: "Quantiphi",
    description:
      "Building production-grade ML systems across LLMs, MLOps pipelines, and applied AI use-cases.",
    bullets: [
      "Developed an ML pipeline to predict gamer churn with 78% precision, enabling targeted retention strategies.",
      "Finetuned LLMs for de-identification of PHI data from clinical notes, achieving 90% recall with ~0.35s latency per chunk.",
      "Designed and deployed scalable BQML pipelines for automated ETL and model training within BigQuery.",
      "Improved inference performance by ~40% through optimized pipeline orchestration and system design.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "HuggingFace",
      "GCP",
      "BigQuery ML",
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
      "Worked on computer vision systems for real-world broadcast analytics and brand visibility tracking.",
    bullets: [
      "Built a YOLOv11-based object detection system to detect and quantify Paytm logo visibility in cricket broadcasts.",
      "Achieved 92.2 mAP for logo detection and 96.7% accuracy for visibility classification using VGG16.",
      "Developed a Streamlit-based interface for automated visual analytics and reporting.",
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
      "Designed a dual-track deep learning model combining Swin Transformer and GSRDN for grape leaf disease classification.",
      "Achieved 98.6% accuracy with ~30% fewer parameters, improving model efficiency.",
      "Contributed to a peer-reviewed publication in Scientific Reports.",
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