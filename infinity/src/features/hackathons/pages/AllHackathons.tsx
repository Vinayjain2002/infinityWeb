import React, { useState } from 'react';
import NavBar from '../../../components/navBars/NavBar';
import Footer from '../../../components/navBars/Footer';
import DetailedHackathon from '../../../components/Cards/DetailedHackathon';
import SearchBarComponent from '../../../components/SearchBar/SearchBarComponent';
import FilterCardsComponent from '../../../components/filters/FilterCards';
import SortCardsComponents from '../../../components/filters/SortCards';
import ChatAssistant from '../../../components/chatAssistant/ChatAssistant';
import '../../../style.css';
import { hackathonsDetail } from '../data/data';
import { useNavigate } from 'react-router-dom';

const AllHackathons = () => {
  const navigate = useNavigate();
  const [hackathons, setHackathons] = useState(hackathonsDetail);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');

  const handleSearch = (e: any) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredHackathons = hackathonsDetail.filter((hackathon) =>
      hackathon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setHackathons(filteredHackathons);
  };

  const handleMostRelevantClick = () => {
    // setSortType('mostRelevant');
    // const sortedHackathons = hackathonsDetail.sort((a, b) => b.prizes - a.prizes);
    // setHackathons(sortedHackathons);
  };

  const handleSubmissionDateClick = () => {
    // setSortType('submissionDate');
    // const sortedHackathons = hackathonsDetail.sort((a, b) => new Date(b.lastDateToApply) - new Date(a.lastDateToApply));
    // setHackathons(sortedHackathons);
  };

  const handleRecentlyAddedClick = () => {
    // setSortType('recentlyAdded');
    // const sortedHackathons = hackathonsDetail.sort((a, b) => new Date(b.dateOfPosting) - new Date(a.dateOfPosting));
    // setHackathons(sortedHackathons);
  };

  const handlePrizeAmountClick = () => {
    // setSortType('prizeAmount');
    // const sortedHackathons = hackathonsDetail.sort((a, b) => b.prizes - a.prizes);
    // setHackathons(sortedHackathons);
  };

  const Sortbuttons = [
    { text: 'Most Relevant', handleClick: handleMostRelevantClick },
    { text: 'Submission Date', handleClick: handleSubmissionDateClick },
    { text: 'Recently Added', handleClick: handleRecentlyAddedClick },
    { text: 'Prize Amount', handleClick: handlePrizeAmountClick },
  ];

  return (
    <div>
      <div>
        <ChatAssistant />
        <NavBar />
        <div className="bg-gray-20">
          {/* this is going to be the body of the All the Hackathons Card */}
          <div className="w-full bg-dark-blue flex justify-center">
            <p className="xl:text-3xl lg:text-2xl md:text-lg text-md text-white xl:py-10 lg:py-8 md:py-5 py-4">
              Join the world's best online and in-person hackathons
            </p>
          </div>
          <div className="my-3">
            <SearchBarComponent
              btnText="Search"
              text="Search all Hackathons"
              onChange={handleSearch}
              value={searchTerm}
            />
          </div>
          <div className="my-3">
            <hr />
          </div>
          <div className="flex xl:mx-20 lg:mx-15 md:mx-7 mx-5 my-10">
            <div className="w-1/5 hidden lg:flex h-screen">
              <div className="relative">
                <aside className="sticky top-0">
                  <FilterCardsComponent />
                </aside>
              </div>
            </div>
            <div className="lg:w-4/5">
              <div>
                <div className="">
                  <SortCardsComponents noOfResults="  100000" buttons={Sortbuttons} />
                </div>
                {/* we need to define a filter here */}
                <div className="w-full flex flex-col space-y-2 mt-5 h-screen overflow-x-hidden scrollbar">
                  {hackathons && hackathons.map((hackathon, index) => (
                    <div key={index}>
                      <a
                        href={`/hackathon/${encodeURIComponent(hackathon.id)}`}
                        key={index}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/hackathon/${encodeURIComponent(hackathon.id)}`, {
                            state: { hackathon },
                          });
                        }}
                      >
                        <DetailedHackathon
                           id={hackathon.id}
                          postedBy={hackathon.postedBy}
                          name={hackathon.name}
                          organisedBy={hackathon.organisedBy}
                          location={hackathon.location}
                          level={hackathon.level}
                          prizes={hackathon.prizes}
                          entryFee={hackathon.entryFee}
                          venue={hackathon.venue}
                          dateOfPosting={hackathon.dateOfPosting}
                          problemStatement={hackathon.problemStatement}
                          pictures={hackathon.pictures}
                          mode={hackathon.mode}
                          lastDateToApply={hackathon.lastDateToApply}
                          techStackRequired={hackathon.techStackRequired}
                          conditions={hackathon.conditions}
                          description={hackathon.description}
                          registerationUrl={hackathon.registerationUrl}
                          roundDetails= {hackathon.roundDetails}
                          eventDescription= {hackathon.eventDescription}
                      />
                    </a>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    );};
                        
export default AllHackathons;  