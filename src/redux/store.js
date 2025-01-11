import { configureStore } from "@reduxjs/toolkit";
import pinReducer from "./slice";

const store = configureStore({
  reducer: {
    pin: pinReducer,
  },
});

export default store;
