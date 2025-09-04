// import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggledark } from "./utils/themeStyleSlice";

const Home = () => {
  const dispatch = useDispatch();
  //use the global redux state
  const isDark = useSelector((store) => store.themestyle.isdark);

  console.log(isDark);

  //change the state by calling function
  const applydarkmode = () => {
    dispatch(toggledark());
  };

  return (
    <div className={`p-8 ${isDark ? "bg-black text-white" : "bg-white"}`}>
      <h1 className="text-3xl font-bold">Welcome to my React Projects!</h1>
      <p className="mt-4">Please select a project from the header.</p>
      <button
        onClick={() => dispatch(toggledark())}
        className="p-2 my-4 rounded-lg shadow-md bg-red-500 text-white cursor-pointer"
      >
        Dark Mode
      </button>
    </div>
  );
};

export default Home;
