import React, { useState } from "react";
import Header from "../Header";
import { Avatar } from "@mui/material";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

const ProfileDetails = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Header />
      <div className=" bg-white  my-16 mx-60 p-8 border-[1.5px] border-solid shadow-md">
        <div className="mb-4">
          <Avatar />
        </div>
        <div className="flex w-full gap-12 mt-8">
          <div className="flex flex-col w-1/2 ">
            <label htmlFor="Manager">Manager First Name</label>
            <input
              type="text"
              className=" p-2.5 rounded-lg border border-solid outline-none my-2"
              placeholder="Joy "
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <label htmlFor="Manager">Manager Last Name</label>
            <input
              type="text"
              className="p-2.5 rounded-lg border border-solid outline-none my-2"
              placeholder="Books"
            />
          </div>
        </div>
        <div className="flex w-full gap-12 mt-2">
          <div className="flex flex-col w-1/2 ">
            <label htmlFor="Manager">Email Address</label>
            <input
              type="text"
              className=" p-2.5 rounded-lg border border-solid outline-none my-2"
              placeholder="Joybook@gmail.com "
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <label htmlFor="Manager">Phone Number</label>
            <PhoneInput
              flags={flags}
              className="p-2.5 rounded-lg border border-solid outline-none my-2"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="flex w-full gap-12 mt-2">
          <div className="flex flex-col w-1/2 ">
            <label htmlFor="Manager">VAT ID</label>
            <input
              type="text"
              className=" p-2.5 rounded-lg border border-solid outline-none my-2"
              placeholder="Joy "
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <label htmlFor="Manager">Store Name</label>
            <input
              type="text"
              className="p-2.5 rounded-lg border border-solid outline-none my-2"
              placeholder="Books"
            />
          </div>
        </div>
        <div className="flex w-full gap-12 mt-2">
          <div className="flex flex-col w-1/2 ">
            <label htmlFor="Manager">Password</label>
            <input
              type="text"
              className=" p-2.5 rounded-lg border border-solid outline-none my-2"
              placeholder="Joy "
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <label htmlFor="Manager">Confirm Password</label>
            <input
              type="text"
              className="p-2.5 rounded-lg border border-solid outline-none my-2"
              placeholder="Books"
            />
          </div>
        </div>
        <button className="text-white bg-[#ff8000] py-2.5 px-16 rounded-lg my-3">
          Update
        </button>
      </div>
    </>
  );
};

export default ProfileDetails;
