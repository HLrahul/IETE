import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownHamMenu() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex-col gap-[3px]">
            <span className="h-[2px] w-5 bg-current"></span>
            <span className="h-[2px] w-5 bg-current"></span>
            <span className="h-[2px] w-5 bg-current"></span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <Link href="/">
            <DropdownMenuItem>Home</DropdownMenuItem>
          </Link>
          <Link href="/about">
            <DropdownMenuItem>About</DropdownMenuItem>
          </Link>
          <Link href="/commity-members">
            <DropdownMenuItem>Commitee Executive</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link href="/events">
            <DropdownMenuItem>Events</DropdownMenuItem>
          </Link>
          <Link href="/membership">
            <DropdownMenuItem>Membership</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />

          <Link href="/contact-us">
            <DropdownMenuItem>Contact Us</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    );
}
