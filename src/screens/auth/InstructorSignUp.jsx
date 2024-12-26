import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Women } from "../../assets";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";
import InputTwo from "../../components/InputTwo";
import { validationSchema } from "../../utils/ValidationSchema"; // Assuming this is where your Yup schema is defined
import Button from "../../components/Button";
import { Routes } from "../../utils/Routes";

const InstructorSignUp = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  // Formik logic using useFormik hook
  const formik = useFormik({
    initialValues: {
      drivingSchoolName: "",
      fullName: "",
      Email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      drivingSchoolName: validationSchema.fields.drivingSchoolName,
      fullName: validationSchema.fields.fullName,
      phoneNumber: validationSchema.fields.phoneNumber,
      password: validationSchema.fields.password,
      confirmPassword: validationSchema.fields.confirmPassword,
      Email: validationSchema.fields.emailAddress,
    }),
    validateOnMount: true, // Validation on mount to display errors initially
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      // Handle form submission logic (e.g., API call)
      // navigate("/some-path"); // Redirect after form submission
    },
  });

  // Effect to handle form submission when component mounts
  useEffect(() => {
    setIsVisible(true);
    formik.handleSubmit();
  }, []);

  // Effect to check form errors and update the isNext status
  useEffect(() => {
    const isFormInvalid = Object.keys(formik.errors).length > 0;
    console.log("Form invalid:", !isFormInvalid);
    console.log("formik.errors:", formik.errors);
    // If there are errors, set isNext to false, otherwise true
  }, [formik.errors]);

  return (
    <div className="relative">
      <div className="fixed top-0 bg-white z-20 md:min-w-[436px] w-[100%] md:w-[50%] lg:w-[30%]">
        <Header
          heading={"Signup Now!"}
          subHeading={"Please signup to continue"}
          image={Women}
        />

        <div
          className={`transition-all duration-700 overflow-auto transform ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <form className="mx-4 my-3" onSubmit={formik.handleSubmit}>
            <InputTwo
              label={"Driving School Name"}
              type={"text"}
              placeholder={"Enter Driving School Name"}
              name={"drivingSchoolName"}
              value={formik.values.drivingSchoolName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.drivingSchoolName &&
                formik.touched.drivingSchoolName
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.errors.drivingSchoolName &&
              formik.touched.drivingSchoolName && (
                <div className="font-Monsterrat font-bold text-[12px] mb-1 text-[#dc1c1c] opacity-60">
                  {formik.errors.drivingSchoolName}
                </div>
              )}

            <InputTwo
              label={"Full Name"}
              type={"text"}
              placeholder={"Enter Full Name"}
              name={"fullName"}
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.fullName && formik.touched.fullName
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.errors.fullName && formik.touched.fullName && (
              <div className="font-Monsterrat font-bold text-[12px] mb-1 text-[#dc1c1c] opacity-60">
                {formik.errors.fullName}
              </div>
            )}

            <InputTwo
              label={"Email Address"}
              type={"email"}
              placeholder={"Enter Email Address"}
              name={"Email"}
              value={formik.values.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.Email && formik.touched.Email
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.errors.Email && formik.touched.Email && (
              <div className="font-Monsterrat font-bold text-[12px] mb-1 text-[#dc1c1c] opacity-60">
                {formik.errors.Email}
              </div>
            )}

            <InputTwo
              label={"Phone Number"}
              type={"number"}
              placeholder={"Enter Phone Number"}
              name={"phoneNumber"}
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.phoneNumber && formik.touched.phoneNumber
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <div className="font-Monsterrat font-bold text-[12px] mb-1 text-[#dc1c1c] opacity-60">
                {formik.errors.phoneNumber}
              </div>
            )}

            <InputTwo
              label={"Password"}
              type={"password"}
              placeholder={"Enter Password"}
              name={"password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.password && formik.touched.password
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.errors.password && formik.touched.password && (
              <div className="font-Monsterrat font-bold text-[12px] mb-1 text-[#dc1c1c] opacity-60">
                {formik.errors.password}
              </div>
            )}

            <InputTwo
              label={"Confirm Password"}
              type={"password"}
              placeholder={"Enter Confirm Password"}
              name={"confirmPassword"}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <div className="font-Monsterrat font-bold text-[12px] mb-1 text-[#dc1c1c] opacity-60">
                  {formik.errors.confirmPassword}
                </div>
              )}
            <div className="mx-10 my-3">
              <Button
                type="submit"
                disabled={formik.errors.length > 0}
                label="Sign Up"
                onClick={() => navigate(Routes.OtpVerification)}
                className={"justify-center rounded-2xl"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InstructorSignUp;
