import React from "react";

const InputTwo = ({
  label,
  placeholder,
  className,
  value,
  onChange,
  type,
  name,
}) => {
  return (
    <div className="font-Monsterrat">
      <p className="font-Monsterrat font-bold text-[13px] text-black-1 opacity-80">
        {label}
      </p>
      {/* <label className="text-sm">{label}</label> */}
      <input
        type={type}
        placeholde={placeholder}
        onChange={onChange}
        className={`w-full p-3 rounded-md bg-purple-5 font-Monsterrat font-semibold text-[13px] text-black-1 placeholder:text-black-1 placeholder:opacity-60 focus:outline-none ${className} `}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </div>
  );
};

export default InputTwo;
