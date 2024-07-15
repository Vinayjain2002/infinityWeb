
import React from 'react';
import image from "../../assets/images/hackathon.png";

interface DetailedHackathonProps {
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

const DetailedHackathon: React.FC<DetailedHackathonProps> = ({
  id,
  postedBy,
  name,
  organisedBy,
  location,
  level,
  prizes,
  entryFee,
  venue,
  dateOfPosting,
  problemStatement,
  pictures,
  mode,
  lastDateToApply,
  techStackRequired,
  conditions,
  description,
  registerationUrl,
  roundDetails,
  eventDescription
}) => {

  return (
    <div className="border rounded-md flex border-dark-blue border-t-1 border-r-4 border-b-1 border-l-4">
      <div className="flex items-center justify-center px-1 bg-dark-blue">
        <div className="whitespace-pre text-xs space-y-0 py-0 font-semibold text-white">
          F<br />
          E<br />
          A<br />
          T<br />
          U<br />
          R<br />
          E<br />
          D<br />
        </div>
      </div>
      <div className="w-full mx-5 md:mx-0 bg-gray-50  px-3 py-4 border border-dark-blue border-t-0 border-b-0  border-l-5">
        {/* here we are gonna to define the detailed hackathon card */}
        <div className="flex justify-between flex-row w-full space-x-3">
          <div className="lg:w-3/5 md:w-4/5 flex flex-row">
            <div className="md:w-1/3 lg:w-2/4 w-1/3 my-auto  rounded-lg bg-black overflow-hidden">
              <img src={image} alt="" className="object-cover w-full" />
            </div>
            <div className="md:ml-8 ml-5 md:w-2/4 lg:w-full">
              <p className="lg:text-xl xl:text-2xl md:text-lg text-lg text-gray-700 font-medium">{name}</p>
              <p className="lg:text-md xl:text-md text-sm font-normal font-gray-600">{description}</p>
              <div className="my-3 flex justify-start md:space-x-10 space-x-3">
                <div className="">
                  <p className="text-xs md:text-sm lg:text-md font-semibold">
                    {/* Days Left <span className="ml-2 font-normal">{daysLeft}</span> */}
                  </p>
                  <p className="text-xs md:text-sm lg:text-md font-semibold">
                    Prize Pool: <span className="ml-2 font-normal">{prizes} </span>
                  </p>
                  <p className="text-xs md:text-sm lg:text-md font-semibold">
                    Level: <span className="ml-2 font-normal">{level}</span>
                  </p>
                </div>
                <div className="">
                  <p className="text-xs md:text-sm lg:text-md font-semibold">
                    Entry Fee: <span className="ml-2 font-normal">{entryFee}</span>
                  </p>
                  <p className="text-xs md:text-sm lg:text-md  font-semibold">
                    Mode: <span className="ml-2 font-normal">{mode}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-0.5 bg-gray-200 hidden md:flex"></div>
          {/* this is the side bar which contais the extra data */}
          <div className="w-1/4 md:flex flex-col hidden space-y-2">
            <div className="text-xs md:text-sm lg:text-md text-gray-800 font-semibold">
              Organised By: <span className="ml-2 font-normal">{organisedBy}</span>
            </div>
            <div className="text-xs md:text-sm lg:text-md text-gray-800 font-semibold">
              Posted On: <span className="ml-2 font-normal">{dateOfPosting.toLocaleDateString()}</span>
            </div>
            <div className="flex flex-row mt-4">
              <div className="text-sm font-semibold text-gray-800">Tags:</div>
              <div className="ml-1 text-xs space-y-1 text-blue-700">
                {techStackRequired.map((tech, index) => (
                        <div className='px-2 hover:bg-blue-300 rounded-md bg-blue-200'>{tech}</div>
                            ))
                          }
                      </div>
                    </div>
                </div>
          </div>

        
        </div>
        
    </div>
  );
}

export default DetailedHackathon
