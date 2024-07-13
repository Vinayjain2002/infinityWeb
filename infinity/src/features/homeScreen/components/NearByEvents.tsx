import React from 'react'

const NearByEvents = () => {
  return (
   <div className='m-10'>
     <div className='w-full'>
      <div className='flex items-center'>
        <div>
          <p className='text-3xl font-semibold text-gray-700'>NearBy Events</p>
        </div>
        <div className='ml-5'>
          <a href="" className='text-blue-500 font-semibold'>Edit Location</a>
        </div>
      </div>

     <div className='w-full mt-8 w-full'>
      {/* here we will either displays the hackathon cards or the no data is found */}
        <div className='flex justify-center items-center flex-col'>
          <div><p className='text-2xl text-gray-700 font-medium'>No Hackathons found near you.</p></div>
          <div className='mt-3'><button className='px-5 py-2 bg-blue-500 hover:bg-blue-700 hover:text-gray-200 rounded-sm text-normal'>Browse All Hackathons</button></div>
        </div>
     </div>
    </div>
  </div>
  
  )
}

export default NearByEvents;
