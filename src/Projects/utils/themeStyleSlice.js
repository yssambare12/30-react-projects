import { createSlice } from "@reduxjs/toolkit";

const themestyle = createSlice({
  name: "themestyle",
  initialState: {
    isdark: false,
  },
  reducers: {
    toggledark: (state) => {
      state.isdark = !state.isdark;
    },
  },
});

export const { toggledark } = themestyle.actions;

export default themestyle.reducer;
