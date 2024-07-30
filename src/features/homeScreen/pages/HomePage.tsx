import React, { useState } from "react";
import NavBar from "../../../components/navBars/NavBar";
import HackathonCard from "../../hackathons/components/HackathonCards/HackathonCard";
import HomeMainBanner from "../components/HomeMainBanner";
import Footer from "../../../components/navBars/Footer";
import NearByEvents from "../components/NearByEvents";
import ChatAssistant from "../../../components/chatAssistant/ChatAssistant";
import FestCard from "../../../components/Cards/FestCard";
import BootCampCard from "../../../components/Cards/BootCampCard";
import FeaturedHackathon from "../components/FeaturedHackathon";
import "../../../style.css";
import { hackathonsDetail } from "../../hackathons/data/data";
import { bootCampDetail } from "../../bootcamps/data/data";
import { festDetails } from "../../fests/data/data";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [hackathonData, setHackathonData] = useState(hackathonsDetail);
  const [festData, setFestData] = useState(festDetails);
  const [bootcampData, setBootcampData] = useState(bootCampDetail);

  return (
    <div>
      <ChatAssistant />
      <NavBar />
      <HomeMainBanner />

      <div className="mb-5">
        <div className="flex justify-center mt-5">
          <div className="flex w-full md:w-4/5 mx-5 justify-center">
            <div className="lg:w-3/5 w-4/5 my-auto">
              <input
                className="w-full px-3 lg:py-3 py-2 border border-gray-500 rounded-md  focus:outline-none focus:border-gray-500 text-sm"
                placeholder="Find your next Hackathon"
              ></input>
            </div>
            <div className="h-full ml-5">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 text-xs md:text-sm lg:text-md font-semibold  hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg lg:px-5 md:px-3 px-2 lg:py-3 py-0.5 text-center me-2"
              >
                Search Hackathons
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-between w-full md:px-12 px-5 h-full space-x-5 mt-10">
            <div className="md:w-1/2 w-full text-2xl">
              <p className="font-bold  md:text-md lg:text-xl text-2xl mb-3">
                Hackathons for You
              </p>
              <div className="md:w-full w-full md:max-h-[80vh] max-h-[70vh] overflow-y-scroll scrollbar snap-y ">
                {hackathonData.map((hackathon, index) => (
                  <a
                    href={`/hackathon/${encodeURIComponent(hackathon.id)}`}
                    key={index}
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
                    <div className="w-full py-1 snap-center">
                      <HackathonCard
                        id={hackathon.id}
                        name={hackathon.name}
                        lastDateToApply={hackathon.lastDateToApply}
                        mode={hackathon.mode}
                        pictures={hackathon.pictures}
                        prizes={hackathon.prizes}
                        entryFee={hackathon.entryFee}
                        description={hackathon.description}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="w-1/2 hidden md:flex flex-col text-2xl">
              <p className="font-bold md:text-md lg:text-xl text-2xl mb-3">
                Top Hackathons Theme
              </p>
              <div className="w-full max-h-[80vh] overflow-y-scroll scrollbar snap-y">
                <ul className="md:w-6/7 w-full">
                  {hackathonData.map((hackathon, index) => (
                    <a
                      href={`/hackathon/${encodeURIComponent(hackathon.id)}`}
                      key={index}
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
                      <li key={index} className="h-1/5 snap-center px-3 py-1">
                        <FeaturedHackathon
                          picture={hackathon.pictures}
                          name={hackathon.name}
                          prizes={hackathon.prizes}
                          lastDateToApply={hackathon.lastDateToApply}
                          mode={hackathon.mode}
                        />
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-5 md:mt-10">
            <a
              href="/hackathon"
              className="px-3 py-2 bg-blue-500 text-white text-md font-semibold px-5 py-3 hover:bg-blue-600 focus:outline-none rounded-sm"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/hackathon`, {
                  state: {
                    hackathonData: hackathonData,
                  },
                });
              }}
            >
              View All Hackathons
            </a>
          </div>
        </div>

        {/* now we are going to tell the user abt the upcoming fests */}
        <div className="bg-hover-blue mt-10 pt-10">
          <div className="flex flex-col md:px-12 px-5">
            <div className="flex-row flex justify-between">
              <div>
                <p className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl text-white font-semibold lg:font-normal">
                  Featured Fests
                </p>
              </div>
              <div>
                <button
                  className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium  rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 focus:outline-none "
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/fest", {
                      state: {
                        festData: festData,
                      },
                    });
                    //we need to defin the logic to navigate to the different page
                  }}
                >
                  <span className="px-5 py-2 transition-all ease-in text-blue-700   text-xs md:text-md xl:text-lg font-semibold lg:font-normal duration-75 bg-white dark:bg-gray-900 hover:text-white dark:text-white   rounded-md group-hover:bg-opacity-0">
                    Browse different Fests
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full h-full space-x-5">
              <div className=" w-full max-h-[60vh] overflow-y-scroll scrollbar snap-y">
                <ul className=" w-full">
                  {festData.map((fest, index) => (
                    <a
                      href={`/fest/${encodeURIComponent(fest.id)}`}
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/fest/${encodeURIComponent(fest.id)}`, {
                          state: {
                            fest,
                            festData: festData,
                          },
                        });
                      }}
                    >
                      <li key={index} className="h-1/2 snap-center p-1">
                        <FestCard
                          mode={fest.mode}
                          id={fest.id}
                          image={fest.image}
                          description={fest.description}
                          eventname={fest.eventname}
                          lastDateToApply={fest.lastDateToApply}
                          entryFee={fest.entryFee}
                          city={fest.city}
                          hasTags={fest.hasTags}
                        />
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
              <div className="w-full max-h-[60vh] hidden md:flex space-y-2  overflow-y-scroll scrollbar snap-y">
                <ul className=" w-full">
                  {festData.map((fest, index) => (
                    <a
                      href={`/fest/${encodeURIComponent(fest.id)}`}
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/fest/${encodeURIComponent(fest.id)}`, {
                          state: {
                            fest,
                            festData: festData,
                          },
                        });
                      }}
                    >
                      <li key={index} className=" snap-center p-1">
                        <FestCard
                          mode={fest.mode}
                          id={fest.id}
                          image={fest.image}
                          description={fest.description}
                          eventname={fest.eventname}
                          lastDateToApply={fest.lastDateToApply}
                          entryFee={fest.entryFee}
                          city={fest.city}
                          hasTags={fest.hasTags}
                        />
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* now we are going to tell the user abt the upcoming Bootcamps*/}
        <div className="bg-hover-blue   pt-10 ">
          <div className="flex flex-col md:px-12 px-5">
            <div className="flex-row flex justify-between">
              <div>
                <p className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl text-white font-semibold lg:font-normal">
                  Featured Bootcamps
                </p>
              </div>
              <div>
                <button
                  className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium  rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 focus:outline-none "
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/bootcamp`, {
                      state: {
                        bootcampData,
                      },
                    });
                    //we need to defin the logic to navigate to the different page
                  }}
                >
                  <span className=" px-5 py-2 transition-all ease-in text-blue-700 z-1   text-xs md:text-md xl:text-lg font-semibold lg:font-normal duration-75 bg-white dark:bg-gray-900 hover:text-white dark:text-white   rounded-md group-hover:bg-opacity-0">
                    Browse different Bootcamps
                  </span>
                </button>
              </div>
            </div>
            <div className=" w-full mr-5 mt-2  mb-10 ">
              <div className="w-full flex md:flex-row space-x-2 flex-col">
                <div className=" w-full max-h-[60vh] overflow-y-scroll scrollbar snap-y">
                  <ul className=" w-full space-y-2">
                    {bootcampData.map((bootcamp, index) => (
                      <a
                        href={`/bootcamp/${encodeURIComponent(bootcamp.id)}`}
                        key={index}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(
                            `/bootcamp/${encodeURIComponent(bootcamp.id)}`,
                            {
                              state: {
                                bootcamp,
                                bootcampData: bootcampData,
                              },
                            }
                          );
                        }}
                      >
                        <li key={index} className=" snap-center p-1">
                          <BootCampCard
                            id={bootcamp.id}
                            image={bootcamp.image}
                            name={bootcamp.name}
                            description={bootcamp.description}
                            duration={bootcamp.duration}
                            lastDateToApply={bootcamp.lastDateToApply}
                            mode={bootcamp.mode}
                            entryFee={bootcamp.entryFee}
                            techStack={bootcamp.techStack}
                            hasTags={bootcamp.hasTags}
                          />
                        </li>
                      </a>
                    ))}
                  </ul>
                </div>
                <div className="w-full max-h-[60vh] hidden md:flex  overflow-y-scroll scrollbar snap-y">
                  <ul className=" w-full space-y-2">
                    {bootcampData.map((bootcamp, index) => (
                      <a
                        href={`/bootcamp/bootcamp.id`}
                        key={index}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(
                            `/bootcamp/${encodeURIComponent(bootcamp.id)}`,
                            {
                              state: {
                                bootcamp,
                                bootcampData: bootcampData,
                              },
                            }
                          );
                        }}
                      >
                        <li key={index} className="snap-center p-1">
                          <BootCampCard
                            id={bootcamp.id}
                            image={bootcamp.image}
                            name={bootcamp.name}
                            description={bootcamp.description}
                            duration={bootcamp.duration}
                            lastDateToApply={bootcamp.lastDateToApply}
                            mode={bootcamp.mode}
                            entryFee={bootcamp.entryFee}
                            techStack={bootcamp.techStack}
                            hasTags={bootcamp.hasTags}
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
      <div className="">
        <NearByEvents />
      </div>
      {/* now we are going to define the footer of the webpage */}
      <Footer />
    </div>
  );
};

export default HomePage;
