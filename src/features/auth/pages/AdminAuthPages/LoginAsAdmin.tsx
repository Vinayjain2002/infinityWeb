import React, { useState } from 'react'
import loginimage from '../../../../assets/images/theme.png';
import { ToastContainer, toast } from 'react-toastify';
import { setLocalStorage, setCookies } from '../../api/storage.ts';
import 'react-toastify/dist/ReactToastify.css';
import { LoginAdminApiCall } from '../../api/adminApi';
import Button from '@mui/joy/Button';

interface LoginAsAdminProps{

}

const LoginAsAdmin: React.FC<LoginAsAdminProps> = () => {
  const [email, setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [isLoading, setIsLoading] = useState(false);
  const emailtextField = document.getElementById('email');
  const passwordtextField = document.getElementById('password');

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      setIsLoading(true);
      if (email == '' || password == '') {
        toast.error('Invalid Credentials');
      } else {
        // we are going to call the api function
        event.preventDefault();
        alert("Hello")
        const data = await LoginAdminApiCall(email, password);
        if (data === null) {
          // some Error had occured while Login User
          toast.error('Server Error');
        } else {
          const status = data.status;
          const message = data.message;
          if (status === 401) {
            toast.error('Invalid Credentials');
          } else if (status === 404) {
            toast.info('Data Not Found');
          }else if(status== 409){
              toast.error("Not Approved Yet");
          }else if (status === 500) {
            alert("Error")
            toast.error('Server Error');
          } else if (status === 200) {
            toast.success('Login');
            const adminToken = data.adminToken;
            // going to call the function to set the cookies and the local Storage
            setCookies(adminToken);
          }
        }
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
    setEmail('');
    setPassword('');
    if (emailtextField instanceof HTMLInputElement) {
      emailtextField.value = '';
    }
    
    if (passwordtextField instanceof HTMLInputElement) {
      passwordtextField.value = '';
    }
  };
           
  const onChangeHandler= (event: React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}= event.target;
    if(name=="password"){
      setPassword(value)
    }
    else if(name== "email"){
      setEmail(value);
    }
  }
  
  return (
    <div className='flex h-screen flex-col md:flex-row'>
    <div className="md:w-1/2 bg-gray-50 w-full h-full flex flex-col justify-center items-center">
      <div className='xl:w-1/2 lg:w-3/5 md:w-4/5 sm:w-3/5 w-4/5'> 
      {/* here the this full div is not coming in the center  */}
        <p className="text-left text-blue-500 text-4xl font-bold">Welcome Admin</p>
        <p className='text-left text-gray-400 mt-2 text-2xl font-semibold'>Good to see you again</p>
        <form className="flex mt-5 flex-col" onSubmit={submitForm}>
          <label htmlFor="email" className="text-gray-500 lg:text-md 2xl:text-lg text-md mt-4">Email:</label>
          <input type="text" id="email" className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm" onChange={onChangeHandler} name="email" />
          <label htmlFor="password" className="text-gray-500 ld:text-md 2xl:text-lg text-md mt-4">Password:</label>
          <input type="password" id="password" className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm" onChange={onChangeHandler} name="password" />
          <button type="submit" className="bg-blue-500 text-white w-full font-semibold px-4 lg:py-2 py-1 mt-4 hover:bg-blue-600 focus:outline-none">
              <Button variant="contained" color="primary" disabled={isLoading} loading={isLoading} className='text-md xl:text-4xl'>
                  Login
              </Button>                
            </button>
          <p className="text-gray-500 text-md  mt-4">Don't have an account? <a href="/admin/register" className="text-blue-500">Sign Up</a></p>
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
