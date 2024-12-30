import React, { useState } from "react";
import Input from "../../components/Input";
import { FingerPrintIcon, UserIcon } from "../../utils/Icons";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "../../utils/Routes";
import Header from "./components/Header";
import { Women } from "../../assets";
import ErrorMessage from "../../components/ErrorMessage";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  // Fake user data
  const fakeUserData = [
    {
      username: "pupil@gmail.com",
      password: "Password123!", // This is a fake password
      userType: "pupil",
    },
    {
      username: "instructor@gmail.com",
      password: "Password123!", // This is a fake password
      userType: "instructor",
    },
  ];

  // State for user inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("username , password", username, password);

  // Login function to check credentials
  const handleLogin = (e) => {
    e.preventDefault();

    const user = fakeUserData.find(
      (user) => user.username === username && user.password === password
    );
    console.log("user", user);

    if (user) {
      setErrorMessage("");
      if (user.userType === "pupil") {
        navigate(Routes.parentHome);
      } else if (user.userType === "instructor") {
        navigate(Routes.InstructorHome);
      }
    } else {
      setErrorMessage("Invalid credentials, please try again.");
    }
  };

  // Updated input change handler to differentiate between username and password
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Get the name and value from the input
    if (name === "username") {
      setUsername(value); // Set username state
    } else if (name === "password") {
      setPassword(value); // Set password state
    }
  };

  return (
    <div>
      <Header
        heading={"Login Now!"}
        subHeading={"Please login to continue"}
        image={Women}
      />

      <form onSubmit={handleLogin} className="my-7 mx-5">
        <Input
          prefixIcon={<UserIcon />}
          className={"mb-4"}
          type="email"
          placeholder="Username or email"
          value={username}
          name="username"
          onChange={handleInputChange} // Handle username input change
        />
        <Input
          prefixIcon={<FingerPrintIcon />}
          className={"mb-7"}
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange} // Handle password input change
        />
        <ErrorMessage
          className={"text-center mb-4"}
          ErrorMessage={errorMessage}
        />
        <Button
          label="Login"
          className="rounded-3xl justify-center font-bold"
          radio={true}
          textCenter={true}
          type="submit"
        />

        <div className="flex justify-between mt-4 mx-2">
          <Link
            to={Routes.signUp}
            className="text-xs font-bold font-Monsterrat text-black-1 opacity-35 hover:text-gray-700 hover:underline text-center"
          >
            Signup?
          </Link>
          <Link
            to={Routes.forgotPassword} // Corrected link to forgot password page
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
