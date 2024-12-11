import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pay } from "./components";
import { NoDataFound } from "../../../utils/Icons";
import { Routes } from "../../../utils/Routes";

const Payement = () => {
  const navigate = useNavigate();
  const [lessonActive, setLessonActive] = useState(true);

  const handleTabClick = (isActive) => setLessonActive(isActive);

  return (
    <div className="p-4 space-y-6 font-Monsterrat relative transition-all duration-500 ">
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => navigate(Routes.parentHome)}
          className="p-2 absolute left-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h1 className="text-center font-semibold">Payements</h1>
      </div>
      <div>
        {!lessonActive && (
          <>
            <div className="flex grid-cols-4 gap-2 pl-1 mx-auto items-center justify-center">
              {["Delivered", "Purchased", "Credit"].map((status, index) => (
                <div
                  key={status}
                  className={`px-4 py-2 rounded-2xl shadow-2xl text-center ${
                    index == 1 ? "bg-purple-1 text-white" : "bg-white"
                  }`}
                >
                  <div
                    className={`text-[2vw] sm:text-[12px] md:text-sm font-MonsterratBold ${
                      index !== 1 ? "text-purple-1" : ""
                    }`}
                  >
                    {status}
                  </div>
                  <div className="text-[3vw] sm:text-sm font-Monsterrat">
                    0 Hrs
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex bg-gray-100 py-2  rounded-full relative w-fit mx-auto">
        <div
          className={`absolute shadow-lg bg-white top-[7px] left-2 h-[36px] transition-all duration-500 rounded-full ${
            lessonActive ? "w-[115px]" : "ml-[105px] w-[122px]"
          }`}
        ></div>

        {["Pay", "Payements"].map((tab, index) => {
          const isActive = index === 0 ? lessonActive : !lessonActive;
          return (
            <span
              key={tab}
              onClick={() => handleTabClick(index === 0)}
              className={`text-[12px] pl-12 px-7 py-2 cursor-pointer font-semibold transition-all duration-500 rounded-full z-10 ${
                isActive ? "font-MonsterratBold text-purple-1" : "text-gray-600"
              }`}
            >
              {tab}
            </span>
          );
        })}
      </div>
      <div>{lessonActive && <Pay />}</div>
      {!lessonActive && (
        <div className="flex justify-center items-center py-[30%]">
          <NoDataFound />
        </div>
      )}
    </div>
  );
};

export default Payement;
