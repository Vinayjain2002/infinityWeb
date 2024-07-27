import React from 'react'

interface InputProps{
    label: string
}
const InputComponent:React.FC<InputProps> = (props) => {
  return (
    <div>
       <div className= ' mt-3 w-full space-y-1'>
              <label htmlFor="" className='w-1/6 text-gray-700 text-md '>{props.label}</label>
              <div className=' '><input type="text" className='px-3 py-2 border-1 focus:border-none focus:outline-none rounded-md bg-blue-10 text-gray-700' placeholder='Location here'/></div>
        </div>
    </div>
  )
}

export default InputComponent
