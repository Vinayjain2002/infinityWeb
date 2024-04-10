import React, { useState } from 'react'
import loginillum from '../../../../assets/images/loginflex.png'
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
    <div className='flex h-screen'>
    <div className="w-1/2 h-full flex flex-col items-center">
      <div className='w-4/5 mt-16'> 
      {/* here the this full div is not coming in the center  */}
        <p className="text-left text-blue-500 text-5xl font-bold">Welcome Admin</p>
        <form className="flex  flex-col" onSubmit={submitForm}>
          <label htmlFor="email" className="text-gray-500 text-sm mt-4">Email:</label>
          <input type="text" id="email" className="border px-2 py-1 border-gray-300 w-1/2 focus:outline-none focus:border-blue-500 text-gray-600 text-sm" onChange={onChangeHandler} name="email" />
          <label htmlFor="password" className="text-gray-500 text-sm mt-4">Password:</label>
          <input type="password" id="password" className="border px-2 py-1 border-gray-300 w-1/2 focus:outline-none focus:border-blue-500 text-gray-600 text-sm" onChange={onChangeHandler} name="password" />
          <button type="submit" className="bg-blue-500 text-white w-1/2 text-sm font-semibold px-4 py-2 mt-4 hover:bg-blue-600 focus:outline-none">Login</button>
          <p className="text-gray-500 text-sm mt-4">Don't have an account? <a href="/adminsignup" className="text-blue-500">Sign Up</a></p>
        </form>
      </div>
    </div>
    <div className="w-1/2 bg-blue-900 flex items-center justify-center">
      <img src={loginillum} alt="login User illuminations" className="w-full h-full" />
    </div>
  </div>
  )
}

export default LoginAsAdmin
