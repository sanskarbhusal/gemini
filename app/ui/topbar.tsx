import { EditSquareIcon, ShareIcon, ThreeDotIcon } from "@/app/ui/icons"
import Image from "next/image"
export function TopBar({ className }: { className?: string }) {
    return (
        <nav className={`fixed w-full flex gap-5 justify-end items-center h-12 pr-4 m-3 ml-0 ${className}`}>
            <EditSquareIcon />
            <ShareIcon />
            <ThreeDotIcon />
            <Image
                width={34}
                height={34}
                src="/me2.png"
                alt="Avatar Image"
                className="rounded-full"
            />
        </nav>
    )
}