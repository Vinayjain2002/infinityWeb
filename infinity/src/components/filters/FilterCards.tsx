import React from 'react'

interface FilterCardsProps{
  // here we are gonna to define the 
}
const FilterCardsComponent:React.FC<FilterCardsProps> = (props) => {
  return (
    <div className='mt-3'>
        <div className='flex flex-col space-y-4'>
            <div><button>Clear Filters</button></div>
            <div className='flex space-x-2'>
                <input type="checkbox"  id="yes" />
                <label htmlFor="yes" className='text-dark-blue text-md font-normal'>Managed by Infinity</label>
            </div>
            <div className='text-md'>
                  <p className='font-semibold '>Location</p>
                  <div className='space-x-3'>
                  <input type='checkbox' id="online" />
                    <label htmlFor='online' className='text-dark-blue text-md font-normal'>Online</label>
                  </div>
                  <div className='space-x-3'>
                  <input type='checkbox' id="offline" />
                    <label htmlFor='offline' className='text-dark-blue text-md font-normal'>Offline</label>
                  </div>
            </div>
            <div>
                  <p className='font-semibold text-md'>Status</p>
                  <div className='space-x-3'>
                  <input type='checkbox' id="upcoming" />
                    <label htmlFor='upcoming' className='text-dark-blue text-md font-normal'>Upcoming</label>
                  </div>
                  <div className='space-x-3'>
                  <input type='checkbox' id="open" />
                    <label htmlFor='open' className='text-dark-blue text-md font-normal'>Open</label>
                  </div>
                  <div className='space-x-3'>
                  <input type='checkbox' id="ended" />
                    <label htmlFor='ended' className='text-dark-blue text-md font-normal'>Ended</label>
                  </div>
            </div>

            {/* we are going to define the filters of the level */}
            <div>
                  <p  className='font-semibold text-md'>Level</p>
                  <div className='space-x-3'>
                  <input type='checkbox' id="beginner" />
                    <label htmlFor='beginner' className='text-dark-blue text-md font-normal'>Beginner Level</label>
                  </div>
                  <div className='space-x-3'>
                  <input type='checkbox' id="medium" />
                    <label htmlFor='medium' className='text-dark-blue text-md font-normal'>Medium Level</label>
                  </div>
                  <div className='space-x-3'>
                  <input type='checkbox' id="advance" />
                    <label htmlFor='advance' className='text-dark-blue text-md font-normal'>Advance Level</label>
                  </div>
            </div>

            {/* we are going to define the filters like the Selevcted Options */}
            <div>
                  <p  className='font-semibold text-md'>Interest</p>
                  <div>
                      <div className='space-x-3'>
                      <input type='checkbox' id="machine Learning" />
                        <label htmlFor='Machine Learning' className='text-dark-blue text-md font-normal'>Machine Learning</label>
                      </div>
                      <div className='space-x-3'>
                      <input type='checkbox' id="open" />
                        <label htmlFor='open' className='text-dark-blue text-md font-normal'>Open</label>
                      </div>
                      <div className='space-x-3'>
                      <input type='checkbox' id="ended" />
                        <label htmlFor='ended' className='text-dark-blue text-md font-normal'>Ended</label>
                      </div>
                  </div>
                  <button className='mt-2 text-blue-700'>Load More</button>
            </div>

        </div>
    </div>
  )
}

export default FilterCardsComponent
