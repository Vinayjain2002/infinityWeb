import React from 'react'
import hackathonImage from '../../../assets/images/hackathon.png';

const EventWidget = () => {
  return (
    <div>
      <div className='flex'>
            <div className='bg-black w-1/5 rounded-md overflow-hidden  '><img  src={hackathonImage}/></div>
                <div className='flex-col px-2'>
                    <div className='text-md xl:text-lg text-gray-800'>Impression</div>
                <div className='text-xs md:text-sm text-gray-600'>2,472</div>
            </div>
      </div>
    </div>
  )
}

export default EventWidget;
