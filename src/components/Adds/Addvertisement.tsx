import React from 'react'
import Banner from '../../assets/images/hackathon.png'
const Addvertisement = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
    >
      <div className="max-w-md md:w-sm sm:w-sm p-3 bg-white rounded-lg">
        <div className='flex flex-row mb-5 space-x-5'>
          <div className='w-1/3'>
            <img
              src={Banner}
              alt="Ad"
              className=" w-full rounded-lg cover"
            />
          </div>
          <div>
          <p className="text-gray-800 text-gray-800 font-semibold">Description of the ad goes here</p>
          <p className="text-gray-600 text-sm"> this is going to be the Description of the best in the domain of the hackathons</p>
          </div>
        </div>
        <div className="flex justify-between px-8">
          <button
            className="w-1/3 py-2 bg-blue-500 text-white rounded-lg mr-2 hover:bg-blue-800">
            Apply Now
          </button>
          <button className="w-1/3 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg" >
            Later
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addvertisement
