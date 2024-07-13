import React from 'react'
import NavBar from '../../../components/navBars/NavBar'
import HackathonCard from '../../../components/Cards/HackathonCard'
import HomeMainBanner from '../components/HomeMainBanner';
// import NearByEvents from '../components/NearByEvents';
import Footer from '../../../components/navBars/Footer'
import NearByEvents from '../components/NearByEvents';
import ChatAssistant from '../../../components/chatAssistant/ChatAssistant';
import Fest from '../../fests/pages/AllFests';
import FestCard from '../../../components/Cards/FestCard';
import BootCampCard from '../../../components/Cards/BootCampCard';
import FeaturedHackathon from '../components/FeaturedHackathon';
import '../../../style.css'
import { featuredHackathons, hackathons, fests, bootcamps } from '../data/data';

const HomePage = () => {
 
  
  return (
    <div>
      <ChatAssistant />
        <NavBar />
       <HomeMainBanner />
        
        <div className='mb-5'>
        <div className='flex justify-center mt-5'>
              <div className='flex w-4/5 justify-center'>
                  <div className='w-3/5 my-auto'>
                      <input className='w-full px-3 py-2 border border-gray-500 rounded-md  focus:outline-none focus:border-gray-500 text-sm' placeholder='Find your next Hackathon'></input>
                  </div>
                    <div className='h-full ml-5'>
                      <button className='bg-blue-500 text-white text-xs md:text-sm lg:text-md font-semibold lg:px-5 md:px-3 px-2 lg:py-3  py-2 hover:bg-blue-600 focus:outline-none rounded-sm'>Search Hackathons</button>
                    </div>
                </div>
          </div>
            <div>
            <div className='flex flex-col md:flex-row justify-between w-full px-12 h-full space-x-5 mt-10'>
                <div className='w-1/2 text-2xl'>
                    <p className='font-bold  md:text-md lg:text-xl text-2xl mb-3'>Hackathons for You</p>
                    <div className='md:w-full w-full h-[80vh] overflow-y-scroll scrollbar snap-y '>
                      {hackathons.map((hackathon, index) => (
                        <a href={`/hackathon/${hackathon.id}`} key={index}>
                          <div className='w-full h-1/3 p-3 snap-center'>
                            <HackathonCard
                              heading={hackathon.heading}
                              daysLeft={hackathon.daysLeft}
                              mode={hackathon.mode}
                              imageUrl={hackathon.imageUrl}
                              prizes={hackathon.prizes}
                              participants={hackathon.participants}
                            />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className='w-1/2 hidden md:flex flex-col text-2xl'>
                    <p className='font-bold md:text-md lg:text-xl text-2xl mb-3'>Top Hackathons Theme</p>
                    <div className='w-full h-[80vh] overflow-y-scroll scrollbar snap-y'>
                        <ul className='md:w-5/6 w-full space-y-2'>
                            {
                              featuredHackathons.map((hackathon,index)=>(
                               <a href={`/hackathon/hackathon.id`} key={index}>
                                   <li key={index} className='h-1/5 snap-center p-3'>
                                      <FeaturedHackathon
                                      image={hackathon.image}
                                      hackathonName= {hackathon.hackathonName}
                                      prizes= {hackathon.prizes}
                                      lastDate= {hackathon.lastDate}
                                      mode={hackathon.mode}/>
                                </li>
                               </a>
                              ))}
                        </ul>
                    </div>
                  </div>
              </div>
              <div className='w-full flex justify-center mt-10'>
                  <a href="/hackathon" className='px-3 py-2 bg-blue-500 text-white text-md font-semibold px-5 py-3 hover:bg-blue-600 focus:outline-none rounded-sm'>
                    View All Hackathons
                  </a>
              </div>
            </div>

          {/* now we are going to tell the user abt the upcoming fests */}
          <div className='bg-hover-blue mt-10 pt-10'>
            <div className='flex flex-col mx-10'>
            <div className='flex-row flex justify-between'>
                    <div><p className='2xl:text-4xl xl:text-3xl lg:text-2xl text-xl text-white font-semibold lg:font-normal'>Featured Fests</p></div>
                    <div>
                      <a href="/fest" className='px-3 py-3 bg-white rounded-sm text-blue-700 ml-1/5 text-xs md:text-md xl:text-lg font-semibold lg:font-normal'>Browse different Fests</a>
                    </div>
                  </div>
                  <div className=' w-full mr-5 mt-2 mb-3'>
                      <div className='w-full flex md:flex-row space-x-2 flex-col'>
                          <div className='md:w-4/5 h-[60vh] overflow-y-scroll scrollbar snap-y'>
                              <ul className=' w-full space-y-2'>
                                  {
                                    fests.map((fest,index)=>(
                                    <a href={`/fest/fest.id`} key={index}>
                                        <li key={index} className='h-1/2 snap-center p-1'>
                                            <FestCard
                                                imageUrl={fest.imageUrl}
                                                description= {fest.description}
                                                festName= {fest.festName}
                                                daysLeft= {fest.festName}
                                                entryFee={fest.entryFee}
                                                location={fest.location}
                                                tags= {fest.tags}
                                            />
                                      </li>
                                    </a>
                                    ))}
                              </ul>
                            </div>
                          <div className='md:w-4/5 h-[60vh] overflow-y-scroll scrollbar snap-y'>
                              <ul className=' w-full space-y-2'>
                                  {
                                    fests.map((fest,index)=>(
                                    <a href={`/fest/fest.id`} key={index}>
                                        <li key={index} className='h-1/2 snap-center p-1'>
                                            <FestCard
                                                imageUrl={fest.imageUrl}
                                                description= {fest.description}
                                                festName= {fest.festName}
                                                daysLeft= {fest.festName}
                                                entryFee={fest.entryFee}
                                                location={fest.location}
                                                tags= {fest.tags}
                                            />
                                      </li>
                                    </a>
                                    ))}
                              </ul>
                            </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* now we are going to tell the user abt the upcoming Bootcamps*/}
          <div className='bg-hover-blue   pt-10'>
            <div className='flex flex-col mx-10'>
                  <div className='flex-row flex justify-between'>
                    <div><p className='2xl:text-4xl xl:text-3xl lg:text-2xl text-xl text-white font-semibold lg:font-normal'>Featured Bootcamps</p></div>
                    <div>
                      <a href="/bootcamp" className='px-3 py-3 bg-white rounded-sm text-blue-700 ml-1/5 text-xs md:text-md xl:text-lg font-semibold lg:font-normal'>Browse different Bootcamps</a>
                    </div>
                  </div>
                  <div className=' w-full mr-5 mt-2  mb-10 '>
                      <div className='w-full flex md:flex-row space-x-2 flex-col'>
                        <div className='md:w-4/5 h-[65vh] overflow-y-scroll scrollbar snap-y'>
                                <ul className=' w-full space-y-2'>
                                    {
                                      bootcamps.map((bootcamp,index)=>(
                                      <a href={`/bootcamp/bootcamp.id`} key={index}>
                                          <li key={index} className='h-1/2 snap-center p-1'>
                                              <BootCampCard
                                                  imageUrl={bootcamp.imageUrl}
                                                  name= {bootcamp.name}
                                                  description= {bootcamp.description}
                                                  duration= {bootcamp.duration}
                                                  daysLeft= {bootcamp.daysLeft}
                                                  mode={bootcamp.mode}
                                                  entryFee={bootcamp.entryFee}
                                                  techStack= {bootcamp.techStack}
                                              />
                                        </li>
                                      </a>
                                      ))}
                                </ul>
                              </div>
                              <div className='md:w-4/5 h-[65vh] overflow-y-scroll scrollbar snap-y'>
                                <ul className=' w-full space-y-2'>
                                    {
                                      bootcamps.map((bootcamp,index)=>(
                                      <a href={`/bootcamp/bootcamp.id`} key={index}>
                                          <li key={index} className='h-1/2 snap-center p-1'>
                                              <BootCampCard
                                                  imageUrl={bootcamp.imageUrl}
                                                  name= {bootcamp.name}
                                                  description= {bootcamp.description}
                                                  duration= {bootcamp.duration}
                                                  daysLeft= {bootcamp.daysLeft}
                                                  mode={bootcamp.mode}
                                                  entryFee={bootcamp.entryFee}
                                                  techStack= {bootcamp.techStack}
                                              />
                                        </li>
                                      </a>
                                      ))}
                                </ul>
                              </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

          {/* now we are going to define the last functality of the webpage which is the getting the no of the hackathons, fests nearby */}
          <div className=''>
              <NearByEvents />

          </div>
          {/* now we are going to define the footer of the webpage */}
          <Footer />
    </div>
  );
}

export default HomePage;
