import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodItem from "./FoodItem";

const ResturantPage = () => {
  const { restaurantId } = useParams();
  const [resturantPageData, setResturantPageData] = useState([]);
  console.log(resturantPageData);
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    if (restaurantId) {
      datafetch();
    }
  }, [restaurantId]);

  const datafetch = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${restaurantId}`
      );
      const json = await data.json();

      // hotel name text
      const hotelText = json?.data?.cards[0]?.card?.card?.text;

      // restaurant info
      const restaurantDetails = json?.data?.cards[0]?.card?.card?.info;

      setRestaurantInfo({
        ...restaurantDetails,
        hotelText, // 👈 adding hotel text into state
      });

      // menu items
      setResturantPageData(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards || []
      );
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Restaurant Header */}
      <div className="text-center mb-8">
        <p className="text-lg text-gray-600 mt-2">
          {restaurantInfo?.hotelText}
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
