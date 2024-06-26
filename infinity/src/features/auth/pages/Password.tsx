
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import loginimage from '../../../assets/images/theme.png'
import { ToastContainer, toast } from 'react-toastify';

const PasswordResetPage = () => {
  const { token, username } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setisLoading]= useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const checkPassword= (password,username)=>{
    try{
        if(password.indexOf(username)!=-1){
          return false;
        }
        else{
          // we are going to check the other conditions also
          const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[^\s]{8,}$/;
         return  regex.test(password);
        }
    }
    catch(err){
      console.log("error while checking the password")
    }
  }

  const submitForm = async(event) => {
    event.preventDefault();
    console.log(password);
    console.log(confirmPassword);
    if(!checkPassword(password)){
      alert("password entered is not so strong");
      return;
    }
    // Validate the entered password and confirm password
    if (password !== confirmPassword) {
      alert('Password and confirm password must match.');
      return;
    }
    setisLoading(true);

    try{
      // here we are going to define the code to send the email request to the user
      const response= await fetch("http://localhost:3000/api/infinity/auth/user/updatePasswordController", {
        method: 'POST',
        headers: {
          'Content-Type': 'applicaton/json',
        },
        body: JSON.stringify({"password": password, "passwordRestetToken": token})
      });
      console.log("response");
      if(response.status==200){
        alert("Password Changed Successfully")
      }
      else{
        alert("Error while changing the password")
      }
    }
    catch(err){
        console.log(err)
    }

    // Submit the password reset request
    console.log(`Reset password request for user "${username}" with token "${token}" and new password "${password}".`);
  };
  
  return(
    <div className='flex h-screen flex-col md:flex-row'>
          <ToastContainer />
    <div className="md:w-1/2 bg-gray-50 w-full h-full flex flex-col justify-center items-center">
        <div className='xl:w-1/2 lg:w-3/5 md:w-4/5 sm:w-3/5 w-4/5'>
            <div className='mb-7'>
                <p className="text-left text-blue-500 text-5xl font-bold">Infinity</p>
                <p className="text-left text-gray-500   text-3xl font-bold">Education never ends</p>
            </div>
            <form className="flex flex-col" onSubmit={submitForm}>
                <label htmlFor="password" className="text-gray-500 lg:text-md 2xl:text-lg text-md mt-4">Password</label>
                <input type="password" id="password" className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm" onChange={onChangeHandler} name="password" required/>
                <label htmlFor="confirmPassword" className="text-gray-500 ld:text-md 2xl:text-lg text-md mt-4">Retype Password</label>
                <input type="password" id="confirmPassword" className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm" onChange={onChangeHandler} name="confirmPassword" required/>
                <button type="submit" className="bg-blue-500  rounded-md text-white w-full text-md font-semibold lg:py-3 py-3 mt-7 hover:bg-blue-600 focus:outline-none">Set Password</button>
            </form>
      </div>
    </div>
    <div className="lg:w-1/2 md:w-3/6  md:flex hidden items-center justify-center">
        <img src={loginimage} alt="login User illuminations" className="max-w-full max-h-full w-full h-full object-cover" />
    </div>
  </div>
  );
}
export default PasswordResetPage;

