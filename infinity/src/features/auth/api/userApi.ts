import axios from 'axios';

const ip: string = 'https://localhost:3000';

interface RegisterUserData {
  // add properties for user data here, e.g.
  username: string;
  email: string;
  password: string;
}

interface LoginUserData {
  username: string;
  password: string;
}

export const RegisterUserApi = async (username: string,email: string, mobileno: string): Promise<any> => {
  try {
    const Api_Url: string = `${ip}/api/infinity/auth/user/register`;
    const response: any = await axios.post(Api_Url, {'username': username, 'email': email, 'mobileNo': mobileno});
    if(response){
      const data: any= response.data;
      return data;
    }
    else{
      return null;
    }
  } catch (err: any) {
    console.error(err);
    return null;
  }
};

export const LoginUserApi = async (username: string, password: string): Promise<any> => {
  try {
    const Api_Url: string = `${ip}/api/infinity/auth/user/login`;
    const response: any = await axios.post(Api_Url, { username, password });
    if (response) {
      const data: any = response.data;
      return data;
    } else {
      return null;
    }
  } catch (err: any) {
    console.error(err);
    return null;
  }
};

