import { BlogCard } from "./blog-card";

const posts = [
  {
    id: "part-4",
    title: "Part 4: From Retrieved Context to a Grounded Answer",
    description: "Why good retrieval still produces bad answers, and where most systems actually fail.",
    href: "/blogs/part-4-retrieved-context",
    imageTitle: "Part 4: From Retrieved Context to a Grounded Answer",
  },
  {
    id: "part-3",
    title: "Part 3: Retrieval Is Not Top-K",
    description: "Relevance, diversity, reranking, and why most systems return the wrong things for the right reasons.",
    href: "/blogs/part-3-retrieval-not-top-k",
    imageTitle: "Part 3: Retrieval Is Not Top-K",
  },
  {
    id: "embeddings",
    title: "Embeddings: Turning Meaning Into Geometry",
    description: "Intuition and practical tips for using embeddings in real-world systems.",
    href: "/blogs/embeddings-meaning-geometry",
    imageTitle: "Embeddings: Turning Meaning Into Geometry",
  },
  {
    id: "how-embeddings-work",
    title: "How Embeddings Actually Work in Practice",
    description: "A practical overview of embedding creation, scaling, and retrieval tradeoffs.",
    href: "/blogs/how-embeddings-work",
    imageTitle: "How Embeddings Actually Work in Practice",
  },
];

export function BlogsContent() {
  return (
    <main className="md:ml-[16%] ml-0 min-h-screen bg-white overflow-y-auto pb-20">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Pensieve</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            A collection of thoughts, ideas, and musings. You can check more of my writings on my <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Medium</a> profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
