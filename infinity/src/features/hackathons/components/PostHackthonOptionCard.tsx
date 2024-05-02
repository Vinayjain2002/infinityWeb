import React from 'react'
import image from '../../../assets/images/hackathon.png'

const PostHackthonOptionsCard= () => {
  return (
    <div>
      <div className='border border-dark-blue shadow-lg rounded-md min-w-md max-w-md px-3 py-5'>
        <div className='w-20 rounded-md  overflow-hidden'>
            <img src={image} alt="" className='w-20'/>
        </div>
        <div className='mt-3 space-y-5'>
            <p className='text-3xl text-gray-800'>Online hackathons for companies</p>
            <p className='text-lg text-gray-700'>Reach developers globally. Get project management and marketing support.</p>
        </div>
        <div className='mt-5'>
            <button className='px-3 py-2 border bg-blue-500 text-white'>Host Online Hackathon</button>
        </div>
      </div>
    </div>
  )
}

export default PostHackthonOptionsCard;
