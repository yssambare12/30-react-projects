import QuizModel from "./QuizModel";
import { data } from "./QuizQuestion";
import { useEffect, useState } from "react";

const QuizApp = () => {
  const [quizData, setQuizData] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter >= 10) {
      setQuizData(quizData + 1);
      setCounter(0);
    }
    const timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="m-4 p-4 shadow-lg">
      <h1 className="flex justify-center">QuizApp</h1>
      {counter < 10 ? (
        <h3 className="p-5 m-5 bg-red-600 rounded-full text-white">
          Counter {counter}
        </h3>
      ) : (
        <h3 className="p-5 m-5 bg-red-600 rounded-full text-white">
          Time up...
        </h3>
      )}
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
