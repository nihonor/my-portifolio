import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import ClientLayout from "./ClientLayout";
import { SidebarTrigger } from "@/components/ui/sidebar";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>
          <SidebarTrigger />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

