import React from 'react'

const VideoNavBar = () => {
  return (
    <div>
      <div>
      <div className='w-full bg-dark-blue'>
            {/* here we are going to define the text and the other stuff */}
            <div className='flex flex-row justify-center py-10 md:px-0 px-5 w-full md:w-4/5 mx-auto'>
                <div className='items-center text-md md:text-lg lg:text-xl xl:text-3xl text-white font-normal w-2/3 md:w-5/6 lg:w-2/3 xl:w-5/6'>Share your Experience Now</div>
                <div className='flex justify-center hover:white text-xs md:text-sm xl:text-md font-semibold text-white w-1/3 md:w-1/6 lg:w-1/3 xl:w-1/6'><button className='bg-white hover:bg-light-blue text-dark-blue md:px-5 px-2 md:py-2 py-1 rounded-md'>Add Video</button></div>
            </div>
      </div>
    </div>
    </div>
  )
}

export default VideoNavBar
