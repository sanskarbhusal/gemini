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
      <body className="relative z-0 min-h-full flex flex-col">
        <TopBar className="z-10" />
        <HamBurgerIcon className="peer fixed z-20 top-4 left-3 w-10" />
        <Sidebar className="fixed z-30 -left-80 peer-focus:left-0" />
        <div className="fixed -z-10 h-screen w-full opacity-45 transparent peer-focus:bg-black peer-focus:z-10 transition-colors duration-300"></div>
        {children}
      </body>
    </html>
  );
}
