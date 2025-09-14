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
        console.log(json);
        setCoinPrice(json?.price);
      } catch (err) {
        console.error("Error fetching crypto price:", err);
      }
    };

    fetchData();
  }, [coinChangePrice]);
  return (
    <div>
      <h1>
        {coinChangePrice} Price: {coinPrice ? `${coinPrice} USD` : "Loading..."}
      </h1>
      <div>
        <button
          onClick={() => setCoinChangePrice("DOGEUSD")}
          className="p-3 m-3 bg-red-400 rounded"
        >
          Dogecoin
        </button>
        <button
          onClick={() => setCoinChangePrice("BTCUSD")}
          className="p-3 m-3 bg-red-400 rounded"
        >
          Bitcoin
        </button>
        <button
          onClick={() => setCoinChangePrice("ETHUSD")}
          className="p-3 m-3 bg-red-400 rounded"
        >
          Ethereum
        </button>
      </div>
    </div>
  );
};

export default CryptoPrice;
