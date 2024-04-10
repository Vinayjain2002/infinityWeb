import React from 'react'
import icon from '../../assets/images/searchIcon.png'
import logo from '../../assets/images/infinity.png'
const NavBar = () => {
  return (
    <div className=''>
      <nav className='bg-white shadow-md top-0 w-full z-50'>
        <div className='content px-4  flex flex-row justify-between items-center '>
            {/* going to define the logo of the webpag */}
            <a href="/" className=''>
            <img src={logo} alt="" className="w-15 md:w-20 lg:w-22 object-contain xl:ml-25 lg:ml-15 md:ml-13 ml-10" />
            </a>
            <div >
                <ul className=' flex-row hidden lg:flex '>
                    <li>
                        <a href="" className="py-3 px-5 hover:bg-blue-50 text-dark-blue font-medium hover:text-blue-500 focus:text-blue-500 focus:underline-blue-400">
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
                    <a href="" className="py-3 px-5 hover:bg-blue-50 text-dark-blue font-medium hover:text-blue-500 focus:text-blue-500 focus:underline-blue-400">Host a Hackathon</a></li>
                <li className='w-6 mx-3'>
                    <a href="" className='mr-8 py-3' >
                        <img src={icon} alt="Search Icon" />
                    </a>
                </li>
                <li>
                    <button className='py-3 px-5  hover:bg-blue-50 text-dark-blue lg:font-medium text-md  hover:text-blue-500 focus:text-blue-500 focus:underline-blue-400'>Login</button>
                </li>
                <li>
                    <button className='py-2 bg-blue-500 text-white mx-2 px-4 py-1 text-sm font-semibold  hover:bg-blue-600 focus:outline-none'>Sign Up</button>
                </li>
            </ul>
           </div>
        </div>  
      </nav>
    </div>
  )
}

export default NavBar;
