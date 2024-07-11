import React from 'react'
import NavBar from '../../../components/navBars/NavBar'
import Footer from '../../../components/navBars/Footer'
import DetailedHackathon from '../../../components/Cards/DetailedHackathon'
import SearchBarComponent from '../../../components/SearchBar/SearchBarComponent'
import FilterCardsComponent from '../../../components/filters/FilterCards'
import SortCardsComponents from '../../../components/filters/SortCards'
import ChatAssistant from '../../../components/chatAssistant/ChatAssistant'
import '../../../style.css'

const handleMostRelevantClick=()=>{

}

const handleSubmissionDateClick= ()=>{

}

const handleRecentlyAddedClick= ()=>{

}

const handlePrizeAmountClick =()=>{

}

const AllHackathons = () => {
   
    const Sortbuttons = [
        { text: 'Most Relevant', handleClick: handleMostRelevantClick },
        { text: 'Submission Date', handleClick: handleSubmissionDateClick },
        { text: 'Recently Added', handleClick: handleRecentlyAddedClick },
        { text: 'Prize Amount', handleClick: handlePrizeAmountClick },
      ];
  return (
    // here we are going to create the Schema of the All the Hackathons CARDS
    <div>
      <div>
        <ChatAssistant />
        <NavBar />
            <div className='bg-gray-20'>
                {/* this is going to be the body of the All the Hackathons Card */}
                <div className='w-full bg-dark-blue flex justify-center'>
                    <p className="xl:text-3xl lg:text-2xl md:text-lg text-md text-white xl:py-10 lg:py-8 md:py-5 py-4">Join the world's best online and in-person hackathons</p>
                </div>
                <div className='my-3'>
                     <SearchBarComponent btnText='Search' text='Search all Hackathons'/>
                </div>
                <div className='my-3'>
                    <hr />
                </div>
                <div className='flex xl:mx-20 lg:mx-15 md:mx-7 mx-5 my-10'>
                    <div className='w-1/5 hidden lg:flex h-screen'>
                        <div className='relative'>
                            <aside className='sticky top-0'>
                                <FilterCardsComponent />
                            </aside>
                        </div>
                    </div>
                    <div className='lg:w-4/5'>
                        <div>
                            <div className=''>
                                <SortCardsComponents noOfResults='100000 Results Found' buttons= {Sortbuttons}/>
                            </div>
                            {/* we need to define a filter here */}
                            <div className='w-full flex flex-col space-y-2 mt-5 h-screen overflow-x-hidden scrollbar'>
                               <a href="/hackathon/2"><DetailedHackathon /></a>
                               <a href="/hackathon/4"><DetailedHackathon /></a>
                               <a href="/hackathon/5"><DetailedHackathon /></a>
                               <a href="/hackathon/6"><DetailedHackathon /></a>
                               <a href="/hackathon/7"><DetailedHackathon /></a>
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

export default AllHackathons
