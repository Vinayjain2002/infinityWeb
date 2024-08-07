import React from 'react'

interface SearchBarProps{
 text: string,
 btnText: string
}
const SearchBarComponent:React.FC<SearchBarProps> = (props) => {
  return (
    <div className=' md:w-2/3   md:mx-auto mx-5'>
    <div className=" mx-auto my-1">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full px-4 md:py-4 py-2 ps-10 text-sm lg:text-md 2xl:text-xl text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md" placeholder={props.text} required />
        <button type="submit" className="text-white absolute lg:end-2.5 md:end-1 end-0 md:bottom-2.5 bottom-0 bg-blue-700 hover:bg-blue-800  focus:outline-none focus:border-none  font-medium rounded-md text-sm px-4 md:py-2 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 ">{props.btnText}</button>
    </div>
</div>

    </div>
  )
}

export default SearchBarComponent;
