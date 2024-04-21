import React from 'react'
import userCover from '../../../assets/images/banner.jpg'
import userImage from '../../../assets/images/hackathon.png'
import AccountAnalytics from './AccountAnalyticsComponent.js';
import HackathonCard from '../../../components/Cards/HackathonCard.js'
import EducationCard from './EducationCardComponent.js';
import ProjectCard from './ProjectCardComponent.jsx';
// here we are gonna to define the all the info abt the User ie it's team Members etc
const AccountInfo = () => {
  return (
    <div className="bg-white mx-5">
      <div className='border rounded-md'>
      <div className="relative">
        <div className="h-15 bg-dark-blue rounded-t-lg overflow-hidden">
          <img src={userCover} alt="User Cover" className="object-cover" />
        </div>
        <div className="absolute bottom-0 left-10 max-w-20 overflow-hidden flex items-center">
          <img src={userImage} alt="Profile Picture" className=" rounded-full object-cover border-2 border-white" />
          <button className="ml-4 focus:outline-none">
            {/* here we are going to define the edit icon */}

          </button>
        </div>
      </div>

      <div className='mt-10 bg-white px-5'>
        <div>
          <p className='text-3xl font-semibold'>Vinay jain</p>
          <div className='w-2/3 mt-2 text-md text-gray-900'>
            <p>Full Stack Web Developer || Flutter developer || Python Developer || Competitive Coder || Debugger</p>
          </div>
          <div className='flex flex-row space-x-5 text-sm text-blue-800 font-semibold mt-3'>
            <p>1,650 followers</p>
            <p>500+ connections</p>
          </div>
        </div>
      </div>
      </div>

      {/* here we are going to define the Section ie the Analytics Section */}
      <div className='mt-2 border py-3 rounded-md shadow-md px-5'>
        <div>
          <p className='text-2xl font-semibold'>Analytics</p>
          <p className='text-sm text-gray-500'>Private to you</p>

          <div className='w-full flex space-x-5 mt-2 justify-between'>
            <AccountAnalytics image="" heading="100 Hackathons Applied" smallHeading="5 Hackathons Posted" link=""/>
           <AccountAnalytics image="" heading="20 Fests Applied" smallHeading="2 Fests Posted" link=""/>
           <AccountAnalytics image="" heading="40 Bootcamps Applied" smallHeading="3 Boocamps Posted" link=""/>
          </div>
        </div>
      </div>

       {/* we are going to define the About Section */}
       <div className='px-5 py-3 border rounded-md shadow-md mt-2 border'> 
        <div className='flex flex-row justify-between'>
          <p className='text-2xl font-semibold'>About</p>
          <button>Edit</button>
        </div>
        <div>
          <p className='text-sm font-gray-300 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt est eaque assumenda labore, libero rerum sed neque corrupti facilis enim quasi repellat ex exercitationem adipisci obcaecati aut dolore repudiandae laborum voluptatum veniam! Quos natus a non iure facilis odit minus fugit necessitatibus assumenda. Repellat nobis magni ducimus laudantium inventore explicabo a distinctio est eligendi aspernatur numquam voluptates commodi quia optio hic amet, expedita porro dolorem? Distinctio magnam, excepturi optio, ipsam atque hic mollitia neque dolorum fuga alias repellat odit rerum ut quas cupiditate voluptatum nesciunt fugit natus dolor maiores! Laboriosam, libero ab sunt laborum sequi natus est saepe omnis incidunt!</p>
        </div>
      </div>

      <div className='border rounded-md shadow-md mt-2 px-5 py-3'>
        <p className='text-xl font-bold'>Activities</p>
          <div className='mt-2'>
            <HackathonCard />
          <HackathonCard />
          </div>
          <div className='w-full'>
            <button className='mx-auto'>See all Posts</button>
          </div>
      </div>

      {/* here we are going to define the Experience OF The User */}
      
      <div className='mt-2 border rounded-md shadow-md px-5 py-3'>
            <div className='flex justify-between'>
              <div className='text-2xl font-bold'>Education</div>
              <div className='space-x-5'>
                <button>Add</button>
                <button>Edit</button>
              </div>
            </div>
            <div>
              <EducationCard />
              <EducationCard />
            </div>
      </div>

      <div className='mt-2 border rounded-md shadow-md px-5 py-3'>
            <div className='flex justify-between'>
              <div className='text-2xl font-bold'>Hackathons Winned</div>
              <div className='space-x-5'>
                <button>Add</button>
                <button>Edit</button>
              </div>
            </div>
            <div>
              <EducationCard />
              <EducationCard />
            </div>
      </div>

      {/* we are going to define the section of the webpage ie the projects submitter */}
      <div className='mt-2 border rounded-md shadow-md px-5 py-3'>
            <div className='flex justify-between'>
              <div className='text-2xl font-bold'>Projects</div>
              <div className='space-x-5'>
                <button>Add</button>
                <button>Edit</button>
              </div>
            </div>
            <div>
              <ProjectCard />
              <ProjectCard />
            </div>
      </div>

      {/* we are going to define the skills section */}
      <div className='mt-2 border rounded-md px-5 py-3'>
        <div className='flex justify-between'>
        <div className='text-2xl font-bold'>Skills</div>
              <div className='space-x-5'>
                <button>Add</button>
                <button>Edit</button>
              </div>
        </div>
        <div>
          <div className='flex space-x-5 mt-2'>
              <div className='px-2 py-1 bg-blue-500 rounded-md text-sm'>Mern Stack</div>
              <div className='px-2 py-1 bg-blue-500 rounded-md text-sm'>Mern Stack</div>
              <div className='px-2 py-1 bg-blue-500 rounded-md text-sm'>Mern Stack</div>
              <div className='px-2 py-1 bg-blue-500 rounded-md text-sm'>Mern Stack</div>
              <div className='px-2 py-1 bg-blue-500 rounded-md text-sm'>Mern Stack</div>
              <div className='px-2 py-1 bg-blue-500 rounded-md text-sm'>Mern Stack</div>
              <div className='px-2 py-1 bg-blue-500 rounded-md text-sm'>Mern Stack</div>

          </div>

        </div>
      </div>


      {/* now we are goona to define the Videos posted by the user */}
      <div>
        <div className='border mt-3 border rounded-md shadow-md px-5 py-3 '>
            <div><p className='text-2xl font-bold'>Videos</p></div>
        </div>
      </div>

    </div>
  );
};

export default AccountInfo
