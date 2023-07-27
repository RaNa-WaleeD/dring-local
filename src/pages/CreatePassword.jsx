import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const CreatePassword = () => {
  return (
    <>
      <div className="flex h-screen ">
        <div className=" w-[530px] text-white p-4 primary-color flex justify-center">
          <div className="flex justify-center items-center">
            <img src={logo} alt="Logo" className="h-[85px] w-[150px]" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start p-[110px] w-full px-[160px] ml-4 mt-2 ">
          <h1 className="font-semibold text-[32px] leading-[39px]">
            New Password
          </h1>
          <p className="py-4 mb-3 text-[16px] font-medium leading-[19px]">
            Create a New Password
          </p>
          <div className="flex flex-col w-full mb-4">
            <label
              htmlFor="phone Number"
              className="font-medium text-[16px] leading-[19px] text-sm mb-2"
            >
              Password
            </label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              //  value={values.email}
              //           onChange={handleChange}
              //  onBlur={handleBlur}
              placeholder="Enter Your Password"
              className="rounded-lg outline-none border-[0.5px] border-[#DFDFDF] bg-[#FBFBFB] h-[48px] w-full py-4 pl-7 text-black placeholder:font-normal  placeholder-black-500 placeholder:text-sm"
            />
          </div>
          <div className="flex flex-col w-full mb-4">
            <label
              htmlFor="phone Number"
              className="font-medium text-[16px] leading-[19px] text-sm mb-2"
            >
              Confirm Password
            </label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              //  value={values.email}
              //           onChange={handleChange}
              //  onBlur={handleBlur}
              placeholder="Enter Your Confirm Password"
              className="rounded-lg outline-none border-[0.5px] border-[#DFDFDF] bg-[#FBFBFB] h-[48px] w-full py-4 pl-7 text-black placeholder:font-normal  placeholder-black-500 placeholder:text-sm"
            />
          </div>
          <div>
            {/* <h1 className='py-2 text-[#FF8000] text-[16px] leading-[19px] '>Forgot Password?</h1> */}
          </div>
          <Link to={"/login"}>
            <button className="my-3 text-white bg-[#FF8000] py-3 px-16 rounded-lg">
              Submit
            </button>
          </Link>
          {/* <h1 className='text-[16px] leading-[19px] mt-2'>Already have an Account ?<span className='text-[#FF8000] ml-1'>Login</span></h1> */}
        </div>
      </div>
    </>
  );
};

export default CreatePassword;
