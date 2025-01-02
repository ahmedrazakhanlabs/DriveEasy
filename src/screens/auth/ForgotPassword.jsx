import React, { useState } from "react";
import { CornerRightDown, Fingerprint } from "lucide-react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { Routes } from "../../utils/Routes";
import { CheckIcon, UserIcon } from "../../utils/Icons";
import Header from "./components/Header";
import { Women } from "../../assets";
import { useFormik } from "formik";
import * as Yup from "yup";
import { validationSchema } from "../../utils/ValidationSchema";
import { postRequest } from "../../helpers/Functions";

const ForgotPassword = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: validationSchema.fields.emailAddress,
    }),

    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await postRequest("/pupil/forgot-password", {
          email: values.email,
        });
        console.log("Registration Successful:", response);
        setIsSuccess(true); // Show success screen
        return true;
      } catch (error) {
        setErrors({
          email: "Invalid email. Please try again.",
        });
        return false;
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <Header
        heading={isSuccess ? "Congrats!" : "Oops!"}
        subHeading={"Please read the instructions."}
        image={Women}
      />

      {isSuccess ? (
        <div className="flex flex-col items-center mt-20 p-4">
          <div className="w-full max-w-[400px] space-y-6">
            <div className="flex flex-col items-center space-y-6">
              <div className="rounded-full bg-purple-2  p-7">
                <CheckIcon className="h-6 w-6 text-purple-1 " />
              </div>
              <div className="space-y-2 text-center">
                <h1 className="text-lg font-Monsterrat font-semibold tracking-tight">
                  Success!
                </h1>
                <p className="text-[12px] text-gray-500 font-Monsterrat font-bold text-muted-foreground">
                  Check your email for reset instructions.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link
                to={Routes.login}
                className="text-[12px] text-muted-foreground  hover:text-purple-1 font-bold font-Monsterrat inline-flex items-center gap-2"
              >
                ← Back to log in
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex mt-4 items-center justify-center p-4">
          <div className="w-full max-w-[400px] space-y-6">
            <div className="flex flex-col items-center space-y-6">
              <div className="rounded-full bg-gray-100 p-4">
                <Fingerprint className="h-6 w-6 text-gray-600" />
              </div>
              <div className="space-y-2 text-center">
                <h1 className="text-lg font-Monsterrat font-semibold tracking-tight">
                  Forgot password?
                </h1>
                <p className="text-[12px] text-gray-500 font-Monsterrat font-bold text-muted-foreground">
                  No worries, we&apos;ll send you reset instructions.
                </p>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  id="email"
                  name="email"
                  prefixIcon={<UserIcon />}
                  placeholder="Enter your email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && formik.errors.email}
                />
              </div>
              <div className="mx-20">
                <Button
                  type="submit"
                  className="w-full rounded-lg justify-center font-bold text-[12px]"
                  label={"Reset password"}
                  disabled={formik.isSubmitting}
                  loading={formik.isSubmitting ? true : false}
                />
              </div>
            </form>
            <div className="text-center">
              <Link
                to={Routes.login}
                className="text-[12px] text-muted-foreground  hover:text-purple-1 font-bold font-Monsterrat inline-flex items-center gap-2"
              >
                ← Back to log in
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
