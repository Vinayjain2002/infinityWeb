import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { useEffect } from 'react';
import LoginAsAdmin from  './features/auth/pages/AdminAuthPages/LoginAsAdmin'
import RegisterAsAdmin from './features/auth/pages/AdminAuthPages/RegisterAsAdmin';
import LoginUser from './features/auth/pages/UserAuthPages/LoginUser';
import SignUpUser from './features/auth/pages/UserAuthPages/SignUpUser'
import PasswordResetPage from './features/auth/pages/Password.jsx'
import HomePage from './features/homeScreen/pages/HomePage';
import Preferences from './features/auth/pages/UserAuthPages/Prefference'
import Hackathon from './features/hackathons/pages/Hackathon'
import BlogPage from './features/blogs/pages/BlogPage';

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
        <Route path='/blog' element={<BlogPage />}/>
      </Routes>
    </div>
  </Router>
  )
}

export default App;

