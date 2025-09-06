import { createSlice } from "@reduxjs/toolkit";

const foodappSlice = createSlice({
  name: "foodappSlice",
  initialState: {
    resturantAllData: [],
  },
  reducers: {
    resturantData: (state, action) => {
      // push at once
      // state.resturantAllData.push(action.payload);
      // push multiple at same time
      state.resturantAllData = [...state.resturantAllData, ...action.payload];
    },
  },
});

export const { resturantData } = foodappSlice.actions;

export default foodappSlice.reducer;
