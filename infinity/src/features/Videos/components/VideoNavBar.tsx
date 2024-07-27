import React from "react";

const VideoNavBar = () => {
  return (
    <div>
      <div>
        <div className="w-full bg-dark-blue">
          {/* here we are going to define the text and the other stuff */}
          <div className="flex flex-row justify-center py-10 md:px-0 px-5 w-full md:w-4/5 mx-auto">
            <div className="items-center xl:text-3xl lg:text-2xl text-lg text-white text-white">
              Share your Experience Now
            </div>
            <div className="flex justify-center hover:white text-xs md:text-sm xl:text-md font-semibold text-white xl:ml-15 lg:ml-10 ml-8">
              <button className="bg-white hover:bg-light-blue text-dark-blue md:px-5 px-2 md:py-2 py-1 rounded-md">
                Add Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoNavBar;
