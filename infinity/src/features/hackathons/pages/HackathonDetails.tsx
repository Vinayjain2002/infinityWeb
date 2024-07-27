import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import NavBar from "../../../components/navBars/NavBar";
import HackathonCard from "../components/HackathonCards/HackathonCard";
import Footer from "../../../components/navBars/Footer";
import ChatAssistant from "../../../components/chatAssistant/ChatAssistant";
import ImageSlider from "../../../components/ImageSlider/ImageSlider";
import Tags from "../components/component/Tags";
import QuickQuestion from "../components/component/QuickQuestion";
import Banner1 from "../../../assets/images/banner.jpg";
import Banner2 from "../../../assets/images/banner3.jpeg";
import Banner3 from "../../../assets/images/banner4.jpeg";
import Banner4 from "../../../assets/images/banner5.png";
import { HackathonDetailInfo } from "../components/HackathonInfo/DetailOfHackathon";
import { hackathonsDetail } from "../data/data";

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

const HackathonDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hackathonDetail, setHackathonDetail] = useState<HackathonData | null>(null);
  const [hackathonData, setHackathonData] = useState<HackathonData[] | null>(null);

  useEffect(() => {
    if (location.state && location.state.hackathonData) {
      try {
        console.log("Hackathon Data is going", location.state.hackathonData);
        setHackathonData(location.state.hackathonData);
        console.log("set State hook", hackathonData);
      } catch (err) {
        console.error(err);
      }
    }
    else{
        // we are gonna to make a api call
      setHackathonData(hackathonDetail);        
    }
    if (location.state && location.state.hackathon) {
      console.log("Hackathon is going", location.state.hackathon);
      setHackathonDetail(location.state.hackathon);
    }
    else{
      const params= useParams();
      const id= params.id;
      // going to find out the particular data from the api
    }
  }, [location.state]);

  useEffect(() => {
    // You need to add some logic here
  }, [hackathonData]);

  return (
    <div>
      <ChatAssistant />
      <NavBar />
      <div className="w-full h-50">
        <ImageSlider
          images={[Banner1, Banner2, Banner3, Banner4]}
          autoplay={true}
          interval={3000}
        />
      </div>
      <div className="bg-blue-50">
        <div className="mx-2 flex flex-row">
          <div className="w-2/5 h-[120vh] overflow-y-scroll scrollbar mt-3 space-y-2 hidden lg:flex flex-col">
            {hackathonData &&
              hackathonData?.map((hackathon, index) => (
                <div key={index}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setHackathonDetail(hackathon);
                    }}
                  >
                    <HackathonCard
                      id={hackathon.id}
                      name={hackathon.name}
                      prizes={hackathon.prizes}
                      entryFee={hackathon.entryFee}
                      pictures={hackathon.pictures}
                      mode={hackathon.mode}
                      lastDateToApply={hackathon.lastDateToApply}
                      description={hackathon.description}
                    />
                  </a>
                </div>
              ))}
          </div>
          <div className="lg:w-3/5 w-full h-[120vh] overflow-y-scroll  scrollbar mt-2 md:mx-5 lg:mr-1 lg:ml-3  ml-0">
            {hackathonDetail ? (
              <HackathonDetailInfo hackathonData={hackathonDetail} />
            ) : (
              <div>Loading...</div> // or a loading indicator of your choice
            )}
          </div>
        </div>
      </div>
      <div className="py-3 bg-blue-50 ">
        <QuickQuestion />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HackathonDetails;