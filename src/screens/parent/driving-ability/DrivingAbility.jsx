import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../utils/Routes";
import { Summary, Syllabus } from "./components/Syllabus";

const DrivingAbility = () => {
  const navigate = useNavigate();
  const [lessonActive, setLessonActive] = useState(true);

  return (
    <div>
      <div className="p-4 space-y-6 font-Monsterrat relative">
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
              lessonActive ? "w-[100px] " : "ml-[105px] w-[102px]"
            }`}
          ></div>
          <span
            onClick={() => setLessonActive(true)}
            className={`text-[12px] px-7 py-2 cursor-pointer transition-all font-semibold duration-500 rounded-full z-10 ${
              lessonActive
                ? "font-MonsterratBold text-purple-1"
                : "text-gray-600"
            }`}
          >
            Syllbus
          </span>
          <span
            onClick={() => setLessonActive(false)}
            className={`text-[12px] px-7 py-2 font-semibold cursor-pointer transition-all duration-500 rounded-full z-10 ${
              !lessonActive
                ? "font-MonsterratBold text-purple-1"
                : "text-gray-600"
            }`}
          >
            Summary
          </span>
        </div>

        {lessonActive ? <Syllabus /> : <Summary />}
      </div>
    </div>
  );
};

export default DrivingAbility;
