"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useTheme } from "@/contexts/ThemeContext";
import {
  BookText,
  BriefcaseBusiness,
  Github,
  MessageSquareText,
  Microchip,
  Shield,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

// Menu items
const items = [
  {
    title: "Home",
    url: "/",
    icon: Zap,
  },
  {
    title: "About",
    url: "/about",
    icon: MessageSquareText,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: BriefcaseBusiness,
  },
  {
    title: "Cybersecurity",
    url: "/cybersecurity",
    icon: Shield,
  },
  {
    title: "Certifications",
    url: "/certificate",
    icon: BookText,
  },
  {
    title: "Tech stacks",
    url: "/techstack",
    icon: Microchip,
  },
];

const socialMedia = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/niyitanga-honore",
    icon: FaLinkedin,
  },
  {
    title: "Github",
    url: "https://github.com/nihonor",
    icon: Github,
  },
  {
    title: "Twitter",
    url: "https://twitter.com",
    icon: FaTwitter,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const isCyber = theme === "cyber";

  return (
    <Sidebar className={isCyber ? "bg-black/90 border-r-2 border-green-500/30" : ""}>
      <SidebarContent className={isCyber ? "bg-black/90" : ""}>
        <SidebarGroup>
          <SidebarGroupLabel className="my-8 ">
            <Image
              src="/honor.png"
              alt="Honore image"
              width={45}
              height={45}
              className="rounded-full object-cover"
            />
            <div className="pl-1">
              <h2 className="font-bold text-sm text-gray-600 ">N.Honore</h2>
              <p className="text-[13px]">Software developer & Cyber expert</p>
            </div>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`transition-all duration-300 rounded-xl px-4 py-3 my-1
                        ${isActive
                          ? isCyber
                            ? "bg-gradient-to-r from-green-600/30 to-cyan-600/30 text-cyan-400 shadow-lg shadow-green-500/20 border border-green-500/50"
                            : "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg shadow-blue-500/30"
                          : isCyber
                            ? "hover:bg-green-500/10 text-green-300 hover:text-cyan-400"
                            : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-blue-700"
                        }`}
                    >
                      <Link href={item.url} className="flex items-center gap-3">
                        <item.icon
                          className={`transition-all duration-300 ${isActive && !isCyber ? "animate-float text-white" : ""} ${isActive && isCyber ? "text-cyan-400 animate-pulse" : ""
                            }`}
                        />
                        <span className={isCyber ? "font-mono" : "font-medium"}>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className={isCyber ? "text-green-400 font-mono" : "text-slate-700 font-semibold"}>
            Social Media
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialMedia.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`transition-all duration-300 rounded-xl px-4 py-2 my-1
                      ${isCyber
                        ? "hover:bg-green-500/10 text-green-300 hover:text-cyan-400"
                        : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-blue-700"
                      }`}
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <item.icon className={isCyber ? "text-cyan-400" : "text-slate-600"} />
                      <span className={isCyber ? "font-mono" : "font-medium"}>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
