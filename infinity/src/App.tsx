import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { useEffect } from 'react';

// we are gonna to define the Login Screens
import LoginAsAdmin from  './features/auth/pages/AdminAuthPages/LoginAsAdmin.js'
import RegisterAsAdmin from './features/auth/pages/AdminAuthPages/RegisterAsAdmin.js';
import SignUpUser from './features/auth/pages/UserAuthPages/SignUpUser.js'
import LoginUser from './features/auth/pages/UserAuthPages/LoginUser.tsx'
import PasswordResetPage from './features/auth/pages/Password.js'

import HomePage from './features/homeScreen/pages/HomePage.js';
import ChattingPage from './features/Chatting/pages/ChattingPage.tsx';
import Preferences from './features/Account/pages/Prefference.js'
import Account from './features/Account/pages/Account.js'
import UserProfile from './features/Account/pages/UserProfile.tsx';

// we are going to define the routes of teh Bootcamp Page
import Bootcamp from './features/bootcamps/pages/AllBootcamps.tsx'
import DetailedBootcamps from './features/bootcamps/pages/DetailedBootcamps.tsx';
import PostBootcamps from './features/bootcamps/pages/PostBootcamps.tsx';
import UpdateBootcamps from './features/bootcamps/pages/UpdateBootcamps.tsx';

// we are gonna to define the routes of the Project Screen
import DetailedProject from './features/projects/pages/DetailedProjects.js'
import UpdateProject from './features/projects/pages/UpdateProject.tsx';
import AllProjects from './features/projects/pages/AllProjects.js';
import PostProject from './features/projects/pages/PostProject.tsx';

// we are gonna to import the routes of the Blog Page
import BlogPage from './features/blogs/pages/BlogPage.js';
import DetailedBlogPage from './features/blogs/pages/DetailedBlogPage.tsx';
import UpdateBlog from './features/blogs/pages/UpdateBlog.tsx';
import PostBlog from './features/blogs/pages/PostBlog.tsx';

// we are gonna to import the routes of the Hackathon
import DetailedHackathon from './features/hackathons/pages/DetailedHackathon.js';
import PostHackathon from './features/hackathons/pages/PostHackathon.tsx';
import UpdateHackathon from './features/hackathons/pages/UpdateHackathon.tsx';
import HackathonDetails from './features/hackathons/pages/HackathonDetails.js';
import AllHackathons from './features/hackathons/pages/AllHackathons.tsx';

// we are gonna to define the fESTS SCREENS
import Fest from './features/fests/pages/AllFests.tsx';
import DetailedFest from './features/fests/pages/DetailedFest.tsx';
import PostFest from './features/fests/pages/PostFest.tsx';
import UpdateFest from './features/fests/pages/UpdateFest.tsx';
import AboutScreen from './features/homeScreen/pages/AboutScreen.tsx';
import Help from './features/Details/pages/Help.tsx';
import Contact from './features/Details/pages/Contact.tsx';

//we are gonna to definr the route for the Video Screen
import AllVideos from './features/Videos/pages/AllVideos.tsx';
import PostVideo from './features/Videos/pages/PostVideo.tsx';
import PlayVideo from './features/Videos/pages/PlayVideo.tsx';
import FestDetails from './features/fests/pages/FestDetails.tsx';
import AllBootcamps from './features/bootcamps/pages/AllBootcamps.tsx';
import BootcampDetails from './features/bootcamps/pages/BootcampDetails.tsx';
import { Error404 } from './features/errorPages/pages/404error.tsx';

const firebaseConfig = {
  apiKey: "AIzaSyCvdwjk8ycZiGgOZHA7A0fztozG3R57nHA",
  authDomain: "infinity-vinay.firebaseapp.com",
  projectId: "infinity-vinay",
  storageBucket: "infinity-vinay.appspot.com",
  messagingSenderId: "160241808929",
  appId: "1:160241808929:web:b739bc450b45208b45d560",
  measurementId: "G-VZ9KFZ3S68"
};

const App = () => {
  useEffect(() => {
    // Initialize Firebase
    const fireaseIntialised = initializeApp(firebaseConfig); 
}, []);
  return (
    <Router>
    <div>
      <Routes>

        {/* we are going to define the routes of the login Screen */}
        <Route path="/user/signup" element={<SignUpUser />} />
        <Route path="/user/login" element={<LoginUser />} />
        <Route path='/admin/login' element={<LoginAsAdmin />} />
        <Route path= '/admin/register' element={<RegisterAsAdmin />} />
        
        {/* we are gonna to define the routes of the basic pages */}
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/account' element={<Account />} />

        {/* this route is left to be linked with the backened */}
        <Route path='/changePassword/:username/:token' element={<PasswordResetPage/>}/>

        {/* we are going to define the route to post the hackathon */}
        <Route path='/hackathon' element= {<AllHackathons />}/>
        <Route path='/hackathon/:id' element={<HackathonDetails />} />
        <Route path='/hackathon/detail/:id' element= {<DetailedHackathon />}/>
        <Route path='/hackathon/post' element={<PostHackathon />} />
        <Route path='/hackathon/update/:id' element={<UpdateHackathon />} />

        {/* we are gonna to define the routes for the blog page */}
        <Route path='/blog' element={<BlogPage />}/>
        <Route path='/blog/:id' element={<DetailedBlogPage />} />
        <Route path='/blog/update/:id' element={<UpdateBlog />} />
        <Route path='/blog/post' element={<PostBlog />} />

        {/* we are gonna to define the routes for the Project Screens */}
        <Route path='/project' element={<AllProjects />}/>
        <Route path='/project/:id' element={<DetailedProject />}/>
        <Route path='/project/update/:id' element={<UpdateProject />} />
        <Route path='/project/post' element={<PostProject />}/>


        {/* these are the section of the details of teh website */}
        <Route path="/detail/about" element={<AboutScreen />} />
        <Route path='/detail/help' element={<Help />} />
        <Route path='/detail/contact' element={<Contact />} />

        <Route path='user/prefference' element={<Preferences />} />
        <Route path='user/chat' element={<ChattingPage />} />
        <Route path='user/profile/:id' element={<UserProfile />} />

        {/* we are going to define the routes of the Bootcamp Screen */}
        <Route path='/bootcamp' element={<AllBootcamps />}/>
        <Route path='/bootcamp/:id' element={<BootcampDetails/>} />
        <Route path='/bootcamp/detail/:id' element={<DetailedBootcamps />} />
        <Route path='/bootcamp/post' element={<PostBootcamps/>} />
        <Route path='/bootcamp/update/:id' element={<UpdateBootcamps />} />        

        {/* we are gonna to define the routes of the Fests */}
        <Route path="/fest" element={<Fest />} />
        <Route path="/fest/:id" element={<FestDetails />} />
        <Route path="/fest/detail/:id" element={<DetailedFest />} />
        <Route path="/fest/post" element={<PostFest />} />
        <Route path="/fest/update/:id" element={<UpdateFest />} />

        {/* we are gonna to define the routes for the Videos Section */}
        <Route path="/video" element={<AllVideos />} />
        <Route path='/postVideo' element={<PostVideo />} />
        <Route path='/video/:id' element={<PlayVideo />} />
        
        {/* defining the 404 page if no other page is present */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App;

