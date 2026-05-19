import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { TopBar } from "@/app/ui/topbar"
import { Sidebar } from "@/app/ui/sidebar"
import { HamBurgerIcon } from "@/app/ui/icons"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gemini Clone",
  description: "Built by Sanskar Bhusal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.className} h-full antialiased`}
    >
      <body className="relative z-0 min-h-full flex flex-col antialiased">
        <input type="radio" id="sidebar-open" name="sidebar-state" className="peer hidden" />
        <input type="radio" id="sidebar-close" name="sidebar-state" className="hidden" />
        <TopBar className="z-10" />
        <HamBurgerIcon className="peer fixed z-20 top-4 left-3 w-10" htmlFor="sidebar-open" />
        <Sidebar className="fixed z-30 -left-80 peer-checked:left-0" />
        <label className="h-screen w-full opacity-45 transparent peer-checked:bg-black peer-focus:z-10 transition-colors duration-300"
          htmlFor="sidebar-close">
        </label>
        {children}
      </body>
    </html>
  );
}
