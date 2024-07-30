import React, { useState } from "react";
import icon from "../../assets/images/searchIcon.png";
import logo from "../../assets/images/infinity.png";
const NavBar = () => {
  const [hamburgerIcon, setHamburgerIcon] = useState(false);
  const [searchBox, setSearchBox] = useState(false);

  return (
    <div className="">
      <nav className="bg-white shadow-md top-0 w-full z-100 py-3 ">
        <div className="content lg:px-4 md:px-2 flex flex-row justify-between items-center ">
          {/* going to define the logo of the webpag */}
          <div className="lg:ml-10 md:ml-3 ml-2 lg:w-[90px] md:w-[70px] w-[55px]  mt-0">
            <a href="/" className="">
              <img
                src={logo}
                alt=""
                className="max-w-full object-cover w-full"
              />
            </a>
          </div>
          <div className="">
            <ul className=" flex-row hidden md:flex md:space-x-1 lg:space-x-1 xl:space-0 ">
              <li>
                <a
                  href="/hackathon"
                  className="py-3 px-5 hover:bg-blue-50 text-dark-blue block font-medium hover:text-blue-500 focus:text-blue-500 focus:underline-blue-400"
                >
                  Hackathons
                </a>
              </li>
              <li>
                <a
                  href="/fest"
                  className="py-3 px-4  hover:bg-blue-50 text-dark-blue block font-medium hover:text-blue-500 focus:text-blue-500 focus:underline-blue-400"
                >
                  Fests
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="py-3 px-4  hover:bg-blue-50 text-dark-blue font-medium hover:text-blue-500 hidden lg:block focus:text-blue-500 focus:underline-blue-400"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/project"
                  className=" py-3 px-4  hover:bg-blue-50 text-dark-blue font-medium hover:text-blue-500 hidden lg:block focus:text-blue-500 focus:underline-blue-400"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/video"
                  className=" py-3 px-4  hover:bg-blue-50 text-dark-blue font-medium hover:text-blue-500 hidden lg:block focus:text-blue-500 focus:underline-blue-400"
                >
                  Videos
                </a>
              </li>
              <li>
                <a
                  href="/bootcamp"
                  className=" py-3 px-4  hover:bg-blue-50 text-dark-blue font-medium hover:text-blue-500 block focus:text-blue-500 focus:underline-blue-400"
                >
                  Bootcamps
                </a>
              </li>
            </ul>
          </div>

          {/* right hand side components of the navBar */}
          <div className="">
            <ul className="flex flex-row md:space-x-2 space-x-5  items-center">
              <li>
                <a
                  href="/hackathon/post"
                  className="xl:inline-flex hidden lg:py-3 md:py-1 py-1 lg:px-5 md:px-3 px-1 hover:bg-blue-50 text-dark-blue font-medium hover:text-blue-500 focus:text-blue-500 focus:underline-blue-400"
                >
                  Host a Hackathon
                </a>
              </li>
              <li>
                <a
                  href="/user/login"
                  className="lg:py-3 md:py-1 py-1 px-3  hover:bg-blue-50 text-dark-blue lg:font-medium text-md  hover:text-blue-500 focus:text-blue-500 focus:underline-blue-400"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/user/signup"
                  className="py-1 px-3 md:py-1 lg:py-3 bg-blue-500 rounded-sm text-white md:mx-3 mx-2 text-sm font-semibold  hover:bg-blue-600 focus:outline-none"
                >
                  Sign Up
                </a>
              </li>
              <li className="lg:hidden inline-flex pr-4">
                {/* here we are gonna to define the other options */}
                <button
                  className={`nav-toggle ${hamburgerIcon ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setHamburgerIcon(!hamburgerIcon);
                  }}
                >
                  <svg
                    className={`nav-icon ${hamburgerIcon ? "active" : ""}`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    // stroke-width="2"
                  >
                    <line x1="3" y1="12" x2="21" y2="12" className="line1" />
                    <line x1="3" y1="6" x2="21" y2="6" className="line2" />
                    <line x1="3" y1="18" x2="21" y2="18" className="line3" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="w-full z-1000 absolute flex justify-end">
        <div className="w-1/2 text-white bg-blue-500 rounded-md">
          {hamburgerIcon && (
            <div className="nav-menu">
              {/* here we are gonna to define the menu that we want to define */}
              <ul className="flex items-center justify-center flex-col space-y-2">
                <li className="md:hidden block">
                  <a href="/hackathon">Hackathons</a>
                </li>
                <li className="md:hidden block">
                  <a href="/fest">Fests</a>
                </li>
                <li className="md:hidden block">
                  <a href="/bootcamp">Bootcamps</a>
                </li>
                <li>
                  <a href="/blog">Blogs</a>
                </li>
                <li>
                  <a href="/video">Video</a>
                </li>
                <li>
                  <a href="/project">Projects</a>
                </li>
                <li>
                  <a href="/hackathon/post">Host a Hackathon</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
