import React from "react";
import banner from "../../../../assets/images/hackathon.png";
import Tags from "../../../hackathons/components/component/Tags";
import EventWidget from "../../../hackathons/components/component/EventWidget";

interface BootcampDetailProps {
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
export const DetailedBootcampInfo: React.FC<BootcampDetailProps> = (
  bootCampDetail
) => {
  return (
    <div>
      <div className="border py-4 w-full rounded-md bg-white px-5">
        <div className="w-full flex flex-row">
          <div className="bg-black rounded-md h-20 w-20 overflow-hidden">
            <img src={banner} className="object-cover h-20" />
          </div>
          <div className="flex flex-col ml-4 text-md ">
            <div className="xl:text-3xl lg:text-2xl text-xl font-medium">
              {bootCampDetail.name}
            </div>
            <div className="lg:text-md text-sm">
              <a>{bootCampDetail.description}</a>
            </div>
            <div className="flex space-x-5">
             
              <div className="lg:text-md text-sm font-medium mt-1 lg:hidden inline">
                <a>
                  Mode:{" "}
                  <span className="font-normal pl-1">
                    {bootCampDetail.mode}
                  </span>
                </a>
              </div>
              <div className="lg:text-md text-sm font-medium mt-1">
                <a>
                  Venue:{" "}
                  <span className="font-normal pl-1">
                    {bootCampDetail.hostedOn}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 hidden sm:block">
          <Tags
            tagList={[
              "#hackathon",
              "MIH",
              "#Web Deveopment",
              "#IITM Collge Of Enginnnering",
            ]}
          />
        </div>
      </div>
      <div className="w-full lg:hidden block bg-white border rounded-md mt-1 px-5 py-3">
      <div className=" flex justify-between md:w-5/6 ">
          {/* here we are gonna to define the entry Fee and the Register link */}
          <div>
            <div className="text-md lg:text-lg py-2 font-semibold">
              Entry Fees: <span className="font-normal pl-2">${bootCampDetail.entryFee}</span>
            </div>
          </div>
          <div className="text-md lg:text-lg py-2 font-semibold">
            Register Here:
            <span className=" ml-4 px-5 rounded-md py-2 bg-blue-400 hover:bg-blue-500  hover:text-white font-semibold">
              <a className="font-normal" href={bootCampDetail.registerationUrl}>
                Register
              </a>
            </span>
          </div>
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
        <div>
          <p className="px-5 py-2 text-lg font-bold text-gray-700">
            Round Details:
          </p>
          <hr className="mx-5" />
        </div>
        <div className="pl-5">
        {bootCampDetail.eventsDetail &&
            bootCampDetail?.eventsDetail?.map((event, index) => (
              <div key={index} className="flex items-baseline space-x-2 pl-5">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <div>{event}</div>
              </div>
            ))}
        </div>
      </div>

      {/* here we are going to define the details of the dates and the deadlines. */}
      <div className="">
        <div className="mt-1 py-3 bg-white px-5 border rounded-md">
          <div className="text-md xl:text-lg pb-2 text-gray-700  font-bold">
            Important dates and Deadlines:
          </div>
          <hr />
          <div className="mt-2 flex flex-col space-y-5 mt-5">
            <EventWidget
              imageUrl=""
              heading="Date Of Event"
              value={String(
                bootCampDetail.dateOfEvent?.toLocaleDateString()
              )}
            />
            <EventWidget
              imageUrl=""
              heading="Last Date to Apply"
              value={String(
                bootCampDetail.lastDateToApply?.toLocaleDateString()
              )}
            />
             <EventWidget
              imageUrl=""
              heading="Date Of Posting"
              value={String(
                bootCampDetail.dateOfPosted?.toLocaleDateString()
              )}
            />
          </div>

          {/* contact details of the organiser */}
          <div className="text-md lg:text-lg text-gray-900 font-semibold mt-5">
            Contact the Organiser
          </div>
          <div className="flex flex-col mt-1 ">
            <div className="flex pl-4">
              <p className="text-sm text-gray-800 font-semibold">
                Name:{" "}
                <span className="font-normal text-gray-700 pl-1">
                  {bootCampDetail.organisedUnder}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
