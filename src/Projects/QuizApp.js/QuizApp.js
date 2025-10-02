import QuizModel from "./QuizModel";
import { data } from "./QuizQuestion";
import { useState } from "react";

const QuizApp = () => {
  const [quizData, setQuizData] = useState(0);
  return (
    <div className="m-4 p-4 shadow-lg">
      <h1 className="flex justify-center">QuizApp</h1>
      <QuizModel qdata={data[quizData]} />
      <button
        className="bg-blue-500 rounded-md px-3 py-1 text-white "
        onClick={() => setQuizData(quizData + 1)}
      >
        Next
      </button>
      <button
        className="bg-blue-500 rounded-md px-3 py-1 text-white "
        onClick={() => setQuizData(quizData - 1)}
      >
        Prev
      </button>
    </div>
  );
};

export default QuizApp;
