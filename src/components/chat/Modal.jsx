import React, { useState } from "react";
import car from "../../assets/car.png";
import bike from "../../assets/bike.png";
import bicycle from "../../assets/bicycle.png";
import Arrow from "../../assets/back-arrow.png";
import LinearIndeterminate from "../../utils/LinearProgress";
import visa from "../../assets/visa.png";
import tick from "../../assets/tick.png";
import mastercard from "../../assets/mastercard.png";
import { Link } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";
import InputEmoji from "react-input-emoji";
import attachment from "../../assets/attachment.png";
import send from "../../assets/Send.png";
import InputEmojiWithRef from "react-input-emoji";

const Modal = () => {
  const [step, setStep] = useState(1);
  const [selectedImages, setSelectedImages] = useState([]);
  const [amount, setAmount] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // Track emoji picker visibility

  const handleComplete = () => {
    // Handle the completion logic here
    // For example, submit form data or perform an action
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  function handleOnEnter(text) {
    console.log("enter", text);
  }

  const handleToggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  // const handleEmojiSelect = (emoji) => {
  //   setText(text + emoji);
  // };

  const renderModalContent = () => {
    return (
      <div className="modal-content p-4 w-[520px] outline-none">
        <div className="flex items-end justify-start mb-4">
          <Link to="/details">
            <img src={Arrow} alt="" className="cursor-pointer " />
          </Link>
        </div>
        <div className="flex flex-col gap-2 h-52 overflow-y-auto">
          {/* Render chat messages here */}
          {/* Example chat message */}
          <div className="flex items-center">
            <img src={car} alt="Avatar" className="h-6 w-6 rounded-full" />
            <span className="bg-gray-200 px-3 py-2 rounded-lg ml-2">
              Hello, how can I assist you?
            </span>
          </div>
          {/* Example chat message */}
          <div className="flex items-center justify-end mt-2">
            <span className="bg-blue-500 text-white px-3 py-2 rounded-lg mr-2">
              Sure, here's the information you requested.
            </span>
            <img src={car} alt="Avatar" className="h-6 w-6 rounded-full" />
          </div>
          {/* Render more chat messages */}
        </div>

        {/* Emoji picker */}
        <div className="flex items-center gap-3 mt-2">
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
          />
          <label
            htmlFor="fileInput"
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
          >
            <img src={attachment} alt="attachment" />
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </label>

          <img src={send} alt="send" className="cursor-pointer" />
        </div>
      </div>
    );
  };

  return (
    <div
      className="modal"
      style={{
        position: "absolute",
        top: "130px",
        left: "410px",
        zIndex: "9999",
      }}
    >
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div className="modal-body bg-white rounded-lg border-[1px] border-solid drop-shadow-md">
          {renderModalContent()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
