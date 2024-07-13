import React from 'react'
import image from '../../assets/images/hackathon.png'

interface FestCardProps{
    imageUrl: string,
    festName: string,
    description: string,
    daysLeft: string,
    entryFee: string,
    location: string,
    tags: string[]
}
const FestCard:React.FC<FestCardProps> = (props) => {
  return (
    <div>
      
    <div className='my-1 w-full md:mr-5'>
      <div className='p-5 flex rounded-md border bg-white'>
        <div className='max-h-24 my-auto  rounded-lg bg-black overflow-hidden'>
          <img src={image} className='object-fit cover h-24' />  </div>

        <div className='flex flex-col ml-5'>
          <div className=''>
            <p className='lg:text-lg xl:text-xl md:text-md font-medium'>{props.festName}</p>
            <p className='text-sm mt-1 font-normal text-gray-800'>{props.description}</p>
          </div>
          <div className='flex mt-4 space-between gap-4'>
            <button className='text-xs md:text-sm lg:text-md rounded-md bg-blue-100 px-2'>{props.daysLeft}</button>
            <div className='text-xs md:text-sm lg:text-md font-semibold'>Entry Fee: <span className='text-gray-700 font-normal'>{props.entryFee}</span></div>
            <div className='text-xs md:text-sm lg:text-md font-semibold'>Location: <span className='text-gray-700 font-normal'>{props.location}</span></div>
          </div>
          <div className='flex mt-4 space-between gap-4'>
            {props.tags.map((tag) => (
                <button key={tag} className='text-xs md:text-sm lg:text-md rounded-md bg-blue-100 px-2'>
                    {tag}
                </button>
            ))}
        </div>

        </div>
      </div>
    </div>
  
    </div>
  )
}

export default FestCard
