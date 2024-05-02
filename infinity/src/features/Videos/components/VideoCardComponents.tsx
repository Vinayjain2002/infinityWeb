import React from 'react'
import image from '../../../assets/images/hackathon.png'
const VideoCardComponents = () => {
  return (
    <div className='mt-2'>
    <div className="h-auto w-[280px] flex justify-center">
      <div className="mx-3 my-3">
        {/* First card */}
        <div className="hover:bg-blue-200 w-full bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#" className=" w-full overflow-hidden">
            <img className="rounded-t-lg object-contain" src={image} alt="error" />
          </a>
          <div className="p-1 flex">
           <div className='mt-1'>
                <img src={image} alt="" className='w-[100px] rounded-full bg-black'/>
           </div>
           <div className='ml-2'>
                <a href="#">
                        <h5 className=" xl:text-lg lg:text-md text-sm font-bold text-gray-800 dark:text-white">Web Development</h5>
                </a>
                <p className=" text-xs font-normal text-gray-600 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>    
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default VideoCardComponents
