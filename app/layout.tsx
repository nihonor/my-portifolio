import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";


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
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <script src="//code.tidio.co/wmngcm35jskxetaitvzjs1vp6wtkqvfk.js" async></script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-sidebar`}
      >
        <SidebarProvider>
        
          <AppSidebar />
         
          <main className="p-5 bg-white md:mt-3 md:pt-32 shadow-lg rounded-tl-lg w-full">
         
            {children}
          
          </main>
         
        </SidebarProvider>
      </body>
    </html>
  );
}
