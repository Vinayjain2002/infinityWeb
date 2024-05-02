
import React from 'react'
import NavBar from '../../../components/navBars/NavBar.tsx'
import Footer from '../../../components/navBars/Footer.tsx';
import ProjectRecomendations from '../components/ProjectRecomendations.tsx';
import Objective from '../components/Objective.tsx';
import ProjectDetails from '../components/ProjectDetails.tsx';
import DetailedProjectImage from '../components/DetailedProjectImage.tsx';
import DetailedProjectVideo from '../components/DetailedProjectVideo.tsx'
import ProjectNavBar from '../components/ProjectNavBar.tsx';
const DetailedProjects = () => {
  return (
    <div>
    <div className='relative'>
      <NavBar />
      <div>
      </div>
          <ProjectNavBar />
      </div>
     <div className='w-full flex'>
        <ProjectRecomendations />
          {/* here we are going to define teh other Sections of the webpage like the data */}
          <div className='xl:mx-5 md:mx-7 lg:mx-3 mt-5'>
            <Objective />
            <ProjectDetails />
             {/* we are now going to define the with image part */}
             <DetailedProjectImage />
             <ProjectDetails />

             {/* now we are going to define the section of the playing of the video Section */}
             <DetailedProjectVideo />
          </div>
     </div>
        
      <Footer />
</div>  );
}

export default DetailedProjects
