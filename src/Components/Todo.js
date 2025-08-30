import { useState } from "react";
import TaskShow from "./TaskShow";

const ToDo = () => {
  const [inputvalue, setInputValue] = useState("");
  const [taskarray, setTaskArray] = useState([]);

  const handleSubmit = (inputvalue) => {
    setTaskArray((oldstring) => {
      const updated = [...oldstring, inputvalue];
      return updated;
    });
  };

  return (
    <div className="bg-orange-300 p-8 mx-40 py-4 h-auto">
      <h1 className="text-center font-bold text-lg">ToDo APP</h1>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <input
            placeholder="Add Your Task..."
            value={inputvalue}
            onChange={(e) => {
              setInputValue(e.target.value);
              console.log(e.target.value);
            }}
            className="p-2 rounded"
          />
          <button
            onClick={() => handleSubmit(inputvalue)}
            className="bg-red-500 mt-3 mx-6 text-white rounded"
          >
            Submit
          </button>
        </div>

        <div className="taskshow">
          {taskarray.map((task) => (
            <TaskShow inputvalue={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
