import React, { useState } from "react";
import car from "../../assets/car.png";
import bike from "../../assets/bike.png";
import bicycle from "../../assets/bicycle.png";
import Arrow from "../../assets/back-arrow.png";
import LinearIndeterminate from "../../utils/LinearProgress";
import chat from "../../assets/chat.png";
import phone from "../../assets/phone.png";
import { Avatar } from "@mui/material";
import avatar from "../../assets/avatar.png";
import utility from "../../assets/utility.png";
// import React from "react";
// import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import Rating from "../Rating";
import { Link } from "react-router-dom";
// import LinearProgress from '@mui/material/LinearProgress';

const Modal = () => {
  const [step, setStep] = useState(1);
  const [selectedImages, setSelectedImages] = useState([]);
  const [isClosedModal, setIsClosedModal] = useState(false);
  const [isAdditionalOpen, setIsSetAdditionalOpen] = useState(false);

  const handleClosedModal = () => {
    setIsClosedModal(true);
  };
  const handleOpenModal = () => {
    setIsClosedModal(!isClosedModal);
  };
  const handleAdditionalOpen = () => {
    setIsSetAdditionalOpen(!isAdditionalOpen);
  };
  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = () => {
    setStep(5);
  };

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    if (selectedImages.includes(checkboxValue)) {
      setSelectedImages((prevSelectedImages) =>
        prevSelectedImages.filter((image) => image !== checkboxValue)
      );
    } else {
      setSelectedImages((prevSelectedImages) => [
        ...prevSelectedImages,
        checkboxValue,
      ]);
    }
  };

  const handleComplete = () => {
    // Handle the completion logic here
    // For example, submit form data or perform an action
  };

  const renderModalContent = () => {
    switch (step) {
      case 1: {
        return isClosedModal ? (
          <>
            <div className="flex m-2 mt-2 " onClick={handleOpenModal}>
              <h1 className="cursor-pointer">x</h1>
            </div>
            <div className="modal-content px-4 w-[310px]  outline-none">
              <div className="flex justify-center ">
                <h1 className="font-semibold px-4">
                  Tell us why you want to
                  <span className="flex justify-center">cancel</span>
                </h1>
              </div>
              <div className="flex flex-col p-3 text-[15px] font-normal">
                <label htmlFor="reason1">
                  <input
                    type="radio"
                    id="reason1"
                    name="cancelReason"
                    value="reason1"
                    className="mr-4 mb-4"
                  />
                  Caption is Too Away
                </label>
                <label htmlFor="reason2">
                  <input
                    type="radio"
                    id="reason2"
                    name="cancelReason"
                    value="reason2"
                    className="mr-4 mb-4"
                  />
                  I don't need a ride anymore
                </label>
                <label htmlFor="reason3">
                  <input
                    type="radio"
                    id="reason3"
                    name="cancelReason"
                    value="reason3"
                    className="mr-4 mb-4"
                  />
                  Captain asked mae to cancel
                </label>
                <label htmlFor="reason4">
                  <input
                    type="radio"
                    id="reason4"
                    name="cancelReason"
                    value="reason4"
                    className="mr-4 mb-4"
                  />
                  I found another Ride
                </label>
                <label htmlFor="reason5">
                  <input
                    type="radio"
                    id="reason5"
                    name="cancelReason"
                    value="reason5"
                    className="mr-4 mb-4"
                  />
                  Can wasn't suitable
                </label>
                <label htmlFor="reason6">
                  <input
                    type="radio"
                    id="reason6"
                    name="cancelReason"
                    value="reason6"
                    className="mr-4 mb-4"
                  />
                  Captain had too low rating
                </label>
                <label htmlFor="reason7">
                  <input
                    type="radio"
                    id="reason7"
                    name="cancelReason"
                    value="reason7"
                    className="mr-4 mb-2"
                  />
                  I wasn't ready
                </label>
                {/* Add more radio buttons as needed */}
              </div>
              <button className="w-full rounded-lg bg-[#FF8000] text-white py-2.5 my-4">
                Submit
              </button>
            </div>
          </>
        ) : (
          <div className="modal-content p-4 w-[310px]  outline-none">
            <div className="flex justify-between items-center">
              <h1 className="text-center flex-1 font-medium">Rider</h1>
              <h2
                className="text-end text-red-600 cursor-pointer font-medium"
                onClick={handleClosedModal}
              >
                {" "}
                Cancel
              </h2>
            </div>
            <div className="flex justify-between mt-6">
              <h1 className="text-[14px]">Fare-£35</h1>
              <h1 className="text-[14px]">Travel Time:15min</h1>
            </div>
            <button
              className="w-full rounded-lg primary-color text-white py-2.5 my-4 pt-2"
              onClick={handleNextStep}
            >
              Continue
            </button>
            <div className="flex w-full gap-2">
              <Link to="/chat">
                <button
                  className=" border border-[#FF8000] rounded-lg text-[#FF8000] py-2 px-8 flex items-center"
                  onClick={handleChange}
                >
                  {/* <FaIconName className="mr-2" /> Button 1 */}
                  <img src={chat} alt="" className="mr-2" /> Chat
                </button>
              </Link>

              <button className=" border border-[#FF8000] rounded-lg text-[#FF8000]  py-2 px-8 flex items-center">
                <img src={phone} alt="" className="mr-2" /> Phone
              </button>
            </div>

            {/* <div className="flex justify-end"></div> */}
          </div>
        );
      }

      case 2:
        return isClosedModal ? (
          <>
            <div className="flex m-2 mt-2 " onClick={handleOpenModal}>
              <h1 className="cursor-pointer">x</h1>
            </div>
            <div className="modal-content px-4 w-[310px]  outline-none">
              <div className="flex justify-center ">
                <h1 className="font-semibold px-4">
                  Tell us why you want to
                  <span className="flex justify-center">cancel</span>
                </h1>
              </div>
              <div className="flex flex-col p-3 text-[15px] font-normal">
                <label htmlFor="reason1">
                  <input
                    type="radio"
                    id="reason1"
                    name="cancelReason"
                    value="reason1"
                    className="mr-4 mb-4"
                  />
                  Caption is Too Away
                </label>
                <label htmlFor="reason2">
                  <input
                    type="radio"
                    id="reason2"
                    name="cancelReason"
                    value="reason2"
                    className="mr-4 mb-4"
                  />
                  I don't need a ride anymore
                </label>
                <label htmlFor="reason3">
                  <input
                    type="radio"
                    id="reason3"
                    name="cancelReason"
                    value="reason3"
                    className="mr-4 mb-4"
                  />
                  Captain asked mae to cancel
                </label>
                <label htmlFor="reason4">
                  <input
                    type="radio"
                    id="reason4"
                    name="cancelReason"
                    value="reason4"
                    className="mr-4 mb-4"
                  />
                  I found another Ride
                </label>
                <label htmlFor="reason5">
                  <input
                    type="radio"
                    id="reason5"
                    name="cancelReason"
                    value="reason5"
                    className="mr-4 mb-4"
                  />
                  Can wasn't suitable
                </label>
                <label htmlFor="reason6">
                  <input
                    type="radio"
                    id="reason6"
                    name="cancelReason"
                    value="reason6"
                    className="mr-4 mb-4"
                  />
                  Captain had too low rating
                </label>
                <label htmlFor="reason7">
                  <input
                    type="radio"
                    id="reason7"
                    name="cancelReason"
                    value="reason7"
                    className="mr-4 mb-2"
                  />
                  I wasn't ready
                </label>
                {/* Add more radio buttons as needed */}
              </div>
              <button className="w-full rounded-lg bg-[#FF8000] text-white py-2.5 my-4">
                Submit
              </button>
            </div>
          </>
        ) : (
          <div className="modal-content p-4 w-[310px]  outline-none">
            <div className="flex justify-between items-center">
              <h1
                className="text-center flex-1 font-medium ml-6 "
                onClick={handleNextStep}
              >
                {/* just to see last screen added onClick event */}
                Waiting For You
              </h1>
              <h2
                className="text-end text-red-600 cursor-pointer font-medium"
                onClick={handleClosedModal}
              >
                {" "}
                Cancel
              </h2>
            </div>
            <div className="flex justify-center my-8 text-green-600">2:34</div>
            <div className="w-full border-[1px] p-2 mb-4 rounded-md flex ">
              <img src={avatar} alt="" />
              <div className="flex flex-col m-2 pl-2">
                <h1 className="font-medium"> John Doi </h1>
                <h2 className="font-light text-[14px] ">+9232322323 </h2>
              </div>

              {/* <Avatar /> */}
            </div>
            <div className="flex w-full gap-2">
              <button className=" border border-[#FF8000] rounded-lg text-[#FF8000] hover:bg-[#FF8000] hover:text-white py-2 px-8 flex items-center">
                {/* <FaIconName className="mr-2" /> Button 1 */}
                <img src={chat} alt="" className="mr-2" /> Chat
              </button>
              <button className=" border border-[#FF8000] rounded-lg text-[#FF8000] hover:bg-[#FF8000] hover:text-white py-2 px-8 flex items-center">
                <img src={phone} alt="" className="mr-2" /> Phone
              </button>
            </div>
            <div className="flex justify-end mt-2">
              <p className="text-[#FF8000]" onClick={handleAdditionalOpen}>
                Add More{" "}
              </p>
            </div>
            {isAdditionalOpen && (
              <>
                {/* <div className="modal-content p-4 gap-3 w-[310px] outline-none"> */}
                <img
                  src={Arrow}
                  alt=""
                  className="mb-2 cursor-pointer"
                  onClick={handlePreviousStep}
                />
                <div className="flex gap-6 items-center justify-start">
                  <label htmlFor="bike" className="image-checkbox">
                    <img src={bike} alt="Bike" className="cursor-pointer" />
                    <input
                      type="checkbox"
                      id="bike"
                      value="bike"
                      checked={selectedImages.includes("bike")}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                  <label htmlFor="car" className="image-checkbox">
                    <img src={car} alt="Car" className="cursor-pointer" />
                    <input
                      type="checkbox"
                      id="car"
                      value="car"
                      checked={selectedImages.includes("car")}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                  <label htmlFor="bicycle" className="image-checkbox">
                    <img
                      src={bicycle}
                      alt="Bicycle"
                      className="cursor-pointer"
                    />
                    <input
                      type="checkbox"
                      id="bicycle"
                      value="bicycle"
                      checked={selectedImages.includes("bicycle")}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                </div>
                <h1>Dimension</h1>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Width"
                    className="px-2 w-1/3 border-[1px] py-2 mt-2 rounded-lg outline-none "
                  />
                  <input
                    type="text"
                    placeholder="Length"
                    className="px-2 w-1/3 border-[1px] py-2 mt-2 rounded-lg outline-none "
                  />
                  <input
                    type="text"
                    placeholder="Height"
                    className="px-2 w-1/3 border-[1px] py-2 mt-2 rounded-lg outline-none "
                  />
                </div>
                <h1 className="my-1">Weight</h1>
                <input
                  type="text"
                  className="w-full border-[1px] py-2 mt-2 rounded-lg outline-none px-2"
                  placeholder="Enter Weight"
                />
                <h1 className="my-1">Comment</h1>
                <input
                  type="text"
                  className="w-full border-[1px] py-2 mt-2 rounded-lg outline-none px-2"
                  placeholder="Enter Comment"
                />

                {/* Add input fields for Length, Height, Weight, Comment */}
                <select
                  className="w-full border-[1px] py-2 mt-2 rounded-lg outline-none my-1"
                  defaultValue=""
                >
                  <option value="">10 mints</option>
                  <option value="">20 mints</option>
                  <option value="">30 mints</option>
                  {/* Add dropdown options for pickup time */}
                </select>
                <input
                  type="text"
                  placeholder="Enter Fare"
                  className="px-2 w-full border-[1px] py-2 mt-1 rounded-lg outline-none "
                />
                <h1 className="my-4">Travel Time:</h1>
                {/* <button
                onClick={handlePreviousStep}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg mr-2"
              >
                Previous
              </button> */}
                <button
                  onClick={handleNextStep}
                  className="bg-[#FF8000] text-white py-2 px-4 rounded-lg w-full my-2"
                >
                  Continue
                </button>
                {/* </div> */}
              </>
            )}
          </div>
        );
      case 3:
        return (
          <>
            <div className="modal-content p-4 w-[310px]  outline-none">
              <div className="flex justify-between items-center mb-8">
                <h1
                  className="text-center flex-1 font-medium ml-6 "
                  onClick={handleNextStep}
                >
                  {/* just to see last screen added onClick event */}
                  Your ride is started
                </h1>
                <h2
                  className="text-end bg-[#FF8000] rounded-full py-2 px-2 text-white"
                  onClick={handleNextStep}
                  // Add this just for convenience to see the page
                >
                  {" "}
                  sos
                </h2>
              </div>

              <div className="w-full border-[1px] p-2 mb-4 rounded-md flex ">
                <img src={avatar} alt="" />
                <div className="flex flex-col m-2 pl-2">
                  <h1 className="font-medium"> John Doi </h1>
                  <h2 className="font-light text-[14px] ">+9232322323 </h2>
                </div>

                {/* <Avatar /> */}
              </div>
              <div className="flex w-full gap-2">
                <button className=" border border-[#FF8000] rounded-lg text-[#FF8000] hover:bg-[#FF8000] hover:text-white py-2 px-8 flex items-center">
                  {/* <FaIconName className="mr-2" /> Button 1 */}
                  <img src={chat} alt="" className="mr-2" /> Chat
                </button>
                <button className=" border border-[#FF8000] rounded-lg text-[#FF8000] hover:bg-[#FF8000] hover:text-white py-2 px-8 flex items-center">
                  <img src={phone} alt="" className="mr-2" /> Phone
                </button>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="modal-content p-4 w-[330px]  outline-none">
              <div className="flex justify-center ">
                <h1 className="font-medium">
                  Your Ride is Successfully completed
                </h1>
              </div>
              <div className="flex flex-col text-[12px] my-3">
                <h1 className="flex gap-2">
                  11:40Am
                  <span>
                    <img src={utility} alt="" />
                  </span>
                  Johar town near jinnah hospital
                </h1>
                <h1 className="flex gap-2 my-3">
                  11:40Am{" "}
                  <span>
                    <img src={utility} alt="" />
                  </span>{" "}
                  Johar town near jinnah hospital,lahore
                </h1>
              </div>
              <h1>Fare:$10</h1>
              <div className="w-full border-[1px] p-2 mb-4 rounded-md flex mt-3">
                <img src={avatar} alt="" className="h-[52px] " />
                <div className="flex flex-col m-2 pl-6">
                  <h1 className="font-medium"> John Doi </h1>
                  <h2 className="font-light text-[14px] ">+9232322323 </h2>
                  <Rating maxRating={5} color="#FF8000" starSpacing="10px" />
                </div>

                {/* <Avatar /> */}
              </div>
              <input
                type="text"
                placeholder="Enter Comment"
                className="w-full py-2.5 border rounded-lg px-2"
              />
              <button className="w-full bg-[#FF8000] text-[white] py-2.5 rounded-lg mt-4">
                Submit
              </button>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="modal-content p-4 w-[330px]  outline-none">
              <input
                type="text"
                placeholder="Enter Comment"
                className="w-full py-2.5 border rounded-lg px-2"
              />
              <button className="w-full bg-[#FF8000] text-[white] py-2.5 rounded-lg mt-4">
                Submit
              </button>
            </div>
          </>
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
        top: "140px",
        left: "110px",
        // borderRadius: "102px",
        zIndex: "9999",
      }}
    >
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div className="modal-body bg-white rounded-lg">
          {renderModalContent()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
