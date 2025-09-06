import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";

const FoodApp = () => {
  const [resturantData, setResturantData] = useState([]);

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const AllCardData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setResturantData(AllCardData);
  };

  return (
    <div className="m-6 p-6 bg-gray-50 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Top restaurant chains in Pune
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {resturantData.map((resturant) => (
          <ResturantCard key={resturant.info.id} productData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default FoodApp;
