import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { useEffect } from 'react';

// we are gonna to define the Login Screens
import LoginAsAdmin from  './features/auth/pages/AdminAuthPages/LoginAsAdmin.js'
import RegisterAsAdmin from './features/auth/pages/AdminAuthPages/RegisterAsAdmin.js';
import LoginUser from './features/auth/pages/UserAuthPages/LoginUser.js';
import SignUpUser from './features/auth/pages/UserAuthPages/SignUpUser.js'
import PasswordResetPage from './features/auth/pages/Password.js'

import HomePage from './features/homeScreen/pages/HomePage.js';
import ChattingPage from './features/Chatting/pages/ChattingPage.tsx';
import Preferences from './features/Account/pages/Prefference.js'
import Account from './features/Account/pages/Account.js'
import UserProfile from './features/Account/pages/UserProfile.tsx';

// we are going to define the routes of teh Bootcamp Page
import Bootcamp from './features/bootcamps/pages/Bootcamps.tsx'
import DetailedBootcamps from './features/bootcamps/pages/DetailedBootcamps.tsx';
import PostBootcamps from './features/bootcamps/pages/PostBootcamps.tsx';
import UpdateBootcamps from './features/bootcamps/pages/UpdateBootcamps.tsx';

// we are gonna to define the routes of the Project Screen
import Project from './features/projects/pages/Projects.js'
import DetailedProject from './features/projects/pages/DetailedProjects.js'
import UpdateProject from './features/projects/pages/UpdateProject.tsx';
import PostProject from './features/projects/pages/PostProject.tsx';

// we are gonna to import the routes of the Blog Page
import BlogPage from './features/blogs/pages/BlogPage.js';
import DetailedBlogPage from './features/blogs/pages/DetailedBlogPage.tsx';
import UpdateBlog from './features/blogs/pages/UpdateBlog.tsx';
import PostBlog from './features/blogs/pages/PostBlog.tsx';

// we are gonna to import the routes of the Hackathon
import DetailedHackathon from './features/hackathons/pages/DetailedHackathon.js';
import Hackathon from './features/hackathons/pages/Hackathon.js'
import PostHackathon from './features/hackathons/pages/PostHackathon.tsx';
import UpdateHackathon from './features/hackathons/pages/UpdateHackathon.tsx';

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
        <Route path='/changePassword/:username/:token' element={<PasswordResetPage/>}/>

        {/* we are going to define the route to post the hackathon */}
        <Route path='/hackathon' element= {<Hackathon />}/>
        <Route path='/hackathon/:id' element= {<DetailedHackathon />}/>
        <Route path='/hackathon/post' element={<PostHackathon />} />
        <Route path='/hackathon/update/:id' element={<UpdateHackathon />} />

        {/* we are gonna to define the routes for the blog page */}
        <Route path='/blog' element={<BlogPage />}/>
        <Route path='/blog/:id' element={<DetailedBlogPage />} />
        <Route path='/blog/update/:id' element={<UpdateBlog />} />
        <Route path='/blog/post' element={<PostBlog />} />

        {/* we are gonna to define the routes for the Project Screens */}
        <Route path='/project' element={<Project />}/>
        <Route path='/project/:id' element={<DetailedProject />}/>
        <Route path='/project/update/:id' element={<UpdateProject />} />
        <Route path='/project/post' element={<PostProject />}/>

        {/* we are gonna to define the routes of the basic pages */}
        <Route path='/homeScreen' element= {<HomePage/>}/>
        <Route path='/account' element={<Account />} />
        <Route path='user/prefference' element={<Preferences />} />
        <Route path='user/chat' element={<ChattingPage />} />
        <Route path='user/profile/:id' element={<UserProfile />} />

        {/* we are going to define the routes of the Bootcamp Screen */}
        <Route path='/bootcamp' element={<Bootcamp />}/>
        <Route path='/bootcamp/:id' element={<DetailedBootcamps />} />
        <Route path='/bootcamp/post' element={<PostBlog />} />
        <Route path='/bootcamp/update/:id' element={<UpdateBootcamps />} />

        
      </Routes>
    </div>
  </Router>
  )
}

export default App;

