import React from "react";
// import projectimg from '../../../assets/images/projectcard.jpg';
import projectimg from "../../../assets/images/projectcard.jpg";
import likei from "../../../assets/svgs/like.svg";

interface ProjectProps {
    projectName: string;
    tags: string[];
    description: string[];
}

const ProjectCard:React.FC<ProjectProps> = ({projectName, description, tags}) => {
  return (
    <div>
      <div className="h-auto flex justify-center">
        <div className="">
          <div className="w-[250px] bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={projectimg} alt="error" />
            </a>
            <div className="px-5 pb-5 pt-2">
              <a href="#">
                <h5 className=" xl:text-2xl lg:text-xl text-lg font-bold text-gray-800 dark:text-white">
                  {projectName}
                </h5>
              </a>
              <p className="mt-1 text-sm xl:text-md font-normal text-gray-600 dark:text-gray-400">
                    {String(description[0])}
              </p>
             <div className="flex justify-baseline space-x-3 my-1">
                <div className="text-sm xl:text-md font-medium">
                    Tags:
                </div>
             <div className="flex flex-row space-x-2">
                {
                    tags?.map((tag,index)=>(
                        <p className="text-sm xl:text-md">{tag}</p>
                    ))
                }
              </div>
             </div>
              <a
                href="#"
                className="mt-2 px-3 py-2 inline-flex items-center text-sm xl:text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Explore
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <div>
                  <img src={likei} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
