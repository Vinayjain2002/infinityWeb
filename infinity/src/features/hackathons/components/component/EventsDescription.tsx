import React from 'react'

interface EventProps{
  heading: string,
  description: string
}
const EventsDescription:React.FC<EventProps> = (props) => {
  return (
    <div>
      <div className='font-bold text-gray-900 text-sm lg:text-md mt-1'>{props.heading}</div>
     <div className='text-sm lg:text-md text-gray-500 pl-1'>{props.description}</div>
    </div>
  )
}

export default EventsDescription
