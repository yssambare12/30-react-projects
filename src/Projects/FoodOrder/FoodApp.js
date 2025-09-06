import { useEffect } from "react";
import ResturantCard from "./ResturantCard";

const FoodApp = () => {
  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="m-4 p-4 shadow-lg rounded-sm">
      <h1>Top restaurant chains in Pune</h1>
      <ResturantCard />
    </div>
  );
};

export default FoodApp;
