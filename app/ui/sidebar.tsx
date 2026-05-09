import { HamBurgerIcon } from "./icons"
import { chatList } from "@/app/lib/data"
import { ChatItem } from "@/app/ui/chatItem"

export function Sidebar({ className }: { className?: string }) {
    return (
        <div className={`bg-[#F0F4F9] border-solid border border-gray-200 fixed top-0 left-0 flex justify-left w-0 h-screen rounded-r-2xl transition-all duration-400 ease-out ${className}`}>
            <HamBurgerIcon />

            <div className="w-full px-2.5">
                <div className="text-left font-semibold text-gray-600 pl-3.5">Chats</div>
                {chatList.map((item, index) => {
                    return (
                        <ChatItem key={index} text={item.title} />
                    )
                })}
            </div>
        </div>
    )
}