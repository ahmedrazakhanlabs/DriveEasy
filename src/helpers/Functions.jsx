import axios from "axios";
import { baseUrl, getTokenFromLocalStorage } from ".";

const apiClient = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getRequest = async (url, params = {}) => {
  const token = getTokenFromLocalStorage();
  try {
    const response = await apiClient.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("GET Request Error:", error.response?.data || error.message);
    throw error;
  }
};

// export const postRequest = async (url, data) => {
//   const token = getTokenFromLocalStorage();
//   console.log("token", token);

//   try {
//     const response = await apiClient.post(url, {
//       data,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log("response", response);
//     return response;
//   } catch (error) {
//     console.error("POST Request Error:", error.response?.data || error.message);
//     throw error;
//   }
// };

export const postRequest = async (url, data) => {
  const token = getTokenFromLocalStorage();
  console.log("token", token);

  try {
    const response = await apiClient.post(
      url,
      data, // Pass `data` as the body of the request
      {
        headers: {
          Authorization: `Bearer ${token}`, // Set the Authorization header here
        },
      }
    );
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("POST Request Error:", error.response?.data || error.message);
    throw error;
  }
};


export const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};