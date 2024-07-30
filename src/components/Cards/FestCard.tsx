import React from "react";
import image from "../../assets/images/hackathon.png";

interface DetailedFestProps {
  id: string;
  image: string;
  eventname: string;
  mode: string;
  lastDateToApply: Date;
  entryFee: number;
  description: string;
  hasTags: string[];
  city: string;
}

const FestCard: React.FC<DetailedFestProps> = (props) => {
  return (
    <div className="shadow-md rounded-md">
      <div className="w-full md:mr-5">
        <div className="p-5 flex rounded-md border bg-white">
          <div className="max-h-24 md:w-1/3 w-1/4 lg:w-1/4 my-auto  rounded-lg bg-black overflow-hidden">
            <img src={image} className="object-fit cover h-24" />{" "}
          </div>

          <div className="flex flex-col ml-5 md:w-2/3 w-3/4 lg:w-3/4">
            <div className="">
              <p className=" text-xl   font-bold">
                {props?.eventname}
              </p>
              <p className="lg:text-sm xl:text-md  text-xs font-normal">
                {props?.description}
              </p>
            </div>
            <div className="flex flex-wrap  space-between mt-2 sapce-x-2 ">
              <div className="text-xs md:text-sm lg:text-md  font-semibold">
                Last Date:{" "}
                <span className="text-gray-700 font-normal">
                  {String(props?.lastDateToApply.toLocaleDateString())}
                </span>
              </div>
              <div className="text-xs md:text-sm lg:text-md font-semibold">
                Entry Fee:{" "}
                <span className="text-gray-700 font-normal">
                  {props?.entryFee}
                </span>
              </div>
              <div className="text-xs md:text-sm lg:text-md font-semibold">
                Location:{" "}
                <span className="text-gray-700 font-normal">{props?.city}</span>
              </div>
            </div>
            <div className="lg:flex hidden mt-2 space-between gap-4">
              <div className="text-xs md:text-sm lg:text-md font-semibold">
                Tags:{" "}
              </div>
              {props?.hasTags?.map((tag) => (
                <button
                  key={tag}
                  className="text-xs md:text-sm lg:text-md rounded-md bg-blue-100 px-2"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestCard;
