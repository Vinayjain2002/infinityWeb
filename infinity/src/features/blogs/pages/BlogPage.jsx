import React from 'react'
import NavBar from '../../../components/navBars/NavBar'
import Footer from '../../../components/navBars/Footer'
import BlogPageSideBar from '../components/BlogPageSideBar'

const BlogPage = () => {
  return (
    <div>
      <div>
        <NavBar />

        <div className='page'>
          <div className='inline-flex flex-row'>

            <BlogPageSideBar />
            {/* <div className='col w-6/12'>
              <div className='cards bg-blue-300 rounded-3xl flex flex-row p-6 my-6 content-between'>

                  <div className='card w-7/12'>
                    <p className='my-4 text-xl'>System Design Interview and Answers</p>
                    <div className=''>
                      <p className='my-4'>In the software engineering interview process system design round has become a standard part of the interview. If you want to get your dream</p>
                    </div>
                    <div className='flex flex-row'>
                      <img src='/' className='mx-2' />
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>GBlog</a>
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>System Design</a>
                    </div>
                  </div>

                  <div className='w-5/12'>
                    <i className=''>Last Updated: 09 February 2024</i>
                    <img src='/' className=' bg-light-blue'/>
                  </div>

              </div>


              <div className='cards bg-blue-300 rounded-3xl flex flex-row p-6 my-6 content-between'>

                  <div className='card w-7/12'>
                    <p className='my-4 text-xl'>System Design Interview and Answers</p>
                    <div className=''>
                      <p className='my-4'>In the software engineering interview process system design round has become a standard part of the interview. If you want to get your dream</p>
                    </div>
                    <div className='flex flex-row'>
                      <img src='/' className='mx-2' />
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>GBlog</a>
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>System Design</a>
                    </div>
                  </div>

                  <div className='w-5/12'>
                    <i className=''>Last Updated: 09 February 2024</i>
                    <img src='/' className=' bg-light-blue'/>
                  </div>

              </div>



              <div className='cards bg-blue-300 rounded-3xl flex flex-row p-6 my-3 content-between'>

                  <div className='card w-7/12'>
                    <p className='my-4 text-xl'>System Design Interview and Answers</p>
                    <div className=''>
                      <p className='my-4'>In the software engineering interview process system design round has become a standard part of the interview. If you want to get your dream</p>
                    </div>
                    <div className='flex flex-row'>
                      <img src='/' className='mx-2' />
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>GBlog</a>
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>System Design</a>
                    </div>
                  </div>

                  <div className='w-5/12'>
                    <i className=''>Last Updated: 09 February 2024</i>
                    <img src='/' className=' bg-light-blue'/>
                  </div>

              </div>



              <div className='cards bg-blue-300 rounded-3xl flex flex-row p-6 my-6 content-between'>

                  <div className='card w-7/12'>
                    <p className='my-4 text-xl'>System Design Interview and Answers</p>
                    <div className=''>
                      <p className='my-4'>In the software engineering interview process system design round has become a standard part of the interview. If you want to get your dream</p>
                    </div>
                    <div className='flex flex-row'>
                      <img src='/' className='mx-2' />
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>GBlog</a>
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>System Design</a>
                    </div>
                  </div>

                  <div className='w-5/12'>
                    <i className=''>Last Updated: 09 February 2024</i>
                    <img src='/' className=' bg-light-blue'/>
                  </div>

              </div>



              <div className='cards bg-blue-300 rounded-3xl flex flex-row p-6 my-6 content-between'>

                  <div className='card w-7/12'>
                    <p className='my-4 text-xl'>System Design Interview and Answers</p>
                    <div className=''>
                      <p className='my-4'>In the software engineering interview process system design round has become a standard part of the interview. If you want to get your dream</p>
                    </div>
                    <div className='flex flex-row'>
                      <img src='/' className='mx-2' />
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>GBlog</a>
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>System Design</a>
                    </div>
                  </div>

                  <div className='w-5/12'>
                    <i className=''>Last Updated: 09 February 2024</i>
                    <img src='/' className=' bg-light-blue'/>
                  </div>

              </div>



              <div className='cards bg-blue-300 rounded-3xl flex flex-row p-6 my-6 content-between'>

                  <div className='card w-7/12'>
                    <p className='my-4 text-xl'>System Design Interview and Answers</p>
                    <div className=''>
                      <p className='my-4'>In the software engineering interview process system design round has become a standard part of the interview. If you want to get your dream</p>
                    </div>
                    <div className='flex flex-row'>
                      <img src='/' className='mx-2' />
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>GBlog</a>
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>System Design</a>
                    </div>
                  </div>

                  <div className='w-5/12'>
                    <i className=''>Last Updated: 09 February 2024</i>
                    <img src='/' className=' bg-light-blue'/>
                  </div>

              </div>



              <div className='cards bg-blue-300 rounded-3xl flex flex-row p-6 my-6 content-between'>

                  <div className='card w-7/12'>
                    <p className='my-4 text-xl'>System Design Interview and Answers</p>
                    <div className=''>
                      <p className='my-4'>In the software engineering interview process system design round has become a standard part of the interview. If you want to get your dream</p>
                    </div>
                    <div className='flex flex-row'>
                      <img src='/' className='mx-2' />
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>GBlog</a>
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>System Design</a>
                    </div>
                  </div>

                  <div className='w-5/12'>
                    <i className=''>Last Updated: 09 February 2024</i>
                    <img src='/' className=' bg-light-blue'/>
                  </div>

              </div>



              <div className='cards bg-blue-300 rounded-3xl flex flex-row p-6 my-6 content-between'>

                  <div className='card w-7/12'>
                    <p className='my-4 text-xl'>System Design Interview and Answers</p>
                    <div className=''>
                      <p className='my-4'>In the software engineering interview process system design round has become a standard part of the interview. If you want to get your dream</p>
                    </div>
                    <div className='flex flex-row'>
                      <img src='/' className='mx-2' />
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>GBlog</a>
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-light-blue'>System Design</a>
                    </div>
                  </div>

                  <div className='w-5/12'>
                    <i className=''>Last Updated: 09 February 2024</i>
                    <img src='/' className=' bg-light-blue'/>
                  </div>

              </div>



              <div className='cards bg-blue-300 rounded-3xl flex flex-row p-6 my-6 content-between'>

                  <div className='card w-7/12'>
                    <p className='my-4 text-xl'>System Design Interview and Answers</p>
                    <div className=''>
                      <p className='my-4'>In the software engineering interview process system design round has become a standard part of the interview. If you want to get your dream</p>
                    </div>
                    <div className='flex flex-row'>
                      <img src='/' className='mx-2' />
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-blue-400'>GBlog</a>
                      <a href='/' className='mx-2 p-1 rounded-2xl bg-blue-400'>System Design</a>
                    </div>
                  </div>

                  <div className='w-5/12'>
                    <i className=''>Last Updated: 09 February 2024</i>
                    <img src='/' className=' bg-light-blue'/>
                  </div>

              </div>



            </div>

            <div className='col w-3/12'>
              <div className='bg-blue-300 m-6 rounded-3xl'>
              <img src='/' />
              </div>
            </div> */}

          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default BlogPage;
