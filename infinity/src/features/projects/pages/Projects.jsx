import React from 'react'
import NavBar from '../../../components/navBars/NavBar';
import Footer from '../../../components/navBars/Footer';
import ProjectCard from '../components/ProjectCard';
import SearchBar from '../components/SearchBar';
const Projects = () => {
  return (
    <div>
      <div>
        <NavBar />
        <div>

        {/* <div className='w-full flex justify-center'> */}
        <div className="max-w-md mx-auto my-3"> 
            <SearchBar/>
        </div>
            <div className='w-full h-auto flex flex-row flex-wrap'>
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
