import React, { useState } from 'react'
import NavBar from '../../../components/navBars/NavBar';
import banner from '../../../assets/images/hackathonBanner.jpg';
import RoundDetails from '../components/RoundDetails';
import EventWidget from '../components/EventWidget';
import PrizesComponent from '../components/PrizesComponent';
import Oppertunity from '../components/Oppertunity';
import Footer from '../../../components/navBars/Footer';
import Tags from '../components/Tags';

const DetailedHackathon = () => {
  const [RaiseOpinion, setRaiseOpinion]=useState(false);
  const [discussion,setDiscussion]= useState(false);

  const handleDiscussion=()=>{
    // here we are going to toggle the value of the raiseConcern
    setDiscussion((prevState)=> !prevState);
  }
  const handleOpinion= ()=>{
      setRaiseOpinion((prevState)=> !prevState);
  }
  return (
    <div>
        {/* here we are going to define teh code of the detailed Hacakathon */}
        <NavBar />
        <div>
          <div className='w-full'>
            <img src={banner} alt= "Banner" className='object-cover w-full'/>
          </div>
        <div className=' mx-5 mt-5 flex flex-row'>
          <div className='w-2/3'>
            <div className='border w-full rounded-md bg-white p-3'>
              <div className='w-full flex flex-row'>
                  <div className='w-1/4 bg-black rounded-md overflow-hidden' >
                      <img></img>
                  </div>
                  <div className='flex flex-col ml-4 text-md py-2'>
                    <div className='text-2xl'>Women Hackathon</div>
                    <div><a>Tech Week 2024</a></div>
                    <div><a>BITS Pilani, Hyderabad Campus</a></div>
                    <div><a>BITS Pilani , Hyderabad Campus, Hyderabad, Telangana, India</a></div>
                  </div>
              </div>
              <div className='mt-3'>
                    <ul className='flex space-x-3'>
                                <li><Tags /></li>
                                <li><Tags /></li>
                                <li><Tags /></li>
                                <li><Tags /></li>
                    </ul>
              </div>
            </div>
            {/* we are going to define the portion of the Filters */}
            <div className='mt-1 py-2 bg-white border rounded-md'>
                <ul className='flex w-4/5 flex-row justify-between px-8'>
                  <li className='hover:text-blue-700 text-md font-semibold text-dark-blue'><a href="#">Details</a></li>
                  <li className='hover:text-blue-700 text-md font-semibold text-dark-blue'><a href="#">Dates & Deadlines</a></li>
                  <li className='hover:text-blue-700 text-md font-semibold text-dark-blue'><a href="#">Prizes</a></li>
                  <li className='hover:text-blue-700 text-md font-semibold text-dark-blue'><a href="#">Reviews</a></li>
                  <li className='hover:text-blue-700 text-md font-semibold text-dark-blue'><a href="#">FAQs & Discussions</a></li>
                </ul>
            </div>
            {/* here we are going to define the details of the details of the events */}
            <div>
              <RoundDetails />
              <RoundDetails />
            </div>

            {/* here we are going to define the details of the dates and the deadlines. */}
            <div className=''>
                <div className='mt-1 py-3 bg-white px-5 border rounded-md'>
                  <div className='text-md text-gray-900 font-semibold'>What are the important dates and Deadlines?</div>
                  <div className='mt-5'>
                        <EventWidget />
                  </div>

                    {/* contact details of the organiser */}
                    <div className='text-md text-gray-900 font-semibold mt-5'>Contact the Organiser</div>
                    <div className='mt-5'>
                      <EventWidget />
                    </div>
                  </div>
            </div>


            {/* We are going to define the Sections of the Prizes and the other things */}
            <div className='flex flex-row mt-1  w-full'>
              <PrizesComponent/>
              <PrizesComponent />
              <PrizesComponent />
            </div>

            {/* we are going to define the featured Oppertunity Section */}
            <div className='w-full mt-1 rounded-md border flex flex-col'>
              <div className='font-xl ml-5 text-dark-blue font-bold'><p>Featured Oppertunity</p></div>
              <div className='flex ml-5 flex-row space-x-3'>
                <Oppertunity />
                <Oppertunity />
              </div>
            </div>

            {/* we are going to define the code of the Related Oppertuntity */}
            <div className='flex flex-col w-full mt-1 rounded-md border'>
              <div className='font-xl ml-5 text-dark-blue font-bold'><p>Related Oppertunity</p></div>
              <div className='flex ml-5 flex-row space-x-3'>
                <Oppertunity />
                <Oppertunity />
              </div>
            </div>

            {/* raise the complaint */}
            <div className='mt-3 rounded-md text-center mt-3 border p-4'>
              <div><p>*This opportunity has been listed by SNS College of Technology (SNSCT), Coimbatore, Tamil Nadu. Unstop is not liable for any content mentioned in this opportunity or the process followed by the organizers for this opportunity. However, please raise a complaint if you want Unstop to look into the matter.</p></div>
              <div><button className=' mt-2 rounded-md px-3 py-2 bg-blue-400 hover:bg-blue-900'>Raise a Complaint</button></div>
            </div>

            {/* raise Some DOUBTS */}
            <div className='rounded-md my-1 border py-3 px-5'>
               <div className='text-dark-blue font-bold text-xl'>Voice your opinion by leaving a feedback & your rating</div>
               <div className='w-full h-32 mt-3 border-dark-blue '>
                  <textarea placeholder='Write a feedback' className=' px-5 py-2 w-full h-full resize-none focus:border-dark-blue border border-dark-blue focus:outline-none rounded-md'></textarea>
              </div>

            <div className='w-full mt-2 flex justify-end'>
                <button className='px-5 py-2 border bg-blue-500 hover:bg-blue-800 rounded-md'>Raise</button>
            </div>
          </div>

          {/* we are going to define the section of the chatting with the others */}
          <div className='rounded-md my-1 border py-3 px-5'>
            <div className='text-dark-blue font-bold text-xl'>
              <p>Discussions</p>
            </div>
            <div className=' my-2'>
              <input type="text" placeholder='Enter the Message' className='border w-full border-dark-blue focus:border-dark-blue focus:outline-none p-2 rounded-md'/>
            </div>
            <div className='w-full mt-2 flex justify-end'>
                <button className='px-5 py-2 border bg-blue-500 hover:bg-blue-800 rounded-md'>Send</button>
            </div>

            {/* here we are going t show up the messages at the real time */}
          </div>

          </div>
            <div className=' w-1/3'>
              <div className='w-full border rounded-md'>
                <div className='flex mx-5 py-2 justify-between'>
                  <div className='text-md py-2 font-bold'>Free</div>
                  <div><button className='px-5 rounded-md py-2 bg-blue-500'>Register</button></div>
                </div>
                <hr />
                <div>
                    <div className='w-full rounded-md bg-white  flex-col space-y-3 border flex justify-between p-3 mt-1 flex-wrap'>
                    <EventWidget />
                    <EventWidget />
                    <EventWidget />
                  </div>
                </div>
                <hr />
                {/* we are going to define the sectio of the Watchlist and the container */}
                <div className='w-full cl:px-10 lg:px-5 px-2 py-3 flex justify-between '>
                  <div className='lg:px-3 px-2 lg:py-2 py-1 border rounded-md'>WatchList</div>
                  <div className='lg:px-3 px-2 lg:py-2 py-1 border rounded-md'>Calender</div>
                </div>
              </div>

              {/* we are going to define the Section of the Eligiblity */}
              <div className='mt-3 border rounded-md py-3 px-5'>
                <div className='text-md font-bold'>Eligiblity</div>
                <hr />
                <div>
                  <ul className='flex space-x-2 mt-1'>
                    <li>Engineering Student</li>
                    <li>MBA Student</li>
                    <li>Undergraduate</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default DetailedHackathon;
