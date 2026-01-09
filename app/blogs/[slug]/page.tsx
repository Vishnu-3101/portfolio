import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { getPostBySlug, posts } from "@/lib/blogs";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string } | Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar activePage="/blogs" />

      <main className="md:ml-[16%] ml-0 min-h-screen bg-white overflow-y-auto pb-20">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <a href="/blogs" className="text-sm text-gray-600 hover:underline">
            ← All Articles
          </a>

          <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-4">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-6">{post.date} • 3 min read</p>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 mb-6">
            <p className="text-base text-gray-700">{post.content}</p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Key takeaways</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Understand failure modes between retrieval and grounding.</li>
              <li>Use reranking and contextualization for better evidence selection.</li>
              <li>Monitor and evaluate retrieval quality as a component of the system.</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
