import React from "react";
import { ClipboardIcon, HomeIcon, PhoneIcon, WorldIcon } from "../utils/Icons";
import { useLocation } from "react-router-dom";

const Menubar = () => {
  const location = useLocation();
  return (
    <>
      <div className="fixed bottom-3 left-0 right-0 flex justify-center z-50">
        <div className="bg-white shadow-lg rounded-3xl flex items-center justify-center gap-14 py-5 px-16 z-50">
          {location.pathname === "/parent/home" ? (
            <span className="font-MonsterratBold border-b-4 rounded-[3px] w-8 flex justify-center items-center border-purple-1">
              Home
            </span>
          ) : (
            <HomeIcon />
          )}
          <WorldIcon />
          <PhoneIcon />
          <ClipboardIcon />
        </div>
      </div>
    </>
  );
};

export default Menubar;
