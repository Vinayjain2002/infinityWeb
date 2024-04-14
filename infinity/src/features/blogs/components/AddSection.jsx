import React from 'react'
import hackathon from '../../../assets/images/hackathon.png'

const AddSection = () => {
  return (
    <div className='lg:mx-2 xl:mx-3'>
      {/* here we are going to define the section of the webpage ie where we are going to play the adds */}
      <div className='w-full'>
            <img src={hackathon}/>
      </div>
    </div>
  )
}

export default AddSection
