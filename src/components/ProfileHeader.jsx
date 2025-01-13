import React from "react";
import { Routes } from "../utils/Routes";
import { SphereCircle } from "../assets";
import { NotifyBell, SidebarIcon } from "../utils/Icons";
import { useNavigate } from "react-router-dom";

const ProfileHeader = ({ pfp, text, name }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-purple-1 rounded-br-[50px] overflow-hidden min-h-32 pb-6 relative">
        {/* Centered Infinity Circle */}
        <img
          src={SphereCircle}
          alt="Infinity Circle"
          className="absolute inset-0  object-contain scale-[3.1] h-full ml-[46px] mt-[-106px] z-0 "
        />
        <div className="flex justify-between px-6 py-4">
          <div className="relative bg-gray-5 rounded-full p-4">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <SidebarIcon />
            </div>
          </div>
          <div className="relative bg-gray-5 rounded-full p-4">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <NotifyBell />
            </div>
          </div>
        </div>
        <div className="flex items-end ">
          <div className="flex-1 w-full mt-3 relative z-10">
            <p className="font-Monsterrat text-white text-[11px] ml-7 sm:text-sm">
              {text}
            </p>
            <h1 className="font-MonsterratBold capitalize font-extrabold text-white text-[20px] sm:text-[25px] ml-7">
              {name}
            </h1>
          </div>
          <div
            className="relative z-10  mb-[-4px]"
            onClick={() => navigate(Routes.parentProfile)}
          >
            <img
              src={pfp}
              alt="Women"
              className="w-16 h-16 mx-4 cursor-pointer object-cover rounded-full border-[3px] border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
