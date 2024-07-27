import React from "react";
import image from "../../../../assets/images/hackathon.png";

interface HackathonData {
  id: string;
  name: string;
  prizes: string;
  entryFee: number;
  pictures: string[];
  mode: string;
  lastDateToApply: Date;
  description: string;
}

const HackathonCard: React.FC<HackathonData> = (props) => {
  return (
    <div className="shadow-lg rounded-md">
      <div className=" w-full md:mr-5">
        <div className="p-5 flex rounded-md border bg-white">
          <div className="max-h-24 my-auto  rounded-lg bg-black overflow-hidden">
            <img src={image} className="object-fit cover h-24" />
          </div>
          <div className="flex flex-col ml-5">
            <div className="">
              <p className="lg:text-lg xl:text-xl md:text-md font-medium">
                {props?.name}
              </p>
              <p className="lg:text-sm xl:text-md  text-xs font-normal">
                {props?.description}
              </p>
            </div>
            <div className="flex mt-2 justify-start gap-4">
              <div>
                <p className="text-xs md:text-sm lg:text-md font-semibold">
                  Days Left: <span className="font-normal">7</span>
                </p>
                <div className="text-xs md:text-sm lg:text-md font-semibold">
                  Mode: <span className="font-normal">{props.mode}</span>
                </div>
              </div>
              <div>
                <div className="text-xs md:text-sm lg:text-md font-semibold">
                  Prizes: <span className="font-normal">{props.prizes}</span>
                </div>
                <div className="text-xs md:text-sm lg:text-md font-semibold">
                  entryFee:{" "}
                  <span className="font-normal">${props.entryFee}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
