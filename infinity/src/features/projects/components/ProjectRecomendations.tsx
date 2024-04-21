import React from 'react'
import DetailedProjectItem from './DetailedProjectItem'

const ProjectRecomendations = () => {
  return (
    <div className='hidden md:flex'>
      <aside id="default-sidebar" className="sticky top-0 left-0 z-40 xl:w-64 lg:w-48 md:w-45  h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full lg:px-3 px-2 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        <li><DetailedProjectItem /></li>
        <li> <DetailedProjectItem /></li>
         <li><DetailedProjectItem /></li>
         <li><DetailedProjectItem /></li>
         <li><DetailedProjectItem /></li>
        <li><DetailedProjectItem /></li>
         <li><DetailedProjectItem /></li>
         <li><DetailedProjectItem /></li>
         <li><DetailedProjectItem /></li>
      </ul>
   </div>
</aside>
    </div>
  )
}

export default ProjectRecomendations
