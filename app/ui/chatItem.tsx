import { ThreeDotIcon } from "@/app/ui/icons"

export function ChatItem({ text, className }: { text?: string, className?: string }) {
    return (
        <button className={`h-11 w-full pl-4 pr-2 flex justify-between items-center rounded-full cursor-pointer font-sans font-medium text-left text-[17px] text-black dark:text-[#E0E0E0] dark:focus:text-white hover:bg-[#EDEDED] focus:bg-[#EDEDED] focus:font-bold dark:hover:bg-[#2C2D2D] dark:focus:bg-[#141414] ${className}`}>
            <div className="truncate w-full mr-4.5">
                {text}
            </div>
            <ThreeDotIcon className="dark:fill-white rounded-full h-9 w-11 p-1.25 hover:bg-[#E4E3E3] dark:hover:bg-[#222222]" />
        </button>
    )
}