import React from 'react'
import image from '../../../assets/images/hackathon.png'

interface MessageProps {
    message: string;
  }
const UserMessage: React.FC<MessageProps>  = (props) => {
  return (
<div className=''>
  <div className='ml-5'>
    <div className="flex items-start gap-1">
      <div className="flex flex-col ml-auto leading-1.5 p-1 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">Vinay jain</span>
          <span className="text-xs font-normal text-gray-500 dark:text-gray-400">11:46</span>
        </div>
        <p className="text-xs font-normal py-1 text-gray-900 dark:text-white">{props.message}</p>
        <div className='w-full '>
          <span className="text-xs font-normal  text-gray-500 dark:text-gray-400">Delivered</span>
        </div>
      </div>
      <img className="w-10 h-10 rounded-full" src={image} alt="Jese image" />
    </div>
  </div>
</div>

  )
}

export default UserMessage


