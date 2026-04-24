import { BlogCard } from "./blog-card";

const posts = [
  {
    id: "autodiff",
    title: "AutoDiff Explained: How PyTorch Computes Gradients",
    description:
      "Breaking down automatic differentiation using computation graphs and backprop.",
    href: "https://www.linkedin.com/posts/vishnu3101_machinelearning-deeplearning-autodiff-activity-7322652161597698049-VCGH",
    imageTitle: "Automatic Differentiation",
    imageUrl: "/blogs/autodiff.png",
  },
  {
    id: "transformers-evolution",
    title: "How Transformers Evolved: From RNNs to Attention",
    description:
      "Tracing the journey from Seq2Seq to Transformers and modern AI systems.",
    href: "https://www.linkedin.com/posts/vishnu3101_transformers-attentionisallyouneed-nlp-activity-7316401177070317569-ESR8",
    imageTitle: "Transformers Evolution",
    imageUrl: "/blogs/transformers.png",
  },
  {
    id: "regularization",
    title: "L1 vs L2 Regularization: Why Only One Creates Sparsity",
    description:
      "Understanding why L1 drives weights to zero while L2 behaves differently.",
    href: "https://www.linkedin.com/posts/vishnu3101_machinelearning-regularization-lessexploredtopicsinml-activity-7301288697562349568-jVup",
    imageTitle: "L1 vs L2 Regularization",
    imageUrl: "/blogs/regularization.png",
  },
  {
    id: "yolo",
    title: "YOLO Demystified: It’s Just a CNN (Almost)",
    description:
      "How a simple architectural tweak turns CNNs into object detectors.",
    href: "https://www.linkedin.com/posts/vishnu3101_leastexploredtopicsinml-yolo-learning-activity-7313815216029372418-S2uE",
    imageTitle: "YOLO Architecture",
    imageUrl: "/blogs/yolo.png",
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
            Thoughts on machine learning, deep learning systems, and first-principles understanding.  
            I write about what I build, break, and deeply explore.
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
              imageUrl={p.imageUrl}
            />
          ))}
        </div>
      </div>
    </main>
  );
}