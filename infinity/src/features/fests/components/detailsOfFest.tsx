import React from "react";
import EventWidget from "../../hackathons/components/component/EventWidget";
import { festDetails } from "../data/data";
import FestImage from "../../../assets/images/hackathon.png";
import EventsDescriptionList from "../../hackathons/components/component/EventsDescriptionList";
import EventsDescription from "../../hackathons/components/component/EventsDescription";
import Tags from "../../hackathons/components/component/Tags";
import { useNavigate } from "react-router-dom";

interface DetailedFest {
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
  eventsDetail: string[];
  registerationUrl: string;
  city: string;
  venue: string;
  chiefGuests: string[];
  dressCode: string;
  perks: string[];
  organisedUnder: string[];
}

interface DetailsOfFest {
  festData: DetailedFest;
}

export const DetailsOfFest: React.FC<DetailsOfFest> = ({ festData }) => {
  if (!festData) {
    return <div>Loading... </div>;
  }
  const navigate = useNavigate();
  const navigateDetail = (festId: string, festData: DetailedFest) => {
    navigate(`/fest/detail/${encodeURIComponent(festId)}`, {
      state: { festData },
    });
  };
  return (
    <div>
      <div className="w-full mt-1 bg-blue-50 h-auto flex-col  rounded-md">
        <div className="w-full bg-white rounded-md px-5 py-5 flex">
          <div className="sm:w-1/5 w-1/3 bg-black rounded-md overflow-hidden sm:h-auto h-[80px]">
            <img src={FestImage} className="w-full object-cover" />
          </div>
          <div className="w-full flex flex-col md:ml-5 ml-3">
            <p className="text-xl md:text-2xl xl:text-3xl font-bold ">
              <a
                href={`/hackathon/detail/${encodeURIComponent(festData.id)}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateDetail(festData.id, festData);
                }}
              >
                {festData.eventname}
              </a>
            </p>
            <p className="text-sm md:text-md  mt-2 text-blue-500 font-semibold">
              <a href="https://www.gjust.ac.in/">{festData?.description}</a>
            </p>
            <div className="flex flex-row space-x-5 text-sm mt-2">
              <p className="text-sm md:text-md font-gray-600 font-bold">
                Mode: <span className=" font-normal">{festData.mode}</span>
              </p>
              <p className="text-sm md:text-md font-gray-600 font-bold">
                City: <span className="font-normal">{festData.city}</span>
              </p>
            </div>
          </div>
        </div>
        {/* we are going to define the tags that may be of the hacakthon */}
        <div className="pl-5 pb-4 bg-white">
          <Tags
            tagList={[
              "#techFest",
              "Gju",
              "#TechFest",
              "Guru Jambheshwar University",
            ]}
          />
        </div>
        <hr className="" />
        {/* now we are going to define the options to options to the user to register for the hackathons */}
        <div className="w-full bg-white flex justify-between lg:px-5 px-3  flex-wrap py-3">
          <div className="flex md:space-x-4 space-x-2 xl:space-x-6 pt-2 md:pt-0">
            <button className="px-1 md:px-2 lg:px-3 py-2 border text-md rounded-md hover:bg-blue-500 text-sm md:text-md hover:text-white text-sm md:text-md lg:tex-lg">
              Watchlist
            </button>
            <button className="lg:px-3 px-1 md:px-2 py-2 border text-md rounded-md hover:bg-blue-500 text-sm md:text-md hover:text-white lg:tex-lg">
              Calender
            </button>
          </div>
          <div className="flex items-center space-x-5  pt-2 md:pt-0">
            <div>
              <p className="lg:text-md  text-md font-medium ">
                Entry Fee:{" "}
                <span className="font-normal pl-1">${festData.entryFee}</span>
              </p>
            </div>
            <div>
              <a
                className="md:px-5 px-3 py-2 bg-blue-200 hover:bg-blue-500 rounded-sm text-sm md:text-md lg:tex-lg text-black hover:text-white"
                href={festData.registerationUrl}
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full rounded-md bg-white  border mt-1">
            <div className="lg:w-full md:w-5/6 w-full flex p-4 justify-between">
            <EventWidget
          imageUrl=""
          heading="Posted By"
          value={festData.postedBy}
        />
        <EventWidget imageUrl="" heading="city" value={festData.city} />
        <EventWidget
          imageUrl=""
          heading="Total Seats"
          value={String(festData.totalSeats)}
        />
            </div>
      </div>

      {/* this is going to be the Eligiblity Area */}
      {/* <div className='flex-col flex border bg-white rounded-md my-1 px-3 py-2'>
                <a href="/hackathon/detail/2" className=' text-md xl:text-lg font-semibold'>dressCode: </a>
                <a href="/hackathon/detail/2" className='text-sm lg:text-sm 2xl:text-md font-gray-50'>{festData.dressCode}</a>
              </div> */}

      {/* we are going to define the steps in the Hackathon */}
      <div className="border rounded-md px-3 bg-white py-2 mt-1">
        <div>
          <div className="sm:text-lg text-md xl:text-xl font-semibold">
            Perks:
          </div>
          <div className="">
            {festData.perks?.map((perks, index) => {
              return (
                <div key={index} className="flex items-center mb-1 pl-4">
                  <span className="bg-gray-500 w-2 h-2 rounded-full mr-2"></span>
                  <div className=" text-sm lg:text-sm 2xl:text-md font-gray-50 font-normal">
                    {perks}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border rounded-md bg-white mt-1 py-3 px-5">
        <div className="text-md sm:text-lg xl:text-xl font-semibold">
          <a
            href={`/hackathon/detail/${encodeURIComponent(festData.id)}`}
            onClick={(e) => {
              e.preventDefault();
              navigateDetail(festData.id, festData);
            }}
          >
            {" "}
            All that you need to know about Code Playground
          </a>
        </div>
        <div className="flex items-center mt-2 pl-4">
          <span className="bg-gray-500 w-2 h-2 rounded-full mr-2"></span>
          <div className="">
            <div className="font-bold text-gray-900 text-sm lg:text-md ">Venue:</div>
            <div className="text-sm lg:text-md text-gray-500 pl-1">
              {festData.venue}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1 py-3 bg-white px-5 border rounded-md">
        <div>
          <p className="text-md sm:text-lg xl:text-xl font-semibold">
            Round Details:
          </p>
        </div>
        <div>
          {festData?.eventsDetail?.map((event, index) => {
            const [heading, description] = Object.entries(event)[0];
            console.log(heading, description);
            return (
              <div key={index} className="flex items-start mb-1 pl-4">
                <span className="bg-gray-500 w-2 h-2 rounded-full mr-2 mt-3"></span>
                <EventsDescription
                  key={index}
                  description={description}
                  heading={heading}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-1 py-3 bg-white px-5 border rounded-md">
        <div className="text-md lg:text-lg text-gray-900 font-semibold">
          <a
            href={`/hackathon/detail/${encodeURIComponent(festData.id)}`}
            onClick={(e) => {
              e.preventDefault();
              navigateDetail(festData.id, festData);
            }}
          >
            What are the important dates and Deadlines?
          </a>
        </div>
        <div className="mt-5 flex flex-col space-y-3">
          <EventWidget
            imageUrl=""
            heading="Date of Posting"
            value={String(festData.dateofPosted?.toLocaleDateString())}
          />
          <EventWidget
            imageUrl=""
            heading="Last Date to Apply"
            value={String(festData.lastDateToApply?.toLocaleDateString())}
          />
        </div>
      </div>

      <div className="mt-1 py-3 bg-white px-5 border rounded-md">
        <div>
          <div className="text-md text-gray-900 font-semibold">
            <a
              href={`/hackathon/detail/${encodeURIComponent(festData.id)}`}
              onClick={(e) => {
                e.preventDefault();
                navigateDetail(festData.id, festData);
              }}
              className="font-semibold text-lg "
            >
              Contact the Organiser
            </a>
          </div>
          <div className="flex flex-col mt-1 ">
            <div className="flex pl-4">
              <p className="text-sm text-gray-700 font-semibold">
                Name:{" "}
                <span className="font-normal text-gray-500 pl-1">
                  {festData.organiser}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-1 ">
            <div className="flex pl-4">
              <p className="text-sm text-gray-700 font-semibold">
                contact:{" "}
                <span className="font-normal text-gray-500 pl-1">
                  {festData.queryContacts}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-md text-gray-900 font-semibold mt-2">
            <a
              href={`/hackathon/detail/${encodeURIComponent(festData.id)}`}
              onClick={(e) => {
                e.preventDefault();
                navigateDetail(festData.id, festData);
              }}
              className="font-semibold text-lg "
            >
              Chief Guests
            </a>
          </div>
          <div className="flex flex-col mt-1">
            {festData.chiefGuests?.map((guest, index) => {
              return (
                <div className="flex pl-4">
                  <p className="text-sm text-gray-700 font-semibold">
                    Name:{" "}
                    <span className="font-normal text-gray-500 pl-1">
                      {guest}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
