import { HamBurgerIcon, EditSquareIcon, ShareIcon, ThreeDotIcon } from "@/app/ui/icons"
import { Sidebar } from "./sidebar"

export function TopBar({ className }: { className?: string }) {
    return (
        <div className={`h-12 flex justify-between items-center m-3 ml-0 ${className}`}>
            <div className="p-2 flex gap-4.75 justify-between items-center">
                <EditSquareIcon />
                <ShareIcon />
                <ThreeDotIcon />
                <img
                    src="/me2.png"
                    alt="Avatar Image"
                    className="rounded-full h-8.5 w-8.5"
                />
            </div>
        </div>
    )
}