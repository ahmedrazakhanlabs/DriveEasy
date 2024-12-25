import React from "react";
import { format } from "date-fns";

export const WeekDays = ({ currentWeek, setSelectedDate, selectedDate }) => {
  return (
    <div>
      <div className="flex space-x-6 px-4 justify-around items-center transition-all duration-700">
        {currentWeek.map((date) => {
          const isSelected =
            format(date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
          return (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className="flex flex-col items-center focus:outline-none"
            >
              <span
                className={`text-sm transition-all duration-700 font-Monsterrat ${
                  isSelected
                    ? "text-purple-1 font-bold transform scale-110"
                    : "text-gray-400 "
                }`}
              >
                {format(date, "EEE")}
              </span>
              <span
                className={`text-2xl font-MonsterratBold transition-all duration-700 font-bold ${
                  isSelected
                    ? "text-purple-1 transform scale-110"
                    : "text-gray-300"
                }`}
              >
                {format(date, "d")}
              </span>
            </button>
          );
        })}
      </div>
      ;
    </div>
  );
};

export const DataGraph = ({ timeSlots, filteredEvents }) => {
  return (
    <div>
      <div className="relative flex gap-4 mx-4 overflow-hidden font-Monsterrat font-bold text-gray-400">
        {/* Time slots */}
        <div className="space-y-[34px] relative">
          {timeSlots.map((time) => (
            <div
              key={time}
              className="flex items-center text-sm text-muted-foreground gap-3"
            >
              {time}{" "}
              <div className=" border-t-2 border-gray-300 w-[366px]"></div>
            </div>
          ))}
        </div>

        {filteredEvents.map((event) => {
          // Parse the start and end times
          const startHour = parseInt(event.startTime.split(":")[0]);
          const startMinute = parseInt(event.startTime.split(":")[1] || "0");
          const endHour = parseInt(event.endTime.split(":")[0]);
          const endMinute = parseInt(event.endTime.split(":")[1] || "0");
          const topPosition = startHour * 60 + startMinute;
          const duration =
            endHour * 60 + endMinute - (startHour * 60 + startMinute);
          const randomMarginLeft = Math.floor(Math.random() * 100) + 60; // Random value between 50px and 150px
          const purpleColors = ["bg-purple-1", "bg-purple-3", "bg-purple-4"];
          const randomPurple =
            purpleColors[Math.floor(Math.random() * purpleColors.length)];
          return (
            <div
              key={event.id}
              className={`absolute left-0 right-4 p-2 rounded-lg ${randomPurple} w-36 text-white transition-all duration-200 hover:bg-indigo-500`}
              style={{
                top: `${topPosition}px`,
                height: `${duration}px`, // Dynamically set the height
                marginLeft: `${randomMarginLeft}px`, // Apply the random margin-left
              }}
            >
              <div className="text-sm font-medium">{event.title}</div>
              <div className="text-xs">
                {event.startTime} - {event.endTime}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
