import { HamBurgerIcon } from "./icons"

export function Sidebar({ className }: { className?: string }) {
    return (
        <div className={`bg-[#F0F4F9] border-solid border border-gray-200 fixed top-0 left-0 flex justify-left w-0 h-screen rounded-r-2xl transition-all duration-400 ease-out overflow-hidden ${className}`}>
            {/* <HamBurgerIcon className="mt-5.75 ml-8.25 w-fit" /> */}
        </div>
    )
}