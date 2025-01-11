import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "../components/Button";
import { SphereCircle } from "../assets";

const CalendarComponent = ({ currentDate, setCurrentDate }) => {
  // Convert ISO string to Date object
  const isoToDate = (isoString) => new Date(isoString);

  // Convert Date object to ISO string
  const dateToIso = (date) => date.toISOString();

  const changeMonth = (offset) => {
    setCurrentDate((prevDate) => {
      const prevDateObj = isoToDate(prevDate); // Convert ISO string to Date object
      const newDate = new Date(
        prevDateObj.getFullYear(),
        prevDateObj.getMonth() + offset,
        1
      );
      return dateToIso(newDate); // Return ISO string after updating
    });
  };

  const handlePrevMonth = () => changeMonth(-1);
  const handleNextMonth = () => changeMonth(1);

  const currentDateObj = isoToDate(currentDate); // Convert the ISO string to Date object

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
              {currentDateObj.getDate()}
            </span>
            <div className="flex flex-col text-white/90">
              <span className="text-xl font-light">
                {currentDateObj.toLocaleString("default", { month: "long" })}
              </span>
              <span className="text-xl font-light">
                {currentDateObj.getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <Calendar
        value={currentDateObj}
        onChange={(newDate) => setCurrentDate(dateToIso(newDate))} // Convert Date to ISO string
        activeStartDate={currentDateObj}
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
