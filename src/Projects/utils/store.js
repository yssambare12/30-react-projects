import themestyle from "./themeStyleSlice";
import foodappSlice from "./foodappSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    themestyle: themestyle,
    foodappSlice: foodappSlice,
  },
});

export default store;
