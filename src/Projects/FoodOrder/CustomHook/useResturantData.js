import { useEffect, useState } from "react";

export const useResturantData = () => {
  const [allResturantData, setAllResturantData] = useState([]);
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
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setAllResturantData(AllCardData || []);
    setResturantData(AllCardData || []);
  };

  return { allResturantData, resturantData, setResturantData };
};
