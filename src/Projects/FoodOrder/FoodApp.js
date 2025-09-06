import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";

const FoodApp = () => {
  const [resturantData, setResturantData] = useState([]);

  //   console.log(resturantData);

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

    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
  };

  return (
    <div className="m-4 p-4 flex shadow-lg rounded-sm">
      <h1>Top restaurant chains in Pune</h1>
      {resturantData.map((resturant) => (
        <ResturantCard key={resturant.info.id} productData={resturant} />
      ))}
    </div>
  );
};

export default FoodApp;
