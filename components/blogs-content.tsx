import { BlogCard } from "./blog-card";
import { posts } from "@/lib/blogs";


export function BlogsContent() {
  return (
    <main className="ml-[20%] min-h-screen bg-white overflow-y-auto pb-20">
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
              href={`/blogs/${p.slug}`}
              imageTitle={p.imageTitle}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
