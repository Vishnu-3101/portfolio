"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);
  const ticking = useRef<boolean>(false);

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

    // Initialize scroll position
    const initializeScroll = () => {
      const mainContent = document.querySelector("main");
      const initialScrollY = mainContent 
        ? (mainContent as HTMLElement).scrollTop 
        : window.scrollY || document.documentElement.scrollTop;
      lastScrollY.current = initialScrollY;
      
      // Check if near bottom on load
      if (mainContent) {
        const scrollHeight = (mainContent as HTMLElement).scrollHeight;
        const viewportHeight = (mainContent as HTMLElement).clientHeight;
        const scrollBottom = scrollHeight - viewportHeight - initialScrollY;
        if (scrollBottom < 100) {
          setIsVisible(true);
        }
      }
    };

    // Initialize on mount
    setTimeout(initializeScroll, 100);

    // Scroll handler
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const mainContent = document.querySelector("main") as HTMLElement;
          const currentScrollY = mainContent 
            ? mainContent.scrollTop 
            : window.scrollY || document.documentElement.scrollTop;
          
          // Calculate if near bottom
          let isNearBottom = false;
          if (mainContent) {
            const scrollHeight = mainContent.scrollHeight;
            const viewportHeight = mainContent.clientHeight;
            const scrollBottom = scrollHeight - viewportHeight - currentScrollY;
            isNearBottom = scrollBottom <= 100; // Within 100px of bottom
          } else {
            const scrollHeight = document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight;
            const scrollBottom = scrollHeight - viewportHeight - currentScrollY;
            isNearBottom = scrollBottom <= 100;
          }
          
          // Determine scroll direction (with threshold to avoid jitter)
          const scrollDiff = currentScrollY - lastScrollY.current;
          const scrollThreshold = 5; // Minimum pixels to consider it a scroll
          
          // Always show when near bottom
          if (isNearBottom) {
            setIsVisible(true);
          } else if (Math.abs(scrollDiff) > scrollThreshold) {
            if (scrollDiff < 0) {
              // Scrolling up - show footer
              setIsVisible(true);
            } else {
              // Scrolling down - hide footer
              setIsVisible(false);
            }
          }
          
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    // Get the main content element to listen for scroll
    const mainContent = document.querySelector("main");
    
    if (mainContent) {
      mainContent.addEventListener("scroll", handleScroll, { passive: true });
    }
    // Also listen on window as fallback
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearInterval(timeInterval);
      if (mainContent) {
        mainContent.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "fixed bottom-0 left-0 right-0 md:ml-[16%] ml-0 bg-white border-t border-gray-200 px-4 md:px-8 py-4 transition-transform duration-300 ease-in-out z-50",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
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
