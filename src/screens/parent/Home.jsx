import React from "react";
import RadialBarChart from "../../components/charts/RadialChart.jsx";
import Menubar from "../../components/Menubar.jsx";
import { useNavigate } from "react-router-dom";
import { homeSection1, homeSection2 } from "../../utils/Data.jsx";
import ProfileHeader from "../../components/ProfileHeader.jsx";
import { WomenProfile } from "../../assets/index";
import { localStorageKeys } from "../../helpers/index.jsx";
const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem(localStorageKeys.userInfo));

  return (
    <>
      <ProfileHeader
        text="Good Morning!"
        name={user.firstName}
        pfp={WomenProfile}
      />
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
            {homeSection1(navigate).map((item, index) => (
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
            {homeSection2(navigate).map((item, index) => (
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
