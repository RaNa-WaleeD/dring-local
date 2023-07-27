import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen ">
        <div className=" w-[530px] text-white p-4 primary-color flex justify-center">
          <div className="flex justify-center items-center">
            <img src={logo} alt="Logo" className="h-[85px] w-[150px]" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start p-[110px] w-full px-[170px] mt-2 ">
          <h1 className="font-semibold text-[32px] leading-[39px]">Login</h1>
          <p className="py-3 mb-3 font-medium text-[16px] leading-[27px]">
            Login to your Account{" "}
          </p>
          <div className="flex flex-col w-full mb-4">
            <label
              htmlFor="phone Number"
              className="font-medium text-[16px] leading-[27px]  mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              //  value={values.email}
              //           onChange={handleChange}
              //  onBlur={handleBlur}
              placeholder="Enter Your Email Address"
              className="rounded-lg outline-none border-[0.5px] border-[#DFDFDF] bg-[#FBFBFB] h-[42px] w-full py-4 pl-7 text-black placeholder:font-normal  placeholder-black-500 placeholder:text-sm"
            />
          </div>
          <div className="flex flex-col w-full mb-4">
            <label
              htmlFor="phone Number"
              className="font-medium text-[16px] leading-[27px]  mb-2"
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
              className="rounded-lg outline-none border-[0.5px] border-[#DFDFDF] bg-[#FBFBFB] h-[42px] w-full py-4 pl-7 text-black placeholder:font-normal  placeholder-black-500 placeholder:text-sm"
            />
          </div>
          <div>
            <h1
              className="py-2 text-[#FF8000] text-[16px] leading-[19px] font-semibold cursor-pointer"
              onClick={() => {
                navigate("/reset-password");
              }}
            >
              Forgot Password?
            </h1>
          </div>
          <button
            className="my-3 text-white bg-[#FF8000] py-3 px-16 rounded-lg"
            onClick={() => {
              navigate("/");
            }}
          >



            Login
          </button>
          <h1 className="text-[16px] font-normal leading-[19px] mt-2">
            Don't have an Account ?
            <Link to={"/signup"}>
              <span className="text-[#FF8000] ml-1 font-normal leading-[19px] cursor-pointer">
                SignUp
              </span>
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Login;
