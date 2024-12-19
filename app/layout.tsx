import type { Metadata } from "next";
import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import React from "react";

import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/context/Theme";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Navbar from "@/components/navigation/navbar";
import LeftSidebar from "@/components/navigation/sidebar/LeftSidebar";
import RighSidebar from "@/components/navigation/sidebar/RightSidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A community driven platform for asking and answering programming questions. Get help, share knowledge and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structure and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <head>
          <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        </head>
        <body
          className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
        >
          <Toaster />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main>
            <Navbar />
            <div className="flex">
              <LeftSidebar />
              <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
                <div className="mx-auto w-full max-w-5xl">
                  {children}
                </div>
              </section>
              <RighSidebar />
            </div>
            </main>
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
