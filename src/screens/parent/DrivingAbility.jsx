import { ArrowLeft, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { NoDataFound } from "../../utils/Icons";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../utils/Routes";

const DrivingAbility = () => {
  const navigate = useNavigate();
  const [lessonActive, setLessonActive] = useState(false);
  const drivingAblilityListingData = [
    {
      label: "Introduced",
    },
    {
      label: "Under Full Instruction",
    },
    {
      label: "Prompted",
    },
    {
      label: "Seldom Prompted",
    },
    {
      label: "Independent",
    },
  ];
  return (
    <div>
      <div className="p-4 space-y-6 font-Monsterrat">
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => navigate(Routes.parentHome)}
            className="p-2 absolute left-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex justify-center items-center">
            <h1 className="text-lgl text-center font-semibold">
              Driving Ability
            </h1>
          </div>
        </div>

        <div className="flex bg-gray-100 py-2 px-2 rounded-full relative w-fit mx-auto">
          <div
            className={`absolute shadow-lg bg-white top-[7px] left-2 h-[36px] transition-all duration-500 rounded-full ${
              lessonActive ? "w-[100px] " : "ml-[110px] w-[102px]"
            }`}
          ></div>
          <span
            onClick={() => setLessonActive(true)}
            className={`text-[12px] px-7 py-2 transition-all font-semibold duration-500 rounded-full z-10 ${
              lessonActive
                ? "font-MonsterratBold text-purple-1"
                : "text-gray-600"
            }`}
          >
            Syllbus
          </span>
          <span
            onClick={() => setLessonActive(false)}
            className={`text-[12px] px-7 py-2 font-semibold transition-all duration-500 rounded-full z-10 ${
              !lessonActive
                ? "font-MonsterratBold text-purple-1"
                : "text-gray-600"
            }`}
          >
            Summary
          </span>
        </div>

        {lessonActive ? (
          <div className="space-y-4">
            <div className="space-y-2 my-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center mx-7">
                {drivingAblilityListingData.map((item, index) => (
                  <div className="flex items-center gap-2 ">
                    <div className="bg-purple-1 w-2 rounded-full p-[6px]"></div>
                    <span
                      className={`text-[12px] sm:text-[12px] transition-all font-semibold duration-500 rounded-full z-10  `}
                    >
                      {index + 1}: {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p className="font-MonsterratBold text-lg mb-3 mt-5 mx-1 mt font-extrabold">
                  Basic Skills
                </p>
                <span
                  className={`text-gray-600 text-[12px] ml-1 font-semibold transition-all duration-500 rounded-full z-10`}
                >
                  Changing Gear
                </span>
                <div className="flex items-center justify-center space-x-2 mt-1">
                  {Array(5)
                    .fill(0)
                    .map((item, index) => (
                      <div key={index} className="flex items-center">
                        {/* Circle */}
                        <p className="border-2 border-purple-1 rounded-full w-5 h-5 text-[3vw] sm:text-[12px] font-MonsterratBold flex justify-center items-center">
                          {index + 1}
                        </p>

                        {/* Bar */}
                        {index < 4 && (
                          <div className="flex-grow bg-gray-3 h-[13px] w-10 rounded-full mx-2"></div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <NoDataFound />
        )}
      </div>
    </div>
  );
};

export default DrivingAbility;
