"use client";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import React from "react";
import kurdsubLogo from "@/public/kurdsub.svg";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { navlinks } from "@/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { IoNotifications } from "react-icons/io5";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

export default function Navbar() {
  return (
    <div className=" md:flex md:w-full md:flex-row-reverse md:items-center md:justify-between md:border-b-2 md:border-[#313133] md:px-16 md:py-3 md:shadow-md md:shadow-black">
      <NavigationMenu>
        <NavigationMenuList className="hidden gap-2 text-[#919193]  md:flex md:flex-row-reverse">
          <Image alt="logo" src={kurdsubLogo} className="mx-4" />
          {navlinks.map((navlink, index) => (
            <React.Fragment key={index}>
              {navlink.sublinks.length === 0 ? (
                <Link
                  href=""
                  className="transition-all md:flex md:items-center md:justify-center md:rounded-full md:px-3 md:py-3 md:hover:bg-[#313133]"
                >
                  {navlink.title}
                </Link>
              ) : (
                <Popover>
                  <PopoverTrigger className="transition-all md:flex md:items-center md:justify-center md:rounded-full md:px-3 md:py-3 md:hover:bg-[#313133] ">
                    <span className="mt-2">
                      <MdKeyboardArrowDown />
                    </span>
                    <span>{navlink.title}</span>
                  </PopoverTrigger>
                  <PopoverContent className=" border-[#313133] bg-background p-2 py-0 md:w-full md:shadow-md md:shadow-black">
                    <ul className="flex flex-col items-end py-2">
                      {navlink.sublinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          className="rounded-md text-[#919193] transition-all md:flex md:w-full md:items-center md:justify-center md:p-2 md:hover:bg-[#313133]"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
              )}
            </React.Fragment>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex w-1/3 flex-row gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="relative">
          <Badge className=" absolute -right-2 -top-2 z-30 flex w-[0.2px] items-center justify-center bg-[#30A5F5] text-white">
            1
          </Badge>
          <div className=" flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#313133] bg-[#212122]">
            <IoNotifications size="20" />
          </div>
        </div>
        <Input className=" w-1/2" placeholder="لێرە بگەڕێ" />
      </div>
    </div>
  );
}
