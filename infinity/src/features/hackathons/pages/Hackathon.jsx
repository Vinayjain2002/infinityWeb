import React from 'react'
import NavBar from '../../../components/navBars/NavBar';
import HackathonCard from '../../../components/Cards/HackathonCard';
import RoundDetails from '../components/RoundDetails';
import EventsDescription from '../components/EventsDescription';
import EventsDescriptionList from '../components/EventsDescriptionList';
import EventWidget from '../components/EventWidget';
import Footer from '../../../components/navBars/Footer';

// we need to define the Custom Seeing options of the hackathons and also we need to define the Custom Questions Section
const Hackathon = () => {
  return (
    <div>
        <div>
            <NavBar />
            {/* we are going to define the split Screeen Hackathons */}
            <div className='bg-blue-50'>
            <div className='mx-2 flex flex-row'>
              <div className='w-2/5 hidden md:flex flex-col h-screen overflow-y-scroll'>
                <HackathonCard/>
                <HackathonCard/>
              </div>
              <div className='w-3/5 ml-3 mt-1.5 h-screen overflow-y-scroll thin-scrollbar scrollbar-thumb-bg-gray-300 scrollbar-track-bg-gray-100'>
                 <div className='w-full mt-3 bg-white h-auto flex-col border rounded-md'>
                    <div className='w-full px-5 py-5 flex'>
                      <div className='w-1/5 bg-black rounded-md overflow-hidden'><img></img></div>
                      <div className='w-4/5 flex flex-col ml-3'>
                            <p className='text-xl font-bold '>MIH 2.O Mind Installers Hackathon</p>
                            <p className='text-sm mt-2'>IIMT College Of Engineering (IIMT COE), Greater Noida</p>
                            <div className='flex flex-row space-x-5 text-sm mt-2'>
                              <p className=''>Offline</p>
                              <p>Panipat</p>
                            </div>
                      </div>
                    </div>
                     {/* we are going to define the tags that may be of the hacakthon */}
                     <div className='ml-5 bg-white'>
                              <ul className='flex space-x-3 flex-wrap text-sm'>
                                <li className='px-1 hover:bg-blue-200 border rounded-md bg-blue-50'><p>#Mern Stack</p></li>
                                <li className='px-1 hover:bg-blue-200 border rounded-md bg-blue-50'><p>#Web Development</p></li>
                                <li className='px-1 hover:bg-200 border rounded-md bg-blue-50'><p>#Coding Challenges</p></li>
                                <li className='px-1 hover:bg-blue-200 border rounded-md bg-blue-50'><p>#Hacakthon</p></li>
                              </ul>
                    </div>
                    <hr className='mt-5'/>
                    {/* now we are going to define the options to options to the user to register for the hackathons */}
                    <div className='w-full flex justify-between px-5 my-2'>
                      <div className='flex space-x-5'>
                        <div className='px-3 py-1 border rounded-md hover:bg-blue-500'>Watchlist</div>
                        <div className='px-3 py-1 border rounded-md hover:bg-blue-500'>Calender</div>
                      </div>
                      <div className='flex items-center space-x-5 '>
                        <div><p className='text-lg font-semibold'>Free</p></div>
                        <div><button className='px-3 py-2 bg-blue-200 hover:bg-blue-500 rounded-sm'>Register</button></div>
                      </div>
                    </div>
              </div>
              <div className='w-full rounded-md bg-white  flex-row border flex justify-between p-3 mt-1'>
                <div className='flex'>
                  <div className='bg-black'>icon</div>
                  <div className='flex-col px-2'>
                    <div className='text-gray-700'>Impression</div>
                    <div className='text-md'>2,472</div>
                  </div>
                </div>
                <div className='flex'>
                      <div className='bg-black'>icon</div>
                      <div className='flex-col px-2'>
                        <div className='text-gray-700'>Registeration Deadline</div>
                        <div className='text-md'>Date</div>
                      </div>
                </div>
                <div className='flex'>
                  <div className='bg-black'>icon</div>
                  <div className='flex-col px-2'>
                    <div className='text-gray-700'>Team Size</div>
                    <div className='text-md'>1-4 Members</div>
                  </div>
                </div>
              </div>
              
              {/* this is going to be the Eligiblity Area */}
              <div className='flex-col flex border bg-white rounded-md my-1 px-3 py-2'>
                <p className=' text-md'>Eligiblity</p>
                <p className='text-sm font-gray-50'>Condition</p>
              </div>

              {/* we are going to define the steps in the Hackathon */}
              <div className='border rounded-md px-3 bg-white py-2'>
                  <div className='text-lg text-neutral-800 font-bold'>MIH 2.O Mind Installers Hackathon</div>
              </div>
              <RoundDetails />
              <RoundDetails />
              
              <div className='border rounded-md bg-white mt-1 py-3 px-5'>
                    <div className='text-md text-neutral-900 font-bold'>All that you need to know about Code Playground</div>
                    <EventsDescription />
                    <EventsDescriptionList />
                    <EventsDescriptionList />
                    <EventsDescriptionList />
              </div>

              {/* we are going to define the end of the Section ie the important dates and the deadlines */}
              <div className='mt-1 py-3 bg-white px-5 border rounded-md'>
              <div className='text-md text-gray-900 font-semibold'>What are the important dates and Deadlines?</div>
               <div className='mt-5'>
                    <EventWidget />
               </div>

                {/* contact details of the organiser */}
                <div className='text-md text-gray-900 font-semibold mt-5'>Contact the Organiser</div>
                <div className='mt-5'>
                  <EventWidget />
                </div>
              </div>
              </div>
             
            </div>

            </div>
            <Footer />
        </div>      
    </div>
  )
}

export default Hackathon;