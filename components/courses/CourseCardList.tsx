import React from "react";
import Image from "next/image";
import ProgressBar from "../progressBar";

interface CourseCardListProps {
  image: string;
  title: string;
  company: string;
  completedPercentage: number;
}

const CourseCardList: React.FC<CourseCardListProps> = ({
  image,
  title,
  company,
  completedPercentage,
}) => {
  return (
    <>
      <div className="flex flex-col break-words bg-[#FAFAFA] border border-[#E6E6E6] p-3 animate-fade-in-out md:animate-fade-out transition-all duration-300 ease-out">
        <div className="flex items-center justify-between sm:flex-row flex-col">
          <div className="flex items-center w-full gap-4">
            <div className="relative w-auto">
              <Image src={image} alt={title} className="w-[60px]" width={10} height={10} unoptimized={true} />
            </div>
            <div className="w-full flex sm:flex-col flex-row items-center sm:items-stretch justify-between" >
              <div className="flex items-start flex-col">
                 <span className="text-[#004CCC] text-sm">{company}</span>
                <span className="font-bold text-base text-[#222222]">
                  {title}
                </span>
              </div>
             
              <div className="text-[11px] text-[#222222] flex items-center sm:flex-row flex-col gap-2">
                <ProgressBar progressPercentage={completedPercentage} />
                <span className="font-medium">{completedPercentage}% completed</span>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-fit sm:pt-0 pt-4">
            {completedPercentage === 100 ?

              <span className="p-2 rounded-full font-bold text-[11px] bg-[#C8EED3] text-[#24753A]">Completed</span>
              :
              <button className="bg-[#004CCC] text-white py-3 px-6 w-full">Continue</button>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCardList;
