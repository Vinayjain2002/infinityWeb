import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { useEffect } from 'react';
import LoginAsAdmin from  './features/auth/pages/AdminAuthPages/LoginAsAdmin.js'
import RegisterAsAdmin from './features/auth/pages/AdminAuthPages/RegisterAsAdmin.js';
import LoginUser from './features/auth/pages/UserAuthPages/LoginUser.js';
import SignUpUser from './features/auth/pages/UserAuthPages/SignUpUser.js'
import PasswordResetPage from './features/auth/pages/Password.js'
import HomePage from './features/homeScreen/pages/HomePage.js';
import Preferences from './features/Account/pages/Prefference.js'
import Hackathon from './features/hackathons/pages/Hackathon.js'
import BlogPage from './features/blogs/pages/BlogPage.js';
import DetailedHackathon from './features/hackathons/pages/DetailedHackathon.js';
import Project from './features/projects/pages/Projects.js'
import DetailedProject from './features/projects/pages/DetailedProjects.js'
import Account from './features/Account/pages/Account.js'

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
        <Route path="/signup" element={<SignUpUser />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path='/adminlogin' element={<LoginAsAdmin />} />
        <Route path= '/registeradmin' element={<RegisterAsAdmin />} />
        <Route path='/changePassword/:username/:token' element={<PasswordResetPage/>}/>
        <Route path='/homeScreen' element= {<HomePage/>}/>
        <Route path='/prefference' element={<Preferences />} />
        <Route path='/hackathon' element= {<Hackathon />}/>
        <Route path='/detailHackathon' element= {<DetailedHackathon />}/>
        <Route path='/blog' element={<BlogPage />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/detailProject' element={<DetailedProject />}/>
        <Route path='/account' element={<Account />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App;

