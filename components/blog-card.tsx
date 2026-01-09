import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Compass, Moon, Hourglass } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  href?: string;
  imageTitle?: string;
  imageUrl?: string;
  horizontal?: boolean; // when true the card becomes row on md+
}

export function BlogCard({ 
  title, 
  description, 
  href = "/blogs",
  imageTitle = "REFLECTING ON 2025: A Personal Lookback",
  imageUrl,
  horizontal = false,
}: BlogCardProps) {
  const src = imageUrl ?? `https://picsum.photos/seed/${encodeURIComponent(title)}/1200/800`;

  return (
    <Card className="h-full border border-gray-200 hover:shadow-lg transition-shadow bg-white">
      <CardContent className="p-0 h-full flex flex-col">
        <div className={`flex flex-col ${horizontal ? 'md:flex-row' : ''} gap-0 items-stretch h-full`}>
          {/* Book Illustration */}
          <div className={`w-full ${horizontal ? 'md:w-40 lg:w-48' : ''} flex-shrink-0 rounded-t-xl ${horizontal ? 'md:rounded-l-xl md:rounded-tr-none' : ''} overflow-hidden`}>
            <div className={`${horizontal ? 'aspect-[16/9] md:aspect-[3/2]' : 'aspect-[4/3] lg:aspect-[16/9]'} w-full h-full`}>
              <img src={src} alt={imageTitle} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 flex flex-col justify-between p-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight break-words">{title}</h3>
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
