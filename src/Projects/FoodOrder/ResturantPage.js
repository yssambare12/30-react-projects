import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";

const ResturantPage = () => {
  const [resturantPageData, setResturantPageData] = useState([]);

  useEffect(() => {
    datafetch();
  }, []);

  const datafetch = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=151656"
    );
    const json = await data.json();

    setResturantPageData(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards || []
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Restaurant Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dev International</h1>
        <p className="text-lg text-gray-600 mt-2">
          Home Chhindwara - Delicious Cuisines
        </p>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {resturantPageData.map((item, index) => (
          <FoodItem key={index} foodData={item} />
        ))}
      </div>
    </div>
  );
};

export default ResturantPage;
