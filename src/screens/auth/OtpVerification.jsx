import React, { useState, useRef } from "react";
import Button from "../../components/Button";
import { InstructorIcon, ProfileIcon } from "../../utils/Icons";
import Otp from "./components/Otp";
import { Routes } from "../../utils/Routes";
import {Link, useNavigate} from "react-router-dom"
 
const OtpVerification = () => {
  const [userType, setUserType] = useState("pupil");
  const navigate = useNavigate();

  return (
    <div className="py-10 px-8 transition duration-200 ease-in-out">
      <div className="w-full">
        <div className="my-4 text-center">
          <h6 className="text-2xl font-[700] font-MonsterratBold text-purple-1">
            LOGO HERE
          </h6>
          <p className="text-black-1 text-[9px] font-bold font-Monsterrat">
            Start your free trial
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2 my-16">
            <p className="text-sm text-center text-black-1 mb-2 font-Monsterrat font-bold">
              Enter your pin here
            </p>
            <Otp />
          </div>

          <div className="space-y-2 mx-1">
            <Button
              onClick={() => setUserType("pupil")}
              isActive={userType === "pupil"}
              label="Pupil or Parent"
              className="rounded-lg"
              prefixIcon={<ProfileIcon />}
            />
            <Button
              onClick={() => setUserType("instructor")}
              isActive={userType === "instructor"}
              label="Instructor"
              className="rounded-lg"
              prefixIcon={<InstructorIcon />}
            />
          </div>

          <Button
            label="Continue"
            className="rounded-3xl justify-center"
            radio={true}
            textCenter={true}
            onClick={() => navigate(Routes.login)}
          />

          <Link
            to={Routes.login}
            className="text-xs font-bold font-Monsterrat text-black-1 opacity-35 hover:text-gray-700 hover:underline text-center"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
