import React from 'react'
const HomeMainBanner = () => {
    const homeCompany=[{image: "url",id:1},{image: "url", id:2},{image: "url", id:3}]
  return (
    <div>
      <div className='bg-hover-blue'>
       <div className=' py-5 mx-10'>
       <div className='flex flex-col lg:w-1/3 md:w-1/2 w-2/3 h-1/4 mt-10'>
                {/* <img src={banner} alt="" className='w-full'/> */}

                {/* we are going to define the data that will be going to use the data  of the poster above */}
                <div className='w-full my-3'>
                  <p className='font-bold text-2xl lg:text-4xl md:text-3xl'>Where Ideas Ignite </p>
                </div>
                <p className='text-sm md:text-md font-normal'>Where organizations and developers come together to build, inspire, and innovate.</p>

                <div className='flex flex-row my-3'>
                  <button className='mr-2 bg-blue-500 text-white w-1/2 text-sm lg:text-md font-semibold xl:px-4 md:px-2 px-1  py-2 lg:py-3 mt-4 hover:bg-blue-600 focus:outline-none text-sm md:text-md'>For Developers</button>
                  <button className='ml-2 bg-blue-50 text-black w-1/2 text-sm lg:text-md font-semibold xl:px-4 md:px-2 px-1 py-2 lg:py-3 mt-4 focus:bg-blue-50 focus:outline-none text-sm md:text-md'>For Organiser</button>
                </div>
              </div>
            <div className='flex flex-row mt-5'>
                <div className='w-full'>
                    <p className='text-xs md:text-sm text-white'>TRUSTED BY THE WORLD'S LEADING ORGANISATIONS</p>
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
