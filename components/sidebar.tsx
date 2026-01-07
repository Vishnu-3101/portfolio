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
  { icon: Twitter, label: "X (Twitter)", href: "https://twitter.com", color: "text-black" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "text-blue-600" },
  { icon: BookOpen, label: "Medium", href: "https://medium.com", color: "text-black" },
  { icon: Github, label: "Github", href: "https://github.com", color: "text-black" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "text-pink-600" },
];

export function Sidebar({ activePage = "/" }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[20%] overflow-y-auto bg-white border-r border-gray-200 flex flex-col">
      {/* Profile Section */}
      <div className="p-6 border-b border-gray-200">
        <Avatar className="w-20 h-20 mx-auto mb-3">
          <AvatarImage src="/profile.jpg" alt="Profile" />
          <AvatarFallback className="text-2xl">A</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-bold text-center">Aman</h2>
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
  );
}
