import React, { useState, useEffect } from "react";
import Button from "./Button";
import Pagination from "./Pagination";
import { Calendar, ChevronsUpIcon, Clock } from "lucide-react";
import ErrorMessage from "./ErrorMessage";
import { formatTimeRange } from "../helpers";
import { NoDataFound } from "../utils/Icons";
// import Image from "../../components/Image";

const Card = ({ onSelect, data, formData, setFormData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsVisible(false);
  };

  const handleScroll = () => {
    const scrollableElement = document.getElementById("availability-list");
    if (scrollableElement.scrollHeight > scrollableElement.clientHeight) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, [currentPage]);

  const handleBookSlot = (start, end) => {
    setFormData((prev) => ({
      ...prev,
      bookingStart: start,
      bookingEnd: end,
    }));
  };

  const [error, setError] = useState(null);
  const handleBook = (item) => {
    // e.preventDefault();
    setError(null);
    if (!formData.bookingStart) {
      setError("Please select a time slot.");
    } else {
      onSelect(item);
    }
  };
  return (
    <div>
      {currentData &&
        currentData.length > 0 &&
        currentData.map((item) => (
          <div
            key={item.id}
            className={`shadow-lg rounded-lg my-5 cursor-pointer hover:scale-95 transition-all duration-700 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className="relative">
                {/* <img src={item.image} alt={`${item.name}'s thumbnail`} /> */}
                <img src={item.image} alt={`${item.name}'s thumbnail`} />
                <span
                  className={`absolute font-Monsterrat top-2 left-2 text-white text-xs px-2 py-0.5 rounded ${
                    item.driving_level === "Beginner"
                      ? "bg-red-500"
                      : item.driving_level === "Advanced"
                      ? "bg-green-500"
                      : "bg-blue-500"
                  }`}
                >
                  {item.driving_level}
                </span>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-Monsterrat font-bold">
                    {item.name}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="font-Monsterrat font-bold text-[14px]">
                      Date:
                    </p>
                    <span
                      className={`font-Monsterrat text-white text-xs px-2 py-0.5 rounded bg-gray-500`}
                    >
                      {item.availability[0].start.split("T")[0]}
                    </span>
                  </div>

                  <ul
                    id="availability-list"
                    className="mt-2 h-[120px] overflow-y-scroll"
                    onScroll={handleScroll}
                  >
                    {item.availability.map((dayAvailability, index) => (
                      <li
                        onClick={() =>
                          handleBookSlot(
                            dayAvailability.start,
                            dayAvailability.end
                          )
                        }
                        key={`${dayAvailability.start}-${dayAvailability.end}-${index}`}
                        className={`flex items-center mx-3 space-x-4 p-4 my-2 ${
                          error
                            ? `border border-danger-1 ${formData.bookingStart}`
                            : "bg-white"
                        }  rounded-lg shadow-xl`}
                      >
                        <div className="flex-shrink-0">
                          <Calendar className="h-6 w-6 text-blue-500" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center mt-1 text-gray-600">
                            <Clock className="h-3 w-3 mr-2" />
                            <p className="font-Monsterrat text-[12px]">
                              {formatTimeRange(
                                dayAvailability.start,
                                dayAvailability.end
                              )}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {error && (
                    <ErrorMessage
                      className={"text-center my-3"}
                      ErrorMessage={error}
                    />
                  )}

                  {isVisible && (
                    <div className="flex justify-center text-gray-600 mt-2 animate-upDown">
                      <ChevronsUpIcon className="h-6 w-6" />
                    </div>
                  )}
                </div>

                <div className="text-blue-500 font-Monsterrat font-bold">
                  £{item.perHour}
                </div>
                {/* <form> */}
                <Button
                  label={"Book Now"}
                  className={"justify-center rounded-lg"}
                  type="button"
                  onClick={() => handleBook(item)}
                />
                {/* </form> */}
              </div>
            </div>
          </div>
        ))}
      {currentData && currentData.length === 0 && (
        <div className="flex flex-col items-center my-10">
          <NoDataFound />
        </div>
      )}
      {currentData && currentData.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Card;
