import React, { useState } from "react";
import logo from "../assets/logo.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };
  return (
    <div className="flex h-screen">
      <div className="bg-gray-800  w-[350px] text-white p-4 primary-color flex justify-center">
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className="h-[85px] w-[150px]" />
        </div>
      </div>
      <div className="flex flex-col flex-grow px-20 mt-16">
        <h2 className="text-3xl font-bold mb-6">Create Account</h2>
        <div className="flex mb-3">
          <label className="w-1/2">
            <span className="block mb-1 text-[16px] leading-[19px] font-medium">
              Manager First name
            </span>
            <input
              type="text"
              className="w-full p-2.5 rounded-lg border border-black border-opacity-25 outline-none"
              placeholder="Enter your first name "
            />
          </label>
          <div className="w-24" />
          <label className="w-1/2">
            <span className="block mb-1 text-[16px] leading-[19px] font-medium">
              Manager Last Name
            </span>
            <input
              type="text"
              className="w-full p-2.5 rounded-lg border border-black border-opacity-25 outline-none"
              placeholder="Enter your last name"
            />
          </label>
        </div>
        <div className="flex mb-3">
          <label className="w-1/2">
            <span className="block mb-1 text-[16px] leading-[19px] font-medium">
              Email Address
            </span>
            <input
              type="text"
              className="w-full p-2.5 rounded-lg border border-black border-opacity-25 outline-none"
              placeholder="Enter Your Email Address"
            />
          </label>
          <div className="w-24" />
          <label className="w-1/2">
            <span className="block mb-1 text-[16px] leading-[19px] font-medium">
              Phone Number
            </span>
            <PhoneInput
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="w-full p-2.5 rounded-lg border border-black border-opacity-25   focus:outline-none  placeholder:outline-none  bg-white focus:border-none focus:ring-0"
              placeholder="Enter Your Phone Number"
            />
          </label>
        </div>
        <div className="flex mb-3 ">
          <label className="w-1/2">
            <span className="block mb-1 text-[16px] leading-[19px] font-medium">
              VAT ID
            </span>
            <input
              type="text"
              className="w-full p-2.5 rounded-lg border border-black border-opacity-25 outline-none"
              placeholder="Enter your VAT ID"
            />
          </label>
          <div className="w-24" />
          <label className="w-1/2">
            <span className="block mb-1 text-[16px] leading-[19px] font-medium">
              Store Name
            </span>
            <input
              type="text"
              className="w-full p-2.5 rounded-lg border border-black border-opacity-25 outline-none"
              placeholder="Enter Your Store Name"
            />
          </label>
        </div>
        <div className="flex mb-3 ">
          <label className="w-1/2">
            <span className="block mb-1 text-[16px] leading-[19px] font-medium">
              Password
            </span>
            <input
              type="text"
              className="w-full p-2.5 rounded-lg border border-black border-opacity-25 outline-none"
              placeholder="Enter Your password"
            />
          </label>
          <div className="w-24" />
          <label className="w-1/2">
            <span className="block mb-1 text-[16px] leading-[19px] font-medium">
              Confirm Password
            </span>
            <input
              type="text"
              className="w-full p-2.5 rounded-lg border border-black border-opacity-25 outline-none"
              placeholder="Enter Your Confirm Password"
            />
          </label>
        </div>
        <div className="flex items-center mb-4 pt-4">
          <input
            type="checkbox"
            className="accent-[#FF8000] mr-2 rounded-md border border-black border-opacity-25 "
          />
          <p className="text-[16px] leading-[19px] ml-2">
            I agree to the
            <span className=" text-[#FF8000]"> terms </span>and{" "}
            <span className="text-[#FF8000]">conditions.</span>
          </p>
        </div>

        <button className="w-[180px] px-10 py-3 rounded-lg bg-[#FF8000] text-white">
          Sign up
        </button>

        <div className="mt-5 text-[16px] font-normal">
          <p>
            Already have an Account?
            <Link to={"/login"}>
              <span className="text-[#FF8000]">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
