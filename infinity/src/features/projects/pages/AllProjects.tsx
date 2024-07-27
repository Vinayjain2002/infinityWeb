import React, { useEffect, useState } from "react";
import NavBar from "../../../components/navBars/NavBar.tsx";
import Footer from "../../../components/navBars/Footer.tsx";
import ProjectCard from "../components/ProjectCard.tsx";
import ProjectNavBar from "../components/ProjectNavBar.tsx";
import SearchBarComponent from "../../../components/SearchBar/SearchBarComponent.tsx";
import ChatAssistant from "../../../components/chatAssistant/ChatAssistant.tsx";
import { projectData } from "../data/data.tsx";
import { useLocation, useNavigate } from "react-router-dom";

interface ProjectProps{
  "id": string;
  "projectName": string;
  "projectUploadedBy": string;
  "projectUploadedOn": Date;
  "tags": string[];
  "projectLevel": string;
  "gitRepo": string;
  "privateProject": boolean;
  "description": string[];
  "projectImage": string;
  "techStack": string[];
  "noOfPages": number;
  "teamMembers": string[];
  "projectOverView": string;
  "projectAcheivements": string[];
  "prerequisite": string[];
  "adminUploaded":string;
}
const AllProjects = () => {
  const navigate= useNavigate();
  const location= useLocation();
  // const [projectData, setProjectData]= useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");



  return (
    <div>
      <div>
        <NavBar />
        <ChatAssistant />
        <div>
          <ProjectNavBar />
        </div>
        <div>
          {/* <div className='w-full flex justify-center'> */}
          <div className=" mx-3 md:mx-10 lg:mx-15 my-3">
            <SearchBarComponent btnText="Search" text="Search Projects" />
          </div>
          <div className="w-full h-auto flex flex-row justify-center flex-wrap">
            {projectData != undefined &&
              projectData?.map((project, index) => (
                <div className="mx-2 my-2">
                  <a href={`/project/${encodeURIComponent(project.id)}`} onClick={(e)=>{
                    e.preventDefault();
                    navigate(
                      `/project/${encodeURIComponent(project.id)}`,{
                        state: {
                          project: project,
                          projectData: projectData
                        }
                      }
                    )
                    
                  }}>
                    <ProjectCard
                      key={index}
                      projectName={project.projectName}
                      description={project.description}
                      tags={project.tags}
                    />
                  </a>
                </div>
              ))}
          </div>
        </div>
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
