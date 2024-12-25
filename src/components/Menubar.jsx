import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { MenuTabs } from "../utils/Data";

const Menubar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-3 left-0 right-0 flex  mx-20 justify-center z-50">
      <div className="bg-white shadow-lg rounded-3xl flex items-center justify-center gap-11 md:gap-12 py-5 px-12  z-50">
        {MenuTabs.map(({ path, label, Icon }) => (
          <div
            key={path}
            className={`cursor-pointer flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105`}
            onClick={() => navigate(path)}
          >
            {location.pathname === path ? (
              <div className="text-center ">
                <span className="font-MonsterratBold hidden md:block md:text-[14px] transition-colors duration-300">
                  {label}
                </span>
                <div
                  className={`border-b-4 border-purple-1 w-10 mx-auto hidden md:block rounded-3xl transition-all duration-300`}
                ></div>
                <div className="md:hidden">
                  <Icon color="#6A2CF9" />
                </div>
              </div>
            ) : (
              <Icon className="text-gray-500 hover:text-purple-1  transition-colors duration-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menubar;
