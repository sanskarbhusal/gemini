import { ThreeDotIcon } from "@/app/ui/icons"

export function ChatItem({ text, className }: { text?: string, className?: string }) {
    return (
        <div className={`h-11 w-full flex justify-between items-center rounded-full px-4 cursor-pointer hover:bg-gray-200 active:bg-[#D3E3FD] dark:hover:bg-[#2C2D2D] dark:active:bg-[#1F3760] dark:hover:bg-gray ${className}`}>
            <div className="truncate w-full text-left mr-4.5">
                {text}
            </div>
            <ThreeDotIcon />
        </div>
    )
}