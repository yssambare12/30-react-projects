const QuizModel = ({ qdata }) => {
  const combined = [qdata.correctAnswer, ...qdata.incorrectAnswers];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 max-w-lg w-full">
      <h3 className="text-xl font-semibold mb-5 text-gray-800">
        {qdata.question}
      </h3>
      <div className="flex flex-col space-y-3">
        {combined.map((selectItem, index) => (
          <label
            key={index}
            className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition"
          >
            <input
              type="radio"
              name={`question-${qdata.id}`}
              className="w-5 h-5 accent-blue-500"
            />
            <span className="text-gray-700">{selectItem}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizModel;
