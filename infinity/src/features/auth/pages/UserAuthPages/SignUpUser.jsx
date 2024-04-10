import React, { useState } from 'react'
import loginimage from '../../../../assets/images/theme.png'
import Button from '@mui/joy/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpUser = () => {
  // we are going to check the vali username , email and the password
  var usernameField= document.getElementById("username");
  var mobilenoField= document.getElementById("mobileno")
  var emailField= document.getElementById("email");

  const [username, setusername]= useState('');
  const [mobileno,setmobileno]= useState('');
  const [email,setemail]= useState('');
  const [isMobileValid,setisMobileValid]= useState(true);
  const [isEmailValid, setisEmailValid]= useState(true)
  const [isUsernameValid, setisUsernameValid]= useState(true);
  const [isLoading,setisLoading]= useState(false);

  // here we are going to define the code to save the username and the password
  const checkUsername= (username)=> {
    const regex = /^\S{2,15}$/;
    const result= regex.test(username);
    if(!result){
      setisUsernameValid(false)
    }
    return result;
  }

  const checkMobileNo= (mobileno)=>{
    try{
      const regex = /^[0-9]{10}$/;
      const result= regex.test(mobileno);
      if(!result){
        setisMobileValid(false);
      }
      return result;
    }
    catch(err){
      console.log("error while checking the email of the user")
    }
  }

  // we are going to check is the email entered by the user is valid or not
  const checkEmail= (email)=>{
    try{
      const regex = /^[^\s!#$%&'*+/=?^_`{|}~-]+(?:\.[^\s!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
      const result= regex.test(email);
      if(!result){
        setisEmailValid(false)
      }
      return result;
    }
    catch(err){
      console.log("error while checking the email of the user")
    }
  }

  const onChangeHandler= (event)=>{
    const {name,value}= event.target;
    if(name==="username"){
      setusername(value);
    }
    else if(name==='mobileno'){
      setmobileno(value);
    }
    else if(name== "email"){
      setemail(value);
    }
  }
  const submitForm= async(e)=>{
    e.preventDefault();
    setisLoading(true);
    console.log(email);
    console.log(mobileno);
    console.log(username);
      // first checking the email, username and the mobileno
      const emailVerify=checkEmail(email);
      const mobilenoVerify= checkMobileNo(mobileno);
      const usernameVerify = checkUsername(username);
      console.log(emailVerify);
      console.log(mobilenoVerify);
      console.log(usernameVerify);
      // here the email check is always returing false

      if( emailVerify && usernameVerify){
        // so all the fields entered by the user are correct and now we need to make the api call
        try{
              const response= await fetch("http://localhost:3000/api/infinity/auth/user/register", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({username: username,email: email, mobileNo: mobileno }),
              });
              const data = await response.json();
              const serverMessage= data.message;
              setisLoading(false);
              console.log(serverMessage)
              if(response.status==200 && serverMessage=="User registered Successfully"){
                toast.success('User Registered Successfully');
              }
              else if(response.status==404 && serverMessage=="Provide the email and username"){
                toast.error("Provide email and username");
              }
              else if(response.status==409 && serverMessage=="Email already exists"){
                toast.info("Email is already registered!")
              }
              else if(response.status==422 && serverMessage=="Unable to verify Email"){
                toast.error("Error while verifying Email");
              }
              else if(response.status==500){
                toast.error("Internal Server Error")
              }
              else{
                console.log("Error while registering the user")
              }
        }
        catch(err){
          setisLoading(false)
          console.log("eror while making the api call")
        }
        // we need to make all the fields empty and we also need navigate to the diffeent page
        usernameField.value="";
        mobilenoField.value="";
        emailField.value="";
        setemail("");
        setmobileno("");
        setusername("");
      }
      else{
        setisLoading(false);
        alert("one or more fields are incorrect")
      }
  }

  return (
    <div className='flex h-screen flex-col md:flex-row'>
          <ToastContainer />
    <div className="lg:w-1/2 md:w-4/6 h-full flex flex-col justify-center items-center">
        <div className='w-3/5'>
          {/* here the this full div is not coming in the center  */}
          <form className="flex flex-col" onSubmit={submitForm}>
          <div className='mb-7'>
                <p className="text-left text-blue-500 text-5xl font-bold">Infinity</p>
                <p className="text-left text-gray-500 text-3xl font-bold">Education never ends</p>
            </div>
            <label htmlFor="username" className="text-gray-500 text-sm mt-4">Username:</label>
                <input type="text" id="username" className="border px-2 py-1 border-gray-300 w-2/3  focus:outline-none focus:border-blue-500" onChange={onChangeHandler} name="username" required/>
                <label htmlFor="email" className="text-gray-500 text-sm mt-4">Email:</label>
                <input type="text" id="email" className="border px-2 py-1 border-gray-300 w-2/3  focus:outline-none focus:border-blue-500" onChange={onChangeHandler} name="email" required/>
                {/* <p>Invalid Email</p> */}
                <label htmlFor="mobileno" className="text-gray-500 text-sm mt-4">Mobile No:</label>
                <input type="tel" id="mobileno" className="border px-2 py-1 border-gray-300 w-2/3  focus:outline-none focus:border-blue-500" onChange={onChangeHandler} name="mobileno" required/>
                {/* {/* <p className="text-sm text-red-400 mt-1">Invalid mobileNo</p>       */}
                          <button type="submit" className="bg-blue-500 text-white w-2/3 text-sm font-semibold px-4 py-2 mt-4 hover:bg-blue-600 focus:outline-none"> 
                    <Button variant="contained" color="primary" disabled={isLoading} loading={isLoading}>
                          Login
                    </Button>                
                 </button> 
                  <div className='flex'>
                      <p className="text-gray-500 text-sm mt-4">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
                  </div>       
              </form>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-3/6  md:flex hidden items-center justify-center">
        <img src={loginimage} alt="login User illuminations" className="max-w-full max-h-full w-full h-full object-cover" />
    </div>
      </div>
  );
}

export default SignUpUser;