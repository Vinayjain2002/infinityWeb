import React from 'react'
import banner from '../../../assets/images/hackathon.png'

const Oppertunity = () => {
  return (
    <div className=''>
      <div className='bg-white w-full border rounded-md  flex flex-row px-3 py-2'>
        <div className='bg-black w-10 h-10 rounded-md border overflow-hidden'><img src={banner} className='object-cover h-10'/></div>
        <div className='flex-col ml-2 flex '>
            <div className='text-sm text-gray-800 font-semibold'>ACPKC 2k24</div>
            <div className='text-gray-700 text-sm'>ABES Engineering College</div>
        </div>
      </div>
    </div>
  )
}

export default Oppertunity
