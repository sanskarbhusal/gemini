import { EditSquareIcon, ShareIcon, ThreeDotIcon } from "@/app/ui/icons"
import Image from "next/image"
export function TopBar({ className }: { className?: string }) {
    return (
        <div className={`h-12 flex justify-between items-center m-3 ml-0 ${className}`}>
            <div className="p-2 flex gap-4.75 justify-between items-center">
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
            </div>
        </div>
    )
}