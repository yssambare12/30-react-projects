import { useState, useEffect } from "react";
import TaskShow from "./TaskShow";

const ToDo = () => {
  const [inputvalue, setInputValue] = useState("");

  const [taskarray, setTaskArray] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleSubmit = (inputvalue) => {
    if (!inputvalue) {
      alert(
        "Add something which you want to make note for it in the input box"
      );
    }
    setTaskArray((oldstring) => {
      const updated = [...oldstring, inputvalue];
      return updated;
    });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskarray));
  }, [taskarray]);

  const deletArray = () => {
    setTaskArray([]);
    localStorage.removeItem("tasks");
  };

  return (
    <div className="bg-orange-300 p-8 mx-40 py-4 h-auto">
      <h1 className="text-center font-bold text-lg">ToDo APP</h1>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <input
            placeholder="Add Your Task..."
            value={inputvalue}
            onChange={(e) => setInputValue(e.target.value)}
            className="p-2 rounded"
          />
          <button
            onClick={() => handleSubmit(inputvalue)}
            className="bg-red-500 mt-3 mx-6 p-2 text-white rounded"
          >
            Submit
          </button>
        </div>

        <div className="taskshow">
          {taskarray.map((task, index) => (
            <TaskShow key={index} inputvalue={task} />
          ))}

          {taskarray.length > 0 && (
            <button
              onClick={deletArray}
              className="bg-red-500 mt-3 mx-6 p-2 text-white rounded"
            >
              Delete All Elements
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
