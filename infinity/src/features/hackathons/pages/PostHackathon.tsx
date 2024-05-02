import React from 'react'
import NavBar from '../../../components/navBars/NavBar'
import hackathonIllustration from '../../../assets/images/hackillus.png'
import ChatAssistant from '../../../components/chatAssistant/ChatAssistant'
import HomeMainBanner from '../../homeScreen/components/HomeMainBanner'
import PrevHostedHackathonDetails from '../components/PrevHostHackathonDetails'
import PostHackathonsOptions from '../components/PostHackathonsOptions'
import HostHackathonCard from '../components/HostHackathonCard'
import RoundDetails from '../components/RoundDetails'
import InputComponent from '../components/InputComponent'
import Footer from '../../../components/navBars/Footer'

const homeCompany=[{image: "url",id:1},{image: "url", id:2},{image: "url", id:3},{image: "url", id:2},{image: "url", id:2},{image: "url", id:2}]

const PostHackathon = () => {
  return (
    <div>
      <ChatAssistant />
      <NavBar />
      <div>
          {/* here we are gonna to define the data of the posting a hackathon */}
          <div className='w-full flex flex-col justify-center items-center'>
            <div className='mt-10' style={{height: "250px"}} >
              <img src={hackathonIllustration} alt="image of the hackathon" className='object-cover h-full'/>
            </div>
            <div className='flex flex-col justify-center items-center text-center mt-5 w-1/2'>
              <p className='text-4xl text-gray-800'>Grow your developer ecosystem with Devpost</p>
              <p className='mt-5 text-gray-800'>Inspire developers to build with your tools through hackathons managed by Devpost.</p>
            </div>
            <div className='mt-5'>
              <button className='px-7 rounded-md text-white py-3 bg-blue-500 border'>Get Started</button>
            </div>
          </div>
          <div className='mt-60'></div>
          <div className='w-full border bg-blue-50'>
                <div className='flex justify-evenly  -mt-36'>
                    <div className='w-1/3'><HostHackathonCard /></div>
                  <div className='w-1/3'><HostHackathonCard /></div>
                </div>
          <div className='w-full flex flex-col justify-center items-center mt-10'>
            <div className='w-3/5 text-center'>
              <p className='text-3xl text-gray-800'>You’re in good hands with Infinity</p>
              <p className='mt-5 text-gray-700'>We’ve been powering hackathons since 2023. Our solutions simplify hackathon management, elevate the participant experience, and drive greater business outcomes.</p>
            </div>
            <div className='flex'>
              {/* <div><RoundDetails /></div>
              <div><RoundDetails /></div> */}
            </div>
          </div>
          <div className='my-40'></div>
          </div>
          {/* here we are going to define the widgets like the middle Section ie the company names */}
          <div className='-mt-20'>
             <div >
            <div className='flex w-full justify-center text-gray-800'> <p>Join the leading companies that trust Devpost to power their hackathons</p></div>
              <div>
                <div className=' bg-white rounded-lg py-5 shadow-md mx-20 mt-2'>
                          <ul className='flex space-x-10 px-5 justify-around flex-row no-wrap'>
                                {
                                    homeCompany.map((company)=>(
                                        <li key={company.id}>
                                            <img src={company.image} alt={`Company ${company.id}`} />
                                        </li>
                                    ))
                                }
                          </ul>
                  </div>
            </div>
          </div>
          </div>

          {/* we are gonna to define the Post Hackathon */}
          {/* <div className='mt-5 space-y-3'>
              <PrevHostedHackathonDetails />
              <PrevHostedHackathonDetails />
              <PrevHostedHackathonDetails />
          </div> */}

          <div className='mt-5'>
            <PostHackathonsOptions />
          </div>

          {/* we are going to define the form so that the user Could fill it so that we could Contact him */}
          <div className='mt-5 bg-blue-50'>
            <div className=''>
              <div className='flex flex-col justify-center items-center py-10 space-y-5'>
                <p className='text-4xl'>Run your next great hackathon</p>
                <p className='text-md text-gray-800'>Fill out the form below to book your demo today.</p>
              </div>
              <div className='flex items-center justify-center'>
                <form action="">
                  <div className='flex justify-between space-x-10 w-4/5'>
                        <InputComponent label="Name:"/>
                        <InputComponent label='Work Email:'/>
                  </div>
                  <div className='flex justify-between space-x-10 w-4/5'>
                        <InputComponent label='Company:'/>
                        <InputComponent label='Job Email:'/>
                  </div>
                  <div className='flex justify-between space-x-10 w-4/5'>
                        <InputComponent label='Phone:'/>
                        <InputComponent label='What are you planning:'/>  
                  </div>
                  <div className='mt-5'>
                      <label className="text-gray-800" htmlFor="textArea">Tell Us About Hackathon (optional)</label>
                      <div className='w-full mt-1 h-32 border-dark-blue '>
                        <textarea placeholder='Write a feedback' className=' px-5 py-2 w-full h-full resize-none focus:border-dark-blue border border-dark-blue focus:outline-none rounded-md text-gray-700' id="textArea"></textarea>
                    </div>
                  </div>

                  <div className='w-full flex items-center mt-5 justify-center'>
                    <button className='px-5 py-2 border rounded-md bg-blue-500 hover:bg-blue-700 hover:text-white '>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default PostHackathon
