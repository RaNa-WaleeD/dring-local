import React from "react";
import logo from "../assets/logo.png";
import ReactOtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex min-h-screen  ">
        <div className=" w-[530px]   text-white p-4 primary-color flex justify-center">
          <div className="flex justify-center items-center">
            <img src={logo} alt="Logo" className="h-[85px] w-[150px]" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start p-[110px] w-full px-[160px] ml-4 mt-2 ">
          <h1 className="font-semibold text-[32px] leading-[39px]">
            Verify Your Email
          </h1>
          <p className="py-4 mb-3 leading-[20px] text-[16px] font-medium">
            Enter Code Sent To Your Email Address{" "}
          </p>
          <div className="flex flex-col w-full mb-6">
            <ReactOtpInput
              //   value={otp}
              //   onChange={handleChange}
              numInputs={6}
              containerStyle={"flex gap-3 lg:gap-10"}
              shouldAutoFocus={true}
              separator={<span></span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                textAlign: "center",
                borderRadius: "0.5rem",
                borderWidth: "1px ",
                background: "#FBFBFB",
                width: "52px",
                height: "52px",
              }}
            />
          </div>
          <button
            className="my-3 text-white bg-[#FF8000] py-3 px-16 rounded-lg"
            onClick={() => {
              navigate("/create-password");
            }}
          >
            Submit
          </button>
          <h1 className="text-[16px] leading-[19px] mt-6">
            Didn't Receive Code?
            <Link to={"/reset-password"}>
              <span className="text-[#FF8000] ml-1">Resend</span>
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
