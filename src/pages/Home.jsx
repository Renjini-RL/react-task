import React from "react";
import Navbar from "../components/Navbar";
import HomeNavbar from "../components/HomeNavbar";

import Card from "../components/Card";
import GreenButton from "../components/GreenButton";
import { BiSolidUserDetail } from "react-icons/bi";

function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <HomeNavbar />

      <div className="dy-container h-full lg:flex py-10 relative">
        <div className="absolute right-20 top-5 flex justify-center items-center flex-col">
          <BiSolidUserDetail className="w-8 h-8 text-[#1e79b6] " />
          <h1>Joseph lazer</h1>
        </div>
        {/* Left Side */}
        <div className="lg:w-1/2 flex flex-col justify-center  gap-y-5">
          <h1 className="text-black text-3xl ">New Arrival</h1>
          <div>
            <p className="text-xs">JOIN TODAY</p>
            <p className="w-5 bg-gray-600 h-[3px]"> </p>
          </div>
          <div className=" w-full flex justify-center flex-col items-center gap-y-5">
            <img src="membership.jpg" alt="" className="w-1/2  " />
            <div className="w-1/2">
              <div className="w-full ">
                <div className="w-full bg-[#f3f3f3] px-4 py-[2px] rounded-full border-2 border-gray-400 text-[#1e79b6] text-center font-medium ">
                  JOIN NOW
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className=" lg:w-1/2 lg:flex flex-col items-center h-full justify-center ">
          <h1 className="text-[#109b78] lg:text-3xl ">
            Unlock Premium Features Now
          </h1>
          <div className="w-full lg:flex justify-between mt-10 flex-col">
            <div className="w-full lg:flex justify-between mt-5">
              <Card t1="lower" t2="Interest Rates" img_i="0" />

              <Card t1="lower" t2="Interest Rates" img_i="1" />

              <Card t1="lower" t2="Interest Rates" img_i="2" />
            </div>
            <div className="flex flex-col gap-y-2 mt-5  justify-center items-center">
              <div className="flex flex-col gap-y-2 mt-5">
                <GreenButton title="UNLOCK NOW" />
                <GreenButton title="DETAILS" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
