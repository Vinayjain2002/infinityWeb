import React from 'react'

const EducationCard = () => {
  return (
    <div className='mt-2'>
      <div className='rounded-md flex border px-3 py-2'>
            <div className='w-20 bg-black rounded-md'>
                <img></img>
            </div>
            <div className='ml-5'>
                <p className='text-xl font-bold'>Guru Jambeshwar University</p>
                <p className='text-sm font-semibold text-gray-800'>Bachelor of technology</p>
                <p className='text-sm text-gray-500'>2021-2025</p>
            </div>
      </div>
    </div>
  )
}

export default EducationCard
