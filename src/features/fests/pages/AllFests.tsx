import React, { useEffect, useState } from "react";
import Footer from "../../../components/navBars/Footer";
import NavBar from "../../../components/navBars/NavBar";
import ChatAssistant from "../../../components/chatAssistant/ChatAssistant";
import SearchBarComponent from "../../../components/SearchBar/SearchBarComponent";
import FilterCardsComponent from "../../../components/filters/FilterCards";
import SortCardsComponents from "../../../components/filters/SortCards";
import { useLocation, useNavigate } from "react-router-dom";
import FestFeaturedCard from "../components/cards/FeaturedCard";
import { festDetails } from "../data/data";

interface FestData {
  id: string;
  image: string;
  postedBy: string;
  eventname: string;
  mode: string;
  dateofPosted: Date;
  lastDateToApply: Date; 
  entryFee: number;
  totalSeats: number;
  description: string;
  hasTags: string[];
  queryContacts: string[];
  organiser: string[];
  eventsDetail: {
    roundName: string;
    startDate: string;
    endDate: string;
    roundDetails: string;
  }[];
  registerationUrl: string;
  city: string;
  venue: string;
  chiefGuests: string[];
  dressCode: string;
  perks: string[];
  organisedUnder: string[];
}

const AllFests = () => {
  const navigate = useNavigate();
  const location= useLocation();
  const [festData, setFestData] = useState<FestData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    if (location.state && location.state.festData) {
      try {
        console.log("Hackathon Data is going", location.state.festData);
        setFestData(location.state.festData);
        console.log("set State hook", festData);
      } catch (err) {
        console.error(err);
      }
    }
    else{
      setFestData(festDetails);
    }
  }, [location.state]);

  useEffect(() => {
    console.log("Hackathon Data:", festData);
  }, [festData]);
  const handleMostRelevantClick = () => {};

  const handleRecentlyAddedClick = () => {};

  const handleEntryAmountClick = () => {};
  const LastDateToApply = () => {};

  const handleSearch = (e: any) => {
  };
  const Sortbuttons = [
    { text: "Most Relevant", handleClick: handleMostRelevantClick },
    { text: "Recently Added", handleClick: handleRecentlyAddedClick },
    { text: "Prize Amount", handleClick: handleEntryAmountClick },
    { text: "Last Date To Apply", handleClick: LastDateToApply },
  ];
  return (
    // here we are going to create the Schema of the All the Hackathons CARDS
    <div>
      <div>
        <ChatAssistant />
        <NavBar />
        <div className="bg-gray-20">
          {/* this is going to be the body of the All the Hackathons Card */}
          <div className="w-full bg-dark-blue flex justify-center">
            <p className=" xl:text-3xl lg:text-2xl text-lg text-white xl:py-10 lg:py-8 md:py-5 py-4">
              Join the Fests All Around India.
            </p>
          </div>
          <div className="my-3">
            <SearchBarComponent
              btnText="Search"
              text="Search all Fests"
              // onChange={handleSearch}
              // value={searchTerm}
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
                  <SortCardsComponents
                    noOfResults=" 100"
                    buttons={Sortbuttons}
                  />
                </div>
                {/* we need to define a filter here */}
                <div className="w-full flex flex-col space-y-2 mt-5 max-h-screen overflow-x-hidden scrollbar">
                  {festData!=undefined &&
                    (festData as FestData[]).map((fest, index) => (
                      <div key={index}>
                        <a
                          href={`/fest/${encodeURIComponent(fest.id)}`}
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(`/fest/${encodeURIComponent(fest.id)}`, {
                              state: { 
                                fest: fest,
                                festData: festData
                               },
                            });
                          }}
                        >
                          <FestFeaturedCard
                            id={fest.id}
                            image={fest.image}
                            eventname={fest.eventname}
                            lastDateToApply={fest.lastDateToApply}
                            entryFee={fest.entryFee}
                            totalSeats={fest.totalSeats}
                            description={fest.description}
                            hasTags={fest.hasTags}
                            organiser={fest.organiser}
                            city={fest.city}
                            venue={fest.venue}
                            chiefGuests={fest.chiefGuests}
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
  );
};

export default AllFests;
