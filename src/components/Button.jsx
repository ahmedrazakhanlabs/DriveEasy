import React from "react";

const Button = ({
  prefixIcon,
  suffixIcon,
  label,
  className,
  textCenter,
  onClick,
  isActive,
  radio
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-purple-1 flex items-center  w-[100%] p-3 
        ${isActive == false && "bg-purple-1 opacity-20"} ${
        isActive == true && "bg-purple-1"
      } ${className} transition duration-500 ease-in-out`}
    >
      {prefixIcon && <span className="pb-1">{prefixIcon}</span>}
      {label && (
        <div
          className={`ml-2 font-Monsterrat  text-center text-white`}
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
