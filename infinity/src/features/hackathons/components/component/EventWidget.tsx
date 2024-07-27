import React from 'react'
import hackathonImage from '../../../../assets/images/hackathon.png';

interface EventsProps{
  imageUrl: string,
  heading: string,
  value: string
}
const EventWidget:React.FC<EventsProps> = (props) => {
  return (
    <div className='pl-5'>
      <div className='flex '>
            <div className='bg-black  rounded-md overflow-hidden  h-12'><img  src={hackathonImage} className='h-12'/></div>
                <div className='flex-col px-2'>
                    <div className='text-md xl:text-lg  font-medium text-gray-700'>{props?.heading}:</div>
                    <div className='text-xs xl:text-sm text-gray-600'>{props?.value}</div>
            </div>
      </div>
    </div>
  )
}

export default EventWidget;
