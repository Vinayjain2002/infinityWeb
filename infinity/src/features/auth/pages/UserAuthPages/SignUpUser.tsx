import React, { useState } from 'react'
import loginimage from '../../../../assets/images/theme.png'
import Button from '@mui/joy/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {checkEmail, checkMobileNo, checkUsername} from '../../helper/Authenticator'
import {RegisterUserApi} from './../../api/userApi'
import { setLocalStorage, setCookies } from '../../api/storage';

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

  const onChangeHandler= (event: React.ChangeEvent<HTMLInputElement> )=>{
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

  const checkFields = async()=>{
    try{  
        const usernameCheck= checkUsername(username);
        setisUsernameValid(usernameCheck);
        const mobileNoCheck= !!checkMobileNo(mobileno);
        setisMobileValid(mobileNoCheck);
        const emailCheck= !!checkEmail(email);
        setisEmailValid(emailCheck);
    }
    catch(err){
      console.error("Error while checking Fields");
    }
  }

  const submitForm= async(e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    setisLoading(true);
      // first checking the email, username and the mobileno
      checkFields();
      // here the email check is always returing false
      if( isEmailValid && isUsernameValid){
        // so all the fields entered by the user are correct and now we need to make the api call
        try{
              alert(username);
              alert(mobileno);
              alert(email);
              const data= await RegisterUserApi(username, email, mobileno);
              setisLoading(false);
              if (data == null){
                toast.error("Server Error");
              }
              else{
                // so we used to get the data from the Server
                const status= data.status;
                const message= data.message;
                if(status == 401){
                  toast.error("Invalid Credentials");
                }
                else if(status == 409){
                  toast.error("User Already Exists");
                }
                else if(status == 410){
                  toast.error("Internal Error");
                }
                else if( status== 500){
                  toast.error("Server Error");
                }
                else if(status == 200){
                    toast.info("Registered Successfully");
                    const userToken= data.userToken;
                    setLocalStorage({"username": username, "email": email, "mobileNo": mobileno})
                    setCookies(userToken);
                    // so we used to define the logic for the storing the data

                }
              }
            }
        catch(err){
          setisLoading(false)
          console.log("eror while making the api call")
        }
        // we need to make all the fields empty and we also need navigate to the diffeent page
        if(usernameField instanceof HTMLInputElement){
          usernameField.value= "";
        }
        if(mobilenoField instanceof HTMLInputElement){
          mobilenoField.value= "";
        }
        if(emailField instanceof HTMLInputElement){
          emailField.value= "";
        }
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
    <div className="md:w-1/2 w-full bg-gray-50 h-full flex flex-col justify-center items-center">
        <div className='xl:w-1/2 lg:w-3/5 md:w-4/5 sm:w-3/5 w-4/5'>
          {/* here the this full div is not coming in the center  */}
          <div className='mb-7'>
                <p className="text-left text-blue-500  text-4xl font-bold">SignUp</p>
                <p className="text-left text-gray-500 mt-2  lg:text-3xl text-2xl font-bold">Register at Infinity</p>
            </div>
          <form className="flex flex-col" onSubmit={submitForm}>
          
            <label htmlFor="username" className="text-gray-500 lg:text-md 2xl:text-lg text-md mt-4">Username:</label>
                <input type="text" id="username" className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm" onChange={onChangeHandler} name="username" required/>
                <label htmlFor="email" className="text-gray-500 lg:text-md 2xl:text-lg text-md mt-4">Email:</label>
                <input type="text" id="email" className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm" onChange={onChangeHandler} name="email" required/>
                {/* <p>Invalid Email</p> */}
                <label htmlFor="mobileno" className="text-gray-500 lg:text-md 2xl:text-lg text-md mt-4">Mobile No:</label>
                <input type="tel" id="mobileno" className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm" onChange={onChangeHandler} name="mobileno" required/>
                {/* {/* <p className="text-sm text-red-400 mt-1">Invalid mobileNo</p>       */}
                  <button type="submit" className="bg-blue-500 text-white w-full font-semibold px-4 lg:py-2 py-1 mt-4 hover:bg-blue-600 focus:outline-none"> 
                    <Button variant="contained" color="primary" disabled={isLoading} loading={isLoading} className='text-md xl:text-4xl'>
                          Login
                    </Button>                
                 </button> 
                  <div className='flex'>
                      <p className="text-gray-500 text-md  mt-4">Already have an account? <a href="login" className="text-blue-500">Login</a></p>
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