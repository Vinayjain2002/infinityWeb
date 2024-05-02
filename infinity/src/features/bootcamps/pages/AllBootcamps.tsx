import React from 'react'
import ChatAssistant from '../../../components/chatAssistant/ChatAssistant'
import NavBar from '../../../components/navBars/NavBar'
import SearchBarComponent from '../../../components/SearchBar/SearchBarComponent'
import FilterCardsComponent from '../../../components/filters/FilterCards'
import SortCardsComponents from '../../../components/filters/SortCards'
import DetailedBootcamps from '../../../components/Cards/DetailedBootcamps'
import Footer from '../../../components/navBars/Footer'

const handleMostRelevantClick= ()=>{

}
const handleDateToApplyClick =()=>{

}

const handleRecentlyAddedClick =()=>{

}

const handleCertificateClick =()=>{

}
const AllBootcamps = () => {
   
  const Sortbuttons = [
    { text: 'Most Relevant', handleClick: handleMostRelevantClick },
    { text: 'Apply Date', handleClick: handleDateToApplyClick },
    { text: 'Recently Added', handleClick: handleRecentlyAddedClick },
    { text: 'Certificates', handleClick: handleCertificateClick },
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
                 <SearchBarComponent btnText='Search' text='Search all Bootcamps'/>
            </div>
            <div className='my-3'>
                <hr />
            </div>
            <div className='flex xl:mx-20 lg:mx-15 md:mx-7 mx-5 my-10'>
               <div className='w-1/5 hidden lg:flex h-screen'>
                    <div className='relative'>
                        <aside className='sticky top-0'>
                            <FilterCardsComponent/>
                        </aside>
                    </div>
               </div>
                <div className='lg:w-4/5'>
                    <div>
                        <div className=''>
                            <SortCardsComponents noOfResults='100000 Results Found' buttons= {Sortbuttons}/>
                        </div>
                        {/* we need to define a filter here */}
                        <div className='w-full flex flex-col space-y-2 mt-5'>
                           <a href="/bootcamp/2"><DetailedBootcamps /></a>
                           <a href="/bootcamp/4"><DetailedBootcamps /></a>
                           <a href="/bootcamp/5"><DetailedBootcamps /></a>
                           <a href="/bootcamp/6"><DetailedBootcamps /></a>
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

export default AllBootcamps
