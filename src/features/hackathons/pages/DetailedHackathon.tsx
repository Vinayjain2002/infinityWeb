import NavBar from "../../../components/navBars/NavBar";
import EventWidget from "../components/component/EventWidget";
import Oppertunity from "../components/component/Oppertunity";
import Footer from "../../../components/navBars/Footer";
import Tags from "../components/component/Tags";
import ChatAssistant from "../../../components/chatAssistant/ChatAssistant";
import ImageSlider from "../../../components/ImageSlider/ImageSlider";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Banner1 from "../../../assets/images/banner.jpg";
import Banner2 from "../../../assets/images/banner3.jpeg";
import Banner3 from "../../../assets/images/banner4.jpeg";
import Banner4 from "../../../assets/images/banner5.png";
import { DetailedHackathonInfo } from "../components/HackathonInfo/DetailedHackathonInfo";
import { DetailedHackathonSidebar } from "../components/component/DetailedHackathonSidebar";

interface HackathonData {
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

const DetailedHackathonPage: React.FC = (hackathon) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id: hackathonId } = useParams();
  const [raiseOpinion, setRaiseOpinion] = useState(false);
  const [discussion, setDiscussion] = useState(false);
  const [hackathonData, setHackathonData] = useState<HackathonData>({});

  useEffect(() => {
    // we are gonna to set the Recieved Data
    try {
      setHackathonData(location.state.hackathonData);
      console.log("going to print the data");
      console.log(hackathonData);
    } catch (err) {
      console.error(err);
    }
  }, [location.state]);

  const handleDiscussion = () => {
    // here we are going to toggle the value of the raiseConcern
    setDiscussion((prevState) => !prevState);
  };
  const handleOpinion = () => {
    setRaiseOpinion((prevState) => !prevState);
  };
  return (
    <div className="bg-blue-50">
      <ChatAssistant />
      {/* here we are going to define teh code of the detailed Hacakathon */}
      <NavBar />
      <div>
        <div className="w-full">
          <ImageSlider
            images={[Banner1, Banner2, Banner3, Banner4]}
            autoplay={true}
            interval={3000}
          />
        </div>
        <div className="mx-5 mt-5 flex flex-row space-x-2">
          <div className="lg:w-2/3 w-full h-[90vh] overflow-y-scroll scrollbar">
            <DetailedHackathonInfo
              name={hackathonData.name}
              description={hackathonData.description}
              location={hackathonData.location}
              dateOfPosting={hackathonData.dateOfPosting}
              lastDateToApply={hackathonData.lastDateToApply}
              organisedBy={hackathonData.organisedBy}
              roundDetails={hackathonData.roundDetails}
              mode={hackathonData.mode}
              level={hackathonData.level}
              registerationUrl={hackathonData.registerationUrl}
              entryFee={hackathonData.entryFee}
            />
            {/* we are going to define the featured Oppertunity Section */}
            <div className="w-full mt-1 py-3 rounded-md bg-white border flex flex-col">
              <div className="text-xl ml-5 text-dark-blue font-bold">
                <p>Featured Oppertunity</p>
              </div>
              <div className="md:w-4/5   w-full px-10 pt-1 flex-row space-y-2 ">
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    setHackathonData(hackathonData);
                  }}
                >
                  <Oppertunity
                    name={hackathonData.name}
                    description={hackathonData.description}
                    mode={hackathonData.mode}
                    prizes={hackathonData.prizes}
                  />
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setHackathonData(hackathonData);
                  }}
                >
                  <Oppertunity
                    name={hackathonData.name}
                    description={hackathonData.description}
                    mode={hackathonData.mode}
                    prizes={hackathonData.prizes}
                  />
                </a>
              </div>
            </div>

            {/* we are going to define the code of the Related Oppertuntity */}
            <div className="flex py-2 flex-col bg-white w-full mt-1 py-3 rounded-md border">
              <div className="text-xl ml-5 text-dark-blue font-bold">
                <p>Related Oppertunity</p>
              </div>
              <div className=" space-y-2 md:w-4/5 px-10 pt-1 flex-row">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setHackathonData(hackathonData);
                  }}
                >
                  <Oppertunity
                    name={hackathonData.name}
                    description={hackathonData.description}
                    mode={hackathonData.mode}
                    prizes={hackathonData.prizes}
                  />
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setHackathonData(hackathonData);
                  }}
                >
                  <Oppertunity
                    name={hackathonData.name}
                    description={hackathonData.description}
                    mode={hackathonData.mode}
                    prizes={hackathonData.prizes}
                  />
                </a>
              </div>
            </div>

            {/* raise the complaint */}
            <div className=" rounded-md bg-white text-center my-1 border p-4">
              <div className="lg:text-md md:text-sm text-xs text-gray-700">
                <p>
                  *This opportunity has been listed by SNS College of Technology
                  (SNSCT), Coimbatore, Tamil Nadu. Unstop is not liable for any
                  content mentioned in this opportunity or the process followed
                  by the organizers for this opportunity. However, please raise
                  a complaint if you want Unstop to look into the matter.
                </p>
              </div>
              <div className="mt-2">
                <button className=" mt-2 rounded-md px-3 py-2 bg-blue-400 hover:bg-blue-500 hover:text-white md:text-md text-sm">
                  Raise a Complaint
                </button>
              </div>
            </div>

            {/* raise Some DOUBTS */}
            <div className="rounded-md my-1 bg-white border py-3 px-5">
              <div className="text-dark-blue font-bold lg:text-xl md:text-lg sm:text-md text-sm">
                Voice your opinion by leaving a feedback & your rating
              </div>
              <div className="w-full h-32 mt-3 border-dark-blue ">
                <textarea
                  placeholder="Write a feedback"
                  className=" px-5 py-2 w-full h-full resize-none focus:border-dark-blue border border-dark-blue focus:outline-none rounded-md text-sm"
                ></textarea>
              </div>

              <div className="w-full mt-2 flex justify-end">
                <button className="px-5 py-2 border bg-blue-400 hover:text-white hover:bg-blue-500 rounded-md">
                  Raise
                </button>
              </div>
            </div>

            {/* we are going to define the section of the chatting with the others */}
            <div className="rounded-md bg-white my-1 border py-3 px-5">
              <div className="text-dark-blue font-bold  text-sm sm:text-md md:text-lg lg:text-xl">
                <p>Discussions</p>
              </div>
              <div className=" my-2">
                <input
                  type="text"
                  placeholder="Enter the Message"
                  className="border w-full border-dark-blue focus:border-dark-blue focus:outline-none p-2 rounded-md text-sm"
                />
              </div>
              <div className="w-full mt-2 flex justify-end">
                <button className="px-5 py-2 border bg-blue-400 hover:bg-blue-500 hover:text-white rounded-md">
                  Send
                </button>
              </div>

              {/* here we are going t show up the messages at the real time */}
            </div>
          </div>

          {/* this is the Second part of the webpage */}
          <div className=" lg:block hidden w-1/3">
            <DetailedHackathonSidebar
              entryFee={hackathonData.entryFee}
              registerationUrl={hackathonData.registerationUrl}
              level={hackathonData.level}
              prizes={hackathonData.prizes}
              mode={hackathonData.mode}
            />

            {/* we are going to define the Section of the Eligiblity */}
            <div className="mt-2 border bg-white rounded-md py-3 px-5">
              <div className="text-lg py-1  text-gray-800 font-bold">
                Eligiblity Criteria:{" "}
              </div>
              <hr />
              <div>
                <ul className="mt-2 text-sm">
                  {hackathonData?.conditions?.map((condition, index) => (
                    <li
                      key={index}
                      className="flex items-baseline space-x-2 pl-5"
                    >
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                      <p>{condition}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* we are gonna to define the tech stack Req */}
            <div className="mt-2 bg-white border rounded-md py-3 px-5">
              <div className="text-lg py-1 text-gray-800 font-bold">
                TechStack Required:{" "}
              </div>
              <hr />
              <div>
                <ul className="mt-2 text-sm">
                  {hackathonData?.techStackRequired?.map((tech, index) => (
                    <li
                      key={index}
                      className="flex items-baseline space-x-2 pl-5"
                    >
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                      <p>{tech}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Footer />
      </div>
    </div>
  );
};

export default DetailedHackathonPage;
