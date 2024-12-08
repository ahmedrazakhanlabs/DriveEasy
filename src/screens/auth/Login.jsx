import React from "react";
import { Women } from "../../assets";
import Input from "../../components/Input";
import { FingerPrintIcon, ProfileIcon, UserIcon } from "../../utils/Icons";
import Button from "../../components/Button";
import { Link, Routes } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="bg-purple-1 rounded-bl-[50px] flex items-center">
        <div className="flex-1 w-full ">
          <h1 className="font-Monsterrat font-bold text-white text-[8vw] sm:text-[34px] ml-7 lg:text-[38px] ">
            Login Now!
          </h1>
          <p className="font-Monsterrat text-white text-[11px] ml-7 sm:text-sm">
            Please login to continue
          </p>
        </div>
        <div className="">
          <img src={Women} alt="Women" className="w-[149px] h-[150px]" />
        </div>
      </div>
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
          onClick={() => navigate(Routes.login)}
        />

        <div className="flex justify-between mt-4 mx-2">
          <Link
            to={Routes.login}
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
