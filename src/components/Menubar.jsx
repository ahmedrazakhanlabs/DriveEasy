import React from "react";
import { ClipboardIcon, HomeIcon, PhoneIcon, WorldIcon } from "../utils/Icons";

const Menubar = () => {
  return (
    <>
      <div className=" w-full">
        <div className="bg-white shadow-lg rounded-3xl fixed bottom-3 flex items-center justify-center gap-14 py-5 px-16 ml-2 z-50">
          <HomeIcon />
          <WorldIcon />
          <PhoneIcon />
          <ClipboardIcon />
        </div>
      </div>
    </>
  );
};

export default Menubar;
