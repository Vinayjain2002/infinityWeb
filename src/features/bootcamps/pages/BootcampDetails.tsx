import React, { useEffect, useState } from "react";
import Footer from "../../../components/navBars/Footer";
import QuickQuestion from "../../hackathons/components/component/QuickQuestion";
import EventWidget from "../../hackathons/components/component/EventWidget";
import EventsDescriptionList from "../../hackathons/components/component/EventsDescriptionList";
import RoundDetails from "../../hackathons/components/component/RoundDetails";
import ChatAssistant from "../../../components/chatAssistant/ChatAssistant";
import NavBar from "../../../components/navBars/NavBar";
import ImageSlider from "../../../components/ImageSlider/ImageSlider";
import BootCampCard from "../../../components/Cards/BootCampCard";
import image from "../../../assets/images/hackathon.png";
import Tags from "../../hackathons/components/component/Tags";
import EventsDescription from "../../hackathons/components/component/EventsDescription";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Bnner1 from "../../../assets/images/banner.jpg";
import Banner2 from "../../../assets/images/banner3.jpeg";
import Banner3 from "../../../assets/images/banner4.jpeg";
import Banner4 from "../../../assets/images/banner5.png";
import Banner5 from "../../../assets/images/banner5.png";
import { bootCampDetail } from "../data/data";
import { DetailOfBootcamp } from "../components/detailOfBootcamp";


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
  techStack: string[];
  image: string[];
  prizes: number;
}

interface DetailOfBootcampProps {
  bootCampData: BootCampData;
}

const BootcampDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [bootCampData, setBootCampData] = useState<BootCampData[] | null>(null);
  const [bootCampDetails, setBootCampDetails] = useState<BootCampData | null>(
    null
  );
  const { id: bootcampId } = useParams();

  useEffect(() => {
    if (location.state && location.state.bootCampData) {
      try {
        setBootCampData([location.state.bootCampData]);
      } catch (err) {
        console.log(err);
      }
    } else {
      setBootCampData(bootCampDetail);
    }

    if (location.state && location.state.bootCamp) {
      setBootCampDetails(location.state.bootCamp);
    } else {
      // setBootCampDetail(bootCampData);
    }
  }, [location.state]);

  useEffect(() => {}, [bootCampData]);

  return (
    <div>
      <ChatAssistant />
      <NavBar />
      <div className="w-full h-50">
        <ImageSlider
          images={[Banner2, Banner3, Banner4, Banner5]}
          autoplay={true}
          interval={3000}
        />
      </div>
      {/* we are going to define the split Screeen Hackathons */}
      <div className="bg-blue-50">
        <div className="mx-2 flex flex-row">
          <div className="w-2/5 h-[120vh] overflow-y-scroll scrollbar mt-3 space-y-1 hidden lg:flex flex-col">
            {bootCampData?.map((bootcamp, index) => (
              <div key={bootcamp.id}>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setBootCampDetails(bootcamp);
                  }}
                >
                  <BootCampCard
                    id={bootcamp.id}
                    image={bootcamp.image}
                    name={bootcamp.name}
                    mode={bootcamp.mode}
                    lastDateToApply={bootcamp.lastDateToApply}
                    entryFee={bootcamp.entryFee}
                    description={bootcamp.description}
                    hasTags={bootcamp.hasTags}
                    duration={bootcamp.duration}
                    techStack={bootcamp.techStack}
                    prizes={bootcamp.prizes}
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="lg:w-3/5 w-full h-[120vh] overflow-y-scroll scrollbar md:mx-5 lg:mr-1 lg:ml-3 ml-0">
            {bootCampDetails ? (
              <DetailOfBootcamp bootCampData={bootCampDetails} />
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
      <div className="py-3 bg-blue-50">
        <QuickQuestion />
      </div>
      <Footer />
    </div>
  );
};

export default BootcampDetails;
