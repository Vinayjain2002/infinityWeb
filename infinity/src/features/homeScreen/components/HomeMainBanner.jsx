import React from 'react'
const HomeMainBanner = () => {
    const homeCompany=[{image: "url",id:1},{image: "url", id:2},{image: "url", id:3},{image:"url", id:4}, {image: "url",id:5}]
  return (
    <div>
      <div className='bg-hover-blue'>
       <div className=' py-5 ml-10 mr-10'>
       <div class='flex flex-col lg:w-1/3 md:w-1/2 w-2/3 h-1/4 mt-10'>
                {/* <img src={banner} alt="" className='w-full'/> */}

                {/* we are going to define the data that will be going to use the data  of the poster above */}
                <div className='w-full my-3'>
                  <h1 className='font-bold text-3xl'>Where Ideas Ignite </h1>
                </div>
                <p className=''>Where organizations and developers come together to build, inspire, and innovate.</p>

                <div className='flex flex-row my-3'>
                  <button className='mr-2 bg-blue-500 text-white w-1/2 text-md font-semibold px-4 py-3 mt-4 hover:bg-blue-600 focus:outline-none'>For Developers</button>
                  <button className='ml-2 bg-blue-50 text-black w-1/2 text-md font-semibold px-4 py-3 mt-4 focus:bg-blue-50 focus:outline-none'>For Organiser</button>
                </div>
              </div>
            <div className='flex flex-row mt-5'>
                <div className='w-full'>
                    <p className='text-sm text-white'>TRUSTED BY THE WORLD'S LEADING ORGANISATIONS</p>
                    <div className='w-full bg-white rounded-lg py-5'>
                      <ul className='flex justify-around flex-row no-wrap'>
                            {
                                homeCompany.map((company)=>(
                                    <li key={company.id}>
                                        <img src={company.image} alt={`Company ${company.id}`} />
                                    </li>
                                ))
                            }
                      </ul>
                    </div>
                </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default HomeMainBanner;
