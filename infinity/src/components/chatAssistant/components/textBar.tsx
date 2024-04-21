import React, { useState } from 'react'


const TextBar = () => {
    const [message, setMessage]= useState(null);
  return (
    <div>
      {/* here we are going to define the area where the user could define the messageshe want to send */}

        <div className="flex items-center px-4 py-2 bg-gray-100">
            <input type="text" className="flex-grow rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Type your message..." onChange={(e)=>onChangeHandler(e)}/>
            <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700" onClick={sendMessage()}>Send</button>
        </div>

    </div>
  )
}

export default TextBar;