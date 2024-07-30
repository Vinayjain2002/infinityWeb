import React from "react";
import banner from "../../../../assets/images/hackathon.png";
import Tags from "../../../hackathons/components/component/Tags";
import FestRounds from "../FestRounds";
import EventWidget from "../../../hackathons/components/component/EventWidget";

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
  eventsDetail: {}[];
  registerationUrl: string;
  city: string;
  venue: string;
  chiefGuests: string[];
  dressCode: string;
  perks: string[];
  organisedUnder: string[];
}

export const DetailedFestInfo: React.FC<FestData> = (festDetails) => {
  return (
    <div>
      <div className="border py-4 w-full rounded-md bg-white px-5">
        <div className="w-full flex flex-row">
          <div className="bg-black rounded-md h-20 w-20 overflow-hidden">
            <img src={banner} className="object-cover h-20" />
          </div>
          <div className="flex flex-col ml-4 text-md ">
            <div className="xl:text-3xl lg:text-2xl text-xl font-medium">
              {festDetails.eventname}
            </div>
            <div className="lg:text-md text-sm font-semibold mt-1">
              Venue: <a className="font-normal">{festDetails.venue}</a>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Tags
            tagList={[
              "#TechFest",
              "#Gju",
              "#Brain Storming",
              "#Guru Jambheshwar University",
            ]}
          />
        </div>
      </div>
      {/* we are going to define the portion of the Filters */}
      <div className="mt-1 py-2 sm:block hidden bg-white border rounded-md">
        <ul className="flex md:w-4/5 w-full flex-row justify-between md:px-5 px-5">
          <li className="hover:text-blue-700 text-md font-semibold text-dark-blue">
            <a href="#">Details</a>
          </li>
          <li className="hover:text-blue-700 text-md font-semibold text-dark-blue">
            <a href="#">Dates & Deadlines</a>
          </li>
          <li className="hover:text-blue-700 text-md font-semibold text-dark-blue">
            <a href="#">Prizes</a>
          </li>
          <li className="hover:text-blue-700 text-md font-semibold  text-dark-blue">
            <a href="#">Reviews</a>
          </li>
          <li className="hover:text-blue-700 text-md font-semibold text-dark-blue">
            <a href="#">FAQs & Discussions</a>
          </li>
        </ul>
      </div>
      {/* here we are going to define the details of the details of the events */}
      <div className="mb-1 sm:mt-0 mt-1 rounded-md bg-white overflow-hidden border py-2">
        <div className="">
          <p className="px-5 py-2 text-lg font-bold text-gray-700">
            Round Details:
          </p>
          <hr className="mx-5" />
        </div>
        <div className="pl-5">
          {festDetails.eventsDetail?.map((round, index) => (
            <div key={index} className="flex items-baseline space-x-2 pl-5">
              <div className="w-2 h-2  rounded-full bg-gray-500"></div>
              <FestRounds
                roundDetails={round?.roundDetails}
                roundName={round.roundName}
                startDate={round.startDate}
                endDate={round.endDate}
              />
            </div>
          ))}
        </div>
      </div>
      {/* here we are going to define the details of the dates and the deadlines. */}
      <div className="">
        <div className="mt-1 py-3 bg-white px-5 border rounded-md">
          <div className="text-md xl:text-lg pb-2 text-gray-700 font-bold">
            Important dates and Deadlines?
          </div>
          <hr />
          <div className="mt-2 flex flex-col space-y-5 mt-5">
            <EventWidget
              imageUrl=""
              heading="Date Of Posting"
              value={String(
                festDetails.dateofPosted?.toLocaleDateString()
              )}
            />
            <EventWidget
              imageUrl=""
              heading="Last Date to Apply"
              value={String(
                festDetails.lastDateToApply?.toLocaleDateString()
              )}
            />
          </div>

          {/* contact details of the organiser */}
          <div className="text-md lg:text-lg text-gray-900 font-semibold mt-5">
            Contact the Organiser
          </div>
          <div className="flex flex-col mt-1">
          <div className="flex pl-4">
              <p className="text-sm text-gray-800 font-semibold">
                Name:{" "}
                <span className="font-normal text-gray-700 pl-1">
                  {festDetails.organiser}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
