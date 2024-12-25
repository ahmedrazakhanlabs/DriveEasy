import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "../components/Button";
import { SphereCircle } from "../assets";

const CalendarComponent = ({ currentDate, setCurrentDate }) => {
  const changeMonth = (offset) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() + offset,
        1
      );
      return newDate;
    });
  };

  const handlePrevMonth = () => changeMonth(-1);
  const handleNextMonth = () => changeMonth(1);

  return (
    <div className="font-Monsterrat overflow-hidden">
      {/* Header */}
      <div className="w-full bg-gradient-to-b overflow-hidden relative bg-purple-1 rounded-lg rounded-br-[90px]">
        <img
          src={SphereCircle}
          alt="Infinity Circle"
          className="absolute inset-0 object-contain scale-[1.2] h-[300px] ml-[-40px] mt-[-106px] z-0 "
        />
        <div className="flex flex-col items-start p-8 pt-10">
          <div className="flex items-center gap-4">
            <span className="text-6xl font-thin tracking-tight text-white">
              {currentDate.getDate()}
            </span>
            <div className="flex flex-col text-white/90">
              <span className="text-xl font-light">
                {currentDate.toLocaleString("default", { month: "long" })}
              </span>
              <span className="text-xl font-light">
                {currentDate.getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <Calendar
        value={currentDate}
        onChange={setCurrentDate}
        activeStartDate={currentDate}
      />

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 my-4">
        <Button
          label="Previous"
          onClick={handlePrevMonth}
          className={"justify-center rounded-lg"}
        />
        <Button
          label="Next"
          onClick={handleNextMonth}
          className={"justify-center rounded-lg"}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
