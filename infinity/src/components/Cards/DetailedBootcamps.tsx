import React from 'react'
import image from '../../assets/images/hackathon.png'

interface DetailedProps{
    
}
const DetailedBootcamps:React.FC<DetailedProps> = (props) => {
  return (
    
        <div className="border rounded-md flex border-dark-blue border-t-1 border-r-4 border-b-1 border-l-4">

          <div className='flex items-center justify-center px-1 bg-dark-blue'>
            <div className='whitespace-pre text-xs space-y-0 py-0 font-semibold text-white'>
              F<br />
              E<br/>
              A<br/>
              T<br />
              U <br />
              R <br />
              E <br />
              D <br />
            </div>
          </div>
            <div className='w-full mx-5 md:mx-0 bg-white  px-3 py-4 border border-dark-blue border-t-0 border-b-0  border-l-5'>
              {/* here we are gonna to define the detailed hackathon card */}
              <div className='flex justify-between flex-row w-full space-x-3'>
                <div className='lg:w-3/5 md:w-4/5 flex flex-row'>
                    <div className='w-1/3 my-auto  rounded-lg bg-black overflow-hidden'><img src={image} alt="" className='object-cover w-full'/></div>

                    <div className='ml-7'>
                          <p className='lg:text-xl xl:text-2xl md:text-lg font-medium text-gray-700'>Web Dev Bootcamp</p>
                          <p className='lg:text-md  md:text-sm sm:text-xs font-normal font-gray-600'>A Bootcamp by the UNstop</p>
                          <div className='space-y-2 mt-3'>
                            <div className='flex mt-2 justify-between gap-5'>
                                <div><p className='text-xs md:text-sm lg:text-sm font-semibold'>Days Left: <span className='ml-2 font-normal'>7</span></p></div>
                                <div><p className='text-xs md:text-sm lg:text-sm font-semibold '>Location: <span className='ml-2 font-normal'>Hisar</span></p></div>
                            </div> 
                            <div className='flex mt-2 justify-between gap-5'>
                                  <div className='text-xs md:text-sm lg:text-sm font-semibold'>Entry Fee: <span className='ml-2 font-normal'>500</span></div>
                                <div className='text-xs md:text-sm lg:text-sm font-semibold'>Participants: <span className='ml-2 font-normal'>4000</span></div>
                            </div>
                          </div>
                      </div>

                  
                </div>
                <div className='w-0.5 bg-gray-200 hidden md:flex'></div>
                {/* this is the side bar which contais the extra data */}
                <div className='w-1/4 md:flex flex-col hidden space-y-2'>
                        <div className= 'text-xs md:text-sm lg:text-md text-gray-800 font-semibold'>Organised By: <span className='ml-2 font-normal'>Google</span></div>
                        <div className='text-xs md:text-sm lg:text-md text-gray-800 font-semibold'>Posted On: <span className='ml-2 font-normal'>20/02/2024</span></div>
                        <div className='flex flex-row mt-2'>
                            <div className='text-sm font-semibold text-gray-800'>Tags:</div>
                            <div className='ml-1 text-xs space-y-1 text-blue-700'>
                              <div className='px-2 hover:bg-blue-300 rounded-md bg-blue-200'>Machine Development</div>
                              <div className='px-2 hover:bg-blue-300 rounded-md bg-blue-200'>Pyhton</div>
                              <div className='px-2 hover:bg-blue-300 rounded-md bg-blue-200'>Web Developnent</div>
                          </div>
                        </div>
                    </div>
              </div>


            </div>

    </div>
  );
}

export default DetailedBootcamps
