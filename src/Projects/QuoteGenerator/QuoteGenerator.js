import { useEffect, useState } from "react";
import { QuoteData } from "./QuoteData";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * QuoteData.length);
      setQuote(QuoteData[randomIndex]);
    }, 4000);

    return () => clearInterval(interval); // ✅ interval cleanup
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <h1 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
        🌟 Random Quote Generator
      </h1>

      <div className="max-w-2xl w-full p-8 bg-white/90 rounded-2xl shadow-2xl text-center transform transition duration-500 hover:scale-105">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 italic">
          “{quote || "Loading..."}”
        </h3>
      </div>
    </div>
  );
};

export default QuoteGenerator;
