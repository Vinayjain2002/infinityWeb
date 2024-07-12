// hewre we are going to define the Function to test the Password and the Other Things

const checkEmail= (email:string)=>{
    try{
      const regex = /^[^\s!#$%&'*+/=?^_`{|}~-]+(?:\.[^\s!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
      const result= regex.test(email);
      if(!result){
        return false;
      }
      return result;
    }
    catch(err){
      console.log("error while checking the email of the user")
    }
  }

const checkMobileNo= (mobileno: string)=>{
    try{
      const regex = /^[0-9]{10}$/;
      const result= regex.test(mobileno);
      if(!result){
        return false;
      }
      return result;
    }
    catch(err){
      console.log("error while checking the email of the user")
    }
  }

const checkUsername= (username: string)=> {
    const regex = /^\S{2,15}$/;
    const result= regex.test(username);
    if(!result){
      return false;
    }
    return result;
  }