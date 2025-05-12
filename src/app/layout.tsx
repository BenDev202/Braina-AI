import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./_components/AppSidebar";
import { ClerkProvider } from "@clerk/nextjs";

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Braina AI",
  description: "Your Smarter Coding Assistant & Productivity Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" className={fontSans.variable} suppressContentEditableWarning>
      <body className="antialiased bg-white text-slate-950">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider >
            <AppSidebar />
            <SidebarTrigger />
          {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
