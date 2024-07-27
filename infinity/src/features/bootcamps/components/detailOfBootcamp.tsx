import React from "react";
import hackathonImage from "../../../assets/images/hackathon.png";
import { useNavigate } from "react-router-dom";
import EventWidget from "../../hackathons/components/component/EventWidget";

interface bootCampData {
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

interface DetailOfBootcampProps {
  bootCampData: bootCampData;
}
export const DetailOfBootcamp: React.FC<DetailOfBootcampProps> = ({
  bootCampData,
}) => {
  if (!bootCampData) {
    return <div>Loading...</div>;
  }
  const navigate = useNavigate();
  const navigateDetail = (bootcampId: string, bootCampData: bootCampData) => {
    navigate(`/bootcamp/detail/${encodeURIComponent(bootcampId)}`, {
      state: { bootCampData },
    });
  };
  return (
    <div>
      <div className="w-full mt-1 bg-blue-50 h-auto flex-col rounded-md">
        <div className="w-full bg-white rounded-md px-5 py-5 flex">
          <div className="sm:w-1/5 w-1/3 bg-black rounded-md overflow-hidden sm:h-auto h-[80px]">
            <img src={hackathonImage} className="w-full object-cover" />
          </div>
          <div className="w-full flex flex-col md:ml-5 ml-3">
            <p className="text-xl md:text-2xl xl:text-3xl font-bold">
              <a
                href={`/bootcamp/detail/${encodeURIComponent(bootCampData.id)}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateDetail(bootCampData.id, bootCampData);
                }}
              >
                {bootCampData.name}
              </a>
            </p>
            <p className="text-sm md:text-md  mt-2 text-blue-500 font-semibold">
              <a href="https://www.gjust.ac.in/">{bootCampData.description}</a>
            </p>
            <div className="flex flex-row space-x-5 text-sm mt-2">
              <p className="text-sm md:text-md text-gray-600 font-bold">
                Mode: <span className="font-normal">{bootCampData.mode}</span>
              </p>
              <p className="text-sm md:text-md font-gray-600 font-bold">
                Venue:{" "}
                <span className="font-normal">{bootCampData.hostedOn}</span>
              </p>
              <p className="text-sm md:text-md font-gray-600 font-bold">
                Duration:{" "}
                <span className="font-normal">{bootCampData.duration}</span>
              </p>
            </div>
          </div>
        </div>
        {/* we are going to define the tags that may be of the hacakthon */}
        <div className="pl-5 bg-white">
          {/* <Tags tagList={["#bootcamp", "#Unstop", "#Web Deveopment", "#Zoom"]}/> */}
        </div>
        <hr className="pt-5 bg-white" />
        {/* now we are going to define the options to options to the user to register for the hackathons */}
        <div className="w-full bg-white flex justify-between lg:px-5 px-3 pb-2 flex-wrap">
          <div className="flex md:space-x-4 space-x-2 xl:space-x-6 pt-2 md:pt-0">
            <button className="px-1 md:px-2 lg:px-3 py-2 border text-md rounded-md hover:bg-blue-500 hover:text-white text-sm md:text-md lg:tex-lg">
              Watchlist
            </button>
            <button className="lg:px-3 px-1 md:px-2 py-2 border text-md rounded-md hover:bg-blue-500 hover:text-white text-sm md:text-md lg:tex-lg">
              Calender
            </button>
          </div>
          <div className="flex items-center space-x-5  pt-2 md:pt-0">
            <div>
              <p className="lg:text-md  font-medium text-md">
                Entry Fee:
                <span className="font-normal pl-1">
                  ${bootCampData.entryFee}
                </span>
              </p>
            </div>
            <div>
              <a
                href={bootCampData.registerationUrl}
                className="md:px-5 px-3 py-2 bg-blue-200 hover:bg-blue-500 rounded-sm text-sm md:text-md lg:tex-lg text-black hover:text-white"
              >
                Register
              </a>
            </div>
          </div>
        </div>

        <div className="flex-col flex border bg-white rounded-md my-1 px-3 py-2">
          <a
            href={`/bootcamp/detail/${encodeURIComponent(bootCampData.id)}`}
            onClick={(e) => {
              e.preventDefault();
              navigateDetail(bootCampData.id, bootCampData);
            }}
            className="sm:text-md text-md xl:text-xl font-semibold"
          >
            Eligiblity
          </a>
          <a
            href={`/bootcamp/detail/${encodeURIComponent(bootCampData.id)}`}
            onClick={(e) => {
              e.preventDefault();
              navigateDetail(bootCampData.id, bootCampData);
            }}
            className="text-sm lg:text-sm 2xl:text-md font-gray-50"
          >
            <ul className="flex flex-col md:mt-1">
              {bootCampData?.prerequisite?.map((prerequisite, index) => (
                <li key={index} className="flex items-center mb-1 pl-4">
                  <span className="bg-gray-500 w-2 h-2 rounded-full mr-2"></span>
                  <p>{prerequisite}</p>
                </li>
              ))}
            </ul>
          </a>
        </div>
        <div className="flex-col flex border bg-white rounded-md my-1 px-3 py-2">
          <a
            href={`/bootcamp/detail/${encodeURIComponent(bootCampData.id)}`}
            onClick={(e) => {
              e.preventDefault();
              navigateDetail(bootCampData.id, bootCampData);
            }}
            className="sm:text-md text-md xl:text-xl font-semibold"
          >
            Perks:
          </a>
          <a
            href={`/bootcamp/detail/${encodeURIComponent(bootCampData.id)}`}
            onClick={(e) => {
              e.preventDefault();
              navigateDetail(bootCampData.id, bootCampData);
            }}
            className="text-sm lg:text-sm 2xl:text-md font-gray-50"
          >
            <ul className="flex flex-col md:mt-1">
              {bootCampData?.perks?.map((perk, index) => (
                <li key={index} className="flex items-center mb-1 pl-4">
                  <span className="bg-gray-500 w-2 h-2 rounded-full mr-2"></span>
                  <p>{perk}</p>
                </li>
              ))}
            </ul>
          </a>
        </div>

        <div className="flex-col flex border bg-white rounded-md my-1 px-3 py-2">
          <a
            href={`/bootcamp/detail/${encodeURIComponent(bootCampData.id)}`}
            onClick={(e) => {
              e.preventDefault();
              navigateDetail(bootCampData.id, bootCampData);
            }}
            className="sm:text-lg text-md xl:text-xl font-semibold"
          >
            Tutor:
          </a>
          <a
            href={`/bootcamp/detail/${encodeURIComponent(bootCampData.id)}`}
            onClick={(e) => {
              e.preventDefault();
              navigateDetail(bootCampData.id, bootCampData);
            }}
            className="text-sm lg:text-sm 2xl:text-md font-gray-50"
          >
            <ul className="flex flex-col md:mt-1">
              {bootCampData?.tutor?.map((tutor, index) => (
                <li key={index} className="flex items-center mb-1  pl-4">
                  <span className="bg-gray-500 w-2 h-2 rounded-full mr-2"></span>
                  <p>{tutor}</p>
                </li>
              ))}
            </ul>
          </a>
        </div>

        <div>
          {/* {bootCampData.roundDetails &&
                  hackathonData?.roundDetails?.map((round, index) => (
                    <div key={index}>
                      <RoundDetails
                        roundDetails={round.roundDetails}
                        roundName={round.roundName}
                        startDate={round.startDate}
                        endDate={round.endDate}
                      />
                    </div>
                  ))} */}
        </div>
        <div className="border rounded-md bg-white mt-1 py-3 px-5">
          <div className="text-md sm:text-lg xl:text-xl font-semibold">
            <a
              href={`/bootcamp/detail/${encodeURIComponent(bootCampData.id)}`}
              onClick={(e) => {
                e.preventDefault();
                navigateDetail(bootCampData.id, bootCampData);
              }}
            >
              {" "}
              All that you need to know about Code Playground
            </a>
          </div>
          <div className="pl-5 py-1">
            <div className="text-sm mt-1 lg:text-md 2xl:text-lg text-gray-800 font-medium">
              Total No of Seats:{" "}
              <span className=" text-sm lg:text-md 2xl:text-lg text-gray-800 font-normal">
                {bootCampData.totalSeats}
              </span>
            </div>
            <div className="text-sm lg:text-md 2xl:text-lg text-gray-800 font-medium">
              Cetificaton Provided:{" "}
              <span className="text-sm lg:text-md 2xl:text-lg text-gray-800 font-normal">
                {" "}
                {String(bootCampData.certificationProvided)}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-1 py-3 bg-white px-5 border rounded-md">
          <div className="text-md sm:text-lg xl:text-xl font-semibold">
            <a
              href={`/bootcamp/detail/${encodeURIComponent(bootCampData.id)}`}
              onClick={(e) => {
                e.preventDefault();
                navigateDetail(bootCampData.id, bootCampData);
              }}
            >
              What are the important dates and Deadlines?
            </a>
          </div>
          <div className="mt-5 flex flex-col space-y-2">
            <EventWidget
              imageUrl=""
              heading="Date of Event"
              value={String(bootCampData.dateOfEvent?.toLocaleDateString())}
            />
            <EventWidget
              imageUrl=""
              heading="Last Date to Apply"
              value={String(bootCampData.lastDateToApply?.toLocaleDateString())}
            />
            <EventWidget
              imageUrl=""
              heading="Date of Posting"
              value={String(bootCampData.dateOfPosted?.toLocaleDateString())}
            />
          </div>

          <div className="text-md text-gray-900 font-semibold mt-5">
            <a
              href={`/bootcamp/detail/${encodeURIComponent(bootCampData.id)}`}
              onClick={(e) => {
                e.preventDefault();
                navigateDetail(bootCampData.id, bootCampData);
              }}
              className="font-semibold text-lg "
            >
              Contact the Organiser
            </a>
          </div>
          <div className="flex items-center mb-1 pl-4 md:ml-1">
            <span className="bg-gray-500 w-2 h-2 rounded-full mr-2"></span>
            <p className="text-sm text-gray-800 font-semibold">
              Name:{" "}
              <span className="font-normal text-gray-700 pl-1">
                {bootCampData.postedBy}
              </span>
            </p>
          </div>
          <div className="">
            <div className="font-semibold text-lg ">
              Orgnaised Under:
            </div>
            {bootCampData?.organisedUnder?.map((organiser, index) => (
              <div key={index} className="flex items-center mb-1 pl-4">
                <span className="bg-gray-500 w-2 h-2 rounded-full mr-2"></span>
                <span className="text-sm text-gray-800 font-normal text-gray-700">
                  {organiser}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
