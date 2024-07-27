import React from 'react'
import EventWidget from '../../hackathons/components/component/EventWidget';

interface SideBarProps{
    entryFee: number;
    registerationUrl: string;
    level: string;
    prizes: string;
    mode: string;
}
export const DetailedBootCampSidebar:React.FC<SideBarProps> = ({entryFee, registerationUrl, level, prizes, mode}) => {
  return (
    <div>
          <div className="w-full  bg-white border rounded-md">
              <div className="flex mx-5 py-2 justify-between">
                <div className="text- lg:text-lg py-2 font-bold">
                  Entry Fees:{" "}
                  <span className="font-normal pl-2">
                    ${entryFee}
                  </span>
                </div>
                <div className="px-5 rounded-md py-2 bg-blue-400 hover:bg-blue-500  hover:text-white">
                  <a className="" href={registerationUrl}>
                    Register
                  </a>
                </div>
              </div>
              <hr className="mb-2" />
              <div className="bg-blue-50 ">
                <div className=" rounded-md  flex-col bg-white space-y-3 py-2 flex justify-between pl-0  flex-wrap">
                  <EventWidget
                    imageUrl=""
                    heading="level"
                    value={level}
                  />
                  <EventWidget
                    imageUrl=""
                    heading="prizes"
                    value={prizes}
                  />
                  <EventWidget
                    imageUrl=""
                    heading="mode"
                    value={mode}
                  />
                </div>
              </div>
              <div className="my-2">
                {" "}
                <hr />
              </div>
              {/* we are going to define the sectio of the Watchlist and the container */}
              <div className="mx-1 rounded-md py-1">
                <div className="w-4/5 xl:px-10 lg:px-5 px-2 pb-2 flex justify-between mx-auto">
                  <button className="lg:px-5 px-2 bg-blue-400 lg:py-2 py-1 border rounded-md hover:bg-blue-500  hover:text-white">
                    WatchList
                  </button>
                  <button className="lg:px-5 px-2 bg-blue-400 lg:py-2 py-1 border rounded-md hover:bg-blue-500 hover:text-white">
                    Calender
                  </button>
                </div>
              </div>
            </div>
    </div>
  )
}

