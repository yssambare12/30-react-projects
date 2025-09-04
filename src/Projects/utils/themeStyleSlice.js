import { createSlice } from "@reduxjs/toolkit";

const themestyle = createSlice({
  name: "theme",
  initialState: {
    isdark: false,
  },
  reducer: {
    toggledark: (state) => {
      state.isdark = !state.isdark;
    },
  },
});

export const { toggledark } = themestyle.actions;

export default themestyle.reducer;
