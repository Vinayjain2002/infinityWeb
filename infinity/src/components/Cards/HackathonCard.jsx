import React from 'react'

const HackathonCard = () => {
  const hackathons=[{},{},{}];
  return(
   <div>
    {
      hackathons.map((hackathon)=>(
        <div className='my-5 w-full md:mr-5  w-full'>
        <div className='p-5 flex rounded-md border bg-white'>
          <div className='lg:w-1/3 w-1/3 md:w-2/5 rounded-lg bg-black'><img></img></div>
          <div className='flex flex-col ml-5'>
          <div className=''>
            <p className='lg:text-md md:text-md'>Google Ai Hackathons</p>
          </div>
          <div className='flex mt-4 space-between gap-4'>
            <button className='text-sm rounded-md bg-blue-100 px-2'>20 days left</button>
            <div className='text-sm'>Online</div>
          </div>
          <div className='flex mt-4 space-between gap-4'>
            <div className='text-sm'>$50,000 in prizes</div>
            <div className='text-sm'>11006 participants</div>
          </div>
          </div>
        </div>
      </div>
      ))
    }
   </div>
  );
}

export default HackathonCard;


