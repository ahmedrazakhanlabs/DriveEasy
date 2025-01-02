import React from "react";
import { Navigate } from "react-router-dom";
import { getDecodedToken, getTokenFromLocalStorage } from "../../../helpers";
import { Routes } from "../../../utils/Routes";

const PrivateRoute = ({ children }) => {
  const token = getTokenFromLocalStorage();
  if (!token) {
    console.log("No token found");
    return <Navigate to={Routes.login} />;
  }

  return children;

  const decodedToken = getDecodedToken();
  if (decodedToken && decodedToken.exp > Date.now() / 1000) {
  } else {
    console.log("Token is expired");
    return <Navigate to={Routes.login} />;
  }
};

export default PrivateRoute;
