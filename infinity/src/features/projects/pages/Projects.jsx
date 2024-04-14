import React from 'react'
import NavBar from '../../../components/navBars/NavBar';
import Footer from '../../../components/navBars/Footer';
import ProjectCard from '../components/ProjectCard';
import SearchBar from '../components/SearchBar';
import ProjectNavBar from '../components/ProjectNavBar';
const Projects = () => {
  return (
    <div>
      <div>
        <NavBar />
        <div>
          <ProjectNavBar />
        </div>
        <div>

        {/* <div className='w-full flex justify-center'> */}
        <div className=" mx-3 md:mx-10 lg:mx-15 my-3"> 
            <SearchBar/>
        </div>
            <div className='w-full h-auto flex flex-row justify-center flex-wrap'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            </div>

        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Projects
