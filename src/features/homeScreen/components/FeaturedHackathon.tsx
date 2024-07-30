// FeaturedHackathon.tsx
import React from 'react';
import image from '../../../assets/images/hackathon.png'

interface FeaturedHackathonProps {
  picture: string[];
  name: string;
  prizes: string;
  lastDateToApply: Date;
  mode: string;
}

const FeaturedHackathon: React.FC<FeaturedHackathonProps> = ({
  picture,
  name,
  prizes,
  lastDateToApply,
  mode,
}) => {
  return (
    <div className="w-full border bg-white shadow-md rounded-md px-4 py-2">
      <div className="flex items-center">
        <div className="w-12 h-12 mr-4">
          <img src={image} alt="image of the Hackathon" className="w-full h-full object-cover rounded-md" />
        </div>
        <div className="flex-1">
          <p className="lg:text-md xl:text-lg md:text-md text-sm text-gray-700 font-medium">{name}</p>
          <div className="w-4/5  flex justify-between text-xs md:text-sm xl:text-md text-gray-600">
            <p className='rounded-sm  font-medium'>Date: <span className='font-normal'>{String(lastDateToApply.toLocaleDateString())}</span></p>
            <p className='rounded-sm  font-medium'>Mode: <span className='font-normal'>{mode}</span></p>
            <p className='rounded-sm font-medium'>Prizes: <span className='font-normal'>{prizes}</span></p>
          </div>
        </div>
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#455A64">
            <path d="M19 12H5M12 5L19 12L12 19" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHackathon;