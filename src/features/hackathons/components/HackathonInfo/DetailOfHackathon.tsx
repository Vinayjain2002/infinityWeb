import React from "react";
import hackathonImage from "../../../../assets/images/hackathon.png";
import { useNavigate } from "react-router-dom";
import RoundDetails from "../component/RoundDetails";
import EventsDescription from "../component/EventsDescription";
import EventsDescriptionList from "../component/EventsDescriptionList";
import EventWidget from "../component/EventWidget";
import Tags from "../component/Tags";

//we may used to add the tags and the prizes inside it

interface HackathonData {
  id: string;
  name: string;
  organisedBy: string;
  location: string;
  level: string;
  registerationUrl:string;
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
  roundDetails: { [index: string]: string }[];
  eventDescription: { [index: string]: string }[];
}

interface DetailOfHackathonProps {
  hackathonData: HackathonData;
}

export const HackathonDetailInfo: React.FC<DetailOfHackathonProps> = ({
  hackathonData,
}) => {
  if (!hackathonData) {
    return <div>Loading...</div>; // or a loading indicator of your choice
  }
  const navigate = useNavigate();
  const navigateDetail = (
    hackathonId: string,
    hackathonData: HackathonData
  ) => {
    navigate(`/hackathon/detail/${encodeURIComponent(hackathonId)}`, {
      state: { hackathonData },
    });
  };
  return (
    <div>
      <div className="w-full mt-1 bg-blue-50 h-auto flex-col  rounded-md">
        <div className="w-full bg-white rounded-md px-5 py-5 flex">
          <div className="sm:w-1/5 w-1/3 bg-black rounded-md overflow-hidden sm:h-auto h-[80px]">
            <img src={hackathonImage} className="w-full object-cover" />
          </div>
          <div className="w-full flex flex-col md:ml-5 ml-3">
            <p className="text-xl md:text-2xl xl:text-3xl font-bold">
              <a
                href={`/hackathon/detail/${encodeURIComponent(
                  hackathonData.id
                )}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateDetail(hackathonData.id, hackathonData);
                }}
              >
                {hackathonData.name}
              </a>
            </p>
            <p className="text-sm md:text-md  mt-2 text-blue-500 font-semibold">
              <a href="https://www.gjust.ac.in/">{hackathonData.description}</a>
            </p>
            <div className="flex flex-row space-x-5 text-sm mt-2">
              <p className="text-sm md:text-md text-gray-600 font-bold">
                Mode: <span className="font-normal">{hackathonData.mode}</span>
              </p>
              <p className="text-sm md:text-md text-gray-600 font-bold">
                Location:{" "}
                <span className="font-normal">{hackathonData.location}</span>
              </p>
              <p className="text-sm md:text-md text-gray-600 font-bold">
                Level:{" "}
                <span className="font-normal">{hackathonData.level}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="pl-5 bg-white">
          {/* <Tags tagList={hackathonData.Tags} /> */}
        </div>
        <hr className="pt-5 bg-white" />
        <div className="w-full bg-white flex justify-between lg:px-5 px-3 pb-2 flex-wrap">
          <div className="flex md:space-x-4 space-x-2 xl:space-x-6 pt-2 md:pt-0">
            <button className="px-1 md:px-2 lg:px-3 py-2 border text-md rounded-md hover:bg-blue-500 hover:text-white text-sm md:text-md lg:tex-lg">
              Watchlist
            </button>
            <button className="lg:px-3 px-1 md:px-2 py-2 border text-md rounded-md hover:text-white hover:bg-blue-500 text-sm md:text-md lg:tex-lg">
              Calender
            </button>
          </div>
          <div className="flex items-center space-x-5 pt-2 md:pt-0">
            <div>
              <p className="lg:text-md font-medium text-md">
                Entry Fee:
                <span className="font-normal pl-1">
                  ${hackathonData.entryFee}
                </span>
              </p>
            </div>
            <div>
              <a
                className="md:px-5 px-3 py-2 bg-blue-200 hover:bg-blue-500 rounded-sm text-sm md:text-md lg:tex-lg text-black hover:text-white"
                href={hackathonData.registerationUrl}
              >
                Register
              </a>
            </div>
          </div>
        </div>

        <div className="flex-col flex border bg-white rounded-md my-1 px-3 py-2">
          <a
            href={`/hackathon/detail/${encodeURIComponent(hackathonData.id)}`}
            onClick={(e) => {
              e.preventDefault();
              navigateDetail(hackathonData.id, hackathonData);
            }}
            className="sm:text-lg text-md xl:text-xl font-semibold"
          >
            Eligiblity
          </a>
          <a
            href={`/hackathon/detail/${encodeURIComponent(hackathonData.id)}`}
            onClick={(e) => {
              e.preventDefault();
              navigateDetail(hackathonData.id, hackathonData);
            }}
            className="text-sm lg:text-sm 2xl:text-md font-gray-50"
          >
            <ul className="flex flex-col md:mt-1">
              {hackathonData?.conditions?.map((condition, index) => (
                <li key={index} className="flex items-center mb-1  pl-4">
                  <span className="bg-gray-500 w-2 h-2 rounded-full mr-2"></span>
                  <p>{condition}</p>
                </li>
              ))}
            </ul>
          </a>
        </div>

        <div className="border rounded-md px-3 bg-white py-2">
          <div className="text-lg text-neutral-800 font-bold">
            <a
              href={`/hackathon/detail/${encodeURIComponent(hackathonData.id)}`}
              onClick={(e) => {
                e.preventDefault();
                navigateDetail(hackathonData.id, hackathonData);
              }}
            >
              {/* here we are gonna to define the detail of the Tech Stack Req */}
              <div>
                <p className="text-md sm:text-lg xl:text-xl font-semibold">
                  Tech Stack Required:
                </p>
                <div>
                  <ul className="md:mt-1">
                    {hackathonData?.techStackRequired?.map(
                      (techStack, index) => (
                        <div className="flex items-center mb-1 pl-4">
                          <span className="bg-gray-500 w-2 h-2 rounded-full mr-2"></span>
                          <li
                            key={index}
                            className=" text-sm lg:text-sm 2xl:text-md font-gray-50 font-normal "
                          >
                            {techStack}
                          </li>
                        </div>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-1 overflow-hidden rounded-md">
          <div className="border bg-white px-4 py-2 rounded-md">
            <div className="sm:text-lg text-md xl:text-xl font-semibold">
              Problem Statement:
            </div>
            <div className="pl-4  text-sm lg:text-sm 2xl:text-md font-gray-50 font-normal">
              {hackathonData.problemStatement}
            </div>
          </div>
        </div>
        <div className="mt-1 overflow-hidden rounded-md">
          <div className="border bg-white px-4 py-2 rounded-md">
            <div className="text-md sm:text-lg xl:text-xl font-semibold">
              Round Details:
            </div>
            <div>
              {hackathonData.roundDetails &&
                hackathonData?.roundDetails?.map((round, index) => (
                  <div key={index} className="flex items-start mb-1 pl-4">
                    <span className="bg-gray-500 w-2 h-2 rounded-full mr-2 mt-3"></span>
                    <RoundDetails
                      roundDetails={round.roundDetails}
                      roundName={round.roundName}
                      startDate={round.startDate}
                      endDate={round.endDate}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="border rounded-md bg-white mt-1 py-3 px-5">
          <div className="text-md sm:text-lg xl:text-xl font-semibold">
            <a
              href={`/hackathon/detail/${encodeURIComponent(hackathonData.id)}`}
              onClick={(e) => {
                e.preventDefault();
                navigateDetail(hackathonData.id, hackathonData);
              }}
            >
              {" "}
              All that you need to know about Code Playground
            </a>
          </div>
          <div className="text-md xl:text-lg font-semibold">
            {hackathonData?.eventDescription?.map((event, index) => (
              <div key={index} className="flex items-center mb-1 pl-4">
                <span className="bg-gray-500 w-2 h-2 rounded-full mr-2"></span>
                <EventsDescription
                  description={event.description}
                  heading={event.heading}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-1 py-3 bg-white px-5 border rounded-md">
          <div className="text-md sm:text-lg xl:text-xl font-semibold">
            <a
              href={`/hackathon/detail/${encodeURIComponent(hackathonData.id)}`}
              onClick={(e) => {
                e.preventDefault();
                navigateDetail(hackathonData.id, hackathonData);
              }}
            >
              What are the important dates and Deadlines?
            </a>
          </div>
          <div className="mt-5 flex flex-col space-y-2">
            <EventWidget
              imageUrl=""
              heading="Date of Posting"
              value={String(hackathonData.dateOfPosting.toLocaleDateString())}
            />
            <EventWidget
              imageUrl=""
              heading="Last Date to Apply"
              value={String(hackathonData.lastDateToApply.toLocaleDateString())}
            />
          </div>
        </div>

        <div className="mt-1 py-3 bg-white px-5 border rounded-md">
          <div className="text-md sm:text-lg xl:text-xl font-semibold">
            <a
              href={`/hackathon/detail/${encodeURIComponent(hackathonData.id)}`}
              onClick={(e) => {
                e.preventDefault();
                navigateDetail(hackathonData.id, hackathonData);
              }}
              className="font-semibold text-lg "
            >
              Contact the Organiser
            </a>
          </div>
          <div  className="flex items-center mb-1 pl-4 md:ml-1">
                <span className="bg-gray-500 w-2 h-2 rounded-full mr-2"></span>
              <p className="text-sm text-gray-800 font-semibold">
                Name:{" "}
                <span className="font-normal text-gray-700 pl-1">
                  {hackathonData.organisedBy}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};
