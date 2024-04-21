import React from 'react'

const NearByEvents = () => {
  return (
   <div className='mx-10 mb-7'>
     <div className='w-full flex'>
    <div className='mt-5  w-4/5'>
      <div className='flex items-center'>
        <div>
          <p className='text-3xl font-semibold text-gray-700'>NearBy Events</p>
        </div>
        <div className='ml-5'>
          <a href="" className='text-blue-500 font-semibold'>Edit Location</a>
        </div>
      </div>

     <div className='w-full  mt-8 w-full'>
      {/* here we will either displays the hackathon cards or the no data is found */}
        <div className='flex justify-center items-center flex-col'>
          <div><p className='text-2xl text-gray-800 font-medium'>No Hackathons found near you.</p></div>
          <div className='mt-3'><button className='px-5 py-2 bg-blue-500 hover:bg-blue-700 text-normal'>Browse All Hackathons</button></div>
        </div>
     </div>
    </div>
  </div>
   </div>
  
  )
}

export default NearByEvents;
