import React, { useState } from "react";
import logo from "../assets/logo.png";
import ProfileIcon from "../assets/Profile.png";
import DeleteIcon from "../assets/delete.png";
import locationIcon from "../assets/location.png";
import TCIcon from "../assets/T&C.png";
import logoutIcon from "../assets/logout.png";
import helpIcon from "../assets/help.png";
import privacyIcon from "../assets/privacy.png";

const Header = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleOrderDropdown = () => {
    setIsOrderOpen(!isOrderOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header className="flex items-center justify-between px-14 py-2 primary-color text-white">
      <div className="flex items-center justify-start">
        <img src={logo} alt="Logo" className="h-[45px] w-[95px] pl-6" />
        <h1 className="text-lg font-bold"></h1>
      </div>
      <nav>
        <ul className="flex items-start justify-start space-x-20 mr-3">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="relative">
            <a href="#" onClick={toggleOrderDropdown}>
              Order
              <span
                className={`${
                  isOrderOpen ? "transform rotate-180" : ""
                } ml-1 transition-transform duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.293l-6.146-6.147a.5.5 0 11.708-.708L10 13.586l5.439-5.438a.5.5 0 11.707.707L10 15.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
            {isOrderOpen && (
              <ul className="absolute top-full left-0 bg-white text-gray-800 px-3 py-2 mt-2 pl-5  space-y-2 w-[185px] mb-2 rounded-md z-50 ">
                <li className="hover:text-[#FF8000]">
                  <a href="/status">Completed</a>
                </li>
                <li className="hover:text-[#FF8000]">
                  <a href="/status">Cancelled</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/wallet">My Wallet</a>
          </li>
          <li className="relative">
            <a href="/notification">Notification</a>
          </li>
          <li className="relative">
            <a href="#" onClick={toggleProfileDropdown}>
              Profile
              <span
                className={`${
                  isProfileOpen ? "transform rotate-180" : ""
                } ml-1 transition-transform duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 inline-block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.293l-6.146-6.147a.5.5 0 11.708-.708L10 13.586l5.439-5.438a.5.5 0 11.707.707L10 15.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
            {isProfileOpen && (
              <ul className="absolute top-full  justify-center  right-0 bg-white text-gray-800 py-2 px-4 space-y-2  w-[205px] rounded-md mt-2 z-50">
                <li>
                  <a
                    href="/profile"
                    className="flex  justify-start items-center gap-2 mt-2 hover:text-[#FF8000]"
                  >
                    <img src={ProfileIcon} className="h-4 w-3" />
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-start items-center gap-2 mt-2 hover:text-[#FF8000]"
                  >
                    <img src={TCIcon} alt="" className="h-4 w-3" />
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-start items-center gap-2 mt-2 hover:text-[#FF8000]"
                  >
                    <img
                      src={privacyIcon}
                      alt=""
                      className="h-4 w-3 text-black"
                    />
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-start items-center gap-2 mt-2 hover:text-[#FF8000]"
                  >
                    <img src={helpIcon} alt="" className="h-4 w-3" />
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-start items-center gap-2 mt-2 hover:text-[#FF8000]"
                  >
                    <img src={locationIcon} alt="" className="h-4 w-3" />
                    Store Location
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-start items-center gap-2 mt-2 hover:text-[#FF8000]"
                  >
                    <img src={DeleteIcon} alt="" className="h-4 w-3" />
                    Delete Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-start items-center gap-2 mt-2 hover:text-[#FF8000]"
                  >
                    <img src={logoutIcon} alt="" className="h-4 w-3" />
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
