import Image from "next/image"

export function TopBar() {
    return (
        <div className="flex justify-between items-center m-3 ml-0 h-12">

            <div className="w-10 h-10 ml-3 flex justify-center items-center rounded-full hover:bg-gray-200/60">
                <svg
                    id="menu-button"
                    height="18px"
                    width="18x"
                    viewBox="0 -960 960 960"
                    className="fill-[#444747] dark:fill-[#C4C7C5]">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
            </div>

            <div className="p-2 flex gap-4.75 justify-between items-center">

                <svg
                    id="new-chat-button"
                    height="19px"
                    width="19px"
                    viewBox="0 -960 960 960"
                    className="fill-[#444747] dark:fill-[#C4C7C5]">
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                </svg>

                <svg
                    id="share-button"
                    height="19.5px"
                    width="19.5px"
                    viewBox="0 -960 960 960"
                    className="fill-[#444747] dark:fill-[#C4C7C5]">
                    <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm508.5-291.5Q720-743 720-760t-11.5-28.5Q697-800 680-800t-28.5 11.5Q640-777 640-760t11.5 28.5Q663-720 680-720t28.5-11.5ZM680-200ZM200-480Zm480-280Z" />
                </svg>

                <svg
                    id="three-dot"
                    height="23px"
                    width="23px"
                    viewBox="0 -960 960 960"
                    className="fill-[#444747] dark:fill-[#C4C7C5]">
                    <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                </svg>

                <img
                    src="/me2.png"
                    alt="Avatar Image"
                    className="rounded-full h-8.5 w-8.5"
                />
            </div>
        </div>
    )
}

export function SideBar() {
    return (
        <div>

        </div>
    )
}