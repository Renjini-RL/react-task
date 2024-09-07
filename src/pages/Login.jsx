import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div className="h-screen w-full">
      {/* Nav Section */}
      <Navbar />
      {/* Body Section */}
      <div className="dy-container h-full flex py-10">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col justify-center gap-y-5">
          <h1 className="text-[#61baf5] text-[2.5rem] font-medium">
            Unlock Exclusive Benefits
          </h1>
          {/* FORM */}
          <div className="flex items-start w-full justify-start pr-28">
            <div className="flex flex-col gap-y-5  ">
              <div className="flex flex-col gap-y-1 w-full">
                <label htmlFor="email" className="font-medium text-gray-500">
                  PHONE NUMBER
                </label>
                <div className="flex w-full gap-x-2 ">
                  <InputField placeholder="+91 India                  | ▼ " />
                  <InputField placeholder="9645789210" />
                </div>
              </div>
              <div className="flex flex-col gap-y-1">
                <label htmlFor="name" className="font-medium text-gray-500">
                  NAME
                </label>
                <InputField placeholder="" />
              </div>
              <div className="flex flex-col gap-y-1">
                <label htmlFor="name" className="font-medium text-gray-500">
                  EMAIL [OPTIONAL]
                </label>
                <InputField placeholder="" />
              </div>
              <div className="w-full mt-5">
                <Link to="home">
                  <Button />
                </Link>
                <p className="text-xs mt-3 font-semibold text-gray-500">
                  Get ready to receive a secret code (OTP) on your phone
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className=" w-1/2 flex p-16">
          <img src="celeb.png" alt="" className=" object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Login;
