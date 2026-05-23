import { chatList } from "@/app/lib/data"
import { ChatItem } from "@/app/ui/chatItem"
import { AngleBracket, NavbarIcon, GearIcon } from "@/app/ui/icons"
import Image from "next/image"
import Link from "next/link"
import { NewChatIcon } from "@/app/ui/icons"

export function Sidebar({ className }: { className?: string }) {
    return (
        <div className={`relative bg-white pl-2 pt-1.75 pb-0.75 border-solid border border-gray-200 dark:bg-[#1C1C1C] dark:border-none w-80 flex flex-col justify-left h-screen rounded-r-2xl transition-all duration-300 ease-out ${className}`}>

            <nav className="relative z-20 w-full flex flex-col justify-between items-center pl-3.25 pr-4 shadow-[-28px_5px_10px_10px_rgb(255,255,255,0.99)] dark:shadow-[#1C1C1C]" >

                <div className="w-full flex justify-between items-center pr-2.75">
                    <Link className="h-12 flex w-full items-center gap-2.5"
                        href=""
                    >
                        <Image
                            src="https://www.gstatic.com/lamda/images/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg"
                            width={28}
                            height={28}
                            alt="Gemini Logo"
                        />
                        <h1 className={`font-normal dark:text-[#E0E0E0] text-[20px] text-black`}>
                            Gemini
                        </h1>
                    </Link>
                    <NavbarIcon />
                </div>

                <Link className="h-11 w-full mt-4 gap-2.5 flex items-center rounded-full cursor-pointer font-sans font-medium text-left text-[17px] text-black dark:text-[#E0E0E0] dark:focus:text-white hover:bg-[#EDEDED] focus:bg-[#EDEDED] focus:font-bold dark:hover:bg-[#2C2D2D] dark:focus:bg-[#141414]"
                    href=""
                >
                    <NewChatIcon className="w-6.5" />
                    New chat
                </Link>

            </nav >

            {/* Chat list section */}
            < div className="relative z-10 mt-3 overflow-y-auto scroll-smooth custom-scroll" >
                <details className="group flex flex-col font-[455] text-[#757575]" open>
                    <summary className="list-none flex pl-3.75">
                        Recent
                        <AngleBracket className="group-open:rotate-90 ml-2.25 w-3.25 h-3.2 fill-[#757575] mb-0.75" />
                    </summary>

                    <div className="group-not-open:hidden mr-0.75">
                        {chatList.map((item, index) => {
                            return (
                                <ChatItem key={index} text={item.title} />
                            )
                        })}
                    </div>
                </details>
            </div >

            {/* Settings and Avatar */}
            < div className="relative z-20 mb-2 pr-3 pl-3 flex justify-between items-center min-h-12 shadow-[-28px_-12px_10px_10px_rgb(255,255,255,0.99)] dark:shadow-[#1C1C1C]" >
                <div className="flex items-center font-light gap-2">
                    <Image
                        width={30}
                        height={30}
                        src="/me2.png"
                        alt="Avatar Image"
                        className="rounded-full"
                    />
                    <div className="font-medium text-[16px] dark:text-[#E0E0E0] ml-px ">
                        Sanskar Bhusal
                    </div>
                </div>
                <GearIcon className="mr-1.5" />
            </div >
        </div >
    )
}