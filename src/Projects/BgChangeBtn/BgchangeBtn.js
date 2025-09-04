import { useState } from "react";

const BGchangeButton = () => {
  const [changecolour, setChangeColour] = useState("bg-white");

  return (
    <div className="m-4 p-4 rounded-sm flex ">
      <div
        className={`shadow-lg w-1/2 p-4 rounded-lg flex justify-center items-center ${changecolour}`}
      >
        <p>
          Color Changer – Change background with color buttons. Color Changer –
          Change background with color buttons. Color Changer – Change
          background with color buttons. Color Changer – Change background with
          color buttons. Color Changer – Change background with color buttons.
        </p>
      </div>
      <div className="flex flex-col">
        <button
          onClick={() => setChangeColour("bg-green-500")}
          className="bg-green-500 p-2 m-2 rounded-lg"
        >
          Green
        </button>
        <button
          onClick={() => setChangeColour("bg-red-500")}
          className="bg-red-500 p-2 m-2 rounded-lg"
        >
          red
        </button>
        <button
          onClick={() => setChangeColour("bg-yellow-200")}
          className="bg-yellow-200 p-2 m-2 rounded-lg"
        >
          yellow
        </button>
      </div>
    </div>
  );
};

export default BGchangeButton;
