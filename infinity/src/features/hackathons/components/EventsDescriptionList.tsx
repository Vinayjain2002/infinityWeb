import React from 'react'

interface EventDescriptionListProps{
  heading: string,
  subheading1: string,
  subheading2: string
}
const EventsDescriptionList:React.FC<EventDescriptionListProps> = (props) => {
  return (
    <div>
        <div className='font-bold text-sm lg:text-md mt-3 text-neutral-900'>{props.heading}</div>
        <ul className='mt-2'>
            <li className='text-xs md:text-sm text-gray-500'>{props.subheading1}</li>
            <li className='text-xs md:text-sm text-gray-500'>{props.subheading2}</li>
        </ul>
    </div>
  )
}

export default EventsDescriptionList
