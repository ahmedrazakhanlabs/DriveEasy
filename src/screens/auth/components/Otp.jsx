import React, { useRef, useState } from 'react'
import { updatePin } from "../../../redux/slice";
import { useDispatch } from "react-redux";

const Otp = ({ pin, setPin }) => {
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  const handleInputChange = (index, value) => {
    dispatch(updatePin({ index, value }));
  };

  const handleSetPin = (newPin) => {
    dispatch(setPin(newPin));
  };

  const handlePinChange = (index, value) => {
    if (value.length > 1) return; // Prevent multiple digits

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  return (
    <div className="flex justify-center gap-4">
      {pin.map((digit, index) => (
        <input
          key={index}
          type="text"
          id={`pin-${index}`}
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          className="w-12 h-12 text-center rounded-lg bg-gray-1 focus:outline-none"
          value={digit}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default Otp
