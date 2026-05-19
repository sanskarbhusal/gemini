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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                        <path d="M 50,10 L 55,20 L 60,10 L 65,22 L 70,15 L 72,27 L 78,22 L 77,35 L 85,33 L 80,45 L 90,47 L 82,57 L 90,62 L 80,68 L 85,78 L 73,77 L 75,87 L 63,82 L 62,92 L 52,85 L 48,92 L 38,85 L 37,92 L 27,87 L 25,77 L 15,78 L 20,68 L 10,62 L 18,57 L 10,47 L 20,45 L 15,35 L 23,33 L 22,27 L 28,22 L 30,15 L 35,22 L 40,10 L 45,20 Z M 50,30 A 20,20 0 1,1 50,70 A 20,20 0 1,1 50,30 Z"
                            fill="currentColor" />
                    </svg>
                    <div>
                        Settings and help
                    </div>
                </div>
            </div>
        </div >
    )
}