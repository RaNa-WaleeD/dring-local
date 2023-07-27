import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import Unlock from '../assets/Unlock.png'


const SuccessPassword = () => {
    const [showModal,setShowModal]=useState(true)

    // const navigate = useNavigate();

    const handleClick = () => {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        // navigate("/");
      }, 2000);
    };
  return (
    <>
        <div className="flex h-screen ">
      <div className=" w-[430px] text-white p-4 primary-color flex justify-center">
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className="h-[85px] w-[150px]" />
        </div>
      </div>
      <div className='flex flex-col justify-center items-start p-[110px] w-full px-[160px] ml-4 mt-2 '>
        <h1 className='font-semibold text-[32px] leading-[39px]'>New Password</h1>
        <p className='py-4 mb-3'>Create a New Password</p>
        <div className='flex flex-col w-full mb-4'>
        <label
        htmlFor="phone Number"
        className="font-normal text-[18px] leading-[27px] text-sm mb-2"
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
        <div className='flex flex-col w-full mb-4'>
        <label
        htmlFor="phone Number"
        className="font-normal text-[18px] leading-[27px] text-sm mb-2"
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
       <button className='my-3 text-white bg-[#FF8000] py-3 px-16 rounded-lg'>Submit</button>
       {/* <h1 className='text-[16px] leading-[19px] mt-2'>Already have an Account ?<span className='text-[#FF8000] ml-1'>Login</span></h1> */}
      </div>
    </div>
   {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-400 bg-opacity-40 ">
        <div className="bg-white rounded-lg p-8  ">
          {/* Modal Content */}
          <div className="flex items-center justify-center p-4 ">
          <img src={Unlock} alt="unlock" />
          {/* <h2 className="text-2xl font-semibold mb-4">Success!</h2>
          <p>Your password has been created successfully.</p> */}
        </div>
          <div className="flex items-center justify-center ">
         
          <h1 className="text-2xl font-semibold mt-4">Password Changed </h1>
          
        </div>

        <div className="flex items-center justify-center ">
         
        
         <p className="mt-4 p-[10px] ">Your password has been successfully changed .</p>
       </div>
       <div className="flex items-center justify-center  ">
         
          <button onClick={handleClick} className="rounded-full bg-[#FF8000] w-full font-semibold p-4 mt-8 mb-3">Done</button>
          
        </div>
        </div>
      </div>
    )}

    </>
  );
};
  


export default SuccessPassword