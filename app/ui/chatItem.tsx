import { ThreeDotIcon } from "@/app/ui/icons"

export function ChatItem({ text }: { text?: string }) {
    return (
        <div className="h-11 w-full flex justify-between items-center rounded-full px-4 hover:bg-gray-200">
            <div className="truncate w-full text-left mr-4.5">
                {text}
            </div>
            <ThreeDotIcon />
        </div>
    )
}