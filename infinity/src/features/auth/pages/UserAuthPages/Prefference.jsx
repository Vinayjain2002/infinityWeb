import React from 'react';
import {LevelOptions, PrefferedHackathons, PrefferenceCheckboxes, SkillsInput, SocialMedia} from '../../components/formComponents';

function Preferences() {
  const selectedSkills = skills => console.log(skills);
  return (
    <div className="flex w-screen h-auto min-h-screen flex-col bg-dark-blue p-4 bg-dark-blue">
      <div className="w-full flex flex-column items-center justify-center mt-10">
          <h1 className="text-4xl text-white text-center font-bold">Events Prefference</h1>
      </div>
      <div>
      <p className='mt-2 text-white text-center font-sm'>It will help us to update about the different Events,Hackathons,Bootstrap</p>
      </div>
      <div className='w-8/10 bg-white mx-auto mt-5'>
          <div></div>
      </div>
      <div className='w-full'>
          {/* here we are going to define the code of the form */}
          <div className='w-8/10 bg-white mx-auto rounded-md'>
              <form action="" onSubmit={(e) => e.preventDefault()} className='mx-5 my-8'>
                    <div className=''>
                      {/* here we are going to define the different fields like the web development, app development */}
                          <PrefferenceCheckboxes />
                          <SkillsInput/>
                          <PrefferedHackathons />
                          <div className='text-dark-blue text-2xl my-4 font-semibold'>Personal Info</div>
                          
                          {/* we are going to take the location of the user */}
                          <div className='w-full flex flex-column w-full'>
                            <label htmlFor="" className='w-1/5 text-dark-blue text-md mt-3 font-semibold'>Location:</label>
                            <div className='ml-5 mt-3 px-2 border border-gray-300 text-center hover:border-dark-blue mx-2 my-2 rounded-md'><input type="text" className='border-none focused:border-none hover:border-none focused:outline-none' placeholder='Location here'/></div>
                          </div>

                         <LevelOptions />
                         <SocialMedia />
                         <div className='mt-5 ml-5'>
                          <button className='bg-hover-blue py-2 px-5 border-md'>Submit</button>
                          <button className='bg-light-black py-2 px-5 ml-3 border-md'>Cancel</button>
                         </div>
                      </div>
              </form>
          </div>
      </div>
 </div>
  );
}

export default Preferences;
