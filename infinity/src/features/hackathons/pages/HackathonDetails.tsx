import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import NavBar from '../../../components/navBars/NavBar';
import HackathonCard from '../../../components/Cards/HackathonCard';
import RoundDetails from '../components/RoundDetails';
import EventsDescription from '../components/EventsDescription';
import EventsDescriptionList from '../components/EventsDescriptionList';
import EventWidget from '../components/EventWidget';
import Footer from '../../../components/navBars/Footer';
import ChatAssistant from '../../../components/chatAssistant/ChatAssistant';
import ImageSlider from '../../../components/ImageSlider/ImageSlider';
import Tags from '../components/Tags';
import QuickQuestion from '../components/QuickQuestion';
import hackathonImage from '../../../assets/images/hackathon.png';
import Banner1 from '../../../assets/images/banner.jpg';
import Banner2 from '../../../assets/images/banner3.jpeg';
import Banner3 from '../../../assets/images/banner4.jpeg';
import Banner4 from '../../../assets/images/banner5.png';
import { hackathonsDetail} from '../data/data';
import { getParticularHackathonCall } from '../api/hackathons';
import { DetailOfHackathon } from '../components/detailOfHackathon';


interface HackathonData  {
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
  const location= useLocation();
  const [hackathonData, setHackathonData] = useState({});
  const { id: hackathonId } = useParams();

  const navigateDetail = (hackathonId: string, hackathonData: HackathonData) => {
    navigate(`/hackathon/detail/${encodeURIComponent(hackathonId)}`, {
      state: { hackathonData },
    });
  };
  useEffect(() => {
    if (location.state && location.state.hackathon) {
      try {
        console.log("Hackathon Data is going", location.state.hackathon)
        setHackathonData(location.state.hackathon);
        console.log("set State hook", hackathonData);
      } catch (err) {
        console.error(err);
      }
    }
  }, [location.state]);

  useEffect(() => {
    console.log("Hackathon Data:", hackathonData);
  }, [hackathonData]);
 

  return (
    <div>
      <ChatAssistant />
      <NavBar />
      <div className="w-full h-50">
        <ImageSlider images={[Banner1, Banner2, Banner3, Banner4]} autoplay={true} interval={3000} />
      </div>
      <div className="bg-blue-50">
        <div className="mx-2 flex flex-row">
          <div className="w-2/5 h-[120vh] overflow-y-scroll scrollbar mt-2 hidden md:flex flex-col">
            {hackathonsDetail &&
              hackathonsDetail.map((hackathon, index) => (
                <div key={index}>
                  <a onClick={(e) => {
                    e.preventDefault();
                    setHackathonData(hackathon)
                  }}>
                    <HackathonCard
                     id = {hackathon.id}
                     postedBy = {hackathon.postedBy}
                     name= {hackathon.name}
                     location = {hackathon.location}
                     level= {hackathon.level}
                     prizes= {hackathon.prizes}
                     entryFee= {hackathon.entryFee}
                     venue= {hackathon.venue}
                     dateOfPosting= {hackathon.dateOfPosting}
                     problemStatement = {hackathon.problemStatement}
                      pictures= {hackathon.pictures}
                    mode= {hackathon.mode}
                    lastDateToApply= {hackathon.lastDateToApply}
                    techStackRequired = {hackathon.techStackRequired}
                    conditions=  {hackathon.conditions}
                    description= {hackathon.description}
                    registerationUrl= {hackathon.registerationUrl}
                    />
                  </a>
                </div>
              ))}
          </div>
          <div className="md:w-3/5 w-full h-[120vh] overflow-y-scroll  scrollbar mt-2 md:ml-3 ml-0">
              {hackathonData ? (
                <DetailOfHackathon hackathonData={hackathonData} />
              ) : (
                <div>Loading...</div> // or a loading indicator of your choice
              )}
          </div>
        </div>
      </div>
      <div>
        <QuickQuestion />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HackathonDetails;