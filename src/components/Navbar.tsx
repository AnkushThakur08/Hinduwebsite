"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { toggleLanguage } = useLanguage();
  return (
    <div className={cn("fixed top-0 inset-x-0 z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex flex-row justify-between w-full">
          <div>
            <Image src={"/courses/hindu-logo.png"} width={40} height={40} alt={"logo"} className="flex-shrink-0 rounded-md shadow-2xl" />
          </div>

          <div className="flex flex-row justify-around gap-28">
            <Link href={"/"}>
              <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
            </Link>
            <Link href={"/kaal-sarp-puja"}>
              <MenuItem setActive={setActive} active={active} item="Kaal Sarp Puja"></MenuItem>
            </Link>

            <MenuItem setActive={setActive} active={active} item="Trimbakeshwar Puja List">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/narayan-nagbali-puja">Narayan Nagbali Puja</HoveredLink>
                <HoveredLink href="/pitra-dosh-puja">Pitra Dosh Puja</HoveredLink>
                <HoveredLink href="/maha-mrityunjaya-puja">Mahamrutunjay Jaap Puja</HoveredLink>
                <HoveredLink href="/rudrabhishek-puja">Rudrabhishek Puja</HoveredLink>
              </div>
            </MenuItem>

            <Link href={"/contact"}>
              <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
            </Link>

            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" onChange={() => toggleLanguage()} />
              <div className="relative w-11 h-6 bg-white rounded-full dark:bg-gray-700  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-900"></div>
            </label>
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;
