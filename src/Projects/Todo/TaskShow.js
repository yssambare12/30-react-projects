import { useState } from "react";

const TaskShow = ({ inputvalue, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm ${
        isChecked ? "bg-green-200" : ""
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mr-4 h-6 w-6 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        />
        <h3
          className={`text-lg text-gray-800 ${isChecked ? "line-through" : ""}`}
        >
          {inputvalue}
        </h3>
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 font-semibold"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskShow;
