import Image from "next/image";
import React from "react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const routes = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Collborations",
      href: "#collborations",
    },
  ];
  return (
    <>
      <header className="flex items-center justify-between p-[20px] bg-black">
        <div>
          <a href="#home">
            <Image
              src="/assets/logo.png"
              alt="Irfan Malik"
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="hidden md:block">
            <InteractiveHoverButton>Let's Talk.</InteractiveHoverButton>
          </div>

          <Sheet>
            <SheetTrigger>
              <div className="group relative z-20 cursor-pointer overflow-hidden rounded-full border bg-white px-6 py-2 transition-colors duration-300 hover:bg-black">
                <div className="flex items-center justify-center transition-all duration-300 group-hover:-translate-x-12 group-hover:opacity-0">
                  <Menu className="text-black" />
                </div>

                <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <Menu className="text-white" />
                </div>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetContent>
                <nav className="h-full flex flex-col items-center justify-center gap-[20px]">
                  {routes.map((route, i) => (
                    <a
                      className="relative text-[30px] font-medium transition-all after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                      key={i}
                      href={route.href}
                    >
                      {route.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};

export default Header;
