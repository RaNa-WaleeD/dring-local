import React, { useState } from "react";
import car from "../../assets/car.png";
import bike from "../../assets/bike.png";
import bicycle from "../../assets/bicycle.png";
import Arrow from "../../assets/back-arrow.png";
import LinearIndeterminate from "../../utils/LinearProgress";
// import LinearProgress from '@mui/material/LinearProgress';
import visa from "../../assets/visa.png";
import tick from "../../assets/tick.png";
import mastercard from "../../assets/mastercard.png";

const Modal = () => {
  const [step, setStep] = useState(1);
  const [selectedImages, setSelectedImages] = useState([]);
  const [amount, setAmount] = useState("");

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleNextStep = () => {
    if (step === 2) {
      setStep(4);
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleDone = () => {
    setStep(3);
  };
  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleComplete = () => {
    // Handle the completion logic here
    // For example, submit form data or perform an action
  };

  const renderModalContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="modal-content p-4 w-[320px] outline-none">
            <div className="flex justify-center items-center text-[20px] leading-[25px]">
              Balance
            </div>
            <div className="flex justify-center my-10 text-[#ff8000] text-[38px] font-medium">
            €1300
            </div>
            <button
              className="w-full mt-8 bg-[#ff8000] py-2.5 text-white rounded-lg"
              onClick={handleNextStep}
            >
              Add Money
            </button>
          </div>
        );
      case 2:
        return (
          <div className="modal-content p-4  w-[330px] outline-none">
            <div className="flex items-end justify-start">
              <img
                src={Arrow}
                alt=""
                className="cursor-pointer "
                onClick={handlePreviousStep}
              />
            </div>
            <div className="flex justify-center text-[20px] font-medium mb-6">
              Top up
            </div>
            <label htmlFor="Amount">Enter Amount</label>
            <div className="relative">
              <input
                type="text"
                className="border outline-none rounded-lg w-full my-2 p-2.5 pr-8"
                placeholder="Enter Amount"
                value={amount}
                onChange={handleAmount}
              />
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#000]">
              €
              </span>
            </div>
            <div className="flex justify-between my-6">
              <span>Balance after Top up</span>
              <span>€5200</span>
            </div>
            <div className="flex justify-between my-10 ">
              <div className="flex flex-col justify-start gap-1">
                <h1 className="text-[16px] font-medium">Payment Method</h1>
                <p className="text-[14px]">VisaEnding-2037</p>
                <h1
                  className="text-[16px] font-semibold text-[#ff8000] cursor-pointer"
                  onClick={handleNextStep}
                >
                  Change Payment method
                </h1>
              </div>
              <img src={visa} alt="img" className="h-10 my-4" />
            </div>
            <button
              className="w-full rounded-lg bg-[#ff8000] text-white p-2.5"
              onClick={handleDone}
            >
              Top up finds
            </button>
          </div>
        );
      case 3:
        return (
          <div className="modal-content p-4 w-[330px] outline-none">
            <div className="flex justify-center items-center font-semibold text-[20px] mt-2">
              Top up Confirmed
            </div>
            <div className="flex justify-center items-center my-12">
              <img src={tick} alt="tickImg" />
            </div>
            <div className=" flex justify-center mb-6">
              <h1 className="text-[16px] font-medium">€300 Top up Confirmed</h1>
            </div>

            <button className="w-full bg-[#FF8000] text-white p-2.5 rounded-lg">
              Done
            </button>
          </div>
        );
      case 4:
        return (
          <div className="modal-content p-4 w-[330px] outline-none">
            <div className="flex items-end justify-start">
              <img
                src={Arrow}
                alt=""
                className="cursor-pointer "
                onClick={handlePreviousStep}
              />
            </div>
            <div className="flex justify-center items-center text-[20px] font-medium leading-[28px]">
              <h1>Select Payment Method</h1>
            </div>
            <div className="flex flex-col mt-4">
              <div className="w-full border border-solid py-4 mt-4  flex  ">
                <img
                  src={visa}
                  alt=""
                  className="pl-2 h-10 w-20 object-contain"
                />
                <div className="flex flex-col ">
                  <h1 className="pl-4 text-[14px] leading-[16px] font-medium">
                    **** **** **** 6573
                  </h1>
                  <p className="pl-4 text-[12px] leading-[14px] font-normal">
                    Expires 10/22
                  </p>
                </div>
              </div>
              <div className="w-full border border-solid py-4 mt-4  flex ">
                <img
                  src={mastercard}
                  alt=""
                  className="pl-2 h-10 w-20 object-contain"
                />
                <div className="flex flex-col">
                  <h1 className="pl-4 text-[14px] leading-[16px] font-medium">
                    **** **** **** 6573
                  </h1>
                  <p className="pl-4 text-[12px] leading-[14px] font-normal">
                    Expires 10/22
                  </p>
                </div>
              </div>
            </div>
            <button
              className="w-full text-white p-2.5 bg-[#FF8000] mt-8 rounded-lg"
              onClick={handleNextStep}
            >
              Add Payment Method
            </button>
          </div>
        );
      case 5:
        return (
          <div className="modal-content p-4 w-[330px] outline-none">
            <div className="flex items-end justify-start">
              <img
                src={Arrow}
                alt=""
                className="cursor-pointer "
                onClick={handlePreviousStep}
              />
            </div>
            <h1 className="my-4 text-[16px] font-medium leading-[19px]">
              Please Enter Your Banking Information Below
            </h1>
            <div className="flex flex-col gap-4 mb-4">
              <input
                type="text"
                className="w-full border border-solid p-2.5 rounded-lg"
                placeholder="Card Number"
              />
              <input
                type="text"
                className="w-full border border-solid p-2.5 rounded-lg"
                placeholder="Card Holder Name "
              />
              <input
                type="text"
                className="w-full border border-solid p-2.5 rounded-lg"
                placeholder="Expiry Date"
              />
              <input
                type="text"
                className="w-full border border-solid p-2.5 rounded-lg"
                placeholder="CVV/CVC"
              />
            </div>
            <button className="w-full bg-[#FF8000] text-white rounded-lg p-2.5 my-6">
              Submit{" "}
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="modal"
      style={{
        position: "absolute",
        top: "130px",
        left: "510px",
        zIndex: "9999",
      }}
    >
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div className="modal-body bg-white rounded-lg border-[2px] border-solid">
          {renderModalContent()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
