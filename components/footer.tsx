"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      
      const period = hours >= 12 ? "pm" : "am";
      const displayHours = hours % 12 || 12;
      
      setCurrentTime(`${displayHours}:${minutes}:${seconds} ${period}`);
    };

    // Update immediately
    updateTime();

    // Update every second
    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full md:ml-[220px] 2xl:ml-[16%] bg-white border-t border-gray-200 px-4 md:px-8 py-4 z-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 gap-2">
        {/* Left: Reach out link */}
        <Link
          href="/contact"
          className="flex items-center gap-1 hover:text-gray-900 transition-colors"
        >
          Reach out
          <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Center: Made by Aman | © Year */}
        <div className="text-center">
          Made by Aman | © {currentYear}
        </div>

        {/* Right: Time */}
        <div className="font-mono">
          {currentTime}
        </div>
      </div>
    </footer>
  );
}
