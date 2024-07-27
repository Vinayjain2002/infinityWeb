import React from "react";
import festImage from "../../../../assets/images/hackathon.png";

interface FestProps {
  id: string;
  image: string;
  eventname: string;
  lastDateToApply: Date;
  entryFee: number;
  totalSeats: number;
  description: string;
  hasTags: string[];
  organiser: string[];
  city: string;
  venue: string;
  chiefGuests: string[];
}
const FestFeaturedCard: React.FC<FestProps> = ({
  id,
  image,
  eventname,
  lastDateToApply,
  entryFee,
  totalSeats,
  description,
  hasTags,
  organiser,
  chiefGuests,
  city,
  venue,
}) => {
  return (
    <div className="border rounded-md flex border-dark-blue border-t-1 border-r-4 border-b-1 border-l-4">
      <div className="flex items-center justify-center px-1 bg-dark-blue">
        <div className="whitespace-pre text-xs space-y-0 py-0 font-semibold text-white">
          F<br />
          E<br />
          A<br />
          T<br />
          U <br />
          R <br />
          E <br />
          D <br />
        </div>
      </div>
      <div className="w-full mx-5 md:mx-0 bg-gray-50 px-3 py-4 border border-dark-blue border-t-0 border-b-0  border-l-5">
        {/* here we are gonna to define the detailed hackathon card */}
        <div className="flex justify-between flex-row w-full space-x-5 lg:space-x-3">
          <div className="lg:w-3/5 md:w-4/5 flex flex-row">
            <div className="md:w-1/3 lg:w-2/4 sm:w-1/3 w-1/2 my-auto rounded-lg bg-black overflow-hidden">
              <img src={festImage} alt="" className="object-cover w-full" />
            </div>
            <div className="md:ml-8 ml-5 md:w-3/4 lg:w-1/2  lg:w-full">
              <p className="lg:text-xl xl:text-2xl md:text-lg text-lg font-medium text-gray-700">
                {eventname}
              </p>
              <p className="lg:text-md text-sm font-normal font-gray-600">
                {description}
              </p>
              <div className="my-3  flex justify-start md:space-x-10 space-x-3">
                <div>
                  <p className="text-xs md:text-sm lg:text-md font-semibold">
                    Days Left: <span className="ml-2 font-normal">10</span>
                  </p>
                  <p className="text-xs md:text-sm lg:text-md font-semibold ">
                    Location: <span className="ml-2 font-normal">{city}</span>
                  </p>
                </div>
                <div>
                  <p className="text-xs md:text-sm lg:text-md font-semibold">
                    Entry Fee:{" "}
                    <span className="ml-2 font-normal">{entryFee}</span>
                  </p>
                  <p className="text-xs md:text-sm lg:text-md font-semibold">
                    No of Seats:{" "}
                    <span className="ml-2 font-normal">{totalSeats}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-0.5 bg-gray-200 hidden lg:flex"></div>
          {/* this is the side bar which contais the extra data */}
          <div className="w-1/3 lg:flex flex-col hidden space-y-1">
            <div className="text-xs md:text-sm lg:text-md text-gray-800 font-semibold">
              Organised By:
              <span className="ml-2 font-normal">
                {organiser &&
                  organiser.map((organiserName, index) => (
                    <span>{organiserName}</span>
                  ))}
              </span>
            </div>
            <div className="text-xs md:text-sm lg:text-md text-gray-800 font-semibold">
              Last Date To Apply:{" "}
              <span className="ml-2 font-normal">
                {lastDateToApply?.toLocaleDateString()}
              </span>
            </div>
            <div className="flex flex-row pt-1">
              <div className="text-sm font-semibold text-gray-800">Tags:</div>
              <div className="ml-2 text-xs space-y-1 text-blue-700">
                {hasTags &&
                  hasTags?.map((tag, index) => (
                    <div className="px-2 hover:bg-blue-300 rounded-md bg-blue-200">
                      {tag}
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex flex-row pt-1">
              <div className="text-sm font-semibold text-gray-800">Chief Guests:</div>
              <div className="ml-2 text-xs space-y-1 text-blue-700">
                { chiefGuests &&
                  chiefGuests?.map((guest, index) => (
                    <div className="px-2 hover:bg-blue-300 rounded-md bg-blue-200">
                      {guest}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestFeaturedCard;
