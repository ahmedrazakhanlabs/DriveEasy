import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import { FingerPrintIcon, UserIcon } from "../../utils/Icons";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "../../utils/Routes";
import Header from "./components/Header";
import { Women } from "../../assets";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postRequest } from "../../helpers/Functions";
import { validationSchema } from "../../utils/ValidationSchema";
import ErrorMessage from "../../components/ErrorMessage";
import { jwtDecode } from "jwt-decode";
import {
  getDecodedToken,
  getTokenFromLocalStorage,
  localStorageKeys,
  Roles,
  saveItemToLocalStorage,
  saveTokenToLocalStorage,
} from "../../helpers";
import { useSelector } from "react-redux";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const pin = useSelector((state) => state.pin.pin);
  console.log("pin", pin);
  useEffect(() => {
    console.log("Current PIN:", pin.join(""));
  }, [pin]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: validationSchema.fields.emailAddress,
      password: validationSchema.fields.password,
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await postRequest("/pupil/login", {
          email: values.email,
          password: values.password,
          otp: pin.join("") || "0000", // Example OTP
        });
        console.log("respologinnse1", response.data.pupil);
        console.log("respologinnse", response.data);

        if (response.data.token) {
          saveTokenToLocalStorage(response.data.token);
          saveItemToLocalStorage(
            localStorageKeys.userInfo,
            response.data.pupil
          );
          const decode = getDecodedToken();
          console.log("decode", decode);

          navigate(
            decode.userType === Roles.Pupil
              ? Routes.parentHome
              : Routes.InstructorHome
          );
        }
      } catch (error) {
        console.log("error", error.response.data.message);
        setErrors({
          credentials: error.response.data.message,
        });
      } finally {
        setSubmitting(false);
      }
    },
  });
  const encodedValue = btoa("pupil"); // Base64 encode the value

  return (
    <div>
      <Header
        heading={"Login Now!"}
        subHeading={"Please login to continue"}
        image={Women}
      />

      <form onSubmit={formik.handleSubmit} className="my-7 mx-5">
        <Input
          prefixIcon={<UserIcon />}
          className={"mb-4"}
          type="email"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
        />
        <Input
          prefixIcon={<FingerPrintIcon />}
          className={"my-4"}
          name="password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
        />
        <div className="flex justify-center">
          <ErrorMessage
            ErrorMessage={formik.errors.credentials}
            className={"text-center"}
          />
          {formik.errors.credentials == "The OTP is incorrect" && (
            <Link
              to={Routes.OtpVerification(encodedValue)}
              className="mx-1 text-[12px] text-muted-foreground  hover:text-purple-1 font-bold font-Monsterrat inline-flex items-center "
            >
              {" "}
              <ArrowRight className="h-3 w-3" />
              Otp Verification
            </Link>
          )}
        </div>

        <Button
          label="Login"
          className="rounded-3xl mt-3 justify-center font-bold"
          radio={true}
          textCenter={true}
          type="submit"
          disabled={formik.isSubmitting}
          loading={formik.isSubmitting ? true : false}
        />

        <div className="flex justify-between mt-4 mx-2">
          <Link
            to={Routes.userVault}
            className="text-xs font-bold font-Monsterrat text-black-1 opacity-35 hover:text-gray-700 hover:underline text-center"
          >
            Signup?
          </Link>
          <Link
            to={Routes.forgotPassword}
            className="text-xs font-bold font-Monsterrat text-black-1 opacity-35 hover:text-gray-700 hover:underline text-center"
          >
            Forgot password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
