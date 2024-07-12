import React, { useState, useEffect } from 'react';
import Button from '@mui/joy/Button';
import loginimage from '../../../../assets/images/theme.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'firebase/auth';
import { LoginUserApi, setCookies, setLocalStorage } from '../../api/userApi.ts';
import { loginWithGoogleFunc } from '../../api/firebase.ts';

interface LoginUserProps {

}

const LoginUser: React.FC<LoginUserProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // setting the event handler that will handle the data entered in the forms entered by the user
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // going to make the calls to the api we have build
  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      if (username === '' || password === '') {
        toast.error('Invalid Credentials');
        setIsLoading(false);
      } else {
        // we are going to call the api function
        event.preventDefault();
        const data = await LoginUserApi(username, password);
        if (data === null) {
          // some Error had occured while Login User
          toast.error('Server Error');
          setIsLoading(false);
        } else {
          const status = data.status;
          const message = data.message;
          if (status === 401) {
            toast.error('Invalid Credentials');
          } else if (status === 404) {
            toast.info('User Not Found');
          } else if (status === 451) {
            toast.info('Account Blocked!');
          } else if (status === 500) {
            toast.error('Server Error');
          } else if (status === 200) {
            toast.success('Login');
            const userToken = data.userToken;
            // going to call the function to set the cookies and the local Storage
            const userData= data.data;
            setCookies(userToken);
            setLocalStorage(userData);
          }
        }
      }
    } catch (err) {
      setIsLoading(false);
    }
    setUsername('');
    setPassword('');
    const usernametextField = document.getElementById('username');
    const passwordtextField = document.getElementById('password');
    if (usernametextField instanceof HTMLInputElement) {
      usernametextField.value = '';
    }
    
    if (passwordtextField instanceof HTMLInputElement) {
      passwordtextField.value = '';
    }
  };
  
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <ToastContainer />
      <div className="md:w-1/2 bg-gray-50 w-full h-full flex flex-col justify-center items-center">
        <div className="xl:w-1/2 lg:w-3/5 md:w-4/5 sm:w-3/5 w-4/5">
          <div className="mb-7">
            <p className="text-left text-blue-500 text-4xl font-bold">Login</p>
            <p className="text-left text-gray-500 text-2xl font-bold">Welcome Back to Infinity</p>
          </div>
          <form className="flex flex-col" onSubmit={submitForm}>
            <label htmlFor="username" className="text-gray-500 lg:text-md 2xl:text-lg text-md mt-4">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border px-2 py-1 border-gray-300 lg:w-full md:w-full focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm"
              onChange={onChangeHandler}
              name="username"
              required
            />
            <label htmlFor="password" className="text-gray-500 ld:text-md 2xl:text-lg text-md mt-4">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border px-2 py-1 border-gray-300 lg:w-full md:w-full focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm"
              onChange={onChangeHandler}
              name="password"
              required
            />
            <div className="w-full">
              <a href="#" className="text-blue-500 text-sm mt-1">
                Forgot password?
              </a>
            </div>
            {/* <Addvertisement /> */}
            <button type="submit" className="bg-blue-500 text-white w-full font-semibold px-4 lg:py-2 py-1 mt-4 hover:bg-blue-600 focus:outline-none">
                    <Button variant="contained" color="primary" disabled={isLoading} loading={isLoading} className='text-md xl:text-4xl' onClick={LoginUserApi}>
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