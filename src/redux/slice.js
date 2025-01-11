import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pin: ["", "", "", "", "", ""],
};

const pinSlice = createSlice({
  name: "pin",
  initialState,
  reducers: {
    setPin(state, action) {
      state.pin = action.payload;
    },
    updatePin(state, action) {
      const { index, value } = action.payload;
      state.pin[index] = value;
    },
  },
});

export const { setPin, updatePin } = pinSlice.actions;

export default pinSlice.reducer;
