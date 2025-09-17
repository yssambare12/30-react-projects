import { useState } from "react";
import ResturantCard from "./ResturantCard";
import { useResturantData } from "./CustomHook/useResturantData";

const FoodApp = () => {
  const { resturantData, allResturantData, setResturantData } =
    useResturantData();
  const [searchText, setSearchText] = useState("");

  const searchResturat = () => {
    if (!searchText) {
      setResturantData(allResturantData);
      return;
    }

    const filterList = allResturantData.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setResturantData(filterList);

    console.log(searchText);
    console.log(filterList);
  };

  return (
    <div className="m-6 p-6 bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
        🍴 Top Restaurants in Pune
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          className="m-2 p-3 w-72 border-2 border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="🔍 Search Restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => searchResturat()}
          className="m-2 px-6 py-3 bg-red-500 rounded-lg text-white font-semibold hover:bg-red-600 transition"
        >
          Search
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {resturantData.map((resturant) => (
          <ResturantCard key={resturant.info.id} productData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default FoodApp;
