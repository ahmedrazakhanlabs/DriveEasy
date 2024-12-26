import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { InstructorMenuTabs } from "../utils/Data";
import Modal from "./modals/Modal";
import {
  ExpenseIcon,
  GapIcon,
  IncomeIcon,
  LessonIcon,
  MapMarker,
  ProfileIcon,
} from "../utils/Icons";

const IMenubar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const AddData = [
    { label: "Pupil", Icon: ProfileIcon },
    { label: "Gap", Icon: GapIcon },
    { label: "Away", Icon: MapMarker },
    { label: "Income", Icon: IncomeIcon },
    { label: "Lesson", Icon: LessonIcon },
    { label: "Expense", Icon: ExpenseIcon },
  ];

  return (
    <div className="fixed bottom-3 left-0 right-0 flex mx-20 justify-center z-50">
      <div className="bg-white h-14 shadow-lg rounded-3xl flex items-center justify-center gap-6 md:gap-7 py-5 px-12 z-50">
        {InstructorMenuTabs.map(({ path, label, Icon }) => (
          <div key={path}>
            {label === "plus" ? (
              <div
                onClick={openModal}
                className="bg-white cursor-pointer p-1 rounded-full  mb-[35px] relative flex justify-center items-center"
              >
                <div className="bg-purple-1 p-2 rounded-full shadow-soft">
                  <Icon className="text-white h-6 w-6" />
                </div>
              </div>
            ) : (
              <div
                className={`cursor-pointer flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105`}
                onClick={() => navigate(path)}
              >
                {location.pathname === path ? (
                  <div className="text-center">
                    <span className="font-MonsterratBold hidden md:block md:text-[14px] transition-colors duration-300">
                      {label}
                    </span>
                    <div
                      className={`border-b-4 border-purple-1 w-10 mx-auto hidden md:block rounded-3xl transition-all duration-300`}
                    ></div>
                    <div className="md:hidden">
                      <Icon color="#6A2CF9" />
                    </div>
                  </div>
                ) : (
                  <Icon color={"#e0e0e0"} width={"24px"} height={"24px"} />
                )}
              </div>
            )}
          </div>
        ))}

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          content={
            <>
              <p className="font-Monsterrat font-bold text-center mb-5">
                Add New
              </p>
              <div className="grid grid-cols-3 gap-5">
                {AddData.map(({ label, Icon }) => (
                  <div key={label}>
                    <div className="bg-gray-100  cursor-pointer hover:bg-gray-200 transition-all duration-300 py-4 px-6 rounded-2xl flex flex-col justify-center items-center">
                      <Icon color={"#000000"} width={"34px"} height={"34px"} />
                      <p className="font-Monsterrat font-bold ">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

export default IMenubar;
