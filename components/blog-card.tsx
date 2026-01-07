import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Compass, Moon, Hourglass } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  href?: string;
  imageTitle?: string;
}

export function BlogCard({ 
  title, 
  description, 
  href = "/blogs",
  imageTitle = "REFLECTING ON 2025: A Personal Lookback"
}: BlogCardProps) {
  return (
    <Card className="border border-gray-200 hover:shadow-lg transition-shadow bg-white">
      <CardContent className="p-6">
        <div className="flex gap-6">
          {/* Book Illustration */}
          <div className="flex-shrink-0 w-32 h-40 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex flex-col items-center justify-center border border-gray-200 relative overflow-hidden">
            <BookOpen className="w-16 h-16 text-blue-400 mb-2 z-10" />
            {/* Decorative elements */}
            <div className="absolute top-2 left-2">
              <Compass className="w-4 h-4 text-purple-300" />
            </div>
            <div className="absolute top-3 right-3">
              <Moon className="w-4 h-4 text-blue-300" />
            </div>
            <div className="absolute bottom-3 left-4">
              <Hourglass className="w-4 h-4 text-purple-300" />
            </div>
            <p className="text-xs font-semibold text-gray-700 mt-2 px-2 text-center z-10">
              {imageTitle}
            </p>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{title}</h3>
              <p className="text-base text-gray-600">{description}</p>
            </div>
            <Link
              href={href}
              className="text-sm text-gray-900 font-medium hover:underline self-end mt-4 inline-flex items-center gap-1"
            >
              Read more →
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
