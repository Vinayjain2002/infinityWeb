import React from 'react'

interface EventProps{
  heading: string,
  description: string
}
const EventsDescription:React.FC<EventProps> = (props) => {
  return (
    <div>
      <div className='font-bold text-gray-900 text-sm lg:text-md mt-3'>{props.heading}</div>
     <div className='text-xs lg:text-md text-gray-500 mt-3'>{props.description}</div>
    </div>
  )
}

export default EventsDescription
