import React from 'react';
import {DateSelector, InputComponent, LevelOptions, PrefferedHackathons, PrefferenceCheckboxes, SkillsInput, SocialMedia, TwoOptionComponent} from '../../../components/formComponents/formComponents.js';

function Preferences() {
  const selectedSkills = skills => console.log(skills);
  return (
    <div className="flex w-screen h-auto min-h-screen flex-col bg-dark-blue bg-dark-blue">
      <div className="w-full flex flex-column items-center justify-center mt-10">
          <h1 className="text-4xl text-white text-center font-bold">Events Prefference</h1>
      </div>
      <div>
      <p className='mt-2 text-white text-center font-sm'>It will help us to update about the different Events,Hackathons,Bootstrap</p>
      </div>
      <div className= 'w-full mt-10'>
        <div className='mx-20 bg-white rounded-md'>
            <form action="" onSubmit={(e) => e.preventDefault()} className='px-5 py-10'>
                    <div className=''>
                      {/* here we are going to define the different fields like the web development, app development */}
                          <PrefferenceCheckboxes />
                          <TwoOptionComponent />
                          <TwoOptionComponent />
                          <SkillsInput/>
                          <PrefferedHackathons />
                          <div className='text-dark-blue text-2xl my-4 font-semibold'>Personal Info</div>
                          
                          {/* we are going to take the location of the user */}
                         <InputComponent />
                         <LevelOptions />
                         {/* we need to pass the option of the College Name in thisinput Field */}
                         <InputComponent />
                          <DateSelector />
                         <div className='mt-8 ml-5'>
                          <button className='bg-hover-blue py-2 px-5 border-md rounded-md'>Submit</button>
                          <button className='bg-light-black py-2 px-5 ml-3 border-md rounded-md'>Cancel</button>
                         </div>
                      </div>
              </form>
        </div>
      </div>
 </div>
  );
}

export default Preferences;
