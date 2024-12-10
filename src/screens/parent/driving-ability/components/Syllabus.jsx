import React from "react";
import GearLines from "../../../../components/GearLines";
import { Percent } from "lucide-react";
import { NoDataFound } from "../../../../utils/Icons";

export const Syllabus = () => {
  const drivingAblilityData = [
    {
      label: "Changing Gear",
    },
    {
      label: "Clutch Control",
    },
    {
      label: "Cockpit Drill & Safety Checks",
    },
    {
      label: "Move Off Safely",
    },
    {
      label: "MSPSL Routine",
    },
    {
      label: "Steering",
    },
    {
      label: "Stop Safely",
    },
  ];

  const JunctionControlData = [
    {
      label: "Approaching",
    },
    {
      label: "Crossroads",
    },
  ];

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
      <div>
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

              {drivingAblilityData.map((item, index) => (
                <div key={index}>
                  <span
                    className={`text-gray-600 text-[12px] ml-3  font-semibold transition-all duration-500 rounded-full z-10`}
                  >
                    {item.label}
                  </span>
                  <div>
                    <GearLines />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="font-MonsterratBold text-lg mb-3 mt-5 mx-1 mt font-extrabold">
                Junctions
              </p>

              {JunctionControlData.map((item, index) => (
                <div key={index}>
                  <span
                    className={`text-gray-600 text-[12px] ml-3  font-semibold transition-all duration-500 rounded-full z-10`}
                  >
                    {item.label}
                  </span>
                  <div>
                    <GearLines />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Summary = () => {
  const progressData = [
    {
      label: "Basic Skills",
      Percent: "15%",
    },
    {
      label: "Junctions",
      Percent: "100%",
    },
    {
      label: "Manoeuvers",
      Percent: "45%",
    },
    {
      label: "Road Use",
      Percent: "25%",
    },
    {
      label: "Other",
      Percent: "10%",
    },
  ];

  return (
    <div>
      <div>
        <p className="font-MonsterratBold text-lg mb-3 mt-5 mx-1 mt font-extrabold">
          Driving Progress
        </p>
        {progressData.map((item, index) => {
          const adjustedMarginLeft =
            item.Percent === "0%" ? "0%" : `calc(${item.Percent} - 5%)`;

          return (
            <div key={index}>
              <div className="flex justify-between items-center">
                <p className="font-MonsterratBold text-lg mb-3 mt-5 mx-1 mt font-extrabold">
                  {item.label}
                </p>
                <p className="font-MonsterratBold text-lg mb-3 mt-5 mx-1 mt font-extrabold">
                  {item.Percent}
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-full relative">
                <div
                  className="bg-purple-1 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-3"
                  style={{ width: `${item.Percent}` }}
                ></div>
                <div
                  className="w-6 h-6 bg-purple-1 top-[-6.4px] absolute rounded-full"
                  style={{ marginLeft: adjustedMarginLeft }}
                >
                  <div
                    className="w-3 h-3 bg-white rounded-full"
                    style={{
                      margin: "auto",
                      position: "relative",
                      top: "6px",
                      left: "0",
                      bottom: "0",
                      right: "0",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p className="font-MonsterratBold text-lg mb-3 mt-5 mx-1 mt font-extrabold">
          Lesson Summary
        </p>
        <div className="flex items-center justify-center my-[20%]">
          <NoDataFound />
        </div>
      </div>
    </div>
  );
};
