import { chatList } from "@/app/lib/data"
import { ChatItem } from "@/app/ui/chatItem"

export function Sidebar({ className }: { className?: string }) {
    return (
        <div className={`bg-[#F0F4F9] border-solid border border-gray-200 dark:bg-[#1E1F20] dark:border-none flex justify-left h-screen w-77 rounded-r-2xl transition-all duration-300 ease-out ${className}`}>
            <div className="w-full px-2.5">
                <div>
                    <div className="group text-left font-semibold text-gray-600 dark:text-[#C4C7C5] pl-3.5">Chats</div>
                    {chatList.map((item, index) => {
                        return (
                            <ChatItem key={index} text={item.title} className="" />
                        )
                    })}
                </div>
                <div>
                </div>
            </div>
        </div >
    )
}