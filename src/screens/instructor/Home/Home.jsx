import React, { useState, useEffect, useMemo } from "react";
import { format, startOfWeek, addDays, isSameDay } from "date-fns"; // Import isSameDay to compare dates
import ProfileHeader from "../../../components/ProfileHeader";
import {
  BarIcon,
  CalenderIcon2,
  LeftIcon,
  QuestionMark,
  RightIcon,
} from "../../../utils/Icons";
import Button from "../../../components/Button";
import Modal from "../../../components/modals/Modal";
import CalendarComponent from "../../../components/Calender";
import { WeekDays, DataGraph } from "./components/Index";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const currentWeek = useMemo(() => {
    const weekStart = startOfWeek(selectedDate, { weekStartsOn: 0 });
    return Array.from({ length: 7 }, (_, index) => addDays(weekStart, index));
  }, [selectedDate]);

  const handlePrevDay = () => {
    setSelectedDate((prevDate) => addDays(prevDate, -1));
  };

  const handleNextDay = () => {
    setSelectedDate((prevDate) => addDays(prevDate, 1));
  };

  const events = [
    {
      id: "1",
      title: "Driving Test",
      startTime: "01:00",
      endTime: "04:00",
      eventDate: new Date(2024, 11, 25), // Example: event date
    },
    {
      id: "4",
      title: "Driving Test",
      startTime: "04:30",
      endTime: "07:00",
      eventDate: new Date(2024, 11, 25),
    },
    {
      id: "6",
      title: "Driving Test",
      startTime: "06:00",
      endTime: "07:00",
      eventDate: new Date(2024, 11, 26), // Example: event date
    },
    {
      id: "8",
      title: "Driving Test",
      startTime: "08:00",
      endTime: "09:00",
      eventDate: new Date(2024, 11, 25),
    },
    {
      id: "10",
      title: "Morning Walk",
      startTime: "10:00",
      endTime: "11:00",
      eventDate: new Date(2024, 11, 25),
    },
    // New events for December 22-27, 2024
    {
      id: "11",
      title: "Yoga Session",
      startTime: "07:00",
      endTime: "08:00",
      eventDate: new Date(2024, 11, 22),
    },
    {
      id: "12",
      title: "Morning Run",
      startTime: "06:00",
      endTime: "07:00",
      eventDate: new Date(2024, 11, 23),
    },
    {
      id: "13",
      title: "Team Meeting",
      startTime: "09:00",
      endTime: "10:00",
      eventDate: new Date(2024, 11, 24),
    },
    {
      id: "14",
      title: "Driving Test",
      startTime: "02:00",
      endTime: "03:00",
      eventDate: new Date(2024, 11, 26),
    },
    {
      id: "15",
      title: "Lunch with Friends",
      startTime: "12:00",
      endTime: "13:00",
      eventDate: new Date(2024, 11, 27),
    },
  ];

  const timeSlots = Array.from(
    { length: 13 },
    (_, i) => `${i.toString().padStart(2, "0")}:00`
  );

  const filteredEvents = events.filter(
    (event) => isSameDay(event.eventDate, selectedDate) // Filter events based on selected date
  );

  return (
    <div>
      <ProfileHeader
        text="Good Morning!"
        name="Ahmed Raza Khan"
        pfp={"https://zyacom.com/backend/public/uploads/uesrs/1735165715.jpg"}
      />

      <div className="flex justify-between items-center px-4 py-3 z-20">
        <div className="flex items-center gap-1 pe-3">
          <Button
            label={`${format(currentWeek[0], "dd MMM")} - ${format(
              currentWeek[6],
              "dd MMM"
            )}`}
            className="justify-center rounded-full font-bold text-[2.8vw] sm:text-[12px] text-center"
          />
          <span className="cursor-pointer" onClick={handlePrevDay}>
            <LeftIcon />
          </span>
          <span className="cursor-pointer" onClick={handleNextDay}>
            <RightIcon />
          </span>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          content={
            <>
              <CalendarComponent
                currentDate={selectedDate}
                setCurrentDate={setSelectedDate}
              />
            </>
          }
        />
        <div className="flex items-center gap-4 ml-2">
          <label onClick={openModal} className="cursor-pointer">
            <CalenderIcon2 />
          </label>
          <QuestionMark />
          <BarIcon />
        </div>
      </div>

      <WeekDays
        currentWeek={currentWeek}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <div>
        <DataGraph timeSlots={timeSlots} filteredEvents={filteredEvents} />
      </div>
    </div>
  );
};

export default Home;
