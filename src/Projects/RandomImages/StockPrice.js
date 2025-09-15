import { useEffect, useState } from "react";

const StockPrice = () => {
  const [stockPrice, setStockPrice] = useState(null);
  const [currencyRate, setCurrencyRate] = useState(1); // default 1 (USD)
  const companies = [
    { name: "Apple", ticker: "AAPL", logo: "🍎" },
    { name: "Tesla", ticker: "TSLA", logo: "🚗" },
    { name: "Google", ticker: "GOOGL", logo: "🔎" },
    { name: "Amazon", ticker: "AMZN", logo: "📦" },
    { name: "Microsoft", ticker: "MSFT", logo: "💻" },
    { name: "Reliance Industries", ticker: "RELIANCE.NS", logo: "🛢️" },
    { name: "TCS", ticker: "TCS.NS", logo: "💻" },
    { name: "HDFC Bank", ticker: "HDFCBANK.NS", logo: "🏦" },
    { name: "Infosys", ticker: "INFY.NS", logo: "🧑‍💻" },
    { name: "ICICI Bank", ticker: "ICICIBANK.NS", logo: "💳" },
    { name: "State Bank of India", ticker: "SBIN.NS", logo: "🏛️" },
    { name: "Bharti Airtel", ticker: "BHARTIARTL.NS", logo: "📡" },
    { name: "Bajaj Finance", ticker: "BAJFINANCE.NS", logo: "📈" },
    { name: "Hindustan Unilever", ticker: "HINDUNILVR.NS", logo: "🧴" },
    { name: "Maruti Suzuki", ticker: "MARUTI.NS", logo: "🚗" },
  ];

  // fetch INR conversion rate
  const fetchCurrency = async () => {
    try {
      const res = await fetch(
        "https://api.exchangerate.host/latest?base=USD&symbols=INR"
      );
      const data = await res.json();
      setCurrencyRate(data.rates.INR);
    } catch (error) {
      console.error("Currency fetch error:", error);
    }
  };

  // fetch stock price by ticker
  const fetchStock = async (ticker) => {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/stockprice?ticker=${ticker}`,
        {
          headers: {
            "X-Api-Key": "nTtIXydumHqFAe8HRVadtA==5bNtvdqATVJUF4Ej",
          },
        }
      );
      const json = await response.json();
      setStockPrice({ ...json, inr: (json.price * currencyRate).toFixed(2) });
    } catch (error) {
      console.error("Stock fetch error:", error);
    }
  };

  useEffect(() => {
    fetchCurrency(); // load INR rate on mount
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6">
      {/* Stock Card */}
      <div className="max-w-md mx-auto p-6 rounded-2xl shadow-xl bg-white dark:bg-gray-900 text-center transition-transform duration-300 hover:scale-105">
        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">
          📈 Stock Price
        </h2>

        {stockPrice ? (
          <div className="mt-4 space-y-2">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
              {stockPrice.ticker} ({stockPrice.name})
            </p>
            <p className="text-xl font-bold text-green-600 dark:text-green-400">
              ${stockPrice.price} USD
            </p>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
              ₹{stockPrice.inr} INR
            </p>
          </div>
        ) : (
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Select a company below 👇
          </p>
        )}
      </div>

      {/* Company Cards */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {companies.map((company) => (
          <button
            key={company.ticker}
            onClick={() => fetchStock(company.ticker)}
            className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:shadow-xl hover:scale-105 transition"
          >
            <span className="text-3xl">{company.logo}</span>
            <span className="mt-2 font-semibold text-gray-700 dark:text-gray-200">
              {company.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StockPrice;
