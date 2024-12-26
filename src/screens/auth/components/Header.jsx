import React from "react";
import { SphereCircle } from "../../../assets";

const Header = ({ heading, subHeading, image, imageClass }) => {
  return (
    <div className="relative bg-purple-1 rounded-bl-[50px] flex items-center">
      <img
        src={SphereCircle}
        alt="Infinity Circle"
        className="absolute inset-0  object-contain scale-[1.1] h-[244px] ml-[46px] mt-[-106px] z-0 "
      />
      <div className="flex-1 w-full ">
        <h1 className="font-Monsterrat font-bold text-white text-[8vw] sm:text-[34px] ml-7 lg:text-[38px] ">
          {heading}
        </h1>
        <p className="font-Monsterrat text-white text-[11px] ml-7 sm:text-sm">
          {subHeading}
        </p>
      </div>
      <div className={imageClass}>
        <img
          src={image}
          alt="Women"
          className={`w-[149px] h-[150px]  ${imageClass}`}
        />
      </div>
    </div>
  );
};

export default Header;
