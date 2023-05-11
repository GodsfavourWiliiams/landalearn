import Image from "next/image";
import React from "react";
import UserDropdown from "./UserDropdown";

export default function Navbar() {

  return (
    <>
    {/* Navbar */}
    <div className="z-10 bg-[#FFFFFF] md:flex-row md:flex-nowrap md:justify-start flex items-center border-b ml-0 md:ml[270px]">
      <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4 py-4">
        {/* Brand */}
        <span
          className="text-black font-bold text-base uppercase hidden md:inline-block"
          onClick={(e) => e.preventDefault()}
        >
          Learning
        </span>

        {/* User */}
        <div className="hidden md:flex">
            <UserDropdown />
        </div>
    </div>
    </div>
    {/* End Navbar */}
  </>
  );
}
