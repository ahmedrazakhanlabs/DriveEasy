import { jwtDecode } from "jwt-decode";
import { Routes } from "../utils/Routes";
import { loadStripe } from "@stripe/stripe-js";

export const baseUrl = "https://driving-app-backend.vercel.app/v1/";
const stripeKey =
  "pk_test_51Np9cXBPe3BolaZesqvk9PQr7lMkxkvZcU6C217k74ADklLmdoNqlyF4wGC3MZ0WKhpTNFZVGrtwdmsiTyF0pltC00oIU9Mt6e";
export const stripePromise = loadStripe(stripeKey);

export const Roles = {
  Instructor: "instructor",
  Pupil: "pupil",
};

export const localStorageKeys = {
  authToken: "authToken",
  userInfo: "userInfo",
};
export const saveItemToLocalStorage = (key, item) => {
  console.log("saveItemToLocalStorage", key, item);
  localStorage.setItem(key, JSON.stringify(item)); // Convert the item to a string
};

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
  localStorage.clear();
  window.location.href = Routes.login;
};

export function formatTimeRange(slotStart, slotEnd) {
  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  }

  const start = new Date(slotStart);
  const end = new Date(slotEnd);

  return formatAMPM(start) + " - " + formatAMPM(end);
}