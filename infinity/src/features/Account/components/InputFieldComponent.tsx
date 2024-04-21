import React from 'react'

const InputFields = ({labelName}) => {
  return (
    <div className='my-2'>
      <div className='font-semibold text-dark-blue text-md'>
            <div >{labelName}</div>
            <div className='ml-2'><input type="text" className='border'/></div>
        </div>
    </div>
  )
}

export default InputFields;
