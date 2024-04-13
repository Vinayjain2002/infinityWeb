import React from 'react'

const EventsDescriptionList = () => {
  return (
    <div>
        <div className='font-bold text-sm lg:text-md mt-3 text-neutral-900'>Time Limit:</div>
        <ul className='mt-2'>
            <li className='text-xs md:text-sm text-gray-500'>Round 1 (MCQ): 15 minutes</li>
            <li className='text-xs md:text-sm text-gray-500'>Round 2 (Coding): 1 hour (specific duration will be announced based on problem complexity)</li>
        </ul>
    </div>
  )
}

export default EventsDescriptionList
