import React, { useState, useEffect } from 'react';
import ChatAssistant from '../../../components/chatAssistant/ChatAssistant';
import ImageSlider from '../../../components/ImageSlider/ImageSlider';
import NavBar from '../../../components/navBars/NavBar';
import FestCard from '../../../components/Cards/FestCard';
import FestImage from '../../../assets/images/hackathon.png';
import Tags from '../../hackathons/components/component/Tags';
import EventWidget from '../../hackathons/components/component/EventWidget';
import EventsDescription from '../../hackathons/components/component/EventsDescription';
import EventsDescriptionList from '../../hackathons/components/component/EventsDescriptionList';
import QuickQuestion from '../../hackathons/components/component/QuickQuestion';
import Footer from '../../../components/navBars/Footer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Banner1 from '../../../assets/images/banner.jpg';
import Banner3 from '../../../assets/images/banner3.jpeg';
import Banner2 from '../../../assets/images/banner4.jpeg';
import Banner4 from '../../../assets/images/banner5.png';
import FestRounds from '../components/FestRounds';
import { DetailsOfFest } from '../components/detailsOfFest';
import { festDetails } from '../data/data';

interface FestData {
  id: string;
  image: string;
  postedBy: string;
  eventname: string;
  mode: string;
  dateofPosted: Date;
  lastDateToApply: Date; 
  entryFee: number;
  totalSeats: number;
  description: string;
  hasTags: string[];
  queryContacts: string[];
  organiser: string[];
  eventsDetail: {
    roundName: string;
    startDate: string;
    endDate: string;
    roundDetails: string;
  }[];
  registerationUrl: string;
  city: string;
  venue: string;
  chiefGuests: string[];
  dressCode: string;
  perks: string[];
  organisedUnder: string[];
}

const FestDetails: React.FC = () => {
  const location = useLocation();
  const [festData, setFestData] = useState<FestData[] | null>(null);
  const [festDetail, setFestDetail] = useState<FestData | null>(null); // Change the type to FestData | null

  useEffect(() => {
    if (location.state && location.state.festData) {
      try {
        console.log("Hackathon Data is going", location.state.festData);
        setFestData(location.state.festData);
        console.log("set State hook", festData);
      } catch (err) {
        console.error(err);
      }
    }
    else{
      setFestData(festDetails)
    }
    if (location.state && location.state.fest) {
      try {
        console.log("Fest data is", location.state.fest);
        setFestDetail(location.state.fest);
      } catch (err) {
        console.error(err);
      }
    }
    else{
      const params= useParams();
      const id=params.id;
    }
  }, [location.state]);

  useEffect(() => {
    // You can add some code here if you want to perform some action when festData changes
  }, [festData]);

  return (
    <div>
      <div>
        <ChatAssistant />
        <NavBar />
        <div className='w-full h-50'>
          <ImageSlider images={[Banner1, Banner2, Banner3, Banner4]} autoplay={true} interval={3000} />
        </div>
        {/* we are going to define the split Screeen Hackathons */}
        <div className='bg-blue-50'>
          <div className='mx-2 flex flex-row'>
            <div className='w-2/5 max-h-[120vh] overflow-y-scroll scrollbar mt-3 space-y-2 hidden lg:flex flex-col'>
              {
                festData!=undefined && (festData)?.map((fest, index) => (
                  <div key={index}>
                    <a onClick={(e) => {
                      e.preventDefault();
                      setFestDetail(fest);
                    }}>
                      <FestCard id={fest.id} 
                        image={fest.image} 
                        eventname={fest.eventname} 
                        mode={fest.mode} 
                        lastDateToApply={fest.lastDateToApply} 
                        entryFee={fest.entryFee} 
                        description={fest.description}
                        hasTags={fest.hasTags}
                        city={fest.city} 
                      /></a>
                  </div>
                ))
              }
            </div>
            <div className='lg:w-3/5 w-full max-h-[120vh] overflow-y-scroll  scrollbar mt-2 md:mx-5 lg:mr-1 lg:ml-3  ml-0'>
              {festDetail ? (<DetailsOfFest festData={festDetail} />): (
                <div> Loading....</div>
              )}
            </div>
          </div>
            {/* we are going to define the Quick Asked qustions for the hackathon */}
            <div className='py-2 bg-blue-50'>
              <QuickQuestion />
            </div>
            <Footer />
          </div>
        </div>
      </div>
  )
}

export default FestDetails;