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
  Roles,
  saveTokenToLocalStorage,
} from "../../helpers";
import { useSelector } from "react-redux";

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
          otp: pin.join("") || "496253", // Example OTP
        });
        console.log("respologinnse", response);

        if (response.data.token) {
          saveTokenToLocalStorage(response.data.token);
          const decode = getDecodedToken();
          console.log("decode", decode);

          navigate(
            decode.userType === Roles.Pupil
              ? Routes.parentHome
              : Routes.InstructorHome
          );
        }
      } catch (error) {
        setErrors({
          credentials: "Invalid credientials. Please try again.",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

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
        <ErrorMessage
          ErrorMessage={formik.errors.credentials}
          className={"text-center"}
        />

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
