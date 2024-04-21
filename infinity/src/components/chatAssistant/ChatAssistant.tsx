import React, { useState, useEffect } from 'react';
import ChatBot from '../../assets/images/chatBot.png';
import TextBar from './components/textBar.js'
import ChatBubble from './components/chatBubble.js';
// import {useDispatch} from 'react-redux'

const ChatAssistant = () => {
  const [chatBotVisible, setChatBotVisible] = useState(true);

  const toggleChatAssistant = () => {
    setChatBotVisible(!chatBotVisible);

  };

  useEffect(() => {
    console.log('Chat assistant visibility:', chatBotVisible); // Log after state update
  }, [chatBotVisible]); 

  return (
    <div>
      {chatBotVisible && ( // Conditionally render the widget based on chatBotVisible
        <div className='fixed bottom-5 right-5'>
          <div className='w-full max-w-20 overflow-hidden rounded-full bg-gray-150'>
            <button onClick={toggleChatAssistant} className='w-full bg-gray-200'>
              <img src={ChatBot} alt="Image of the chatBot" className='object-cover' />
            </button>
          </div>
        </div>
      )}

      {/* here we are going to define the widget like the chatting App box */}
      {!chatBotVisible && (
      <div className="fixed right-1 bottom-1">
                <div class="flex flex-col h-screen bg-gray-200">
                  <div className=''>
                    <ChatBubble />
                  </div>
                  <div>
                    <TextBar/>
                  </div>
                </div>
      </div>
      )}
    </div>
  );
};

export default ChatAssistant;
