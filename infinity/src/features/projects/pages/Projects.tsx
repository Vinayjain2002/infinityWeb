import React from 'react'
import NavBar from '../../../components/navBars/NavBar.tsx';
import Footer from '../../../components/navBars/Footer.tsx';
import ProjectCard from '../components/ProjectCard.tsx';
import ProjectNavBar from '../components/ProjectNavBar.tsx';
import SearchBarComponent from '../../../components/SearchBar/SearchBarComponent.tsx';
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
        <SearchBarComponent btnText='Search' text='Search Projects'/>
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
