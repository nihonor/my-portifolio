"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar/AppSidebar";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import React from "react";

function ThemedLayout({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();

    const isCyber = theme === "cyber";

    return (
        <div className={`min-h-screen ${isCyber ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50'}`}>
            <SidebarProvider>
                <AppSidebar />
                <main className={`p-5 md:mt-3 md:pt-32 shadow-2xl w-full
                         ${isCyber
                        ? 'bg-black/80 border-l-2 border-t-2 border-green-500/30 rounded-tl-2xl rounded-bl-2xl backdrop-blur-sm'
                        : 'bg-white shadow-blue-500/10 border-l border-t border-blue-100/50 rounded-tl-2xl rounded-bl-2xl'
                    }`}>
                    {children}
                </main>
            </SidebarProvider>
        </div>
    );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <ThemedLayout>{children}</ThemedLayout>
        </ThemeProvider>
    );
}
