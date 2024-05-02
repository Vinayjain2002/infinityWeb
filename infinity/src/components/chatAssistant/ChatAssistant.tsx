import React, { useState, useEffect } from 'react';
import ChatBot from '../../assets/images/chatBot.png';
import TextBar from './components/textBar.js'
import UserMessage from './components/UserMessage.js';
import ChatMessage from './components/chatBubble.js';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import InputFields from '../../features/Account/components/InputFieldComponent.js';

// import {useDispatch} from 'react-redux'

const ChatAssistant:React.FC = () => {
  const [chatBotVisible, setChatBotVisible] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const toggleChatAssistant = () => {
    setChatBotVisible(!chatBotVisible);
  };

  const sendChatMessage = (value) => {
    // Clear the input field
    let inputField=document.getElementById('inputField');
    alert(inputField.value);
    // Update messages state by adding the new value
    setMessages([...messages, value]);
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
        <div>
           <div className="fixed bottom-5 right-5 bg-blue-200 bg-opacity-90 max-w-md min-w-sm mx-auto p-2 Z-50 rounded-lg">
                <div className='w-full flex justify-between mb-2'>
                  <div className='mt-1 pl-3 font-semibold text-gray-800'>
                    <p>Infinity chat Assistant</p>
                  </div>
                  {/* here we are going to define the cross sign of the web */}
                  <IconButton aria-label="close" size="small" onClick={toggleChatAssistant} >
                    <CloseIcon  fontSize='medium' />
                </IconButton>
                </div>
                <div className=" overflow-y-auto space-y-5 h-80">
                 {
                        messages.map((message) => (
                          <ChatMessage message={message} />
                      ))                
                 }
                </div>
                <div className="mt-4 flex mx-10">
                  <input
                  id="inputField"
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your Query here..."
                    className="flex-1 p-2 rounded-l-md focus:outline-none border-gray-800 bg-gray-100"
                  />
                 <button className="bg-blue-500 text-white p-2 rounded-r-md" onClick={() => sendChatMessage(inputText)}>
                    Send
                </button>

                </div>
              </div>
        </div>
      )}
      </div>
  );
};

export default ChatAssistant;
