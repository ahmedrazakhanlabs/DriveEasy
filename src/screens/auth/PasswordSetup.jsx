import React, { useEffect } from "react";
import { Fingerprint, Lock } from "lucide-react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { Routes } from "../../utils/Routes";
import { FingerPrintIcon, UserIcon } from "../../utils/Icons";
import Header from "./components/Header";
import { Women } from "../../assets";
import { useFormik } from "formik";
import { validationSchema } from "../../utils/ValidationSchema";
import * as Yup from "yup";

const PasswordSetup = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: validationSchema.fields.password,
      confirmPassword: validationSchema.fields.confirmPassword,
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  useEffect(() => {
    formik.handleSubmit();
  }, []);
  return (
    <div>
      <Header
        heading={"Congrats !"}
        subHeading={"Please read the instructions."}
        image={Women}
      />
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-[400px] space-y-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="rounded-full bg-gray-100 p-4">
              <Lock className="h-6 w-6 text-gray-600" />
            </div>
            <div className="space-y-2">
              <h1 className="text-[18px] text-center font-Monsterrat font-semibold tracking-tight">
                Set new password
              </h1>
              <p className="text-[12px] text-gray-500 font-Monsterrat font-bold text-muted-foreground">
                Must be at least 8 characters
              </p>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                prefixIcon={<FingerPrintIcon />}
                name="password"
                type="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password}
              />
            </div>
            <div className="space-y-2">
              <Input
                prefixIcon={<FingerPrintIcon />}
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
            </div>
            <div className="mx-20">
              <Button
                type="submit"
                className="w-full rounded-lg justify-center font-bold text-[12px]"
                label={"Change password"}
              />
            </div>
          </form>
          <div className="text-center">
            <Link
              to={Routes.login}
              className="text-[12px] text-muted-foreground hover:text-purple-1 font-bold font-Monsterrat inline-flex items-center gap-2"
            >
              ← Back to log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordSetup;
