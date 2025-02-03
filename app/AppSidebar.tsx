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
import { title } from "process";

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
    url: "#",
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
    url: "#",
    icon: Github,
  },
  {
    title: "WhatsApp",
    url: "#",
    icon: FaWhatsapp,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="my-8 ">
            {/* <div><img src="" alt="Honore image"/></div> */}
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
                    <a href={item.url}>
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
          <SidebarGroupLabel className="font-bold text-sm font text-gray-600">
            Socials
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socials.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
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
