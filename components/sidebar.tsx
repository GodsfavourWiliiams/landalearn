import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import UserDropdown from "./UserDropdown";
import Image from "next/image";

type SidebarItem = {
  path: string;
  icon: string;
  label: string;
};

const sidebarItems: SidebarItem[] = [
  {
    path: "/dashboard",
    icon: "/svg/dashboard.svg",
    label: "Dashboard",
  },
  {
    path: "/",
    icon: "/svg/menu.svg",
    label: "Learning",
  },
];

const Sidebar: React.FC = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();

  return (
    <nav className="z-50 md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden bg-[#F6F9FD] flex flex-wrap items-center justify-between relative md:w-[270px] py-4 px-6 border border-[#E6E6E6]">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {/* Toggler */}
        <div className="flex items-center">
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H18V2H0V0ZM0 5H18V7H0V5ZM0 10H18V12H0V10Z" fill="black" />
            </svg>
          </button>
          {/* Brand */}
          <Link href="/" className="md:flex items-center justify-start md:pb-2 mr-0 hidden">
            <Image
              src="/img/logo-left.png"
              alt="Landa Logo"
              className=""
              width="80"
              height="20"
              unoptimized={true}
            />
          </Link>
          <span className="font-semibold md:hidden block">Learning</span>
        </div>

        {/* User */}
        <ul className="md:hidden items-center flex flex-wrap list-none">
          <li className="inline-block relative">
            <UserDropdown />
          </li>
        </ul>
        {/* Collapse */}
        <div
          className={
            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
            collapseShow
          }>
          {/* Collapse header */}
          <div className="md:min-w-full md:hidden block pb-4">
            <div className="flex flex-wrap">
              <div className="w-6/12">
                <Link href="/">
                  <Image
                    src="/img/logo-left.png"
                    alt="Landa Logo"
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    width="60"
                    height="10"
                    unoptimized={true}
                  />
                </Link>
              </div>
              <div className="w-6/12 flex justify-end">
                <button
                  type="button"
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  onClick={() => setCollapseShow("hidden")}>
                  <svg width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="mb-4 md:hidden">
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-2 h-12 border border-solid placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
              />
            </div>
          </form>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none mt-0 md:mt-5">
            {sidebarItems.map((item, index) => (
              <li className="items-center py-2" key={index}>
                <Link href={item.path}>
                  <span
                    className={`
                            text-xs p-2 flex hover:bg-blue-50 items-center uppercase py-3 font-bold ${router.pathname === item.path
                        ? "bg-[#DDE7F8] text-[#004CCC] hover:text-blue-600"
                        : "text-black hover:text-blueGray-500"}
                            `}
                  >
                    <Image
                      src={item.icon}
                      alt="svg Logo"
                      className={
                        ` mr-2` +
                        (router.pathname === item.path
                          ? ""
                          : "")
                      }
                      width="20"
                      height="20"
                      unoptimized={true}
                    />
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
            <div className="md:absolute bottom-0 mt-4">
              <div className="bg-[#0D0630] p-4 text-white flex items-center justify-between gap-4">
                <p className="text-sm">Find more Degrees and Short Courses</p>
                <span className="bg-white p-1">
                  <svg width="13" height="14" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.08588 3.9502L4.54988 1.4142L5.96388 0.000198364L10.9139 4.9502L5.96388 9.9002L4.54988 8.4862L7.08588 5.9502H0.499878V3.9502H7.08588Z" fill="#0D0630" />
                  </svg>
                </span>
              </div>
              <div className="flex justify-between items-center my-5">
                <span className="">Logout</span>
                <span>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 2.5C0 1.4 0.9 0.5 2 0.5H10V2.5H2V16.5H10V18.5H2C0.9 18.5 0 17.6 0 16.5V2.5ZM14.176 8.5L11.64 5.964L13.054 4.55L18.004 9.5L13.054 14.45L11.64 13.036L14.176 10.5H7.59V8.5H14.176Z" fill="black" />
                  </svg>
                </span>
              </div>

            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
