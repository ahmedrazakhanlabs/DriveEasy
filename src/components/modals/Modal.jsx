import React, { useState } from "react";

const Modal = ({ isOpen, onClose, content, className, backdrop }) => {
  // Function to handle clicks outside the modal
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-overlay fixed inset-0  ${
        backdrop ? backdrop : "bg-gray-800 bg-opacity-50"
      } z-50 flex items-center justify-center transition-opacity duration-300  ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleOutsideClick}
    >
      <div
        className={`bg-white  p-6 rounded-2xl shadow-lg max-h-[90vh]  mx-5 ${className}  max-w-sm w-full transition-transform transform duration-500 ease-in-out ${
          isOpen ? "scale-[0.8]" : "scale-50"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent click event propagation
      >
        {content}
      </div>
    </div>
  );
};

export default Modal;
