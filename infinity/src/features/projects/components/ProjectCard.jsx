import React from 'react'
// import projectimg from '../../../assets/images/projectcard.jpg';
import projectimg from '../../../assets/images/projectcard.jpg';
import likei from '../../../assets/svgs/like.svg';

const ProjectCard = () => {
  return (
    <div>
        <div className="h-auto flex justify-center">
        <div className="mx-3 my-3">
{/* first card */}


    <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src={projectimg} alt="error" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 xl:text-2xl lg:text-xl text-lg font-bold text-gray-800 dark:text-white">Web Development</h5>
            </a>
            <p className="mb-3 text-sm xl:text-md font-normal text-gray-600 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm xl:text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Explore
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                <div>
                    <img src={likei} alt=""/>
                </div>
            </a>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ProjectCard
