import React from 'react'

const AccountAnalytics = ({image,heading,smallHeading,link}) => {
  return (
    <div>
      <a link={link} className='w-full flex '>
              <div className='w-7 bg-black'>
                <img src={image} alt="" />
              </div>
              <div className='ml-2'>
                <div className='text-md text-gray-800'>{heading}</div>
                <div className='text-sm text-gray-600'>{smallHeading}</div>
              </div>
      </a>
    </div>
  )
}

export default AccountAnalytics
