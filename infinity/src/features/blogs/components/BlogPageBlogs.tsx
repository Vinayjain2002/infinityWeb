import React from 'react'
import banner from '../../../assets/images/hackathon.png'

const BlogPageBlogs = () => {
  return (
    <div className='w-full'>
      <div className='bg-blue-300 rounded-lg flex flex-row content-between'>
            <div className='md:w-5/7 xl:w-3/4 w-2/3'>
                    <p className='my-4 mx-3 text-md lg:text-xl xl:text-2xl font-semibold'>System Design Interview and Answers</p>
                <div className=''>
                    <p className=' mx-3 text-sm font-gray-50 '>In the software engineering interview process system design round has become a standard part of the interview. If you want to get your dream</p>
                </div>
                <div className='flex flex-row my-5'>
                    <img src='/' className='mx-2' />
                    <a href='/' className='text-xs lg:text-md mx-2 p-1 px-2 rounded-lg bg-blue-200'>GBlog</a>
                    <a href='/' className='text-xs lg:text-md mx-2 p-1 px-2 rounded-lg bg-blue-200'>System Design</a>
                </div>
            </div>
            <div className='md:w-2/7 xl:w-1/4 w-1/3 my-3'>
            <p className='text-xs text-gray-700 text-right pr-8 xl:pr-2'>Last Updated:2024</p>
                <div className='w-4/5 ml-5 mt-2 rounded-md overflow-hidden'>
                    <img src={banner} className='object-cover'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogPageBlogs
