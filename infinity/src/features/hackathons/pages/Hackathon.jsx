import React from 'react'
import NavBar from '../../../components/navBars/NavBar';
import HackathonCard from '../../../components/Cards/HackathonCard';
import RoundDetails from '../components/RoundDetails';
import EventsDescription from '../components/EventsDescription';
import EventsDescriptionList from '../components/EventsDescriptionList';
import EventWidget from '../components/EventWidget';
import Footer from '../../../components/navBars/Footer';
import HackathonBanner from '../../../assets/images/hackathonBanner.jpg'
import { useState } from 'react';
import hackathonImage from '../../../assets/images/hackathon.png'
import QuickQuestion from '../components/QuickQuestion';
import Tags from '../components/Tags';
// we need to define the Custom Seeing options of the hackathons and also we need to define the Custom Questions Section
const Hackathon = () => {

  const hackathons=[{},{},{},{},{},{},{},{}];
  return (
    <div>
        <div>
            <NavBar />
            <div className='w-full h-1/4'>
              <img src={HackathonBanner} className='object-cover w-full'/>
            </div>
            {/* we are going to define the split Screeen Hackathons */}
            <div className='bg-blue-50'>
            <div className='mx-2 flex flex-row'>
              <div className='w-2/5  mt-2 hidden md:flex flex-col'>
              {
                 hackathons.map((hackathon)=>(
                      <HackathonCard/>
                ))
              }
              </div>
              <div className='md:w-3/5 w-full mt-2 md:ml-3 ml-0'>
                 <div className='w-full mt-1 bg-white h-auto flex-col border rounded-md'>
                    <div className='w-full px-5 py-5 flex'>
                      <div className='w-1/5 bg-black rounded-md overflow-hidden'><img src={hackathonImage}/></div>
                      <div className='w-4/5 flex flex-col ml-3'>
                            <p className='text-lg md:text-xl xl:text-2xl font-bold '>MIH 2.O Mind Installers Hackathon</p>
                            <p className='text-xs md:text-sm mt-2'>IIMT College Of Engineering (IIMT COE), Greater Noida</p>
                            <div className='flex flex-row space-x-5 text-sm mt-2'>
                              <p className='text-sm md:text-md font-gray-50 font-semibold'>Offline</p>
                              <p className='text-sm md:text-md font-gray-50 font-semibold'>Panipat</p>
                            </div>
                      </div>
                    </div>
                     {/* we are going to define the tags that may be of the hacakthon */}
                     <div className='ml-5 bg-white'>
                              <ul className='flex md:space-x-3 space-x-2 flex-wrap text-sm'>
                                <li><Tags /></li>
                                <li><Tags /></li>
                                <li><Tags /></li>
                                <li><Tags /></li>
                              </ul>
                    </div>
                    <hr className='mt-5'/>
                    {/* now we are going to define the options to options to the user to register for the hackathons */}
                    <div className='w-full flex justify-between px-5 my-2'>
                      <div className='flex md:space-x-5 space-x-2 xl:space-x-7'>
                        <div className='px-1 md:px-2 lg:px-3 py-2 border text-md rounded-md hover:bg-blue-500'>Watchlist</div>
                        <div className='lg:px-3 px-1 md:px-2 py-2 border text-md rounded-md hover:bg-blue-500'>Calender</div>
                      </div>
                      <div className='flex items-center space-x-5 '>
                        <div><p className='lg:text-xl md:text-lg text-md  font-semibold'>Free</p></div>
                        <div><button className='md:px-3 px-2 py-2 bg-blue-200 hover:bg-blue-500 rounded-sm'>Register</button></div>
                      </div>
                    </div>
              </div>
              <div className='w-full rounded-md bg-white  flex-row border flex justify-between p-3 mt-1'>
                 <EventWidget />
                <EventWidget />
                <EventWidget />
              </div>
              
              {/* this is going to be the Eligiblity Area */}
              <div className='flex-col flex border bg-white rounded-md my-1 px-3 py-2'>
                <p className=' text-md xl:text-lg font-semibold'>Eligiblity</p>
                <p className='text-sm lg:text-sm 2xl:text-md font-gray-50'>Condition</p>
              </div>

              {/* we are going to define the steps in the Hackathon */}
              <div className='border rounded-md px-3 bg-white py-2'>
                  <div className='text-lg text-neutral-800 font-bold'>MIH 2.O Mind Installers Hackathon</div>
              </div>
              <RoundDetails />
              <RoundDetails />
              
              <div className='border rounded-md bg-white mt-1 py-3 px-5'>
                    <div className='text-md xl:text-lg text-neutral-900 font-bold'>All that you need to know about Code Playground</div>
                    <EventsDescription />
                    <EventsDescriptionList />
                    <EventsDescriptionList />
                    <EventsDescriptionList />
              </div>

              {/* we are going to define the end of the Section ie the important dates and the deadlines */}
              <div className='mt-1 py-3 bg-white px-5 border rounded-md'>
              <div className='text-sm lg:text-md text-gray-900 font-semibold'>What are the important dates and Deadlines?</div>
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

            {/* we are going to define the Quick Asked qustions for the hackathon */}
            <div className='w-full'>
             <QuickQuestion />
            </div>
            <Footer />
        </div>      
    </div>
  )
}

export default Hackathon;