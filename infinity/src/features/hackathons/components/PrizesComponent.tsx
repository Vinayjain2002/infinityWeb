import React from 'react'

const PrizesComponent = () => {
  return (
    <div className='w-full min-w-1/2 flex border rounded-md'>
    <div className='w-1/3 border rounded-md bg-black '>
        fmejgre
        {/* <img></img> */}
    </div>
      <div className='w-2/3 rounded-md shadow-md flex justify-between'>
            <div className='flex flex-col'>
                <p className='text-md text-black'>First Prize</p>
                <p className='text-sm font-normal text-dark-blue'>Certificate Of Appriciation</p>
                <p className='text-md font-semibold text-blue-500'>$12000</p>
            </div>   
      </div>
    </div>
  )
}

export default PrizesComponent
