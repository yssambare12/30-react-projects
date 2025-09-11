import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";

const FoodApp = () => {
  const [allResturantData, setAllResturantData] = useState([]);
  const [resturantData, setResturantData] = useState([]);
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

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const AllCardData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setResturantData(AllCardData || []);
    setAllResturantData(AllCardData || []);
  };

  return (
    <div className="m-6 p-6 bg-gray-50 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Top restaurant chains in Pune
      </h1>
      <div className="flex">
        <input
          className="m-4 p-2 w-auto border-2 border-blue-200 rounded-lg "
          placeholder="Search Restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          onClick={() => searchResturat()}
          className="m-4 p-2 bg-red-600 rounded-lg text-white"
        >
          Search
        </button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {resturantData.map((resturant) => (
          <ResturantCard key={resturant.info.id} productData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default FoodApp;
