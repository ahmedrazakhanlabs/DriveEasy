import React, { useState } from "react";
import Accordition from "../../components/Accordition";
import Menubar from "../../components/Menubar";
import { ChevronLeft } from "lucide-react";
import { Routes } from "../../utils/Routes";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/modals/Modal";
import Button from "../../components/Button";
import { logout } from "../../helpers";

const Profile = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const accordionData = [
    {
      title: "Edit Profile",
      content:
        "Edit your personal information and update your account details.",
    },
    {
      title: "Day Availability",
      content: "Set your availability for scheduling driving lessons.",
    },
    {
      title: "Change Profile Photo",
      content: "Upload or change your profile picture.",
    },
    {
      title: "Invite Parents",
      content: "Send an invitation to parents to track your driving progress.",
    },
    {
      title: "Call Instructor",
      content: "Directly call your driving instructor for queries or updates.",
    },
    {
      title: "Send SMS Message",
      content: "Send a text message to your instructor or the driving school.",
    },
    {
      title: "Driving School Terms & Conditions",
      content: "Review the terms and conditions of the driving school.",
    },
    {
      title: "App Terms of Use",
      content: "Read the terms of use for the application.",
    },
    {
      title: "Log Out",
      onClick: () => openModal(),
    },
  ];

  return (
    <div className="px-5 relative">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={
          <>
            <p className="font-Monsterrat font-bold text-center mb-2 text-gray-800 text-[17px]">
              Are you sure want to logout?
            </p>
            <p className="font-Monsterrat font-bold text-center mb-5 text-[12px] ">
              If you choose to log out, please be aware that you will be
              required to log in again in order to access your account and
              continue using the application.
            </p>

            <Button
              label={"Log Out"}
              onClick={() => logout()}
              className={"justify-center rounded-md"}
            />
          </>
        }
      />
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => navigate(Routes.parentHome)}
          className="p-2 absolute left-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h1 className="text-center font-MonsterratBold my-7 text-[18px] font-semibold">
          Profile
        </h1>
      </div>

      <Accordition items={accordionData} />
    </div>
  );
};

export default Profile;
