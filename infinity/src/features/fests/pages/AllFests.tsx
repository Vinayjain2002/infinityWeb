import React from 'react'
import Footer from '../../../components/navBars/Footer'
import NavBar from '../../../components/navBars/NavBar'
import ChatAssistant from '../../../components/chatAssistant/ChatAssistant';
import SearchBarComponent from '../../../components/SearchBar/SearchBarComponent';
import FilterCardsComponent from '../../../components/filters/FilterCards';
import SortCardsComponents from '../../../components/filters/SortCards';
import DetailedFests from '../../../components/Cards/DetailedFests';

const handleMostRelevantClick=()=>{

}


const handleRecentlyAddedClick= ()=>{

}

const handleEntryAmountClick =()=>{

}
const LastDateToApply= ()=>{

}
const AllFests = () => {
  const Sortbuttons = [
    { text: 'Most Relevant', handleClick: handleMostRelevantClick },
    { text: 'Recently Added', handleClick: handleRecentlyAddedClick },
    { text: 'Prize Amount', handleClick: handleEntryAmountClick },
    {text: 'Last Date To Apply', handleClick: LastDateToApply}
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
                    <p className=" xl:text-3xl lg:text-2xl md:text-lg text-md text-white xl:py-10 lg:py-8 md:py-5 py-4">Join the Fests All Around India.</p>
                </div>
                <div className='my-3'>
                     <SearchBarComponent btnText='Search' text='Search all Fests'/>
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
                                <SortCardsComponents noOfResults='100 Results Found' buttons= {Sortbuttons}/>
                            </div>
                            {/* we need to define a filter here */}
                            <div className='w-full flex flex-col space-y-2 mt-5'>
                               <a href="/fest/2"><DetailedFests /></a>
                               <a href="/fest/4"><DetailedFests /></a>
                               <a href="/fest/5"><DetailedFests /></a>
                               <a href="/fest/6"><DetailedFests /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
      </div>
    </div>
  
  );
}

export default AllFests;