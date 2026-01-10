"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  Briefcase,
  Send,
  PenTool,
  User,
  Mail,
  Wrench,
  ExternalLink,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  BookOpen,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activePage?: string;
}

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Briefcase, label: "Experience", href: "/experience" },
  { icon: Send, label: "Projects", href: "/projects" },
  { icon: PenTool, label: "Blogs", href: "/blogs" },
  { icon: User, label: "About", href: "/about" },
  { icon: Mail, label: "Contact", href: "/contact" },
  { icon: Wrench, label: "Tools", href: "/tools" },
];

const socialLinks = [
  { icon: Twitter, label: "X (Twitter)", href: "https://x.com/Vishnu_3101", color: "text-black" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/vishnu3101", color: "text-blue-600" },
  { icon: BookOpen, label: "Medium", href: "https://medium.com", color: "text-black" },
  { icon: Github, label: "Github", href: "https://github.com/Vishnu-3101", color: "text-black" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/vishnu3_1_0_1", color: "text-pink-600" },
];

export function Sidebar({ activePage = "/" }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <> 
      {/* Desktop sidebar */}
      <aside className="hidden md:fixed md:left-0 md:top-0 md:h-screen md:w-[220px] md:min-w-[220px] md:flex-shrink-0 md:flex md:flex-col 2xl:w-[16%] overflow-y-auto bg-white border-r border-gray-200">
        {/* Profile Section */}
        <div className="p-6 border-b border-gray-200">
          <Avatar className="w-20 h-20 mx-auto mb-3">
            <AvatarImage src="/profile.jpg" alt="Profile" />
            <AvatarFallback className="text-2xl">A</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-bold text-center">Vishnu</h2>
          <p className="text-sm text-gray-500 text-center">Problem</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-black text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Connect Section */}
        <div className="p-4 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 px-3">Connect</h3>
          <ul className="space-y-1">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={cn("w-4 h-4", link.color)} />
                      <span>{link.label}</span>
                    </div>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* Mobile header with menu toggle */}
      <div className="md:hidden bg-white border-b">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/profile.jpg" alt="Profile" />
              <AvatarFallback className="text-lg">A</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-lg font-bold">Vishnu</h2>
              <p className="text-xs text-gray-500">Problem</p>
            </div>
          </div>

          <button
            aria-label="Open menu"
            className="p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setIsOpen(false)} />
          <aside className="fixed left-0 top-0 h-screen w-3/4 max-w-xs bg-white z-50 shadow-xl overflow-y-auto">
            <div className="p-4 flex items-center justify-between border-b">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/profile.jpg" alt="Profile" />
                  <AvatarFallback className="text-lg">A</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-lg font-bold">Vishnu</h2>
                  <p className="text-xs text-gray-500">Problem</p>
                </div>
              </div>
              <button aria-label="Close menu" className="p-2 rounded-md hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activePage === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium",
                          isActive ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="p-4 border-t">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Connect</h3>
              <ul className="space-y-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={cn("w-4 h-4", link.color)} />
                          <span>{link.label}</span>
                        </div>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
