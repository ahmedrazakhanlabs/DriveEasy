import React from "react";
import { Women } from "../../../assets";

const Header = ({ heading, subHeading }) => {
  return (
    <div className="bg-purple-1 rounded-bl-[50px] flex items-center">
      <div className="flex-1 w-full ">
        <h1 className="font-Monsterrat font-bold text-white text-[8vw] sm:text-[34px] ml-7 lg:text-[38px] ">
          {heading}
        </h1>
        <p className="font-Monsterrat text-white text-[11px] ml-7 sm:text-sm">
          {subHeading}
        </p>
      </div>
      <div className="">
        <img src={Women} alt="Women" className="w-[149px] h-[150px]" />
      </div>
    </div>
  );
};

export default Header;
