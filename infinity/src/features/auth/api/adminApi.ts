// we are gonna to deifne the api calls for the Admin

import axios  from "axios";

const ip:string ='https://localhost:3000'

interface RegisterAdminData{
    adminname: string;
    adminemail:string;
    adminmbileno: string;
    accessAppliedFor: string;
}

interface LoginAdminData{
    email: string;
    password: string;
}

export const RegisterAdminApiCall = async(adminname:string,adminemail:string,adminmobileno: string, accessAppliedFor: string): Promise<any>=>{
    try{
        const Api_Url: string=  `${ip}/api/infinity/auth/admin/apply`;
        const response: any= await axios.post(Api_Url, {'adminname': adminname,'adminemail': adminemail, 'adminmobileno': adminmobileno, 'accessAppliedFor': accessAppliedFor});
        if(response){
            const data: any= response.data;
            return data;
          }
          else{
            return null;
          }
    }
    catch(err: any){
        console.error(err);
        return null;
    }
}

export const LoginAdminApiCall = async(adminemail: string,adminpassword: string )=>{
    try{
        const Api_Url: string = `${ip}/api/infinity/auth/admin/login`;
        const response: any= await axios.post(Api_Url, { adminemail,adminpassword })
        if(response){
            const data: any= response.data;
            return data;
        }
        else{
            return null;
        }
    }
    catch(err: any){
        console.error(err);
        return null;
    }
}


