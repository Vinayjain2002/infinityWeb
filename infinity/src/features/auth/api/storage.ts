import  Cookies from 'universal-cookie';

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
  
  
  export const getUserData = (): StorageData | null => {
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