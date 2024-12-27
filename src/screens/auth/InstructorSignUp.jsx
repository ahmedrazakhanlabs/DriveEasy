import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import InputTwo from "../../components/InputTwo";
import Button from "../../components/Button";
import { MenWithCar, Women } from "../../assets";
import Header from "./components/Header";
import { Routes } from "../../utils/Routes";
import { validationSchema } from "../../utils/ValidationSchema";
import * as Yup from "yup";

import { instructorSignUpFields } from "../../utils/Data";
import Confetti from "react-confetti"; // Import react-confetti
import { postRequest } from "../../helpers/Functions";
import Loader from "../../components/Loader";

const InstructorSignUp = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [hasConfetti, setHasConfetti] = useState(false);
  const [loadingText, setLoadingText] = useState("It will take a moment");
  const loadingTexts = [
    "It will take a moment",
    "Loading",
    "Please hold on, your request is being processed",
  ];
  const [loading, setLoading] = useState(false);

  const Signup = async () => {
    setLoading(true);
    try {
      const response = await postRequest("pupil/register", data);
      console.log("Registration Successful:", response);
      setLoading(false);
    } catch (error) {
      if (error.response?.data) {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const formik = useFormik({
    initialValues: {
      drivingSchoolName: "", // Default empty values for form fields
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      drivingSchoolName: validationSchema.fields.drivingSchoolName, // Use only the postalCode validation
      fullName: validationSchema.fields.fullName, // Use only the postalCode validation
      email: validationSchema.fields.emailAddress, // Use only the postalCode validation
      phoneNumber: validationSchema.fields.phoneNumber, // Use only the postalCode validation
      password: validationSchema.fields.password, // Use only the postalCode validation
      confirmPassword: validationSchema.fields.confirmPassword, // Use only the postalCode validation
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      Signup();
      setHasConfetti(true);
      // setTimeout(() => setHasConfetti(false), 8000);

      // Change loading text every 2 seconds
      const intervalId = setInterval(() => {
        setLoadingText((prevText) => {
          const currentIndex = loadingTexts.indexOf(prevText);
          const nextIndex = (currentIndex + 1) % loadingTexts.length;
          return loadingTexts[nextIndex];
        });
      }, 2000);

      // Clear interval when loading is done
      return () => clearInterval(intervalId);
    },
  });

  useEffect(() => {
    setIsVisible(true);
    formik.handleSubmit(); // Submit form on mount to validate immediately
  }, []);
  const encodedValue = btoa("instructor"); // Base64 encode the value

  return (
    <div className=" relative">
      <div className="fixed top-0 bg-white z-20 md:min-w-[436px] w-[100%] md:w-[50%] lg:w-[30%]">
        <Header
          heading="Signup Now!"
          subHeading="Please signup to continue"
          image={Women}
        />
      </div>
      <div className="">
        {!loading && !hasConfetti && (
          <>
            <div
              className={`transition-all mt-[173px]  pb-12 duration-700 mb-28 transform ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <form className="mx-4 my-3" onSubmit={formik.handleSubmit}>
                {instructorSignUpFields.map(
                  ({ label, type, name, placeholder }) => (
                    <div key={name}>
                      <InputTwo
                        label={label}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        value={formik.values[name]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`my-1`}
                      />
                      {formik.errors[name] && formik.touched[name] && (
                        <div className="font-Monsterrat font-bold text-[12px] mb-1 text-[#dc1c1c] opacity-60">
                          {formik.errors[name]}
                        </div>
                      )}
                    </div>
                  )
                )}

                <div className="mx-10 my-3">
                  <Button
                    type="submit"
                    disabled={!formik.isValid}
                    label="Sign Up"
                    className="justify-center rounded-2xl"
                  />
                </div>
              </form>
            </div>
          </>
        )}

        {!loading && hasConfetti && (
          <div className="absolute z-50 mt-[-270px]">
            <Confetti />
          </div>
        )}
        {!loading && hasConfetti && (
          <>
            <img src={MenWithCar} alt="" className="mt-[200px]" />
            <h2 className="font-MonsterratBold font-bold text-center text-xl">
              Congratulations!
            </h2>
            <p className="font-Monsterrat font-bold text-center text-[15px]">
              Your Account has been created.
            </p>
            <div className="mx-20 my-5">
              <Button
                label="Next"
                className={"justify-center rounded-2xl"}
                onClick={() => navigate(Routes.OtpVerification(encodedValue))}
              />
            </div>
          </>
        )}
        {loading && (
          <div className="flex flex-col items-center justify-center py-[30px]">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Loader className={``} />

            <p className="font-Monsterrat text-[13px] my-4 font-extrabold">
              {loadingText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorSignUp;
