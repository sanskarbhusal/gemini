export function HamBurgerIcon({ className, htmlFor }: { className?: string, htmlFor?: string }) {
    return (
        <label className={`w-9.75 h-9.75 flex items-center rounded-full hover:bg-gray-300/43 transition-colors ${className}`}
            htmlFor={htmlFor}
        >
            <svg
                height="18px"
                width="18x"
                viewBox="0 -960 960 960"
                className={`fill-[#444747] dark:fill-[#C4C7C5]`}>
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </ svg>
        </label>
    )
}

export function EditSquareIcon({ className }: { className?: string }) {
    return (
        <svg
            height="19px"
            width="19px"
            viewBox="0 -960 960 960"
            className={`fill-[#444747] dark:fill-[#C4C7C5] ${className}`} >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
        </svg>
    )
}

export function ShareIcon({ className }: { className?: string }) {
    return (
        <svg
            id="share-button"
            height="19.5px"
            width="19.5px"
            viewBox="0 -960 960 960"
            className={`fill-[#444747] dark:fill-[#C4C7C5] ${className}`} >
            <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm508.5-291.5Q720-743 720-760t-11.5-28.5Q697-800 680-800t-28.5 11.5Q640-777 640-760t11.5 28.5Q663-720 680-720t28.5-11.5ZM680-200ZM200-480Zm480-280Z" />
        </svg>
    )
}

export function ThreeDotIcon({ className }: { className?: string }) {
    return (
        <svg
            className="dark:fill-white"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
        >
            <g transform="translate(24) rotate(90)">
                <circle cx="1" cy="1" r="1.3" transform="translate(5 11)" />
                <circle cx="1" cy="1" r="1.3" transform="translate(11 11)" />
                <circle cx="1" cy="1" r="1.3" transform="translate(17 11)" />
            </g>
        </svg>
    )
}

export function AngleBracket({ className, htmlFor }: { className?: string, htmlFor?: string }) {
    return (
        <label htmlFor={htmlFor}>
            <svg className={className} viewBox="15 14 20 20">
                <path transform="scale(2)" d="M10.25 16.25C10.1493 16.2466 10.0503 16.2227 9.95921 16.1797C9.86807 16.1367 9.78668 16.0756 9.72001 16C9.57956 15.8594 9.50067 15.6688 9.50067 15.47C9.50067 15.2713 9.57956 15.0806 9.72001 14.94L12.72 11.94L9.72001 8.94002C9.66069 8.79601 9.64767 8.63711 9.68277 8.48536C9.71786 8.33361 9.79933 8.19656 9.91586 8.09322C10.0324 7.98988 10.1782 7.92538 10.3331 7.90868C10.4879 7.89198 10.6441 7.92391 10.78 8.00002L14.28 11.5C14.4205 11.6407 14.4994 11.8313 14.4994 12.03C14.4994 12.2288 14.4205 12.4194 14.28 12.56L10.78 16C10.7133 16.0756 10.6319 16.1367 10.5408 16.1797C10.4497 16.2227 10.3507 16.2466 10.25 16.25Z" />
            </svg>
        </label>
    )
}