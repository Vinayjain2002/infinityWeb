import React, { useState } from "react";
import Select from "react-select";
import loginimage from "../../../../assets/images/theme.png";
import { ToastContainer, toast } from "react-toastify";
import { checkMobileNo, checkEmail } from "../../helper/Authenticator";
import { RegisterAdminApiCall } from "../../api/adminApi";
import Button from "@mui/joy/Button";

interface Option {
  value: string;
  label: string;
}

const RegisterAsAdmin = () => {
  const [email, setemail] = useState<string>("");
  const [mobileno, setmobieno] = useState<string>("");
  const [name, setname] = useState<string>("");
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [accessAppliedFor, setAccessAppliedFor] = useState<Option[]>([]);

  const [isMobileValid, setisMobileValid] = useState<boolean>(true);
  const [isEmailValid, setisEmailValid] = useState<boolean>(true);

  const checkFields = async () => {
    try {
      const mobileNoCheck = !!checkMobileNo(mobileno);
      setisMobileValid(mobileNoCheck);
      const emailCheck = !!checkEmail(email);
      setisEmailValid(emailCheck);
    } catch (err) {
      console.error("Error while checking Fields");
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "name") {
      setname(value);
    } else if (name === "email") {
      setemail(value);
    } else if (name === "mobileno") {
      setmobieno(value);
    }
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisLoading(true);
    checkFields();
    if (isEmailValid && isMobileValid) {
      try {
        const data = await RegisterAdminApiCall(
          name,
          email,
          mobileno,
          accessAppliedFor.map((option: Option) => option.value)
        );
        if (data === null) {
          toast.error("Server Error");
        } else {
          const status = data.status;
          const message = data.message;
          if (status === 401) {
            toast.error("Invalid Credentials");
          } else if (status === 409) {
            toast.error("Admin Already Exists");
          } else if (status === 405) {
            toast.error("Already Applied");
          } else if (status === 422) {
            toast.error("Internal Error");
          } else if (status === 500) {
            toast.error("Server Error");
          } else if (status === 200) {
            toast.info("Registered Successfully");
          }
        }
        setisLoading(false);
      } catch (err) {
        setisLoading(false);
        console.log("error while making the api call");
      }
      // clear form fields
      setemail("");
      setmobieno("");
      setname("");
      setAccessAppliedFor([]);
    } else {
      setisLoading(false);
    }
  };

  const options: Option[] = [
    { value: "announcement", label: "Announcements" },
    { value: "blog", label: "Blogs" },
    { value: "course", label: "Courses" },
    { value: "tutor", label: "Tutor" },
    { value: "user", label: "Users" },
  ];

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <ToastContainer />
      <div className="md:w-1/2 bg-gray-50 w-full h-full flex flex-col justify-center items-center">
        <div className="xl:w-1/2 lg:w-3/5 md:w-4/5 sm:w-3/5 w-4/5">
          <div className="mb-7">
            <p className="text-left text-blue-500 text-4xl font-bold">
              Register as Admin
            </p>
          </div>
          <form className="flex  flex-col" onSubmit={submitForm}>
            <label
              htmlFor="name"
              className="text-gray-500 lg:text-md 2xl:text-lg text-md mt-4"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm"
              onChange={onChangeHandler}
              name="name"
              required
            />
                       <label
              htmlFor="email"
              className="text-gray-500 lg:text-md 2xl:text-lg text-md mt-4"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm"
              onChange={onChangeHandler}
              name="email"
              required
            />
            <label
              htmlFor="mobileno"
              className="text-gray-500 lg:text-md 2xl:text-lg text-md mt-4"
            >
              Mobile No:
            </label>
            <input
              type="tel"
              id="mobileno"
              className="border px-2 py-1 border-gray-300 lg:w-full md:w-full  focus:outline-none focus:border-blue-500 2xl:rounded-md rounded-sm"
              onChange={onChangeHandler}
              name="mobileno"
              required
            />

            <label
              htmlFor="accessOption"
              className="text-gray-500 ld:text-md 2xl:text-lg text-md mt-4"
            >
              What you want to manage:
            </label>
            <Select
              id="accessOption"
              className="w-full mt-1"
              options={options}
              isMulti
              value={accessAppliedFor}
              onChange={(options) => setAccessAppliedFor(options as Option[])}
            />
            <div className="bg-blue-500 text-center text-white w-full font-semibold rounded-md px-4 lg:py-2 py-1 mt-4 hover:bg-blue-600 focus:outline-none">
              <Button
                color="primary"
                disabled={isLoading}
                loading={isLoading}
                className="text-md xl:text-4xl"
              >
                Register
              </Button>
            </div>
            <p className="text-gray-500 text-md  mt-4">
              Already Registered{" "}
              <a href="/admin/login" className="text-blue-500">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
      <div className="w-1/2  md:flex hidden items-center justify-center">
        <img
          src={loginimage}
          alt="login User illuminations"
          className="max-w-full max-h-full w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default RegisterAsAdmin;