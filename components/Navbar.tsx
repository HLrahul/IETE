import { PiTriangleBold } from "react-icons/pi";
 
import { Card, CardContent, CardHeader } from "./ui/card";
import { DropdownHamMenu } from "./DropDownMenu";
import ThemeMenuButton from "./ThemeButton";

export default function Navbar() {

  return (
    <div className="flex justify-center items-center transition-all">
      <Card
        className={`h-16 w-[95%] top-5 z-50 fixed flex items-center justify-between transition-all`}
      >
        <CardHeader>
          <div className="flex gap-2 items-center justify-center">
              <PiTriangleBold size={28} className="rotate-infinite p-0 m-0" />
            <h1 className="font-bold text-2xl tracking-widest cursor-pointer">
              IETE
            </h1>
          </div>
        </CardHeader>

        <CardContent className="gap-2 flex items-center justify-center">
          <ThemeMenuButton />
          <DropdownHamMenu />
        </CardContent>
      </Card>
    </div>
  );
}
