import React from 'react'
import hackathonImage from '../../../assets/images/hackathon.png'
import { useNavigate } from 'react-router-dom';
import RoundDetails from './RoundDetails';
import EventsDescription from './EventsDescription';
import EventsDescriptionList from './EventsDescriptionList';
import EventWidget from './EventWidget';

interface HackathonData  {
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

  
interface DetailOfHackathonProps {
  hackathonData: HackathonData;
}

export const DetailOfHackathon: React.FC<DetailOfHackathonProps> = ({ hackathonData }) => {
  if (!hackathonData) {
    return <div>Loading...</div>; // or a loading indicator of your choice
  }
  const navigate = useNavigate();
    const navigateDetail = (hackathonId: string, hackathonData: HackathonData) => {
        navigate(`/hackathon/detail/${encodeURIComponent(hackathonId)}`, {
          state: { hackathonData },
        });
      };
    return (
    <div>
         <div className="w-full mt-1 bg-white h-auto flex-col border rounded-md">
              <div className="w-full px-5 py-5 flex">
                <div className="w-1/5 bg-black rounded-md overflow-hidden max-h-25">
                  <img src={hackathonImage} className="h-25" />
                </div>
                <div className="w-4/5 flex flex-col ml-3">
                  <p className="text-lg md:text-xl xl:text-2xl font-bold">
                    <a href={`/hackathon/detail/${encodeURIComponent(hackathonData.id)}`} onClick={(e) => {
                      e.preventDefault();
                      navigateDetail(hackathonData.id, hackathonData);
                    }}>
                      {hackathonData.name}
                    </a>
                  </p>
                  <p className="text-sm md:text-md mt-2 text-blue-500 font-semibold">
                    <a href="https://www.gjust.ac.in/">{hackathonData.description}</a>
                  </p>
                  <div className="flex flex-row space-x-5 text-sm mt-2">
                    <p className="text-sm md:text-md text-gray-600 font-bold">Mode: <span className='font-normal'>{hackathonData.mode}</span></p>
                    <p className="text-sm md:text-md text-gray-600 font-bold">Location: <span className='font-normal'>{hackathonData.location}</span></p>
                  </div>
                </div>
              </div>
              <div className="ml-5 bg-white">
                {/* <Tags tagList={hackathonData.Tags} /> */}
              </div>
              <hr className="mt-5" />
              <div className="w-full flex justify-between lg:px-5 px-3 my-2 flex-wrap">
                <div className="flex md:space-x-4 space-x-2 xl:space-x-6 pt-2 md:pt-0">
                  <button className="px-1 md:px-2 lg:px-3 py-2 border text-md rounded-md hover:bg-blue-500 text-sm md:text-md lg:tex-lg">
                    Watchlist
                  </button>
                  <button className="lg:px-3 px-1 md:px-2 py-2 border text-md rounded-md hover:bg-blue-500 text-sm md:text-md lg:tex-lg">
                    Calender
                  </button>
                </div>
                <div className="flex items-center space-x-5 pt-2 md:pt-0">
                  <div>
                    <p className="lg:text-lg text-md font-semibold text-sm md:text-md lg:tex-lg">
                      Entry Fee: $
                      <span className='font-normal pl-1'>{hackathonData.entryFee}</span>
                    </p>
                  </div>
                  <div>
                    <a className="md:px-5 px-3 py-2 bg-blue-200 hover:bg-blue-500 rounded-sm text-sm md:text-md lg:tex-lg text-black hover:text-white" href={hackathonData.registerationUrl}>
                      Register
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex-col flex border bg-white rounded-md my-1 px-3 py-2">
                <a href={`/hackathon/detail/${encodeURIComponent(hackathonData.id)}`} onClick={(e) => {
                  e.preventDefault();
                  navigateDetail(hackathonData.id, hackathonData);
                }} className="text-md xl:text-lg font-semibold">
                  Eligiblity
                </a>
                <a href={`/hackathon/detail/${encodeURIComponent(hackathonData.id)}`} onClick={(e) => {
                  e.preventDefault();
                  navigateDetail(hackathonData.id, hackathonData);
                }} className="text-sm lg:text-sm 2xl:text-md font-gray-50">
                  <ul className="flex flex-col">
                    {
                      hackathonData?.conditions?.map((condition, index) => (
                        <li key={index} className="flex items-center mb-1 pl-4">
                          <span className="bg-gray-500 w-2 h-2 rounded-full mr-2"></span>
                          <p>{condition}</p>
                        </li>
                      ))
                    }
                  </ul>
                </a>
              </div>

              <div className="border rounded-md px-3 bg-white py-2">
                <div className="text-lg text-neutral-800 font-bold">
                  <a href={`/hackathon/detail/${encodeURIComponent(hackathonData.id)}`} onClick={(e) => {
                    e.preventDefault();
                    navigateDetail(hackathonData.id, hackathonData);
                  }}>{hackathonData.name}</a>
                </div>
              </div>
              <div>
                {hackathonData.roundDetails &&
                  hackathonData?.roundDetails?.map((round, index) => (
                    <div key={index}>
                      <RoundDetails
                        roundDetails={round.roundDetails}
                        roundName={round.roundName}
                        startDate={round.startDate}
                        endDate={round.endDate}
                      />
                    </div>
                  ))}
              </div>
              <div className="border rounded-md bg-white mt-1 py-3 px-5">
                <div className="text-md xl:text-lg text-neutral-900 font-bold">
                  <a href={`/hackathon/detail/${encodeURIComponent(hackathonData.id)}`} onClick={(e) => {
                    e.preventDefault();
                    navigateDetail(hackathonData.id, hackathonData);
                  }} > All that you need to know about Code Playground</a>
                </div>
                  <div>
                      {
                      hackathonData?.eventDescription?.map((event, index) => (
                        <EventsDescription description={event.description} heading={event.heading} />
                      ))
                    }
                  </div>
              </div>

              <div className="mt-1 py-3 bg-white px-5 border rounded-md">
                <div className="text-md lg:text-md text-gray-900 font-semibold">
                  <a href={`/hackathon/detail/${encodeURIComponent(hackathonData.id)}`} onClick={(e) => {
                    e.preventDefault();
                    navigateDetail(hackathonData.id, hackathonData);
                  }}  >What are the important dates and Deadlines?</a>
                </div>
                <div className="mt-5 flex flex-col space-y-">
                  <EventWidget imageUrl="" heading="Date of Posting" value={String(hackathonData.dateOfPosting)} />
                  <EventWidget imageUrl='' heading='Last Date to Apply' value={String(hackathonData.lastDateToApply)} />
                </div>

                                <div className="text-md text-gray-900 font-semibold mt-5">
                  <a href={`/hackathon/detail/${encodeURIComponent(hackathonData.id)}`} onClick={(e) => {
                    e.preventDefault();
                    navigateDetail(hackathonData.id, hackathonData);
                  }} className='font-semibold text-lg '>Contact the Organiser</a>
                </div>
                <div className="flex flex-col mt-1 ">
                  <div className='flex pl-4'>
                      <p className="text-sm text-gray-700 font-semibold">Name: <span className='font-normal text-gray-500 pl-1'>{hackathonData.organisedBy}</span></p>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

