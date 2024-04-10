import React from 'react'
import HackathonCard from './HackathonCard';

const NearByEvents = () => {
  return (
    <div className='w-full flex items-center justify-center'>
    <div className='mt-5  w-4/5'>
      <div className='flex items-center'>
        <div>
          <p className='font-bold text-3xl'>NearBy Events</p>
        </div>
        <div className='ml-5'>
          <a href="" className='text-blue'>Edit Location</a>
        </div>
      </div>

     <div className='w-full'>
        Hackathons
     </div>
    </div>
  </div>
  
  )
}

export default NearByEvents;
