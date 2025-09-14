import { useEffect, useState } from "react";

const CryptoPrice = () => {
  const [coinPrice, setCoinPrice] = useState(null);
  const [coinChangePrice, setCoinChangePrice] = useState("BTCUSD");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://api.api-ninjas.com/v1/cryptoprice?symbol=${coinChangePrice}`,
          {
            headers: {
              "X-Api-Key": "nTtIXydumHqFAe8HRVadtA==5bNtvdqATVJUF4Ej",
            },
          }
        );
        const json = await data.json();
        setCoinPrice(json?.price);
      } catch (err) {
        console.error("Error fetching crypto price:", err);
      }
    };

    fetchData();
  }, [coinChangePrice]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div className="bg-gray-900/70 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-700">
        <h1 className="text-3xl font-extrabold text-center mb-6">
          {coinChangePrice} Price
        </h1>

        <div className="text-center mb-6">
          <p className="text-4xl font-bold text-green-400">
            {coinPrice
              ? `₹${parseFloat(coinPrice * 83).toFixed(2)}`
              : "Loading..."}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => setCoinChangePrice("DOGEUSD")}
            className="px-4 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-md hover:scale-105 transform transition"
          >
            Dogecoin
          </button>
          <button
            onClick={() => setCoinChangePrice("BTCUSD")}
            className="px-4 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-semibold shadow-md hover:scale-105 transform transition"
          >
            Bitcoin
          </button>
          <button
            onClick={() => setCoinChangePrice("ETHUSD")}
            className="px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transform transition"
          >
            Ethereum
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoPrice;
