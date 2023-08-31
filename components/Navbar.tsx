"use client";

import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader } from "./ui/card";
import { DropdownHamMenu } from "./DropDownMenu";
import ThemeMenuButton from "./ThemeButton";

export default function Navbar() {

    const [top, setTop] = useState(5);

    useEffect(() => {
      const handleScroll = () => {
        const currentTop = window.scrollY;
        if (currentTop > 0) {
          setTop(-16);
        } else {
          setTop(5);
        }
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <div className="flex justify-center items-center transition-all">
        <Card className={`h-16 top-5 w-[95%] z-50 fixed flex items-center justify-between transition-all`}>
          <CardHeader>
            <h1 className="font-bold text-2xl tracking-widest cursor-pointer">
              IETE
            </h1>
          </CardHeader>

          <CardContent className="gap-2 flex items-center justify-center">
            <ThemeMenuButton />
            <DropdownHamMenu />
          </CardContent>
        </Card>
      </div>
    );
}
