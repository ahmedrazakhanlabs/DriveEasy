import React, { useState } from "react";
import { Eye, EyeClosedIcon } from "lucide-react";
import ErrorMessage from "./ErrorMessage";

const Input = ({
  type = "text",
  prefixIcon,
  suffixIcon,
  placeholder,
  className,
  name,
  onChange, // Add this prop
  inputValue,
  error,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  return (
    <>
      <div
        className={`relative bg-white rounded-2xl shadow-lg font-Montserrat px-4 py-2 ${className}`}
      >
        {placeholder && (
          <p className="font-Monsterrat font-bold text-[11px] text-gray-500 opacity-70">
            {placeholder}
          </p>
        )}

        {prefixIcon && (
          <span className="absolute left-4 top-1/2 transform -translate-y-2/2 z-10">
            {prefixIcon}
          </span>
        )}

        <input
          type={inputType}
          value={inputValue}
          name={name}
          placeholder={
            inputType == "email"
              ? "user@example.com"
              : inputType == "password"
              ? "•••••••••••"
              : placeholder
          }
          onChange={onChange}
          className={`w-[70%] sm:w-auto lg:w-[90%] py-2 ml-8 pr-10 rounded-md font-[600] placeholder:text-[12px] focus:outline-none font-Monsterrat text-[11px] `}
        />

        {suffixIcon && (
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
            {suffixIcon}
          </span>
        )}

        {type === "password" && (
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-3 mt-[10px] cursor-pointer z-10"
          >
            {isPasswordVisible ? <Eye /> : <EyeClosedIcon />}
          </span>
        )}
      </div>
      <ErrorMessage ErrorMessage={error} />
    </>
  );
};

export default Input;
