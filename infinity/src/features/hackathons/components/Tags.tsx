import React from 'react'

interface TagsProps{
  tagList: string[]
}
const Tags:React.FC<TagsProps> = (props) => {
  return (
    <div className='flex md:space-x-3 space-x-2 flex-wrap text-sm'>
    {props.tagList.map((tag) => (
      <div key={tag} className="text-xs md:text-sm px-1 hover:bg-blue-200 border rounded-md bg-blue-50">
        <p>{tag}</p>
      </div>
    ))}
  </div>
  
  )
}

export default Tags
