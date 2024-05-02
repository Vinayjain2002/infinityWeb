import React from 'react'
import image from '../../../assets/images/hackathon.png'

const PrizesComponent = () => {
  return (
    <div className='w-full flex border-2 rounded-md px-2'>
        <div className='w-15 mt-2 h-10 border rounded-md bg-black overflow-hidden'>
            <img src={image} className='w-12 h-10 object-cover' />
        </div>
        <div className='w-full rounded-md  ml-2 flex justify-between'>
                <div className='flex flex-col'>
                    <p className='text-md text-black'>First Prize</p>
                    <p className='text-sm font-normal text-dark-blue'>Certificate Of Appriciation</p>
                    <p className='text-sm font-semibold text-blue-500'>$12000</p>
                </div>   
          </div>
    </div>
  )
}

export default PrizesComponent
