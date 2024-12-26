const pupilsData = [
  {
    id: 1,
    name: "Dan Wells",
    text: "Not lesson booked.",
    credit: "0Hrscredit",
    avatar:
      "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    notifications: 2,
  },
  {
    id: 2,
    name: "Will Wade",
    text: "Lesson booked.",
    credit: "3Hrscredit",
    avatar:
      "https://images.pexels.com/photos/15894901/pexels-photo-15894901/free-photo-of-man-with-mustache-and-beard.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    notifications: 0,
  },
  {
    id: 3,
    name: "Beverly Gray",
    text: "Not lesson booked.",
    credit: "20Hrscredit",
    avatar:
      "https://images.pexels.com/photos/8605800/pexels-photo-8605800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    notifications: 0,
  },
  {
    id: 4,
    name: "Rebecca Young",
    text: "Not lesson booked.",
    credit: "0Hrscredit",
    avatar:
      "https://images.pexels.com/photos/13404247/pexels-photo-13404247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    notifications: 1,
  },
  {
    id: 5,
    name: "Laurel Hughes",
    text: "Lesson booked.",
    credit: "120Hrscredit",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=4",
    notifications: 1,
  },
];
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../utils/Routes";
import { ChevronLeft } from "lucide-react";
import Menubar from "../../components/Menubar";

const Pupils = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("write");

  const tabs = [
    { id: "active", label: "Active" },
    { id: "waiting", label: "Waiting" },
    { id: "inactive", label: "In active" },
  ];
  return (
    <div className="relative">
      <div className="flex justify-center items-center mx-4  my-1">
        <button
          onClick={() => navigate(Routes.parentHome)}
          className="p-2 absolute left-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div></div>
        <div className="flex justify-center items-center">
          <h1 className="text-center font-MonsterratBold my-7 text-[18px] font-semibold">
            Pupils
          </h1>
        </div>

        <div className="p-2 absolute right-2 rounded-full hover:bg-gray-100">
          <button
            // onClick={() => navigate(Routes.AddContact)}
            className="bg-purple-1  text-center text-[10px] rounded-full px-5 font-Monsterrat font-bold py-1 text-white"
          >
            Import
          </button>
        </div>
      </div>

      <div className="flex bg-gray-100 pt-2 pb-2 px-1 rounded-full relative w-fit mx-auto">
        <div
          className={`absolute shadow-lg bg-white top-[10px] left-2 h-[30px] transition-all duration-500 rounded-full ${
            activeTab === "active"
              ? "w-[78px]"
              : activeTab === "waiting"
              ? "ml-20 w-[90px]"
              : "ml-[175px] w-[80px]"
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
      <div className="px-10 py-4 border-b border-gray-50">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 pl-8 pr-4 text-sm bg-gray-50 rounded-md focus:outline-none "
          />
          <svg
            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <div>
        {pupilsData.map((item) => (
          <div key={item.id}>
            <div className="flex items-center gap-3 p-4 hover:bg-gray-50">
              <div className="flex-shrink-0">
                <img
                  src={item.avatar}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <p className="font-Poppins text-[13px] font-bold text-gray-900">
                    {item.name}
                  </p>
                  <div className="absolute right-5">
                    <p className="font-Poppins text-[10px] font-semibold text-purple-1">
                      {item.credit}
                    </p>
                  </div>
                </div>
                <p className="font-Poppins text-[10px] opacity-65 font-bold  truncate">
                  {item.text}
                </p>
              </div>
            </div>
            <div className=" border-t border-gray-100 mx-8"></div>
          </div>
        ))}
        <br />
        <br />
        <Menubar />
      </div>
    </div>
  );
};

export default Pupils;
