import React, { useState } from "react";

const Button = ({
  prefixIcon,
  suffixIcon,
  label,
  className,
  disabled,
  onClick,
  type,
  id,
  isActive,
}) => {
  // State to handle the animation trigger when clicked
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true); // Trigger the animation on click
    if (onClick) {
      onClick();
    }

    // Reset the click state after the animation duration
    setTimeout(() => {
      setClicked(false);
    }, 500); // Duration should match the transition duration
  };

  return (
    <button
      id={id}
      onClick={handleClick} // Set the click handler
      disabled={disabled}
      type={type}
      className={`relative bg-purple-1 flex  items-center w-full p-3 overflow-hidden
        ${isActive == false && "bg-purple-1 opacity-20"} 
        ${isActive == true && "bg-purple-1"} 
        ${disabled && "opacity-50 pointer-events-none"} 
        ${className} transition duration-500 ease-in-out`}
    >
      {/* Animation on click */}
      <span
        className={`absolute inset-0 bg-black-1 opacity-15 transition-all duration-300 transform ${
          clicked ? "scale-100" : "scale-0"
        } origin-center`}
      />

      {prefixIcon && <span className="pb-1">{prefixIcon}</span>}
      {label && (
        <div
          className={`ml-2 flex items-center  font-Monsterrat text-center text-white`}
          style={{ letterSpacing: "1px" }}
        >
          {label}
        </div>
      )}
      {suffixIcon && <span className="pb-1">{suffixIcon}</span>}
    </button>
  );
};

export default Button;
