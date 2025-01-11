import React, { useState, useRef, useEffect } from "react";
import Button from "../../components/Button";
import { InstructorIcon, ProfileIcon } from "../../utils/Icons";
import Otp from "./components/Otp";
import { Routes } from "../../utils/Routes";
import { Link, useNavigate, useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import { useSelector, useDispatch } from "react-redux";
import { setPin } from "../../redux/slice";

const OtpVerification = () => {
  const { key } = useParams();
  const [userType, setUserType] = useState(
    key === "instructor" ? "instructor" : "pupil"
  );
  // const [pin, setPin] = useState(["", "", "", ""]);

  const pin = useSelector((state) => state.pin.pin);
  useEffect(() => {
    console.log("Current PIN:", pin);
  }, [pin]); // Logs whenever `pin` changes

  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Check if pin is complete
  const isPinComplete = pin.every((digit) => digit !== "");

  useEffect(() => {
    if (!isPinComplete) {
      setError("Please enter a valid PIN.");
    } else {
      setError("");
    }
  }, [pin, isPinComplete]);

  return (
    <div className="py-10 px-8 transition duration-200 ease-in-out">
      <div className="w-full">
        <div className="my-4 text-center">
          <h6 className="text-2xl font-[700] font-MonsterratExtraBold text-purple-1">
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
            <Otp pin={pin} setPin={setPin} />
            {error && (
              <ErrorMessage ErrorMessage={error} className={"text-center"} />
            )}
          </div>

          <div className="space-y-2 mx-1">
            <Button
              isActive={userType === "pupil"}
              label="Pupil or Parent"
              className="rounded-lg"
              prefixIcon={<ProfileIcon />}
            />
            <Button
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
            disabled={!isPinComplete}
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
