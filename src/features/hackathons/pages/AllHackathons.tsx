import React, { useEffect, useState } from "react";
import NavBar from "../../../components/navBars/NavBar";
import Footer from "../../../components/navBars/Footer";
import SearchBarComponent from "../../../components/SearchBar/SearchBarComponent";
import FilterCardsComponent from "../../../components/filters/FilterCards";
import SortCardsComponents from "../../../components/filters/SortCards";
import ChatAssistant from "../../../components/chatAssistant/ChatAssistant";
import "../../../style.css";
import { useLocation, useNavigate } from "react-router-dom";
import HackathonFeaturedCard from "../components/HackathonCards/FeaturedCard";
import { hackathonsDetail } from "../data/data";

interface Hackathon {
  id: string;
  postedBy: string;
  name: string;
  organisedBy: string;
  location: string;
  level: string;
  prizes: string;
  entryFee: number;
  venue: string;
  dateOfPosting: Date;
  problemStatement: string[];
  pictures: string[];
  mode: string;
  lastDateToApply: Date;
  techStackRequired: string[];
  conditions: string[];
  description: string;
  registerationUrl: string;
  roundDetails: { [index: string]: string }[];
  eventDescription: { [index: string]: string }[];
}
const AllHackathons = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hackathonData, setHackathonData] = useState<Hackathon[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");
  const { state } = location;

  useEffect(() => {
    if (location.state && location.state.hackathonData) {
      try {
        setHackathonData(location.state.hackathonData);
      } catch (err) {
        console.error(err);
      }
    } else {
      // here we are gonna to make the api call
      setHackathonData(hackathonsDetail);
    }
  }, [location.state]);

  useEffect(() => {
  }, [hackathonData]);

  const handleSearch = (e: any) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    // const filteredHackathons = hackathons.filter((hackathon) =>
    // hackathon.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // setHackathons(filteredHackathons);
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
    { text: "Most Relevant", handleClick: handleMostRelevantClick },
    { text: "Submission Date", handleClick: handleSubmissionDateClick },
    { text: "Recently Added", handleClick: handleRecentlyAddedClick },
    { text: "Prize Amount", handleClick: handlePrizeAmountClick },
  ];

  return (
    <div>
      <div>
        <ChatAssistant />
        <NavBar />
        <div className="bg-gray-20">
          {/* this is going to be the body of the All the Hackathons Card */}
          <div className="w-full bg-dark-blue flex justify-center">
            <p className="xl:text-3xl lg:text-2xl text-lg text-white  text-center px-3 xl:py-10 lg:py-8 md:py-5 py-4">
              Join the world's best online and in-person hackathons
            </p>
          </div>
          <div className="my-3">
            <SearchBarComponent
              btnText="Search"
              text="Search all Hackathons"
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
                    noOfResults="  100000"
                    buttons={Sortbuttons}
                  />
                </div>
                {/* we need to define a filter here */}
                <div className="w-full flex flex-col space-y-2 mt-5 h-screen overflow-x-hidden scrollbar">
                  {hackathonData != undefined &&
                    (hackathonData as Hackathon[]).map((hackathon, index) => (
                      <div key={hackathon.id}>
                        <a key={hackathon.id}
                          href={`/hackathon/${encodeURIComponent(
                            hackathon.id
                          )}`}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(
                              `/hackathon/${encodeURIComponent(hackathon.id)}`,
                              {
                                state: {
                                  hackathon: hackathon,
                                  hackathonData: hackathonData,
                                },
                              }
                            );
                          }}
                        >
                          <HackathonFeaturedCard
                            id={hackathon.id}
                            name={hackathon.name}
                            organisedBy={hackathon.organisedBy}
                            level={hackathon.level}
                            prizes={hackathon.prizes}
                            entryFee={hackathon.entryFee}
                            pictures={hackathon.pictures}
                            mode={hackathon.mode}
                            lastDateToApply={hackathon.lastDateToApply}
                            techStackRequired={hackathon.techStackRequired}
                            conditions={hackathon.conditions}
                            description={hackathon.description}
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

export default AllHackathons;
