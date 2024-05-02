import React from 'react'
import infinity from '../../../assets/images/infinity.png'
const HostHackathonCard = () => {
  return (
    <div className='w-full border shadow-md hover:shadow-lg rounded-md hover:border-text-blue'>
      <div className='bg-white px-5 py-3 rounded-lg'>
        <div><img src={infinity} className='w-16'/></div>
        <div className='my-5'>
            <div className='text-lg'><p>Get your tools in the hands of developers around the world with Devpost.</p></div>
        </div>
        <div>
        <div className='my-2'>
            <button className='py-2 px-4 border bg-blue-500 hover:text-white hover:bg-blue-700 rounded-md'>Host Public Hackathon</button></div>
        </div>
      </div>
    </div>
  )
}

export default HostHackathonCard
