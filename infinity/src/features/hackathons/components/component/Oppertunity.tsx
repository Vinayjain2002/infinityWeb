import React from 'react'
import image from '../../../../assets/images/hackathon.png'

interface OppertunityProps{
  name: string;
  description: string;
  mode: string;
  prizes: string;
}
// here we are goona to define the related Oppertunity
const Oppertunity:React.FC<OppertunityProps> = (props) => {
  return (
    <div className="rounded-md shadow-md">
    <div className="my-1 w-full md:mr-5">
      <div className="px-4 py-3 flex rounded-md border bg-white">
        <div className="max-h-13 my-auto  rounded-lg bg-black overflow-hidden">
          <img src={image} className="object-fit cover h-24" />
        </div>
        <div className="flex flex-col ml-5">
          <div className="">
            <p className="lg:text-lg xl:text-xl md:text-md font-medium">
              {props.name}
            </p>
            <p className="lg:text-sm xl:text-md  text-xs font-normal">
              {props.description}
            </p>
          </div>
          <div className="flex mt-2 space-between gap-4">
            {/* <button className='text-xs md:text-sm lg:text-md rounded-md bg-blue-100 px-2'>Days Left: {props.daysLeft}</button> */}
            <div className="text-xs md:text-sm lg:text-md font-medium">
              Mode: <span className='font-normal'>{props.mode}</span>
            </div>
            <div className="text-xs md:text-sm lg:text-md font-medium">
              Prizes: <span className='font-normal'>{props.prizes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Oppertunity
