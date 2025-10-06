import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppSidebar } from "./sidebar/AppSidebar";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Honore",
  description: "Niyitanga Honore is a web developer and a cybersecurity expert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        src="//code.tidio.co/wmngcm35jskxetaitvzjs1vp6wtkqvfk.js"
        async
      ></script>
      <head>
        <meta
          name="google-site-verification"
          content="CXSVtZPrztpaqeebVRaqW3MPy4akFo82vLmTHmvfb88"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-sidebar`}
      >
        <SidebarProvider>
          <AppSidebar />

          <main className="p-5 bg-white md:mt-3 md:pt-32 shadow-lg rounded-tl-lg w-full">
            <SidebarTrigger />

            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
