import React from 'react'

interface TopicDetail{
  heading: string
}
const SimilarTopicDetail = ({heading}) => {
  return (
    <div className='w-full'>
      <a href="#" className='space-x-2 flex flex-row'>
            <p className='text-sm lg:text-md font-medium'>Topic: <span className='font-normal pl-3'>{heading}</span></p>
      </a>
    </div>
  )
}

export default SimilarTopicDetail;
