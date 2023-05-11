import React, { useRef, useState } from "react";
import Image from "next/image";

const UserDropdown: React.FC = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState<Boolean>(false);

  return (
    <div className="flex-col md:flex-row list-none items-center md:flex">
            <div className="items-center flex">
                <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" onClick={(e) => setDropdownPopoverShow(!dropdownPopoverShow) }>
                    <Image
                        alt="dd"
                        className="w-full rounded-full align-middle border-none cursor-pointer"
                        width={100}
                        height={100}
                        src="/img/Ellipse 2.png"
                        unoptimized={true}
                    />
                </span>
            </div>
            <div
                className={`
                ${dropdownPopoverShow ? "md:right-5 right-0 bg-white" : "hidden"}
                "text-base z-50 py-2 text-left rounded shadow-lg w-32 absolute top-24  transition-all duration-200 ease-in-out"
                `}
            >
                <a
                href="#"
                className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                }
                onClick={(e) => e.preventDefault()}
                >
                Profile
                </a>
                <a
                href="#"
                className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                }
                onClick={(e) => e.preventDefault()}
                >
                Settings
                </a>
            </div>
        </div>
  );
};

export default UserDropdown;
