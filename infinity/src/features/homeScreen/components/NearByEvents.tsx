import React from 'react'

const NearByEvents = () => {
  return (
   <div className='mb-5  ml-5 lg:ml-10 md:ml-7'>
     <div className='w-full'>
      <div className='flex items-center'>
        <div>
          <p className='xl:text-2xl lg:text-xl text-lg font-semibold text-gray-700'>NearBy Events</p>
        </div>
        <div className='xl:ml-3 mt-1 ml-2'>
          <a href="" className='text-blue-500 font-semibold xl:text-md lg:text-sm text-xs'>Edit Location</a>
        </div>
      </div>

     <div className='w-full mt-8 w-full'>
      {/* here we will either displays the hackathon cards or the no data is found */}
        <div className='flex justify-center items-center flex-col'>
          <div><p className='xl:text-2xl lg:text-xl text-lg text-gray-700 font-medium'>No Hackathons found near you.</p></div>
          <div className='mt-3'><button className='xl:px-5 px-3 py-2 bg-blue-500 text-white xl:text-lg lg:text-md text-sm font-semibold hover:bg-blue-600 focus:outline-none rounded-sm'>Browse All Hackathons</button></div>
        </div>
     </div>
    </div>
  </div>
  
  )
}

export default NearByEvents;
