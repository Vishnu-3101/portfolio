import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  repo?: string;
  tags?: string[];
  status?: "active" | "archived" | "personal";
  imageTitle?: string;
}

export function ProjectCard({
  title,
  description,
  href = "#",
  repo,
  tags = [],
  status = "personal",
  imageTitle = "Preview",
}: ProjectCardProps) {
  return (
    <Card className="border border-gray-200 hover:shadow-lg transition-shadow bg-white">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Thumbnail */}
          <div className="flex-shrink-0 w-full sm:w-48 h-28 sm:h-28 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center border border-gray-200 overflow-hidden">
            <div className="text-sm sm:text-xs font-semibold text-gray-700">{imageTitle}</div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 leading-tight">{title}</h3>
                <div className="text-sm">
                  <span className={
                    `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      status === "active" ? "bg-green-100 text-green-700" : status === "archived" ? "bg-gray-100 text-gray-700" : "bg-indigo-100 text-indigo-700"
                    }`
                  }>
                    {status}
                  </span>
                </div>
              </div>
              <p className="text-base text-gray-600">{description}</p>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex gap-3">
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-md text-sm font-medium hover:opacity-90"
                >
                  Visit
                </Link>
                {repo && (
                  <Link
                    href={repo}
                    className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Star className="w-4 h-4" />
                    GitHub
                  </Link>
                )}
              </div>

              <div className="flex gap-2 flex-wrap">
                {tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
