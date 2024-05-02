import React from 'react'
import image from '../../../assets/images/hackathon.png'

const PrevHostedHackathonDetails = () => {
  return (
    <div className='mx-20'>
      {/* here we are gonna to define the data of the Posting Hackathon */}
      <div className='flex flex-row  p-5'>
        <div className='flex flex-col space-y-2 w-1/2'>
            <p className='text-sm font-semibold text-blue-300'>DEVELOPER COMMUNITY</p>
            <p className='text-2xl'>Reach an experienced, global community</p>
            <p className=' font-gray-700 text-md'>Get access to an engaged worldwide community of technology professionals using the latest tools, languages, and frameworks.</p>
            <div className='font-gray-500 text-sm space-y-2'>
                <p>4 million+ users</p>
                <p>84 countries represented</p>
                <p>220,000+ project submissions</p>
            </div>
        </div>
        <div className='flex justify-center'>
            <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PrevHostedHackathonDetails;
