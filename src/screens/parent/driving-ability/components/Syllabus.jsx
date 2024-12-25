import React, { useEffect, useState } from "react";
import GearLines from "../../../../components/GearLines";
import { Percent } from "lucide-react";
import { NoDataFound } from "../../../../utils/Icons";
import {
  progressData,
  drivingAblilityData,
  drivingAblilityListingData,
  JunctionControlData,
} from "../../../../utils/Data";

export const Syllabus = () => {
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
  const [progressValues, setProgressValues] = useState([]);

  useEffect(() => {
    // Initialize progress values with 0
    setProgressValues(progressData.map(() => 0));

    // Smoothly update progress values to their respective target values
    progressData.forEach((item, index) => {
      const targetPercent = parseInt(item.Percent, 10);
      let currentPercent = 0;

      const interval = setInterval(() => {
        currentPercent += 12; // Increment the progress
        if (currentPercent >= targetPercent) {
          currentPercent = targetPercent; // Cap at target
          clearInterval(interval); // Clear interval when done
        }

        setProgressValues((prevValues) =>
          prevValues.map((value, idx) =>
            idx === index ? currentPercent : value
          )
        );
      }, 1); // Adjust interval speed as necessary
    });
  }, []);

  return (
    <div>
      <div>
        <p className="font-MonsterratBold text-lg mb-3 mt-5 mx-1 mt font-extrabold">
          Driving Progress
        </p>
        {progressData.map((item, index) => {
          const adjustedMarginLeft =
            progressValues[index] === 0
              ? "0%"
              : `calc(${progressValues[index]}% - 5%)`;

          return (
            <div key={index}>
              <div className="flex justify-between items-center">
                <p className="font-MonsterratBold text-lg mb-3 mt-5 mx-1 mt font-extrabold">
                  {item.label}
                </p>
                <p className="font-MonsterratBold text-lg mb-3 mt-5 mx-1 mt font-extrabold">
                  {progressValues[index]}%
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-full relative">
                <div
                  className="bg-purple-1 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-3 transition-all duration-300"
                  style={{ width: `${progressValues[index]}%` }}
                ></div>
                <div
                  className="w-6 h-6 bg-purple-1 top-[-6.4px] absolute rounded-full transition-all duration-300"
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
