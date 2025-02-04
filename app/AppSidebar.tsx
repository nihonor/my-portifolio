"use client";
import {
  Calendar,
  Linkedin,
  Github,
  FileUser,
  BookText,
  MessageSquareText,
  Home,
  Inbox,
  Search,
  Settings,
  Zap,
  BriefcaseBusiness,
  Microchip,
} from "lucide-react";
import Image from "next/image";
import profilePic from "../public/honor.png";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
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
import { usePathname } from "next/navigation"; // Import usePathname hook

// Menu items.
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
    title: "Certifications",
    url: "/certificate",
    icon: BookText,
  },
  {
    title: "Resume",
    url: "/resume",
    icon: FileUser,
  },
  {
    title: "Tech stacks",
    url: "#",
    icon: Microchip,
  },
];

const socials = [
  {
    title: "LinkedIn",
    url: "#",
    icon: CiLinkedin,
  },
  {
    title: "Github",
    url: "https://github.com/nihonor",
    icon: Github,
  },
  {
    title: "WhatsApp",
    url: "#",
    icon: FaWhatsapp,
  },
];

export function AppSidebar() {
  const pathname = usePathname(); // Get the current pathname from the router

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="my-8 ">
            <Image
              src={profilePic}
              alt="Honore image"
              width={45}
              className="rounded-full object-cover"
            />
            <div className="pl-1">
              <h2 className="font-bold text-sm text-gray-600 ">N.Honore</h2>
              <p className="text-[13px]">Software developer & Cyber expert</p>
            </div>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={`flex items-center space-x-2 p-2 rounded-md ${
                        pathname === item.url
                          ? "bg-white shadow-lg"
                          : "text-gray-600 hover:bg-white"
                      }`}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-sm text-gray-600">
            Socials
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socials.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={`flex items-center space-x-2 p-2 rounded-md ${
                        pathname === item.url
                          ? "bg-white shadow-lg"
                          : "text-gray-600 hover:bg-white"
                      }`}
                    >
                      <item.icon />
                      <span>{item.title}</span>
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
