import React from "react";
import { Navigate } from "react-router-dom";
import {
  getDecodedToken,
  getTokenFromLocalStorage,
  Roles,
} from "../../../helpers";
import { Routes } from "../../../utils/Routes";

const ProtectedRoute = ({ children }) => {
  const token = getTokenFromLocalStorage();
  const decodedToken = getDecodedToken();

  return token ? (
    <Navigate
      to={
        decodedToken.userType == Roles.Pupil
          ? Routes.parentHome
          : Routes.InstructorHome
      }
    />
  ) : (
    children
  );
};

export default ProtectedRoute;
