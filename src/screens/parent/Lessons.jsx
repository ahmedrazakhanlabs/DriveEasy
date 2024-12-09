import { ArrowLeft, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { NoDataFound } from "../../utils/Icons";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../utils/Routes";

const Lessons = () => {
  const navigate = useNavigate();
  const [lessonActive, setLessonActive] = useState(false);
  return (
    <div>
      <div className="p-4 space-y-6 font-Monsterrat">
        {/* Header */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => navigate(Routes.parentHome)}
            className="p-2 absolute left-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex justify-center items-center">
            <h1 className="text-lgl text-center font-semibold">Next Lesson</h1>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-4 gap-2 pl-1">
          {["Delivered", "Cancelled", "Booked", "Credit"].map(
            (status, index) => (
              <div
                key={status}
                className={`p-2 rounded-2xl shadow-2xl text-left  ${
                  index == 2 ? "bg-purple-1 text-white" : "bg-white"
                }`}
              >
                <div
                  className={`text-[3vw] sm:text-[12px] md:text-sm font-MonsterratBold ml-1 ${
                    index !== 2 ? "text-purple-1" : ""
                  }`}
                >
                  {status}
                </div>
                <div className="text-[3vw] sm:text-sm font-Monsterrat  text-left ml-1 ">
                  0 Hrs
                </div>
              </div>
            )
          )}
        </div>

        {/* Toggle Buttons */}
        <div className="flex bg-gray-100 pt-2 pb-2 px-1 rounded-full relative w-fit mx-auto">
          <div
            className={`absolute shadow-lg bg-white top-[10px] left-2 h-[30px] transition-all duration-500 rounded-full ${
              lessonActive ? "w-[110px]" : "ml-28 w-[102px]"
            }`}
          ></div>
          <span
            onClick={() => setLessonActive(true)}
            className={`text-[12px] px-4 py-2 transition-all font-semibold duration-500 rounded-full z-10 ${
              lessonActive
                ? "font-MonsterratBold text-purple-1"
                : "text-gray-600"
            }`}
          >
            Future Lesson
          </span>
          <span
            onClick={() => setLessonActive(false)}
            className={`text-[12px] px-4 py-2 font-semibold transition-all duration-500 rounded-full z-10 ${
              !lessonActive
                ? "font-MonsterratBold text-purple-1"
                : "text-gray-600"
            }`}
          >
            Past Lesson
          </span>
        </div>

        {/* No Results State */}
        <div className="flex justify-center items-center py-[30%]  ">
          <NoDataFound />
        </div>
      </div>
    </div>
  );
};

export default Lessons;
