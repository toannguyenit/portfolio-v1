import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

// Components
import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-center h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav containerStyles='flex flex-col iteams-center gap-y-6' linkStyles='text-2xl'/>
            <Socials containerStyles='flex gap-x-4' iconsStyles='text-2xl' />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
