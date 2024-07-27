// here we are goona to define the customizations in teh user Prefference
import React from 'react'
import { DateSelector, InputComponent, LevelOptions, PrefferedHackathons, PrefferenceCheckboxes, SkillsInput, TwoOptionComponent } from '../../../components/formComponents/formComponents'
const Preffernces = () => {
  return (
    <div className='w-full px-5 py-3 rounded-md shadow-md'>
      <div>
      <form action="" onSubmit={(e) => e.preventDefault()} className='px-5'>
                    <div className=''>
                      <div>
                        <p className='text-3xl font-semibold text-gray-800'>Preferences & eligibility</p>
                        <p className='mt-2 text-md text-gray-500'>This information helps us match you with hackathons and potential teammates.</p>
                      </div>

                      <div className='my-8'>
                        <hr />
                      </div>

                      <div className='my-4 text-2xl text-gray-800 font-semibold'>
                        <p>Preferences</p>
                      </div>
                      {/* here we are going to define the different fields like the web development, app development */}
                         <div className='mt-3 py-3'>
                          <PrefferenceCheckboxes />
                            <TwoOptionComponent />
                            <TwoOptionComponent />
                            <SkillsInput />
                            <PrefferedHackathons />
                         </div>
                          <div className=' text-2xl my-4 font-semibold'>Eligiblity</div>
                          
                          {/* we are going to take the location of the user */}
                         <div className='my-5 space-y-6'>
                            <InputComponent />
                            <LevelOptions />
                            {/* we need to pass the option of the College Name in thisinput Field */}
                            <InputComponent />
                              <DateSelector />
                         </div>
                         <div className='mt-8 ml-5'>
                          <button className='bg-blue-500 py-2 px-5 font-semibold border-md rounded-md'>Submit</button>
                          <button className='bg-gray-400 text-white font-semibold py-2 px-5 ml-3 border-md rounded-md'>Cancel</button>
                         </div>
                      </div>
              </form>
      </div>
    </div>
  )
}

export default Preffernces
