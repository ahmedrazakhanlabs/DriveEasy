import React from "react";
import { SphereCircle, WomenProfile } from "../../assets/index.jsx";
import {
  CalenderIcon,
  CardIcon1,
  CardIcon2,
  CardIcon3,
  NotifyBell,
  ProgressIcon,
  SidebarIcon,
} from "../../utils/Icons.jsx";
import RadialBarChart from "../../components/charts/RadialChart.jsx";
import Menubar from "../../components/Menubar.jsx";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../utils/Routes.jsx";
const Home = () => {
  const navigate = useNavigate();
  const homeSection1 = [
    {
      label: "Lesson",
      onclick: () => navigate(Routes.parentLessons),
      icon: <CalenderIcon />,
    },
    {
      label: "Progress",
      onclick: () => console.log("lesson"),
      icon: <ProgressIcon />,
    },
  ];

  const homeSection2 = [
    {
      label: "Pay",
      icon: <CardIcon1 />,
      onclick: () => navigate(Routes.parentPayement),
    },
    {
      label: "Inbox",
      icon: <CardIcon2 />,
      onclick: () => navigate(Routes.parentInbox),
    },
    {
      label: "Gap",
      icon: <CardIcon3 />,
      iconClass: "bottom-[-12px]",
      onclick: () => navigate(Routes.parentDrivingAbility),
    },
  ];

  return (
    <>
      <div className="bg-purple-1 rounded-br-[50px] min-h-32 pb-6 relative">
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
              Good Morning!
            </p>
            <h1 className="font-MonsterratBold font-extrabold text-white text-[20px] sm:text-[25px] ml-7">
              Terrence Hansen
            </h1>
          </div>
          <div
            className="relative z-10  mb-[-4px]"
            onClick={() => navigate(Routes.parentProfile)}
          >
            <img
              src={WomenProfile}
              alt="Women"
              className="w-16 h-16 mx-4  cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="bg-white rounded-3xl shadow-lg p-4 mt-8 ">
          <div className="flex justify-between">
            <p className="font-Monsterrat text-lg font-extrabold">
              Next Lesson
            </p>
            <span className="font-Monsterrat text-lg font-[500] ">
              Not Booked
            </span>
          </div>

          <div className="flex justify-center gap-5 mt-6 px-6 w-full">
            {homeSection1.map((item, index) => (
              <div
                key={index}
                onClick={item.onclick}
                className="bg-purple-1 w-52 rounded-full py-3 px-5 flex items-center justify-center cursor-pointer"
              >
                {item.icon}
                <span className="font-Monsterrat font-bold text-white px-2">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="font-MonsterratBold text-md mb-3 font-extrabold">
            Stay up to date
          </p>

          <div className="w-full flex justify-center gap-3 items-center">
            {homeSection2.map((item, index) => (
              <div
                key={index}
                onClick={item.onclick}
                className="w-full bg-gray-2 cursor-pointer px-4 py-7 rounded-2xl relative flex justify-center items-center"
              >
                <div
                  className={`absolute bottom-0 left-[-5px]  ${item.iconClass}`}
                >
                  {item.icon}
                </div>

                <h2 className="font-MonsterratBold text-lg">{item.label}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="my-8">
          <div className="bg-white shadow-lg rounded-3xl grid grid-cols-2 items-center p-5">
            <div className="w-full">
              <RadialBarChart series={[21]} />
            </div>
            <div className="w-full px-4">
              <div>
                <h1 className="font-MonsterratBold font-bold  text-[4vw] sm:text-[15px] lg:text-lg">
                  Theory Test
                </h1>
                <span className="font-Monsterrat text-[12px] lg:text-[14px] font-bold ">
                  Not Booked
                </span>
              </div>
              <div className="mt-5">
                <h1 className="font-MonsterratBold font-bold  text-[4vw] sm:text-[15px] lg:text-lg">
                  Practical Test
                </h1>
                <span className="font-Monsterrat text-[12px] lg:text-[14px] font-bold ">
                  Not Booked
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <Menubar />
    </>
  );
};

export default Home;
