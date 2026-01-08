export type Post = {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageTitle?: string;
  date?: string;
  content?: string;
};

export const posts: Post[] = [
  {
    id: "part-4",
    slug: "part-4-retrieved-context",
    title: "Part 4: From Retrieved Context to a Grounded Answer",
    description: "Why good retrieval still produces bad answers, and where most systems actually fail.",
    imageTitle: "Part 4: From Retrieved Context to a Grounded Answer",
    date: "2026-01-04",
    content:
      "This post discusses the gap between retrieved context and a truly grounded answer. It covers common failure modes such as misinterpretation, lack of logical integration, and poor reasoning over retrieved documents. The article explains how better reasoning and grounding layers can reduce hallucinations and improve answer fidelity.",
  },
  {
    id: "part-3",
    slug: "part-3-retrieval-not-top-k",
    title: "Part 3: Retrieval Is Not Top-K",
    description: "Relevance, diversity, reranking, and why most systems return the wrong things for the right reasons.",
    imageTitle: "Part 3: Retrieval Is Not Top-K",
    date: "2026-01-02",
    content:
      "This post argues that simple Top-K retrieval is often insufficient and explores strategies like reranking, diversity-aware selection, and contextualization to retrieve more useful evidence for downstream reasoning systems.",
  },
  {
    id: "embeddings",
    slug: "embeddings-meaning-geometry",
    title: "Embeddings: Turning Meaning Into Geometry",
    description: "Intuition and practical tips for using embeddings in real-world systems.",
    imageTitle: "Embeddings: Turning Meaning Into Geometry",
    date: "2025-12-20",
    content:
      "An approachable primer on embeddings that covers how semantic information is encoded as vectors, practical tradeoffs for model selection and dimensionality, and tips for building robust retrieval systems.",
  },
  {
    id: "how-embeddings-work",
    slug: "how-embeddings-work",
    title: "How Embeddings Actually Work in Practice",
    description: "A practical overview of embedding creation, scaling, and retrieval tradeoffs.",
    imageTitle: "How Embeddings Actually Work in Practice",
    date: "2025-12-10",
    content:
      "A practical guide that demystifies embeddings, including how they are trained, normalization strategies, approximate nearest neighbor techniques, and pragmatic tips for evaluation and monitoring.",
  },
];

export function getPostBySlug(slug?: string) {
  if (!slug) return undefined;
  return posts.find((p) => p.slug === slug);
}
