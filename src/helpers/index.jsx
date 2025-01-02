import { jwtDecode } from "jwt-decode";
import { Routes } from "../utils/Routes";
import { Navigate } from "react-router-dom";

export const baseUrl = "https://driving-app-backend.vercel.app/v1/";

export const Roles = {
  Instructor: "instructor",
  Pupil: "pupil",
};

export const localStorageKeys = {
  authToken: "authToken",
};

// Save token directly to localStorage
export const saveTokenToLocalStorage = (authToken) =>
  localStorage.setItem(localStorageKeys.authToken, authToken);
export const getTokenFromLocalStorage = () =>
  localStorage.getItem(localStorageKeys.authToken);
export const getDecodedToken = () => {
  const token = getTokenFromLocalStorage();
  if (token) {
    return jwtDecode(token);
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem(localStorageKeys.authToken);
  window.location.href = Routes.parentHome;
};
