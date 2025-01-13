import {
  ChevronLeft,
  PenSquare,
  Wallet,
  Trophy,
  Shield,
  ArrowLeft,
} from "lucide-react";
import Button from "../../components/Button";
import { DefualtImage } from "../../assets";
import { useEffect, useState } from "react";
import { GetAuthData, logout } from "../../helpers";
import Modal from "../../components/modals/Modal";
import { Routes } from "../../utils/Routes";
import { useNavigate } from "react-router-dom";
import ViewProfilePicture from "../../components/ViewProfilePicture";
const EditProfile = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [authData, setAuthData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  useEffect(() => {
    const userData = GetAuthData();
    console.log(userData);
    setAuthData(userData);
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div
      className={`transition-all relative duration-700 h-screen transform ${
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
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b">
          <button className="p-2">
            <ArrowLeft
              className="h-5 w-5"
              onClick={() => navigate(Routes.parentProfile)}
            />
          </button>
          <h1 className="font-Monsterrat text-md font-bold">My Profile</h1>
          <button className="p-2">
            {/* <MoreVertical className="h-5 w-5" /> */}
          </button>
        </header>

        {/* Profile Section */}
        <div className="p-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-16 w-16 rounded-full flex justify-center items-center bg-gray-100 overflow-hidden">
              <ViewProfilePicture
                currentImage={
                  authData.profilePicture !== "https://example.com/profile.jpg"
                    ? authData.profilePicture
                    : DefualtImage
                }
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="capitalize font-Monsterrat text-md font-bold">
                  {authData.firstName} {authData.lastName}
                </h2>
                <button onClick={() => navigate(Routes.parentEditProfile)}>
                  <PenSquare className="h-4 w-4 text-gray-400" />
                </button>
              </div>
              <p className="text-gray-500 font-Monsterrat text-xs font-bold">
                Senior Driver
              </p>
            </div>
          </div>

          {/* Status Section */}
          <div className="mb-8">
            <h3 className="text-xs text-gray-500 mb-3 font-Monsterrat font-bold">
              My Status
            </h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-md border bg-zinc-900 text-white hover:bg-zinc-800 transition-colors inline-flex items-center">
                <span className="w-2 h-2 bg-yellow-400 font-Monsterrat text-xs font-bold rounded-full mr-2" />
                Away
              </button>
              <button className="px-4 py-2 rounded-md border bg-green-50 text-green-700 hover:bg-green-100 border-green-100 transition-colors inline-flex items-center">
                <span className="w-2 h-2 bg-green-500 font-Monsterrat text-xs font-bold rounded-full mr-2" />
                At Work
              </button>
              <button className="px-4 py-2 rounded-md border bg-orange-50 text-orange-700 hover:bg-orange-100 border-orange-100 transition-colors inline-flex items-center">
                <span className="w-2 h-2 bg-orange-500 font-Monsterrat text-xs font-bold rounded-full mr-2" />
                Gaming
              </button>
            </div>
          </div>

          {/* Dashboard Section */}
          <div className="space-y-6">
            <h3 className=" text-gray-500 font-Monsterrat text-xs font-bold">
              Dashboard
            </h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Wallet className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-Monsterrat text-sm font-bold">
                    Payments
                  </span>
                </div>
                <div className="px-2 py-1 bg-blue-600 text-white font-Monsterrat text-[10px] font-bold rounded-md">
                  2 New
                </div>
              </button>

              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-yellow-600" />
                  </div>
                  <span className="font-Monsterrat text-sm font-bold">
                    Achievements
                  </span>
                </div>
                <ChevronLeft className="h-5 w-5 text-gray-400 rotate-180" />
              </button>

              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-gray-600" />
                  </div>
                  <span className="font-Monsterrat text-sm font-bold">
                    Privacy
                  </span>
                </div>
                <div className="px-2 py-1 bg-orange-500 text-white font-Monsterrat text-[10px] font-bold rounded-md">
                  Actions Needed
                </div>
              </button>
            </div>
          </div>

          {/* Account Section */}
          <div className="mt-8 space-y-4">
            <h3 className="font-Monsterrat text-xs font-bold text-gray-500">
              My Account
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => openModal()}
                className="font-Monsterrat text-xs font-bold w-full text-left text-orange-500 hover:underline"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
