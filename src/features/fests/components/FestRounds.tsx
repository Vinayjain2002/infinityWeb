import React from "react";

interface RoundProps {
  roundName: string;
  startDate: string;
  endDate: string;
  roundDetails: string;
}
const FestRounds: React.FC<RoundProps> = (props) => {
  return (
    <div>
      <div className="bg-white">
        <div>
          <div className="flex justify-between">
            <div className="text-md lg:text-lg 2xl:text-xl text-gray-800 font-semibold">
              <a href="/hackathon/detail/2">{props.roundName}</a>
            </div>
          </div>

          <div className="pl-1">
            <p className="text-sm lg:text-md 2xl:text-lg text-gray-800 font-medium">
                Round Details:{" "}
                <span className="pl-1 font-normal">{props.roundDetails}</span>
            </p>
          </div>
          <div className="flex flex-row pl-1 space-x-5">
            <div className="flex flex-col">
              <p className="text-sm text-gray-700 font-semibold ">Start Date</p>
              <p className="text-sm text-gray-500">{props.startDate}</p>
            </div>
            <div></div>
            <div className="">
              <p className="text-sm text-gray-700 font-semibold">End Date</p>
              <p className="text-sm text-gray-500">{props.endDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestRounds;
