import React, { ReactNode } from "react";
// components
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

interface Props {
  children: ReactNode;
}

const Index = ({ children }: Props) => {
  return (
    <>
      <Sidebar />
      <main className=" relative">
        <Navbar />
        <div className="p-4 md:px-10 w-full ml-0 md:ml-[270px]">
          {children}
        </div>
      </main>
    </>
  );
}

export default Index;
