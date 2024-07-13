import React from 'react'
import image from '../../assets/images/hackathon.png'

interface BootCardProps{
    imageUrl: string,
    name: string,
    description: string,
    duration: string,
    daysLeft: string,
    mode: string,
    entryFee: string,
    techStack: string[]
}
const BootCampCard:React.FC<BootCardProps> = (props) => {
  return (
    <div>
        <div className='my-1 w-full md:mr-5'>
            <div className='p-5 flex rounded-md border bg-white'>
                <div className='max-h-24 my-auto  rounded-lg bg-black overflow-hidden'>
                    <img src={image} className='object-fit cover h-24' /> 
                </div>

                <div className='flex flex-col ml-5 w-4/5'>
                    <div className='w-full'>
                        <p className='lg:text-xl xl:text-2xl md:text-lg font-medium'>{props.name}</p>
                        <p className='text-sm  font-normal text-gray-800'>{props.description}</p>
                    </div>
                    <div className=' mt-1 flex justify-start w-full gap-6 '>
                        <div className=''>
                            <div className='text-xs md:text-sm lg:text-md font-semibold'>Mode: <span className='text-gray-700 font-normal'>{props.mode}</span></div>
                            <div className='text-xs md:text-sm lg:text-md font-semibold'>Duration: <span className='text-gray-700 font-normal'>{props.duration}</span></div>
                        </div>
                        <div className=''>
                            <div className='text-xs md:text-sm lg:text-md font-semibold'>Days left: <span className='text-gray-700 font-normal'>{props.daysLeft}</span></div>
                            <div className='text-xs md:text-sm lg:text-md font-semibold'>Entry Fee: <span className='text-gray-700 font-normal'>{props.entryFee}</span></div>
                        </div>
                    </div>
                                
                    <div className='flex mt-4 space-between gap-4'>
                    {props.techStack.map((techstack) => (
                        <button key={techstack} className='text-xs rounded-md bg-blue-100 py-1 px-2'>
                            {techstack}
                        </button>
                    ))}
                    </div>
                </div>
            </div>
            
        </div>
  
    </div>
  )
}

export default BootCampCard
