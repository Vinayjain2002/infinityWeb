import React from 'react'
import BlogPageSideBarLine from './BlogPageSideBarLine.tsx'

const BlogPageSideBar = () => {
  return (
    <div className='w-full'>
      <div className='col bg-blue-300 rounded-lg'>
              <div className='px-2 py-4'>
                <div className='text-lg font-semibold xl:text-2xl lg:text-xl'>Similar Topics</div>
                <ul className='my-4 flex-col'>
                  <li className='my-4'><BlogPageSideBarLine /></li>
                  <li className='my-4'><BlogPageSideBarLine /></li>
                  <li className='my-4'><BlogPageSideBarLine /></li>
                  <li className='my-4'><BlogPageSideBarLine /></li>
                  <li className='my-4'><BlogPageSideBarLine /></li>
                  <li className='my-4'><BlogPageSideBarLine /></li>
                </ul>
              </div>
            </div>

    </div>
  )
}

export default BlogPageSideBar
