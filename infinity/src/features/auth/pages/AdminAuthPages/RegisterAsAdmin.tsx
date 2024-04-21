import React, { useState } from 'react'
import Select from 'react-select'
import loginimage from '../../../../assets/images/theme.png'
import { ToastContainer, toast } from 'react-toastify';

const RegisterAsAdmin = () => {
    const [email, setemail]= useState("");
  const [isLoading, setisLoading]= useState("");
  const [mobileno, setmobieno]=useState("");
  const [name,setname]= useState("");
  const [selectedOption, setselectedOption]= useState([]);

  const checkMobileNo= (mobileno)=>{
    try{
      const regex = /^\(?\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}$/;
      return regex.test(mobileno)
    }
    catch(err){
      console.log("error while checking the email of the user")
    }
  }

  // we are going to check is the email entered by the user is valid or not
  const checkEmail= (email)=>{
    try{
      const regex = /^[^\s!#$%&'*+/=?^_`{|}~-]+(?:\.[^\s!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
      return regex.test(email);
    }
    catch(err){
      console.log("error while checking the email of the user")
    }
  }


  const submitForm= async(e)=>{
    var emailField= document.getElementById("email");
    var nameField= document.getElementById("name");
    var mobilenoField= document.getElementById("mobileno");

    e.preventDefault();
    console.log(email);
    console.log(name);
    console.log(mobileno);
    const checkemail= checkEmail(email);
    const checkmobile= checkMobileNo(mobileno);
      if( checkemail && checkmobile){
        // so the user used to add the correct values of the email and the mobile no
        try{
          const response= await fetch("http://localhost:3000/api/infinity/auth/user/register", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({adminemail: email,adminname: name, adminmobileno: mobileno,accessAppliedFor: selectedOption }),
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
        nameField.value="";
        mobilenoField.value="";
      }
      else{
        alert("one or more fields are incorrect")
      }
  }
  const onChangeHandler= (event)=>{
    const {name,value}= event.target;
    if(name=="name"){
      setname(value)
    }
    else if(name== "email"){
      setemail(value);
    }
    else if(name=='mobileno'){
      setmobieno(value)
    }
  }
   // here we are going to define the code of the options from where the user could select the data
   const options= [
    {value: 'announcement', label: 'Announcements'},
    {value: 'blog', label: 'Blogs'},
    {value: 'course', label: 'Courses'},
    {value: 'tutor',label: 'Tutor'},
    {value: 'user', label: 'Users'},
   ];


  return (
    <div className='flex h-screen flex-col md:flex-row'>
          <ToastContainer />
    <div className="md:w-1/2 bg-gray-50 w-full h-full flex flex-col justify-center items-center">
      <div className='xl:w-1/2 lg:w-3/5 md:w-4/5 sm:w-3/5 w-4/5'> 
      {/* here the this full div is not coming in the center  */}
      <div className='mb-7'>
          <p className="text-left text-blue-500 text-4xl font-bold">Register as Admin</p>
      </div>
        <form className="flex  flex-col" onSubmit={submitForm}>
          <label htmlFor="name" className="text-gray-500 lg:text-md 2xl:text-lg text-md mt-4">Name:</label>
          <input type="text" id="name" className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm" onChange={onChangeHandler} name="name" required />
          <label htmlFor="email" className="text-gray-500 lg:text-md 2xl:text-lg text-md mt-4">Email:</label>
          <input type="text" id="email" className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm" onChange={onChangeHandler} name="email" required/>
          <label htmlFor="mobileno" className="text-gray-500 lg:text-md 2xl:text-lg text-md mt-4">Mobile No:</label>
          <input type="tel" id="mobileno" className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm" onChange={onChangeHandler} name="mobileno" required/>

          {/* going to define the code for selecting the fields  */}
          <label htmlFor="accessOption" className='text-gray-500 ld:text-md 2xl:text-lg text-md mt-4'>What you want to manage:</label>
          <Select id="accessOption" className='w-full mt-1' options={options} isMulti value={selectedOption} onChange={setselectedOption}/>
          <button type="submit" className="bg-blue-500 text-white w-full font-semibold rounded-md px-4 lg:py-2 py-1 mt-4 hover:bg-blue-600 focus:outline-none">Register</button>
          <p className="text-gray-500 text-md  mt-4">Already Registered <a href="/adminsignup" className="text-blue-500">Login</a></p>
        </form>
      </div>
    </div>
    <div className="w-1/2  md:flex hidden items-center justify-center">
        <img src={loginimage} alt="login User illuminations" className="max-w-full max-h-full w-full h-full object-cover" />
    </div>
  </div>
  );
}

export default RegisterAsAdmin;
