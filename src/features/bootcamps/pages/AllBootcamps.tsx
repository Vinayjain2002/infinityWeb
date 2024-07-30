import React, { useEffect, useState } from "react";
import ChatAssistant from "../../../components/chatAssistant/ChatAssistant";
import NavBar from "../../../components/navBars/NavBar";
import SearchBarComponent from "../../../components/SearchBar/SearchBarComponent";
import FilterCardsComponent from "../../../components/filters/FilterCards";
import SortCardsComponents from "../../../components/filters/SortCards";
import Footer from "../../../components/navBars/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { bootCampDetail } from "../data/data";
import BootCampFeaturedCard from "../components/components/FeaturedCard";


interface BootCampData {
  id: string;
  postedBy: string;
  name: string;
  mode: string;
  dateOfEvent: Date;
  lastDateToApply: Date;
  dateOfPosted: Date;
  entryFee: number;
  totalSeats: number;
  description: string;
  hasTags: string[];
  queryContacts: string[];
  organiser: string[];
  eventsDetail: string[];
  organisedUnder: string[];
  registerationUrl: string;
  hostedOn: string;
  perks: string[];
  certificationProvided: Boolean;
  prerequisite: string[];
  tutor: string[];
  duration: number;
  techStack: string[];
}

const AllBootcamps = () => {
  const navigate = useNavigate();
  const location= useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");
  const [bootCampData, setBootCampData] = useState(bootCampDetail);
  const {state}= location;

  useEffect(() => {
    if (location.state && location.state.bootCampData) {
      try {
        console.log("Hackathon Data is going", location.state.bootCampData);
        setBootCampData(location.state.bootCampData);
        console.log("set State hook", bootCampData);
      } catch (err) {
        console.error(err);
      }
    }
    else{
      // here we are gonna to make the api call
      setBootCampData(bootCampDetail)
    }
  }, [location.state]);

  useEffect(() => {
    console.log("Hackathon Data:", bootCampData);
  }, [bootCampData]);

  const handleSearch = (e: any) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredBootcamp = bootCampDetail.filter((bootcamp) =>
      bootcamp.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBootCampData(filteredBootcamp);
  };

  const handleMostRelevantClick = () => {};
  const handleDateToApplyClick = () => {};

  const handleRecentlyAddedClick = () => {};

  const handleCertificateClick = () => {};

  const Sortbuttons = [
    { text: "Most Relevant", handleClick: handleMostRelevantClick },
    { text: "Apply Date", handleClick: handleDateToApplyClick },
    { text: "Recently Added", handleClick: handleRecentlyAddedClick },
    { text: "Certificates", handleClick: handleCertificateClick },
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
            <p className="xl:text-3xl lg:text-2xl text-lg text-white xl:py-10 lg:py-8 md:py-5 py-4">
              Join the best knowledgeable Bootcamps
            </p>
          </div>
          <div className="my-3">
            <SearchBarComponent
              btnText="Search"
              text="Search all Bootcamps"
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
                    noOfResults="  10000"
                    buttons={Sortbuttons}
                  />
                </div>
                {/* we need to define a filter here */}
                <div className="w-full flex flex-col space-y-2 mt-5 h-screen overflow-x-hidden scrollbar">
                  {bootCampData!=undefined &&
                    (bootCampData as BootCampData[]).map((bootcamp, index) => (
                      <div key={index}>
                        <a
                          href={`/bootcamp/${encodeURIComponent(bootcamp.id)}`}
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(
                              `/bootcamp/${encodeURIComponent(bootcamp.id)}`,
                              {
                                state: {
                                  bootCamp: bootcamp,
                                  bootCampData: bootCampData
                                 },
                              }
                            );
                          }}
                        >
                          <BootCampFeaturedCard
                            id={bootcamp.id}
                            name={bootcamp.name}
                            mode={bootcamp.mode}
                            entryFee={bootcamp.entryFee}
                            totalSeats={bootcamp.totalSeats}
                            description={bootcamp.description}
                            hasTags={bootcamp.hasTags}
                            organiser={bootcamp.organiser}
                            prerequisite={bootcamp.prerequisite}
                            duration={bootcamp.duration}
                            techStack={bootcamp.techStack}
                            lastDateToApply={bootcamp.lastDateToApply}
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

export default AllBootcamps;
