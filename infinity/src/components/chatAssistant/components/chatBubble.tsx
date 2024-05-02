import React, { useEffect, useState } from 'react'
import image from '../../../assets/images/hack.png'

interface MessageProps {
    message: string;
  }

const ChatMessage: React.FC<MessageProps>  = (props) => {
  return (
    <div>
      <div className='mr-5'>
         <div className="flex items-start gap-1">
            <img className="w-9 h-9 rounded-full" src={image} alt="Jese image" />
            <div className="flex flex-col p-1 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Vinay jain</span>
                    <span className="text-xs font-normal text-gray-500 dark:text-gray-400">11:46</span>
                </div>
                <p className="text-xs font-normal py-1.5 text-gray-900 dark:text-white">{props.message}</p>
                <div className='w-full '>
                    <span className="text-xs font-normal  text-gray-500 dark:text-gray-400"> 
                            Delivered
                    </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}




export default ChatMessage;

