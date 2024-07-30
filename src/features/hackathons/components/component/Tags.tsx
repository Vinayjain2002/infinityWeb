import React from 'react'

interface TagsProps{
  tagList: string[]
}
const Tags:React.FC<TagsProps> = (props) => {
  return (
      <div className='flex'>
        <div className='text-md  font-semibold'>Tags:</div>
         <div className='flex ml-3 md:space-x-3  flex-wrap space-x-2 text-sm'>
    {props.tagList?.map((tag,index) => (
      <div key={index} className="text-xs md:text-sm px-1 hover:bg-blue-200 border rounded-md bg-blue-50">
        <p key={index}>{tag}</p>
      </div>
    ))}
  </div>
  
      </div>
  )
}

export default Tags
