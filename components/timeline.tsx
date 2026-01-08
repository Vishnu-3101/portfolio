"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";

interface TimelineEntry {
  id: string;
  dateRange: string;
  title: string;
  company?: string;
  description?: string;
  bullets: string[];
  technologies: string[];
  color: "blue" | "purple";
}

interface TimelineProps {
  entries: TimelineEntry[];
}

export function Timeline({ entries }: TimelineProps) {
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [visibleIds, setVisibleIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (!id) return;
          if (entry.isIntersecting) {
            setVisibleIds((prev) => new Set(prev).add(id));
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.15 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Subtle gradient vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300" />

      <ol className="relative pl-16">
        {entries.map((entry, idx) => {
          const isVisible = visibleIds.has(entry.id);

          return (
            <li
              key={entry.id}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              data-id={entry.id}
              className={cn(
                "relative mb-12 transition-all duration-500 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              {/* Node with icon */}
              <span
                className={cn(
                  "absolute -left-9 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white transition-transform duration-500",
                  entry.color === "blue" ? "border-blue-500" : "border-purple-500",
                  isVisible ? "scale-100" : "scale-75"
                )}
              >
                <Briefcase
                  className={cn(
                    "h-4 w-4 transition-opacity duration-500",
                    entry.color === "blue" ? "text-blue-500" : "text-purple-500",
                    isVisible ? "opacity-100" : "opacity-0"
                  )}
                />
              </span>

              {/* Connector segment (downwards) */}
              {idx !== entries.length - 1 && (
                <span
                  className={cn(
                    "absolute left-6 top-8 w-px h-12 transform origin-top transition-transform duration-500",
                    isVisible ? "scale-y-100" : "scale-y-0",
                    entry.color === "blue"
                      ? "bg-gradient-to-b from-blue-200 to-blue-100"
                      : "bg-gradient-to-b from-purple-200 to-purple-100"
                  )}
                />
              )}

              <time className="text-sm text-muted-foreground font-medium">
                {entry.dateRange}
              </time>

              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {entry.title}
                {entry.company && (
                  <span className="font-normal text-gray-600"> {' '}· {entry.company}</span>
                )}
              </h3>

              {entry.description && (
                <p className="mt-2 text-base text-gray-700 leading-relaxed">{entry.description}</p>
              )}

              {entry.bullets.length > 0 && (
                <ul className="mt-3 space-y-2 text-base text-gray-700 leading-relaxed list-disc list-inside">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}

              {entry.technologies.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.technologies.map((tech, idxTech) => (
                    <span
                      key={idxTech}
                      className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}