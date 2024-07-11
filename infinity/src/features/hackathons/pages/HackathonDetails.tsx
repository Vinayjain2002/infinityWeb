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
import '../../../style.css'
import ChatAssistant from '../../../components/chatAssistant/ChatAssistant';
import ImageSlider from '../../../components/ImageSlider/ImageSlider';
// we need to define the Custom Seeing options of the hackathons and also we need to define the Custom Questions Section
const HackathonDetails = () => {

  const hackathons=[{},{},{},{},{},{},{},{},{},{},{},{},{}];
  return (
    <div>
        <div>
          <ChatAssistant />
            <NavBar />
            <div className='w-full h-50'>
                <ImageSlider images={['njjb', 'fer0.','cergre']} autoplay={true} interval={3000}/>
            </div>
            {/* we are going to define the split Screeen Hackathons */}
            <div className='bg-blue-50 '>
              <div className='mx-2 flex flex-row'>
                <div className='w-2/5 h-screen overflow-y-scroll scrollbar mt-2 hidden md:flex flex-col'>
                {
                  hackathons.map((hackathon)=>(
                    <a href="/hackathon/2"><HackathonCard heading="Google Ai Hackathons" daysLeft="20 days left" mode="online" imageUrl="vkre" prizes="$50,000 in Prizes" participants="11006 participants" /></a>
                  ))
                }
                </div>
                <div className='md:w-3/5 w-full h-screen overflow-y-scroll scrollbar mt-2 md:ml-3 ml-0'>
                  <div className='w-full mt-1 bg-white h-auto flex-col border rounded-md'>
                      <div className='w-full px-5 py-5 flex'>
                        <div className='w-1/5 bg-black rounded-md overflow-hidden max-h-25'><img src={hackathonImage} className='h-25'/></div>
                        <div className='w-4/5 flex flex-col ml-3'>
                              <p className='text-lg md:text-xl xl:text-2xl font-bold '><a href="/hackathon/detail/2">MIH 2.O Mind Installers Hackathon</a></p>
                              <p className='text-xs md:text-sm mt-2 text-blue-500 font-semibold'><a href="https://www.gjust.ac.in/">IIMT College Of Engineering (IIMT COE), Greater Noida</a></p>
                              <div className='flex flex-row space-x-5 text-sm mt-2'>
                                <p className='text-sm md:text-md font-gray-50 font-semibold'>Offline</p>
                                <p className='text-sm md:text-md font-gray-50 font-semibold'>Panipat</p>
                              </div>
                        </div>
                      </div>
                      {/* we are going to define the tags that may be of the hacakthon */}
                      <div className='ml-5 bg-white'>
                                  <Tags tagList={["#hackathon", "MIH", "#Web Deveopment", "#IITM Collge Of Enginnnering"]}/>
                      </div>
                      <hr className='mt-5'/>
                      {/* now we are going to define the options to options to the user to register for the hackathons */}
                      <div className='w-full flex justify-between lg:px-5 px-3 my-2 flex-wrap'>
                        <div className='flex md:space-x-4 space-x-2 xl:space-x-6 pt-2 md:pt-0'>
                          <button className='px-1 md:px-2 lg:px-3 py-2 border text-md rounded-md hover:bg-blue-500 text-sm md:text-md lg:tex-lg'>Watchlist</button>
                          <button className='lg:px-3 px-1 md:px-2 py-2 border text-md rounded-md hover:bg-blue-500 text-sm md:text-md lg:tex-lg'>Calender</button>
                        </div>
                        <div className='flex items-center space-x-5  pt-2 md:pt-0'>
                          <div><p className='lg:text-lg md:text-md text-sm  font-semibold text-sm md:text-md lg:tex-lg'>Free</p></div>
                          <div><button className='md:px-5 px-3 py-2 bg-blue-200 hover:bg-blue-500 rounded-sm text-sm md:text-md lg:tex-lg text-black hover:text-white'>Register</button></div>
                        </div>
                      </div>
                </div>
                <div className='w-full rounded-md bg-white  border justify-between p-4 mt-1 flex'>
                  <EventWidget imageUrl="" eventName='Impression' eventNo='1000'/>
                    <EventWidget imageUrl='' eventName='Applied By' eventNo='100'/>
                    <EventWidget imageUrl='' eventName='Saved By' eventNo='500'/>
                </div>
                
                {/* this is going to be the Eligiblity Area */}
                <div className='flex-col flex border bg-white rounded-md my-1 px-3 py-2'>
                  <a href="/hackathon/detail/2" className=' text-md xl:text-lg font-semibold'>Eligiblity</a>
                  <a href="/hackathon/detail/2" className='text-sm lg:text-sm 2xl:text-md font-gray-50'>Condition</a>
                </div>

                {/* we are going to define the steps in the Hackathon */}
                <div className='border rounded-md px-3 bg-white py-2'>
                    <div className='text-lg text-neutral-800 font-bold'><a href="/hackathon/detail/2">MIH 2.O Mind Installers Hackathon</a></div>
                </div>
                <RoundDetails roundDetails='Prepare a presentation based on the provided format/template DownloadTemplate
                          Submit and present your PowerPoint presentation online.
                              This presentation should effectively communicate your project idea, solution, and how it addresses the selected problem statement.' 
                            roundName='Idea Submission Date' startDate='22/04/2024' endDate='22/05/2024'/>
                <RoundDetails roundDetails='Prepare a presentation based on the provided format/template DownloadTemplate
                          Submit and present your PowerPoint presentation online.
                              This presentation should effectively communicate your project idea, solution, and how it addresses the selected problem statement.' 
                            roundName='Presentation Submission ' startDate='22/04/2024' endDate='22/05/2024'/>              
                <div className='border rounded-md bg-white mt-1 py-3 px-5'>
                      <div className='text-md xl:text-lg text-neutral-900 font-bold'><a href="/hackathon/detail/2">All that you need to know about Code Playground</a></div>
                      <EventsDescription 
                      description="Calling all coding enthusiasts! The Code Playground Challenge is completely free to enter. Secure your spot by registering between April 11th, 2023, and April 15th, 2023. Don't miss out on this exciting opportunity to test your skills and compete with fellow coders!"
                      heading="Description: "
                      />
                      <EventsDescriptionList subheading1='Id dolorem magni modi molestiae mollitia ipsum ab atque eius, quod tenetur?' heading='Id dolorem magni modi ' subheading2='molestiae mollitia ipsum ab atque eius, quod tenetur?'/>
                      <EventsDescriptionList subheading1='Id dolorem magni modi molestiae mollitia ipsum ab atque eius, quod tenetur?' heading='Id dolorem magni modi ' subheading2='molestiae mollitia ipsum ab atque eius, quod tenetur?'/>
                      <EventsDescriptionList subheading1='Id dolorem magni modi molestiae mollitia ipsum ab atque eius, quod tenetur?' heading='Id dolorem magni modi ' subheading2='molestiae mollitia ipsum ab atque eius, quod tenetur?'/>

                </div>

                {/* we are going to define the end of the Section ie the important dates and the deadlines */}
                <div className='mt-1 py-3 bg-white px-5 border rounded-md'>
                <div className='text-md lg:text-md text-gray-900 font-semibold'><a href="hackathon/detail/2">What are the important dates and Deadlines?</a></div>
                <div className='mt-5'>
                    <EventWidget imageUrl="" eventName='Impression' eventNo='1000'/>
                </div>

                  {/* contact details of the organiser */}
                  <div className='text-md text-gray-900 font-semibold mt-5'><a href="hackathon/detail/2">Contact the Organiser</a></div>
                  <div className='mt-5'>
                      <EventWidget imageUrl="" eventName='Impression' eventNo='1000'/>
                  </div>
                </div>
                </div>
              
              </div>
            </div>

            {/* we are going to define the Quick Asked qustions for the hackathon */}
            <div className='w-full bg-blue-50'>
             <QuickQuestion />
            </div>

            <div>
              <Footer />
            </div>
        </div>      
    </div>
  )
}

export default HackathonDetails;