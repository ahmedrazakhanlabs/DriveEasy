import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NoDataFound } from "../../utils/Icons";
import Menubar from "../../components/Menubar";

const RelativeLogs = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("write");

  const tabs = [
    { id: "write", label: "Write" },
    { id: "viewAll", label: "View All" },
    { id: "completed", label: "Completed" },
  ];

  return (
    <div className="relative">
      {/* Header Section */}
      <div className="flex my-4 justify-center items-center relative">
        <button
          onClick={() => navigate(-1)}
          className="p-2 absolute left-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h1 className="text-center font-MonsterratBold my-7 text-[18px] font-semibold">
          Relative Logs
        </h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-gray-100 pt-2 pb-2 px-1 rounded-full relative w-fit mx-auto">
        <div
          className={`absolute shadow-lg bg-white top-[10px] left-2 h-[30px] transition-all duration-500 rounded-full ${
            activeTab === "write"
              ? "w-[78px]"
              : activeTab === "viewAll"
              ? "ml-20 w-[90px]"
              : "ml-44 w-[98px]"
          }`}
        ></div>
        {tabs.map((tab) => (
          <span
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-[12px] px-6 py-2 cursor-pointer font-semibold transition-all duration-500 rounded-full z-10 ${
              activeTab === tab.id
                ? "font-MonsterratBold text-purple-1"
                : "text-gray-600"
            }`}
          >
            {tab.label}
          </span>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex justify-center items-center py-[30%]">
        <NoDataFound />
      </div>
      <br />
      <br />
      <Menubar />
    </div>
  );
};

export default RelativeLogs;
