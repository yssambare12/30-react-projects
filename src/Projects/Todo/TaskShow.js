import { useState, useEffect } from "react";

const TaskShow = ({ inputvalue, onDelete }) => {
  const storageKey = `likes_${encodeURIComponent(inputvalue)}`;
  const [isChecked, setIsChecked] = useState(false);

  const [likeCount, setLikeCount] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? Number(saved) : 0;
    } catch (e) {
      return 0;
    }
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      setLikeCount(saved ? Number(saved) : 0);
    } catch (e) {}
  }, [storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, String(likeCount));
    } catch (e) {
      console.warn("localStorage set failed:", e);
    }
  }, [storageKey, likeCount]);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  const handleLike = () => {
    setLikeCount((prev) => prev + 1);
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
      <span className="cursor-pointer" onClick={handleLike}>
        ❤️ {likeCount}
      </span>
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
