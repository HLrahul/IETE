'use client';

import { Card } from "./ui/card";
import { Avatar } from "./ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type CollegeCardProps = {
    key: string;
    avatarSrc: string;
    collegeName: string;
}

export const CollegeCard = (props: CollegeCardProps) => {
    const { avatarSrc, collegeName } = props;

    return (
        <Card className="p-5 h-auto w-auto flex items-center justify-center gap-5">
            {/* <Avatar>
                <AvatarImage className="object-center object-cover"></AvatarImage>
                <AvatarFallback>I</AvatarFallback>
            </Avatar> */}
    
            <p className="font-bold whitespace-nowrap">{ collegeName }</p>
        </Card>
    )
}
