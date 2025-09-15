import { useEffect, useState } from "react";

const StockPrice = () => {
  const [stockPrice, setStockPrice] = useState(null);

  const Datafetch = async () => {
    try {
      const response = await fetch(
        "https://api.api-ninjas.com/v1/stockprice?ticker=AAPL",
        {
          headers: {
            "X-Api-Key": "nTtIXydumHqFAe8HRVadtA==5bNtvdqATVJUF4Ej",
          },
        }
      );
      const json = await response.json();
      setStockPrice(json);
    } catch (error) {
      console.error("Error fetching stock price:", error);
    }
  };

  useEffect(() => {
    Datafetch();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="w-80 p-6 rounded-2xl shadow-xl bg-white dark:bg-gray-900 text-center transition-transform duration-300 hover:scale-105">
        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">
          📈 Apple Stock
        </h2>

        {stockPrice ? (
          <div className="mt-4 space-y-2">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
              Ticker:{" "}
              <span className="font-bold text-gray-800 dark:text-white">
                {stockPrice.ticker}
              </span>
            </p>
            <p className="text-xl font-bold text-green-600 dark:text-green-400">
              ${stockPrice.price}
            </p>
          </div>
        ) : (
          <div className="mt-6">
            <div className="animate-spin h-8 w-8 mx-auto border-4 border-blue-400 border-t-transparent rounded-full"></div>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockPrice;
