import themestyle from "./themeStyleSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    themestyle: themestyle,
  },
});

export default store;
