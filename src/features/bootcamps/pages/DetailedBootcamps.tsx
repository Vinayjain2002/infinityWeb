import React, { useEffect, useState } from "react";
import ChatAssistant from "../../../components/chatAssistant/ChatAssistant";
import NavBar from "../../../components/navBars/NavBar";
import ImageSlider from "../../../components/ImageSlider/ImageSlider";
import Oppertunity from "../../hackathons/components/component/Oppertunity";
import Footer from "../../../components/navBars/Footer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Banner1 from "../../../assets/images/banner.jpg";
import Banner2 from "../../../assets/images/banner3.jpeg";
import Banner3 from "../../../assets/images/banner4.jpeg";
import Banner4 from "../../../assets/images/banner5.png";
import { DetailedBootcampInfo } from "../components/info/DetailedBootcampInfo";
import { DetailedBootCampSidebar } from "../components/DetailedBootCampSideBar";

interface BootCampData {
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
  prizes: number;
  techStack: string[];
}

const DetailedBootcamps: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id: hackathonId } = useParams();
  const [raiseOpinion, setRaiseOpinion] = useState(false);
  const [discussion, setDiscussion] = useState(false);
  const [bootCampData, setBootCampData] = useState<BootCampData | null>(null);

  useEffect(() => {
    // we are gonna to set the Recieved Data
    try {
      if(location.state && location.state.bootCampData){
        setBootCampData(location.state.bootCampData);
      }
      else{
        setBootCampData(null);
      }
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
            <DetailedBootcampInfo
              id={bootCampData?.id ?? ''}
              postedBy={bootCampData?.postedBy ?? ''}
              name={bootCampData?.name ?? ''}              
              mode={bootCampData?.mode ?? ''}
              dateOfEvent={bootCampData?.dateOfEvent ?? new Date()}
              lastDateToApply={bootCampData?.lastDateToApply ?? new Date()}
              dateOfPosted={bootCampData?.dateOfPosted ?? new Date()}
              entryFee={bootCampData?.entryFee ?? 0}
              totalSeats={bootCampData?.totalSeats ?? 0}
              description={bootCampData?.description ?? ''}
              hasTags={bootCampData?.hasTags ?? []}
              queryContacts={bootCampData?.queryContacts ?? []}
              organiser={bootCampData?.organiser ?? []}
              eventsDetail={bootCampData?.eventsDetail ?? []}
              organisedUnder={bootCampData?.organisedUnder ?? []}
              registerationUrl={bootCampData?.registerationUrl ?? ''}
              hostedOn={bootCampData?.hostedOn ?? ''}
              perks={bootCampData?.perks ?? []}
              certificationProvided={bootCampData?.certificationProvided ?? false}
              prerequisite={bootCampData?.prerequisite ?? []}
              tutor={bootCampData?.tutor ?? []}
              duration={bootCampData?.duration ?? 0}
              techStack={bootCampData?.techStack ?? []}
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
                    setBootCampData(bootCampData);
                  }}
                >
                  <Oppertunity
                    name={bootCampData?.name ?? ''}
                    description={bootCampData?.description ?? ''}
                    mode={bootCampData?.mode ?? ''}
                    prizes=""
                  />
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setBootCampData(bootCampData);
                  }}
                >
                  <Oppertunity
                    name={bootCampData?.name ?? ''}
                    description={bootCampData?.description ?? ''}
                    mode={bootCampData?.mode ?? ''}
                    prizes=""
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
                    setBootCampData(bootCampData);
                  }}
                >
                  <Oppertunity
                    name={bootCampData?.name ?? ''}
                    description={bootCampData?.description ?? ''}
                    mode={bootCampData?.mode ?? ''}
                    prizes=""
                  />
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setBootCampData(bootCampData);
                  }}
                >
                  <Oppertunity
                    name={bootCampData?.name ?? ''}
                    description={bootCampData?.description ?? ''}
                    mode={bootCampData?.mode ?? ''}
                    prizes=""
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
            <DetailedBootCampSidebar
              entryFee={bootCampData?.entryFee ?? 0}
              registerationUrl={bootCampData?.registerationUrl ?? ''}
              level=""
              prizes=""
              mode={bootCampData?.mode ?? ''}
            />

            {/* we are going to define the Section of the Eligiblity */}
            <div className="mt-2 border bg-white rounded-md py-3 px-5">
              <div className="text-lg py-1  text-gray-800 font-bold">
                Eligiblity Criteria:{" "}
              </div>
              <hr />
              <div>
                <ul className="mt-2 text-sm">
                  {bootCampData?.prerequisite?.map((condition, index) => (
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DetailedBootcamps;
