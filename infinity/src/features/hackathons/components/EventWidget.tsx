import React from 'react'
import hackathonImage from '../../../assets/images/hackathon.png';

interface EventsProps{
  imageUrl: string,
  eventName: string,
  eventNo: string
}
const EventWidget:React.FC<EventsProps> = (props) => {
  return (
    <div>
      <div className='flex xl:mx-3'>
            <div className='bg-black  rounded-md overflow-hidden  h-12'><img  src={hackathonImage} className='h-12'/></div>
                <div className='flex-col px-2'>
                    <div className='text-md xl:text-lg text-gray-800'>{props.eventName}</div>
                    <div className='text-xs xl:text-sm text-gray-600'>{props.eventNo}</div>

            </div>
      </div>
    </div>
  )
}

export default EventWidget;
