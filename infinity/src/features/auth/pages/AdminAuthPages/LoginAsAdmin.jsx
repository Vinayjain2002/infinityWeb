import React, { useState } from 'react'
import loginimage from '../../../../assets/images/theme.png';
const LoginAsAdmin = () => {

  const [email, setemail]= useState("");
  const [password,setpassword]= useState("");

  const submitForm= async(e)=>{
    var emailField= document.getElementById("email")
    var passwordField= document.getElementById("password")
    e.preventDefault();
    console.log(email);
    console.log(password)
      if( email!=undefined && password!= undefined){
        // so the user used to add the value of the email and the password
        try{
          const response= await fetch("http://localhost:3000/api/infinity/auth/user/register", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: email,password: password}),
          });
          console.log(response);
          if(res.status==200){
            alert("Admin Login Succesfully")
          }
          else{
            alert("Some Error while logging the user")
          }
        }
        catch(err){
          console.log("eror while making the api call")
        }
        // we need to make all the fields empty and we also need navigate to the diffeent page
        emailField.value="";
        passwordField.value="";
        setemail("");
        setpassword("");     
      }
      else{
        alert("one or more fields are incorrect")
      }
  }
  const onChangeHandler= (event)=>{
    const {name,value}= event.target;
    if(name=="password"){
      setPa
    }
    else if(name== "email"){
      setemail(value);
    }
  }
  return (
    <div className='flex h-screen flex-col md:flex-row'>
    <div className="md:w-1/2 bg-gray-50 w-full h-full flex flex-col justify-center items-center">
      <div className='xl:w-1/2 lg:w-3/5 md:w-4/5 sm:w-3/5 w-4/5'> 
      {/* here the this full div is not coming in the center  */}
        <p className="text-left text-blue-500 text-4xl font-bold">Welcome Admin</p>
        <form className="flex  flex-col" onSubmit={submitForm}>
          <label htmlFor="email" className="text-gray-500 lg:text-md 2xl:text-lg text-md mt-4">Email:</label>
          <input type="text" id="email" className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm" onChange={onChangeHandler} name="email" />
          <label htmlFor="password" className="text-gray-500 ld:text-md 2xl:text-lg text-md mt-4">Password:</label>
          <input type="password" id="password" className="border px-2 py-1 border-gray-300 w-1/2 focus:outline-none focus:border-blue-500 text-gray-600 text-sm" onChange={onChangeHandler} name="password" />
          <button type="submit" className="bg-blue-500 text-white w-1/2 text-sm font-semibold px-4 py-2 mt-4 hover:bg-blue-600 focus:outline-none">Login</button>
          <p className="text-gray-500 text-md  mt-4">Don't have an account? <a href="/adminsignup" className="text-blue-500">Sign Up</a></p>
        </form>
      </div>
    </div>
    <div className="w-1/2  md:flex hidden items-center justify-center">
        <img src={loginimage} alt="login User illuminations" className="max-w-full max-h-full w-full h-full object-cover" />
    </div>
  </div>
  )
}

export default LoginAsAdmin
