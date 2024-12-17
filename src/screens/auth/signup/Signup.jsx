import React, { useState } from "react";
import Stepper from "../../../components/Stepper";
import Button from "../../../components/Button";
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
} from "./components";
import Header from "../components/Header";
import { Routes } from "../../../utils/Routes";

import { useNavigate } from "react-router-dom";

const sections = [
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
];

const Signup = () => {
  const [section, setSection] = useState(1);
  const [isNext, setIsNext] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    postalCode: "",
    selectedLesson: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    selectedType: "",
    selectedPackage: "",
    instructor: "",
    password: "",
    confirmPassword: "",
  });

  console.log("formData", formData);

  const goBack = () => {
    if (section > 1) setSection(section - 1);
  };

  const navigate = useNavigate();
  const goNext = () => {
    if (section === 7) {
      navigate(Routes.OtpVerification);
      return;
    }
    if (section < 7) setSection(section + 1);
  };

  const CurrentSection = sections[section - 1];

  return (
    <div className="relative">
      <div className="fixed top-0 bg-white z-20 md:min-w-[436px] w-[100%] md:w-[50%] lg:w-[30%]">
        <Header
          heading={"Signup Now!"}
          subHeading={"Please signup to continue"}
        />

        <div className="flex items-center p-5 justify-center">
          <Stepper currentStep={section} totalSteps={7} />
        </div>
      </div>
      <div className="transition-all duration-500 px-5 mt-[250px] ">
        <CurrentSection
          setFormData={setFormData}
          formData={formData}
          setIsNext={setIsNext}
          setSection={setSection}
          errorText={errorText}
          setErrorText={setErrorText}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
      <div className="flex justify-center items-center gap-4 mt-5 pb-10">
        {section !== 7 && section !== 1 && (
          <Button
            label="Back"
            className="rounded-3xl justify-center font-bold min-w-[100px] max-w-[150px] sm:w-[160px]"
            radio={true}
            textCenter={true}
            disabled={section === 1}
            onClick={goBack}
          />
        )}
        {!loading && (
          <Button
            label="Next"
            className="rounded-3xl justify-center font-bold min-w-[100px] max-w-[150px] sm:w-[160px]"
            radio={true}
            textCenter={true}
            // disabled={section === 7}
            disabled={!isNext}
            onClick={goNext}
          />
        )}
      </div>
    </div>
  );
};

export default Signup;
