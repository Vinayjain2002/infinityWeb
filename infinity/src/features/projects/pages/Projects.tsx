import React from 'react'
import NavBar from '../../../components/navBars/NavBar.tsx';
import Footer from '../../../components/navBars/Footer.tsx';
import ProjectCard from '../components/ProjectCard.tsx';
import SearchBar from '../components/SearchBar.tsx';
import ProjectNavBar from '../components/ProjectNavBar.tsx';
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
