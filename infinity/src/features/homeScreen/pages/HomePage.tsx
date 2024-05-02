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

const HomePage = () => {
 
  return (
    <div>
      <ChatAssistant />
        <NavBar />
       <HomeMainBanner />
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
          <div className='flex flex-col md:flex-row justify-between mx-10 mt-10'>
              <div className=' w-full text-2xl'>
                <p className='font-bold md:text-md lg:text-xl text-2xl'>Hackathons for You</p>
                <div className='md:w-3/5 w-full'>
                  <a href="/hackathon/2"><HackathonCard heading="Google Ai Hackathons" daysLeft="20 days left" mode="online" imageUrl="vkre" prizes="$50,000 in Prizes" participants="11006 participants" /></a>
                  <a href="/hackathon/3"><HackathonCard heading="Google Ai Hackathons" daysLeft="20 days left" mode="online" imageUrl="vkre" prizes="$50,000 in Prizes" participants="11006 participants" /></a>
                  <a href="/hackathon/4"><HackathonCard heading="Google Ai Hackathons" daysLeft="20 days left" mode="online" imageUrl="vkre" prizes="$50,000 in Prizes" participants="11006 participants" /></a>

                </div>
              </div>
                <div className='hidden md:flex flex-col md:w-2/5 lg:w-2/5 text-2xl'>
                  <p className='font-bold md:text-md lg:text-xl text-2xl'>Top Hackathons Theme</p>
                  <div className='border w-full'>kr</div>
                </div>
            </div>
            <div className='w-full flex justify-center mt-5'>
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
                  <div className=' w-full mr-5 mt-2'>
                      <div className='w-full flex md:flex-row space-x-2 flex-col'>
                          <div className='md:w-4/5'>
                              <a href="/fest/2"><FestCard imageUrl="mfn" description='A hackathon organised by the coders club' festName="Konark" daysLeft="20 Days left" entryFee="$200" location="Hisar" tags={["Fests","Hackathon", "Coding"]}/></a>
                              <a href="/fest/2"><FestCard imageUrl="mfn" description='A hackathon organised by the coders club' festName="Konark" daysLeft="20 Days left" entryFee="$200" location="Hisar" tags={["Fests","Hackathon", "Coding"]}/></a>
                            </div>
                          <div className='md:w-4/5'>
                              <a href="/fest/2"><FestCard imageUrl="mfn" description='A hackathon organised by the coders club' festName="Konark" daysLeft="20 Days left" entryFee="$200" location="Hisar" tags={["Fests","Hackathon", "Coding"]}/></a>
                              <a href="/fest/2"><FestCard imageUrl="mfn" description='A hackathon organised by the coders club' festName="Konark" daysLeft="20 Days left" entryFee="$200" location="Hisar" tags={["Fests","Hackathon", "Coding"]}/></a>
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
                  <div className=' w-full mr-5 mt-2 '>
                      <div className='w-full flex md:flex-row space-x-2 flex-col'>
                          <div className='md:w-4/5'>
                            <a href="/bootcamp/2"><BootCampCard imageUrl="string" name="Web dev" description='A complete guide of the frontened Web development' duration='30 minutes' daysLeft='10 days' mode="online" entryFee='free' techStack={["Html", "Css", "React", "JavaScript"]}/></a>
                            <a href="/bootcamp/3"><BootCampCard imageUrl="string" name="Web dev" description='A complete guide of the frontened Web development' duration='30 minutes' daysLeft='10 days' mode="online" entryFee='free' techStack={["Html", "Css", "React", "JavaScript"]}/></a>
                          </div>
                          <div className='md:w-4/5'>
                              <a href="/bootcamp/3"><BootCampCard imageUrl="string" name="Web dev" description='A complete guide of the frontened Web development' duration='30 minutes' daysLeft='10 days' mode="online" entryFee='free' techStack={["Html", "Css", "React", "JavaScript"]}/></a>
                              <a href="/bootcamp/3"><BootCampCard imageUrl="string" name="Web dev" description='A complete guide of the frontened Web development' duration='30 minutes' daysLeft='10 days' mode="online" entryFee='free' techStack={["Html", "Css", "React", "JavaScript"]}/></a>

                            </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* now we are going to define the last functality of the webpage which is the getting the no of the hackathons, fests nearby */}
          <NearByEvents />

          {/* now we are going to define the footer of the webpage */}
          <Footer />
    </div>
  );
}

export default HomePage;
