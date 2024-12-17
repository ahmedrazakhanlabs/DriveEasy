import { Eye, EyeClosedIcon } from "lucide-react";
import React, { useState } from "react";

const InputTwo = ({
  label,
  placeholder,
  className,
  value,
  onChange,
  type,
  name,
}) => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Function to toggle the password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="font-Monsterrat">
      <p className="font-Monsterrat font-bold text-[13px] text-black-1 opacity-80">
        {label}
      </p>
      <div className="relative">
        <input
          type={type === "password" && !showPassword ? "password" : "text"} // Show password when toggle is on
          placeholder={placeholder}
          onChange={onChange}
          className={`w-full p-3 rounded-md bg-purple-5 font-Monsterrat font-semibold text-[13px] text-black-1 placeholder:text-black-1 placeholder:opacity-60 focus:outline-none ${className} `}
          name={name}
          value={value}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-black-1"
          >
            {showPassword ? <Eye /> : <EyeClosedIcon />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputTwo;
