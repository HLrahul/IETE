"use client";

import ThemeMenuButton from "./ThemeButton";
import { DropdownHamMenu } from "./DropDownMenu";

export default function Navbar() {
    return (
        <div className="h-16 w-full top-0 z-50 flex items-center justify-between px-10">
            <div>
                <h1 className="font-bold text-2xl tracking-widest cursor-pointer">
                    IETE
                </h1>
            </div>

            <div className="flex gap-2 items-center justify-center">
                <ThemeMenuButton />
                <DropdownHamMenu />
            </div>
        </div>
    );
}
