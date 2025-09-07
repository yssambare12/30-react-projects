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
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[12]?.card
        ?.card?.itemCards
    );
  };

  return (
    <div className="m-4 p-4 flex flex-col justify-center items-center m-auto content-center shadow-lg w-1/2">
      <h3 className="font-bold">Home Chhindwara - Dev International </h3>
      <h1 className="text-2xl font-bold">Dev International</h1>
      <h3>cuisines</h3>
      <h3>
        {resturantPageData.map((item) => (
          <FoodItem foodData={item} />
        ))}
      </h3>
    </div>
  );
};

export default ResturantPage;
