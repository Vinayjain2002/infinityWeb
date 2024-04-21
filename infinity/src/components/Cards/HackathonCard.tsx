import React from 'react'
import hacakathonImage from '../../assets/images/hackathon.png'
const HackathonCard = () => {
  return(
    <div>
  
    <div className='my-1 w-full md:mr-5'>
      <div className='p-5 flex rounded-md border bg-white'>
        <div className='max-h-24 my-auto  rounded-lg bg-black overflow-hidden'>
          <img src={hacakathonImage} className='object-fit cover h-24' />  </div>

        <div className='flex flex-col ml-5'>
          <div className=''>
            <p className='lg:text-lg xl:text-xl md:text-md font-medium'>Google Ai Hackathons</p>
          </div>
          <div className='flex mt-4 space-between gap-4'>
            <button className='text-xs md:text-sm lg:text-md rounded-md bg-blue-100 px-2'>20 days left</button>
            <div className='text-xs md:text-sm lg:text-md'>Online</div>
          </div>
          <div className='flex mt-4 space-between gap-4'>
            <div className='text-xs md:text-sm lg:text-md'>$50,000 in prizes</div>
            <div className='text-xs md:text-sm lg:text-md'>11006 participants</div>
          </div>
        </div>
      </div>
    </div>
  
</div>

  );
}

export default HackathonCard;


