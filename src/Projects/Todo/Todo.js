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
      return;
    }
    setTaskArray((oldstring) => {
      const updated = [...oldstring, inputvalue];
      return updated;
    });
    setInputValue("");
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskarray));
  }, [taskarray]);

  const deletArray = () => {
    setTaskArray([]);
    localStorage.removeItem("tasks");
  };

  const handleDelete = (index) => {
    setTaskArray((oldTasks) => {
      const newTasks = [...oldTasks];
      newTasks.splice(index, 1);
      return newTasks;
    });
  };

  return (
    <div className="bg-slate-200 min-h-screen flex flex-col items-center p-4">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          ToDo APP
        </h1>
        <div className="flex gap-4 mb-6">
          <input
            placeholder="Add Your Task..."
            value={inputvalue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => handleSubmit(inputvalue)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>

        <div className="taskshow space-y-4">
          {taskarray.length > 0 ? (
            taskarray.map((task, index) => (
              <TaskShow
                key={index}
                inputvalue={task}
                onDelete={() => handleDelete(index)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No tasks yet. Add one above!</p>
          )}

          {taskarray.length > 0 && (
            <button
              onClick={deletArray}
              className="w-full bg-gray-700 text-white mt-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-800 transition duration-300"
            >
              Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
