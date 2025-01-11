import React, { useEffect, useState } from "react";
import Stepper from "../../../components/Stepper";
import Button from "../../../components/Button";
import { Women } from "../../../assets";
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
import Modal from "../../../components/modals/Modal";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../../../helpers";

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
    instructorId: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    billingAddress: "",
    pickupAddress: "",
    bookingDate: "",
    bookingStart: "2025-01-07T14:00:00.000+00:00",
    bookingEnd: "2025-01-07T18:00:00.000+00:00",
  });

  console.log("formData", formData);
  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     const message =
  //       "Are you sure you want to leave? You may lose unsaved changes.";
  //     event.returnValue = message; // Standard for most browsers
  //     return message; // For some browsers like Chrome
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //   localStorage.removeItem("selectedInstructor");
  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  const goBack = () => {
    if (section > 1) setSection(section - 1);
  };

  const navigate = useNavigate();
  const encodedValue = btoa("pupil"); // Base64 encode the value

  const goNext = () => {
    if (section === 7) {
      navigate(Routes.OtpVerification(encodedValue));
      return;
    }
    if (section < 7) setSection(section + 1);
  };

  const CurrentSection = sections[section - 1];
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const [content, setContent] = useState(<></>);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="relative">
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={<>{content}</>}
      />
      <div className="fixed top-0 bg-white z-20 md:min-w-[436px] w-[100%] md:w-[50%] lg:w-[30%]">
        <Header
          heading={"Signup Now!"}
          subHeading={"Please signup to continue"}
          image={Women}
        />

        <div className="flex items-center p-5 justify-center">
          <Stepper currentStep={section} totalSteps={7} />
        </div>
      </div>
      <div className="transition-all duration-500 px-5 mt-[250px] ">
        <Elements stripe={stripePromise}>
          <CurrentSection
            setFormData={setFormData}
            openModal={openModal}
            closeModal={closeModal}
            formData={formData}
            setIsNext={setIsNext}
            setContent={setContent}
            setSection={setSection}
            errorText={errorText}
            setErrorText={setErrorText}
            loading={loading}
            setLoading={setLoading}
          />
        </Elements>
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
