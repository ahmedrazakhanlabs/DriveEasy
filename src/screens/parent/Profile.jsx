import React, { useEffect, useState } from "react";
import Accordition from "../../components/Accordition";
import Menubar from "../../components/Menubar";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { Routes } from "../../utils/Routes";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/modals/Modal";
import Button from "../../components/Button";
import { logout } from "../../helpers";
import { accordionData } from "../../utils/Data";

const Profile = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div
      className={`transition-all px-5 relative duration-700 h-screen transform ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
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
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h1 className="text-center font-MonsterratBold my-7 text-[18px] font-semibold">
          Profile
        </h1>
      </div>

      <Accordition items={accordionData(navigate, openModal)} isOpen={false} />
    </div>
  );
};

export default Profile;
