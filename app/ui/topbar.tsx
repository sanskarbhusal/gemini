import { NewChatIcon, ShareIcon, ThreeDotIcon } from "@/app/ui/icons"
import Image from "next/image"
export function TopBar({ className }: { className?: string }) {
    return (
        <nav className={`fixed w-full flex justify-end items-center h-15.5 pr-3.5  ${className}`}>
            <NewChatIcon className="hover:bg-[#EEEEEE] flex justify-center items-center w-8.75 h-8.75 p-1.5 rounded-full" />
            <ThreeDotIcon className="hover:bg-[#EEEEEE] rounded-full w-8.75 h-8.75 p-1.5" />
        </nav>
    )
}