import React, { useState } from "react";
import car from "../../assets/car.png";
import bike from "../../assets/bike.png";
import bicycle from "../../assets/bicycle.png";
import Arrow from "../../assets/back-arrow.png";
import LinearIndeterminate from "../../utils/LinearProgress";
// import LinearProgress from '@mui/material/LinearProgress';

const Modal = () => {
  const [step, setStep] = useState(1);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
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
      case 1:
        return (
          <div className="modal-content p-4 w-[310px] outline-none">
            <h2 className="leading-[19px] text-[16px] font-semibold my-2">
              Destination Details
            </h2>
            <input
              type="text"
              placeholder="Enter Destination Location"
              className="px-2 w-full border-[1px] py-2 mt-2 rounded-lg outline-none"
            />
            <div className="flex my-2 gap-2">
              <input
                type="text"
                placeholder="Enter Floor No"
                className="w-1/2 px-2 border-[1px] py-2 my-2 rounded-lg outline-none"
              />
              <input
                type="text"
                placeholder="Enter Bell Name"
                className="w-1/2 px-2 border-[1px] py-2 my-2 rounded-lg outline-none"
              />
            </div>
            <div className="my-3">
              <h1 className="leading-[19px] text-[16px] font-semibold">
                Phone Number (Optional)
              </h1>
              <input
                type="text"
                placeholder="Enter Phone Number "
                className="px-2 w-full border-[1px] py-2 mt-2 rounded-lg outline-none"
              />
            </div>
            <button
              onClick={handleNextStep}
              className="w-full bg-[#FF8000] text-white py-2 rounded-lg"
            >
              Continue
            </button>
          </div>
        );
      case 2:
        return (
          <div className="modal-content p-4 gap-3 w-[310px] outline-none">
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
                <img src={bicycle} alt="Bicycle" className="cursor-pointer" />
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
            <div className="flex gap-2 relative">
              <input
                type="text"
                placeholder="Width"
                className="px-2 w-1/3 border-[1px] py-2 mt-2 rounded-lg outline-none placeholder:text-sm"
              />
              <span className=" text-sm absolute right-3 top-[60%] transform -translate-y-1/2">
                ln
              </span>
              <input
                type="text"
                placeholder="Length"
                className="px-2 w-1/3 border-[1px] py-2 mt-2 rounded-lg outline-none placeholder:text-sm"
              />
              <span className="text-sm absolute  left-40 top-[60%] transform -translate-y-1/2">
                ln
              </span>
              <input
                type="text"
                placeholder="Height"
                className="px-2 w-1/3 border-[1px] py-2 mt-2 rounded-lg outline-none placeholder:text-sm "
              />
              <span className="text-sm absolute right-56 left-16 top-[60%] transform -translate-y-1/2">
                ln
              </span>
            </div>
            <h1 className="my-1">Weight</h1>
            <input
              type="text"
              className="w-full border-[1px] py-2 mt-2 rounded-lg outline-none px-2 placeholder:text-sm"
              placeholder="Enter Weight"
            />
            <span className="text-sm absolute right-6 left-54 top-[39%] transform -translate-y-1/2">
              kg
            </span>
            <h1 className="my-1">Comment</h1>
            <input
              type="text"
              className="w-full border-[1px] py-2 my-2 rounded-lg outline-none px-2 placeholder:text-sm"
              placeholder="Enter Comment"
            />

            {/* Add input fields for Length, Height, Weight, Comment */}
            <label htmlFor="Fare" className="">
              Select Pickup Time
            </label>
            <select
              className="w-full border-[1px] py-2.5  rounded-lg outline-none my-1"
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
              className="relative px-2 w-full border-[1px] py-2 mt-1 rounded-lg outline-none placeholder:text-sm"
            />
            <span className="absolute right-8 top-[74.5%] transform -translate-y-1/2 text-white rounded-md py-1 px-2 font-bold bg-[#FF8000]">
              +£
            </span>
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
          </div>
        );
      case 3:
        return (
          <div className="modal-content p-4 w-[310px] outline-none">
            <img src={Arrow} alt="" onClick={handlePreviousStep} />
            <h2 className="leading-[19px] text-[16px] font-semibold my-2 flex justify-center">
              Finding a Rider
            </h2>

            <div className="my-3">
              <p className="text-justify p-3">
                There are several Riders, we are looking at which one will fit
                best.
              </p>
            </div>
            <LinearIndeterminate />

            <div className="flex justify-center my-8 mb-4">
              <p> Seconds Remaining: 09</p>
            </div>
            {/* <button  className='w-full bg-[#FF8000] text-white py-2 rounded-lg'>Continue</button> */}
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
        top: "110px",
        left: "110px",
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
