const QuizModel = ({ qdata }) => {
  const combined = [qdata.correctAnswer, ...qdata.incorrectAnswers];
  console.log(combined);
  return (
    <div className="m-6 p-6 bg-white rounded-2xl shadow-md max-w-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        {qdata.question}
      </h3>
      <div className="flex flex-col space-y-3">
        {combined.map((selectItem, index) => (
          <label
            key={index}
            className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition"
          >
            <input type="checkbox" className="w-5 h-5 accent-blue-500" />
            <span className="text-gray-700">{selectItem}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizModel;
