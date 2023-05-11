import React from 'react';
import CourseCardList from './CourseCardList';

interface IDummyData {
  image: string;
  title: string;
  company: string;
  completedPercentage: number;
}

const dummyData: IDummyData[] = [
  {
    image: "/img/computer-science.png",
    title: "C++ For Dummies",
    company: "CIPD",
    completedPercentage: 80,
  },
  {
    image: "/img/computer-science.png",
    title: "Python for Data Analysis",
    company: "Yorkshire",
    completedPercentage: 92,
  },
  {
    image: "/img/computer-science.png",
    title: "UX Fundamentals",
    company: "Google",
    completedPercentage: 100,
  },
];
<style>
  
</style>

const Courses = () => {
  return (
    <div className='max-w-2xl w-full'>
      <div className="flex justify-start gap-3 items-center ">

        <div className="flex justify-strt items-center py-5 relative w-full">
          <input
            className="text-sm leading-none text-left text-gray-600 pl-10 pr-4 py-4 w-full border rounded border-gray-300 outline-none placeholder:text-sm"
            type="text"
            placeholder="Search for Short Course..."
          />
          <svg
            className="absolute left-3 z-10 cursor-pointer"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
              stroke="#4B5563"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 21L15 15"
              stroke="#4B5563"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="border p-4 bg-white rounded">
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.77646 15.0024C9.81201 15.269 9.72313 15.5534 9.51872 15.7401C9.43649 15.8225 9.33883 15.8878 9.23131 15.9324C9.12379 15.977 9.00853 16 8.89213 16C8.77573 16 8.66048 15.977 8.55296 15.9324C8.44544 15.8878 8.34778 15.8225 8.26555 15.7401L4.70159 12.1761C4.60466 12.0814 4.53095 11.9655 4.48624 11.8375C4.44153 11.7095 4.42702 11.573 4.44385 11.4384V6.88795L0.186649 1.4398C0.0423205 1.25452 -0.0228034 1.01965 0.00550749 0.786498C0.0338184 0.553349 0.153263 0.340884 0.33774 0.195529C0.506606 0.0711015 0.693247 0 0.888776 0H13.3315C13.5271 0 13.7137 0.0711015 13.8826 0.195529C14.067 0.340884 14.1865 0.553349 14.2148 0.786498C14.2431 1.01965 14.178 1.25452 14.0337 1.4398L9.77646 6.88795V15.0024ZM2.70186 1.77754L6.22139 6.2747V11.1807L7.99892 12.9582V6.26582L11.5184 1.77754H2.70186Z" fill="black" />
          </svg>
        </span>
      </div>
      <div className="my-5">
        {dummyData.map((data, index) => (
          <div className='py-3' key={index}>
            <CourseCardList
              image={data.image}
              title={data.title}
              company={data.company}
              completedPercentage={data.completedPercentage}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses