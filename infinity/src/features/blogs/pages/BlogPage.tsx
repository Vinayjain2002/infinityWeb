import React from 'react'
import NavBar from '../../../components/navBars/NavBar.tsx'
import Footer from '../../../components/navBars/Footer.tsx'
import BlogPageSideBar from '../components/BlogPageSideBar'
import BlogPageBlogs from '../components/BlogPageBlogs'
import AddSection from '../components/AddSection'
import ChatAssistant from '../../../components/chatAssistant/ChatAssistant.tsx'

const BlogPage = () => {
  return (
    <div>
      <div>
        <NavBar />

        <div className='flex w-full flex-nowrap my-4'>
            <div className='md:flex hidden md:w-2/5 lg:w-1/3 mx-3'>
                <BlogPageSideBar />
            </div>
             <div className='pr-4 md:pr-0 space-y-2 flex-col w-full flex px-10 md:px-0'>
                 <BlogPageBlogs />
                 <BlogPageBlogs />
                 <BlogPageBlogs />
                 <BlogPageBlogs />
                 <BlogPageBlogs />
                 <BlogPageBlogs />

              </div>

              <div className='hidden lg:flex w-1/3'>
                <AddSection />
              </div>
          </div>
          <div>
            <ChatAssistant />
          </div>
          <Footer />

        </div>
      </div>
  )
}

export default BlogPage;
