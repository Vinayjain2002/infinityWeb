import React from 'react'
import { useState , useEffect} from 'react'
import Button from '@mui/joy/Button';
import { initializeApp } from "firebase/app";
import loginimage from '../../../../assets/images/theme.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Addvertisement from '../../../../components/Adds/Addvertisement.tsx'
import 'firebase/auth'; 
// import { signInWithPopup } from "firebase/auth";
import { getAuth,GoogleAuthProvider , signInWithRedirect} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvdwjk8ycZiGgOZHA7A0fztozG3R57nHA",
  authDomain: "infinity-vinay.firebaseapp.com",
  projectId: "infinity-vinay",
  storageBucket: "infinity-vinay.appspot.com",
  messagingSenderId: "160241808929",
  appId: "1:160241808929:web:b739bc450b45208b45d560",
  measurementId: "G-VZ9KFZ3S68"
};


const LoginUser = () => {
  useEffect(() => {
    // Initialize Firebase
    const fireaseIntialised = initializeApp(firebaseConfig); 
}, []);

  const loginWithGoogle= document.getElementById('loginWithGoogle')

  const [username,setusername]= useState('');
  const [password, setpassword]= useState('');
  const [result,setresult]= useState('');
  const [isLoading, setisLoading]= useState(false);
  var usernametextField= document.getElementById('username');
  var passwordtextField= document.getElementById('password');

  // setting the event handler that will handle the data entered in the forms entered by the user
  const onChangeHandler= (event)=>{
    const {name,value}= event.target;
    if(name==="username"){
      setusername(value);
    }
    else if(name==='password'){
      setpassword(value);
    }
  }
  const loginWithGoogleFunc= async()=>{
    // here we are going to define the code to define the options to the user t sign in with the help o the google
     try {
      const auth =await getAuth();
      const googleProvider = await new GoogleAuthProvider();
      //some error when i am trying to loggin the user i am not getting the details of the user
     await signInWithRedirect(auth, googleProvider);
     const user = auth.currentUser;
      console.log(user);
      alert(user);
   
    // Handle successful sign-in (e.g., navigate to a protected route)
  } catch (error) {
    console.error('Sign-in error:', error);
    // Handle sign-in errors
  }
  }

  // going to make the calls to the api we have build
  const submitForm= async (e)=>{
      if(username!=undefined && password!= undefined){
        e.preventDefault();
      console.log("going to make a request to the api")
      setisLoading(true);
      console.log(username);
      console.log(password);
      try{
          const response= await fetch("http://localhost:3000/api/infinity/auth/user/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username,password: password }),
          });
          console.log(response);
          const data= await response.json();
          const serverMessage= data.message;
          console.log(serverMessage)
          // we are now going to get the message sent by the server for the user
          if(response.status==200){
            toast.success('Logged in successfully!');
                    }
          else if(response.status==404 && serverMessage=="Provide valid username or email"){
            toast.error("Invalid Username")
          }
          else if(response.status==401 && serverMessage=="User does not exists"){
            toast.info("User not Found")
          }
          else if(response.status==403 && serverMessage=="Invalid Password"){
            toast.error("Invalid Password");
          }
          else if(response.status==403 && serverMessage=="Your account has been blocked"){
            toast.warning("Your account is blocked")
          }
          else if(response.status==500){
            toast.error("Internal Server Error");
          }
          else{
            toast.error("Error")
          }
          setisLoading(false);
      }
      catch(err){
        setisLoading(false);
        console.log(err)
      }
      // we need to remove the entered fields
      setusername('');
      setpassword('');
      usernametextField.value="";
      passwordtextField.value="";
      }
      else{
        alert("please enter teh username and the password")
      }
  }
  return (
<div className='flex h-screen flex-col md:flex-row'>
    <ToastContainer />
    <div className="md:w-1/2 bg-gray-50 w-full h-full flex flex-col justify-center items-center">
        <div className='xl:w-1/2 lg:w-3/5 md:w-4/5 sm:w-3/5 w-4/5'>
            <div className='mb-7'>
                <p className="text-left text-blue-500 text-4xl font-bold">Login</p>
                <p className="text-left text-gray-500   text-2xl font-bold">Welcome Back to Infinity</p>
            </div>
            <form className="flex flex-col" onSubmit={submitForm}>
                <label htmlFor="username" className="text-gray-500 lg:text-md 2xl:text-lg text-md mt-4">Username</label>
                <input type="text" id="username" className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm" onChange={onChangeHandler} name="username" required/>
                <label htmlFor="password" className="text-gray-500 ld:text-md 2xl:text-lg text-md mt-4">Password</label>
                <input type="password" id="password" className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm" onChange={onChangeHandler} name="password" required/>
                <div className='w-full'>
                    <a href="#" className=" text-blue-500 text-sm mt-1 ">Forgot password?</a>
                </div>
                {/* <Addvertisement /> */}
                <button type="submit" className="bg-blue-500 text-white w-full font-semibold px-4 lg:py-2 py-1 mt-4 hover:bg-blue-600 focus:outline-none">
                    <Button variant="contained" color="primary" disabled={isLoading} loading={isLoading} className='text-md xl:text-4xl'>
                          Login
                    </Button>                
                 </button>
            </form>
            <div>
              <button id="loginWithGoogle" onClick={loginWithGoogleFunc} className="bg-transparent hover:bg-blue-500 text-blue-500 md:w-4/9 w-full  py-2 px-4 mt-2 border border-blue-500 hover:border-transparent rounded shadow opacity-75 hover:text-white">
                    Login With Google
                </button>
                <div className='flex'>
                <p className="text-gray-500 text-md  mt-4">Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>

                </div>
            </div>
        </div>
    </div>
    <div className="w-1/2  md:flex hidden items-center justify-center">
        <img src={loginimage} alt="login User illuminations" className="max-w-full max-h-full w-full h-full object-cover" />
    </div>
</div>

  );
}

export default LoginUser;

