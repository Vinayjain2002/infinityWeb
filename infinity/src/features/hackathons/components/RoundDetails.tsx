import React from 'react'

interface RoundProps{
    roundName: string,
    startDate: string,
    endDate:string,
    roundDetails: string
}
const RoundDetails:React.FC<RoundProps> = (props) => {
  return (
    <div>
      <div className='border bg-white rounded-md px-3 py-2 mt-1'>
            <div>
                <div className='flex justify-between'>
                        <div className='text-md lg:text-lg 2xl:text-xl text-gray-800 font-semibold'><a href="/hackathon/detail/2">{props.roundName}</a></div>
                </div>

                <div className='mt-2'>
                      <p className='text-xs lg:text-md text-gray-500'>{props.roundDetails}</p>
                </div>
                <div className='flex flex-row mt-2 space-x-5'>
                    <div className='flex flex-col'>
                        <p className='text-sm text-gray-700 font-semibold '>Start Date</p>
                        <p className='text-sm text-gray-500'>{props.startDate}</p>
                    </div>
                <div></div>
                <div className=''>
                    <p className='text-sm text-gray-700 font-semibold'>End Date</p>
                    <p className='text-sm text-gray-500'>{props.endDate}</p>
                </div>
            </div>
        </div>
     </div>  
    </div>
  )
}

export default RoundDetails
