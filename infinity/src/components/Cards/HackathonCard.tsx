import React from 'react'
import hacakathonImage from '../../assets/images/hackathon.png'
import image from '../../assets/images/hackathon.png'

interface HackathonData  {
  id: string;
  postedBy: string;
  name: string;
  location: string;
  level: string;
  prizes: string;
  entryFee: number;
  venue: string;
  dateOfPosting: Date;
  problemStatement: string[];
  pictures: string[];
  mode: string;
  lastDateToApply: Date;
  techStackRequired: string[];
  conditions: string[];
  description: string;
  registerationUrl: string;
}

const HackathonCard:React.FC<HackathonData> = (props) => {
  return(
    <div className='shadow-lg rounded-md'>
  
    <div className='my-1 w-full md:mr-5'>
      <div className='p-5 flex rounded-md border bg-white'>
        <div className='max-h-24 my-auto  rounded-lg bg-black overflow-hidden'>
          <img src={image} className='object-fit cover h-24' />  
        </div>
        <div className='flex flex-col ml-5'>
          <div className=''>
            <p className='lg:text-lg xl:text-xl md:text-md font-medium'>{props.name}</p>
            <p className='lg:text-sm xl:text-md  text-xs font-normal'>{props.description}</p>
          </div>
          <div className='flex mt-2 space-between gap-4'>
            {/* <button className='text-xs md:text-sm lg:text-md rounded-md bg-blue-100 px-2'>Days Left: {props.daysLeft}</button> */}
            <div className='text-xs md:text-sm lg:text-md'>Mode: {props.mode}</div>
          </div>
          <div className='flex mt-1 space-between gap-4'>
            <div className='text-xs md:text-sm lg:text-md'>Prizes: {props.prizes}</div>
            <div className='text-xs md:text-sm lg:text-md'>entryFee: {props.entryFee}</div>
          </div>
        </div>
      </div>
    </div>
  
</div>

  );
}

export default HackathonCard;


