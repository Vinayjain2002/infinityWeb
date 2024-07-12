import axios from 'axios';
import  Cookies from 'universal-cookie';

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


interface StorageData {
  [key: string]: any;
}

export const setLocalStorage = async (userData: StorageData) => {
  try {
    // Set the local Storage
    localStorage.setItem('userData', JSON.stringify(userData));
  } catch (error) {
    console.error(error);
  }
};

export const  setCookies= async(userToken: string )=>{
    try{
        const lifetime = 60 * 60 * 1000; // 1 hour
        const cookies = new Cookies();
        // Set the Cookies
        cookies.set('userToken', userToken, {
          maxAge: lifetime,
          httpOnly: true,
          secure: true,
          sameSite: true,
        });
    }
    catch(error){
        console.error(error);
    }
}


export const getObjectFromLocalStorage = (): StorageData | null => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      try {
        const parsedObject = JSON.parse(userData);
        return parsedObject;
      } catch (error) {
        console.error(`Error parsing user Data: ${error}`);
        return null;
      }
    }
    return null;
  };
  
export const getCookies = (): string | null => {
    const cookies = new Cookies();
    const userToken = cookies.get('userToken');
    return userToken;
};