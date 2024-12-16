import React from "react";

const ErrorMessage = ({ className, ErrorMessage }) => {
  return (
    <div className=" ">
      {" "}
      <p
        className={`font-Monsterrat font-bold text-[12px] text-[#dc1c1c] opacity-60 ${className}`}
      >
        {ErrorMessage}
      </p>
    </div>
  );
};

export default ErrorMessage;
