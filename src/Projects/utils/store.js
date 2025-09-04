import themestyle from "./themeStyleSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    theme: themestyle,
  },
});

export default store;
