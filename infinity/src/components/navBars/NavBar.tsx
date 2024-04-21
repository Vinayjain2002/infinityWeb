import React from 'react'
import icon from '../../assets/images/searchIcon.png'
import logo from '../../assets/images/infinity.png'
const NavBar = () => {
  return (
    <div className=''>
      <nav className='bg-white shadow-md top-0 w-full z-50'>
        <div className='content lg:px-4 md:px-2 flex flex-row justify-between items-center '>
            {/* going to define the logo of the webpag */}
            <div className='lg:ml-10 md:ml-3 ml-2 lg:w-[90px] md:w-[70px] w-[55px]  mt-0'>
                <a href="/" className=''>
                  <img src={logo} alt="" className="max-w-full object-cover w-full" />
                </a>
            </div>
            <div className=''>
                <ul className=' flex-row hidden lg:flex '>
                    <li>
                        <a href="/hackathon" className="py-3 px-5 hover:bg-blue-50 text-dark-blue font-medium hover:text-blue-500 focus:text-blue-500 focus:underline-blue-400">
                            Hackathons
                        </a>
                    </li>
                    <li>
                        <a href="" className="py-3 px-4  hover:bg-blue-50 text-dark-blue font-medium hover:text-blue-500 focus:text-blue-500 focus:underline-blue-400">Fests</a></li>
                    <li>
                        <a href="" className="py-3 px-4  hover:bg-blue-50 text-dark-blue font-medium hover:text-blue-500 focus:text-blue-500 focus:underline-blue-400">Blogs</a></li>
                    <li>
                        <a href="" className=" py-3 px-4  hover:bg-blue-50 text-dark-blue font-medium hover:text-blue-500 focus:text-blue-500 focus:underline-blue-400">Projects</a></li>
                    <li>
                        <a href="" className=" py-3 px-4  hover:bg-blue-50 text-dark-blue font-medium hover:text-blue-500 focus:text-blue-500 focus:underline-blue-400">Courses</a></li>
                </ul>
            </div>

            {/* right hand side components of the navBar */}
           <div className=''>
            <ul className='flex flex-row items-center'>
                <li>
                    <a href="" className="md:inline-flex hidden lg:py-3 md:py-1 py-1 lg:px-5 md:px-3 px-1 hover:bg-blue-50 text-dark-blue font-medium hover:text-blue-500 focus:text-blue-500 focus:underline-blue-400">Host a Hackathon</a></li>
                <li className='w-6 mt-5 mx-3'>
                    <a href="" className='mr-8 py-3' >
                        <img src={icon} alt="Search Icon" />
                    </a>
                </li>
                <li>
                    <button className='lg:py-3 md:py-1 py-1 lg:px-5 md:px-3 px-1 hover:bg-blue-50 text-dark-blue lg:font-medium text-md  hover:text-blue-500 focus:text-blue-500 focus:underline-blue-400'>Login</button>
                </li>
                <li>
                    <button className='py-1 md:py-1 lg:py-3 bg-blue-500 text-white mx-4 md:mx-3 px-2 text-sm font-semibold  hover:bg-blue-600 focus:outline-none'>Sign Up</button>
                </li>
            </ul>
           </div>
        </div>  
      </nav>
    </div>
  )
}

export default NavBar;
