import { HamBurgerIcon, EditSquareIcon, ShareIcon, ThreeDotIcon } from "@/app/ui/icons"
import { Sidebar } from "./sidebar"

export function TopBar() {
    return (
        <div className="flex justify-between items-center m-3 ml-0 h-12">

            <button className="group relative w-10 h-10 ml-3 flex justify-center items-center rounded-full">
                <HamBurgerIcon />
                <Sidebar className="group-focus:w-77 w-77" />
            </button>

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