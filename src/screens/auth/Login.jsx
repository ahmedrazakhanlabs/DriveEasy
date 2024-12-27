import React from "react";
import Input from "../../components/Input";
import { FingerPrintIcon, ProfileIcon, UserIcon } from "../../utils/Icons";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "../../utils/Routes";
import Header from "./components/Header";
import { Women } from "../../assets";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header
        heading={"Login Now!"}
        subHeading={"Please login to continue"}
        image={Women}
      />

      <div className="my-7 mx-5">
        <Input
          prefixIcon={<UserIcon />}
          className={"mb-4"}
          type="email"
          placeholder="Username or mail"
        />
        <Input
          prefixIcon={<FingerPrintIcon />}
          className={"mb-7"}
          type="password"
          placeholder="Password"
        />
        <Button
          label="Login"
          className="rounded-3xl justify-center font-bold"
          radio={true}
          textCenter={true}
          onClick={() => navigate(Routes.parentHome)}
        />

        <div className="flex justify-between mt-4 mx-2">
          <Link
            to={Routes.signUp}
            className="text-xs font-bold font-Monsterrat text-black-1 opacity-35 hover:text-gray-700 hover:underline text-center"
          >
            Signup?
          </Link>
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

export default Login;
