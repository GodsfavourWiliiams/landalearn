import React, { useState } from 'react'
import Programs from './programs/programs';
import Courses from './courses/courses';

type Props = {}

const Tab = (props: Props) => {
    const [activeStatus, setActiveStatus] = useState(1);
    return (
        <div>
            {/* opacity-0 transition-opacity duration-150 ease-linear */}
            <div className="xl:w-full xl:mx-0 sm:block bg-white mt-5">
                <ul className="flex items-center gap-4 text-[12px]">
                    <li onClick={() => setActiveStatus(1)} className={` ${activeStatus == 1 ? "transition-all duration-500 ease-in-out rounded bg-[#EEF3FC] text-[#222222] font-bold" : "font-normal text-[#959595] cursor-pointer transition duration-500 ease-in-out transform"} flex items-center py-3 sm:px-10 px-5`}>
                        <span className="">Programs & Degrees</span>
                    </li>
                    <li onClick={() => setActiveStatus(2)} className={` ${activeStatus == 2 ? "bg-[#EEF3FC] text-[#222222] font-bold transition-all duration-1000 ease-in-out rounded" : "transition duration-1000 ease-in-out transform font-normal text-[#959595] cursor-pointer"} flex items-center py-3 sm:px-10 px-5`}>
                        <span className=" ">Short Courses</span>
                    </li>
                </ul>
            </div>
            {activeStatus == 1 &&
                <div className="w-full mt-5 transition-all duration-1000 ease-in-out" >
                    <Programs />
                </div>
            }
            {activeStatus == 2 &&
                <div className="w-full mt-5 transition-all duration-1000 ease-in-out  " >
                    <Courses />
                </div>
            }
        </div>
    )
}

export default Tab