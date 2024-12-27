import { useState } from "react";
import { ChevronLeft, User, LightbulbIcon } from "lucide-react";
import Button from "../../components/Button";
import Header from "./components/Header";
import { MenWithCar } from "../../assets";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../utils/Routes";
const UserVault = () => {
  const [roles, setRoles] = useState({ instructor: true, pupil: false });

  const handleRoleSelection = (role) => {
    setRoles((prev) => ({
      instructor: role === "instructor",
      pupil: role === "pupil",
    }));
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen ">
      {/* Header */}

      <Header
        heading={"Join us!"}
        subHeading={"Unlock possibilities today!"}
        image={MenWithCar}
        imageClass={
          "object-cotain w-[230px] me-[-32px] m-[-14px 0px] transform scale-[1.2]"
        }
      />
      <div className="mx-3">
        <div className="mt-6 space-y-4">
          <div>
            <h1 className="text-xl font-Monsterrat font-bold text-center">
              Select role
            </h1>
            <p className="text-gray-500 text-sm mt-1 font-Monsterrat font-bold text-center">
              Please select your role in the app.
            </p>
          </div>

          <div className="space-y-3 mt-6">
            <button
              className={`w-full p-4  rounded-xl border text-left transition-colors duration-700 ${
                roles.instructor
                  ? "bg-purple-1 text-white"
                  : "border border-gray-200 text-gray-600"
              }`}
              onClick={() => handleRoleSelection("instructor")}
            >
              <div className="flex flex-col items-center gap-3">
                <LightbulbIcon className="h-6 w-6" />
                <div className="">
                  <p className="font-Monsterrat font-bold">Join as Pupil</p>
                </div>
              </div>
            </button>

            <button
              className={`w-full p-4  rounded-xl border text-left transition-colors duration-700 ${
                roles.pupil
                  ? "bg-purple-1 text-white"
                  : "border border-gray-200"
              }`}
              onClick={() => handleRoleSelection("pupil")}
            >
              <div className="flex flex-col items-center gap-3">
                <User className="h-6 w-6" />
                <div className={`${roles.pupil ? "" : "text-gray-600"}`}>
                  <p className="font-Monsterrat font-bold">
                    Join as Instructor
                  </p>
                </div>
              </div>
            </button>
          </div>

          <div className="mx-24">
            <Button
              onClick={() =>
                navigate(
                  roles.instructor ? Routes.signUp : Routes.instructorSignUp
                )
              }
              className={`w-full rounded-xl py-4 mt-8  text-white justify-center`}
              disabled={!roles.instructor && !roles.pupil}
              label="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserVault;
