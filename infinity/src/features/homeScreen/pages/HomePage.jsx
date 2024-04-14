import React from 'react'
import NavBar from '../../../components/navBars/NavBar'
import HackathonCard from '../../../components/Cards/HackathonCard'
import HomeMainBanner from '../components/HomeMainBanner';
// import NearByEvents from '../components/NearByEvents';
import Footer from '../../../components/navBars/Footer'

const HomePage = () => {
  return (
    <div>
        <NavBar />
       <HomeMainBanner />
        <div className='flex justify-center mt-5'>
            <div className='flex w-4/5 justify-center'>
                <div className='w-3/5'>
                    <input className='w-full px-3 py-2 border border-gray-500 rounded-md  focus:outline-none focus:border-gray-500 text-sm' placeholder='Find your next Hackathon'></input>
                </div>
                  <div className='h-full ml-5'>
                    <button className='bg-blue-500 text-white text-sm font-semibold lg:px-5 md:px-3 px-2 lg:py-3  py-2 hover:bg-blue-600 focus:outline-none rounded-sm'>Search Hackathons</button>
                  </div>
              </div>
        </div>
          <div>
          <div className='flex flex-col md:flex-row justify-between mx-10 mt-10'>
              <div className=' w-full text-2xl'>
                <p className='font-bold md:text-md lg:text-xl text-2xl'>Hackathons for You</p>
                <div className='md:w-4/5 w-full'>
                  <HackathonCard />
                  <HackathonCard />
                  <HackathonCard />
                </div>
              </div>
                <div className='hidden md:flex md:w-2/5 lg:w-2/5 text-2xl'>
                  <p className='font-bold  text-md'>Top Hackathons Theme</p>
                </div>
            </div>
            <div className='w-full flex justify-center mt-5'>
                <button className='px-3 py-2 bg-blue-500 text-white text-sm font-semibold px-5 py-3 hover:bg-blue-600 focus:outline-none rounded-sm'>View All Hackathons</button>
            </div>
          </div>

          {/* now we are going to tell the user abt the upcoming fests */}
          <div className='bg-hover-blue mt-10 pt-10'>
            <div className='flex flex-col mx-10'>
            <div className='flex-row flex justify-between'>
                    <div><p className='2xl:text-4xl xl:text-3xl lg:text-2xl text-xl text-white font-semibold lg:font-normal'>Featured Fests</p></div>
                    <div>
                      <button className='px-3 py-2 bg-white rounded-sm text-blue-700 ml-1/5 text-xs md:text-md xl:text-lg font-semibold lg:font-normal'>Browse different Fests</button>
                    </div>
                  </div>
                  <div className=' w-full mr-5 mt-2'>
                      <div className='w-full flex md:flex-row space-x-2 flex-col'>
                          <div className='md:w-4/5'>
                            <HackathonCard/>
                            <HackathonCard />
                            </div>
                          <div className='md:w-4/5'>
                            <HackathonCard/>
                            <HackathonCard />
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
                      <button className='px-3 py-2 bg-white rounded-sm text-blue-700 ml-1/5 text-xs md:text-md xl:text-lg font-semibold lg:font-normal'>Browse different Bootcamps</button>
                    </div>
                  </div>
                  <div className=' w-full mr-5 mt-2 '>
                      <div className='w-full flex md:flex-row space-x-2 flex-col'>
                          <div className='md:w-4/5'>
                            <HackathonCard/>
                            <HackathonCard />
                          </div>
                          <div className='md:w-4/5'>
                            <HackathonCard/>
                            <HackathonCard />
                            </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* now we are going to define the last functality of the webpage which is the getting the no of the hackathons, fests nearby */}
          {/* <NearByEvents /> */}

          {/* now we are going to define the footer of the webpage */}
          <Footer />
    </div>
  );
}

export default HomePage;
