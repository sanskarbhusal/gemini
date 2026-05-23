import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { TopBar } from "@/app/ui/topbar"
import { Sidebar } from "@/app/ui/sidebar"
import { HamBurgerIcon } from "@/app/ui/icons"
import { Google_Sans_Flex } from "next/font/google"

export const metadata: Metadata = {
  title: "Gemini Clone",
  description: "Built by Sanskar Bhusal",
};

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  // weight: ["400", "500", "600"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className={`relative z-0 min-h-full flex flex-col antialiased select-none ${googleSansFlex.className}`}>
        <input type="radio" id="sidebar-open" name="sidebar-state" className="peer hidden" />
        <input type="radio" id="sidebar-close" name="sidebar-state" className="hidden" />
        <TopBar className="z-10" />
        <HamBurgerIcon className="peer fixed z-20 top-2 left-2 w-10" htmlFor="sidebar-open" />
        <Sidebar className="fixed z-30 -left-0 peer-checked:left-0" />
        <label className="h-screen w-full opacity-45 transparent peer-checked:bg-black bg-black absolute peer-checked:z-10 -z-10  transition-colors duration-300"
          htmlFor="sidebar-close">
        </label>
        {children}
      </body>
    </html>
  );
}
