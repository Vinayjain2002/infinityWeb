import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-100 w-full'>
      <div className='lg:mx-20 md:mx-15 mx-5 pt-10 pb-5'>
          <div className='flex flex-row justify-between'>
              <div className='hidden md:flex flex-col'>
                <div className='font-bold text-gray-700 text-sm'>Devpost</div>
                <ul className='py-2 text-sm'>
                  <li className='py-1 text-gray-700 hover:underline'><a>About</a></li>
                  <li className='py-1 text-gray-700 hover:underline'><a>Careers</a></li>
                  <li className='py-1 text-gray-700 hover:underline'><a>Contact</a></li>
                  <li className='py-1 text-gray-700 hover:underline'><a>Help</a></li>
                </ul>
              </div>
              <div>
                <div className='font-bold text-gray-700 text-sm'>Hackathons</div>
                <ul className='py-2 text-sm'>
                  <li className='py-1 text-gray-700 hover:underline'><a>Browse Hackathons</a></li>
                  <li className='py-1 text-gray-700 hover:underline'><a>Explore Projects</a></li>
                  <li className='py-1 text-gray-700 hover:underline'><a>Host a hackathon</a></li>
                  <li className='py-1 text-gray-700 hover:underline'><a>Hackathon Guides</a></li>
                </ul>
              </div>
              <div>
                <div className='font-bold text-gray-700 text-sm'>Events</div>
                <ul className='py-2  text-sm'>
                  <li className='py-1 text-gray-700 hover:underline'><a>Browse Fests</a></li>
                  <li className='py-1 text-gray-700 hover:underline'><a>Explore Bootcamps</a></li>
                  <li className='py-1 text-gray-700 hover:underline'><a>Host Bootcamps</a></li>
                  <li className='py-1 text-gray-700 hover:underline'><a>Explore Blogs</a></li>
                </ul>
              </div>
              <div>
                <div className='font-bold text-gray-700 text-sm '>Portfolio</div>
                <ul className='py-2 text-sm'>
                  <li className='py-1 text-gray-700 hover:underline'><a>Your Projects</a></li>
                  <li className='py-1 text-gray-700 hover:underline'><a>Your Hackathons</a></li>
                  <li className='py-1 text-gray-700 hover:underline'><a>Your Bootcamps</a></li>
                  <li className='py-1 text-gray-700 hover:underline'><a>Setting</a></li>
                </ul>
              </div>

              <div>
                <div className='font-bold text-gray-700  text-sm'>Connect</div>
                <ul className='py-2 text-sm'>
                  <li className='py-1 text-gray-700 hover:underline'>LinkedIn</li>
                  <li className='py-1 text-gray-700 hover:underline'>Reddit</li>
                  <li className='py-1 text-gray-700 hover:underline'>Telegram</li>
                  <li className='py-1 text-gray-700 hover:underline'>X</li>
                </ul>
              </div>
          </div>
      </div>
      <div>
        <div className=''><hr/></div>
        <div className='mt-3'>
          <ul className='flex flex-row flex-wrap justify-between mx-8 text-sm'>
            <li className='py-1 text-gray-700 hover:underline'><a>© 2024 Devpost, Inc. All rights reserved.</a></li>
            <li className='py-1 text-gray-700 hover:underline'><a>Community guidelines</a></li>
            <li className='py-1 text-gray-700 hover:underline'><a>Security</a></li>
            <li className='py-1 text-gray-700 hover:underline'><a>CA notice</a></li>
            <li className='py-1 text-gray-700 hover:underline'><a>Privacy policy</a></li>
            <li className='py-1 text-gray-700 hover:underline'><a>Terms of service</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
