import React, { useState } from "react";

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  const applydarkmode = () => {
    setIsDark(!isDark);
    console.log(isDark);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to my React Projects!</h1>
      <p className="mt-4">Please select a project from the header.</p>
      <button
        onClick={() => applydarkmode()}
        className="p-2 my-4 rounded-lg shadow-md bg-red-500 text-white cursor-pointer"
      >
        Dark Mode
      </button>
    </div>
  );
};

export default Home;
