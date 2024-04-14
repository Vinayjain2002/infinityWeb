
import React from 'react'
import NavBar from '../../../components/navBars/NavBar'
import Footer from '../../../components/navBars/Footer';
import ProjectRecomendations from '../components/ProjectRecomendations';
import Objective from '../components/Objective';
import ProjectDetails from '../components/ProjectDetails';
import DetailedProjectImage from '../components/DetailedProjectImage';
import DetailedProjectVideo from '../components/DetailedProjectVideo'
const DetailedProjects = () => {
  return (
    <div>
    <div className='relative'>
      <NavBar />
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
</div>
</div>

  );
}

export default DetailedProjects
