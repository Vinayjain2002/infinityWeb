import React from 'react'

interface SortCardProps{
   noOfResults: string,
  buttons: SortButtonProps[];
}

interface SortButtonProps {
  text: string; // Text displayed on the button
  handleClick: () => void; // Function to be called when clicked
}

const SortCardsComponents:React.FC<SortCardProps> = (props) => {
  return (
    // here we are going to define the filters same as that of the Unstop
    <div className=''>
      <div className='flex flex-row justify-between items-center'>
        <div className='xl:text-md sm:text-xs md:text-sm font-bold text-gray-700 mt-1 hidden md:flex flex-row'>Results Found:<span className='font-medium text-gray-500'>{props.noOfResults}</span></div>
        <div className='flex  flex-row items-center space-x-3 justify-center'>
            <p className='xl:text-lg md:text-md sm:text-sm text-gray-600'>Sort: </p>
            <div className='flex flex-row border bg-white border-gray-400 py-2 space-x-4 px-3 rounded-sm'>
               {
                 props.buttons.map((button) => (
                  <button key={button.text} className='text-blue-400  focus:underline focus:decoration-1 focus:text-blue-700 text-md' onClick={() => button.handleClick()}>
                    {button.text}
                  </button>
                ))
               }
            </div>
        </div>
      </div>
    </div>
  )
}

export default SortCardsComponents;
