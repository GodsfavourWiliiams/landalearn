import React from 'react';

interface ProgressBarProps {
  progressPercentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progressPercentage }) => {
  return (
    <div className='h-1 w-full max-w-[160px] bg-[#CCCCCC] rounded overflow-hidden'>
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full ${
          progressPercentage < 70 ? 'bg-red-600' : 'bg-[#004CCC]'
        }`}
      ></div>
    </div>
  );
};

export default ProgressBar;
