import QuizModel from "./QuizModel";
import { data } from "./QuizQuestion";
import { useEffect, useState } from "react";

const QuizApp = () => {
  const [quizData, setQuizData] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter >= 10) {
      if (quizData < data.length - 1) setQuizData(quizData + 1);
      setCounter(0);
    }

    const timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [counter, quizData]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">QuizApp</h1>

      {/* Timer */}
      <div className="mb-6">
        <div
          className={`w-20 h-20 flex items-center justify-center rounded-full text-white text-xl font-bold ${
            counter < 10 ? "bg-red-500" : "bg-gray-400"
          }`}
        >
          {counter < 10 ? counter : "Time Up"}
        </div>
      </div>

      {/* Quiz Card */}
      <QuizModel qdata={data[quizData]} />

      {/* Navigation Buttons */}
      <div className="flex space-x-4 mt-6">
        <button
          className="bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-2 rounded-lg shadow-md disabled:opacity-50"
          onClick={() => setQuizData((prev) => Math.max(prev - 1, 0))}
          disabled={quizData === 0}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-2 rounded-lg shadow-md disabled:opacity-50"
          onClick={() =>
            setQuizData((prev) => Math.min(prev + 1, data.length - 1))
          }
          disabled={quizData === data.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizApp;
