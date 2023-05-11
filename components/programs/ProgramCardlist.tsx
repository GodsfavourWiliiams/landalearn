import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import ProgressBar from "../progressBar";

interface ProgramCardListProps {
  image: string;
  course: string;
  school: string;
  status: string;
}

const ProgramCardList: React.FC<ProgramCardListProps> = ({
  image,
  course,
  school,
  status,
}) => {
  return (
    <>
      <div className="flex flex-col break-words bg-[#FAFAFA] border border-[#E6E6E6] p-4 animate-fade-in-out sm:animate-fade-in transition-all duration-300 ease-in">
        <div className="flex sm:items-center items-start justify-between flex-col sm:flex-row gap-3">
          <div className="flex w-full gap-4 items-start sm:items-center flex-col sm:flex-row">
            <div className="">
              <Image src={image} alt={course} className="w-[60px]" width={10} height={10} unoptimized={true} />
            </div>
            <div className="relative w-full max-w-full flex flex-col gap-2 sm:gap-0" >
              <span className="text-[#004CCC] text-sm">{school}</span>
              <span className="font-bold text-base text-[#222222]">
                {course}
              </span>
            </div>
          </div>
          <div className="flex items-center">
              <span className={` ${status === "ongoing" ? " text-[#FFA620] bg-[#FFE6C3]" : "bg-[#C8EED3] text-[#24753A]"} p-2 rounded-full font-bold text-[11px] mr-2 `}>Completed</span>
                {status === "ongoing"  && 
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.87994 0L-6.10352e-05 1.88L6.10661 8L-6.10352e-05 14.12L1.87994 16L9.87994 8L1.87994 0Z" fill="#222222"/>
                    </svg>
                }
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramCardList;
