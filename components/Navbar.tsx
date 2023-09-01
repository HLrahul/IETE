"use client";

import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader } from "./ui/card";
import { DropdownHamMenu } from "./DropDownMenu";
import ThemeMenuButton from "./ThemeButton";

export default function Navbar() {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center transition-all">
      <Card
        style={{ top: scrolledDown ? -100 : 10 }}
        className={`h-16 w-[95%] z-50 fixed flex items-center justify-between transition-all`}
      >
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
