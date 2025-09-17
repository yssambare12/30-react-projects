import { Link } from "react-router-dom";

const ResturantCard = ({ productData }) => {
  if (!productData) return null;

  const {
    name,
    totalRatingsString,
    avgRating,
    areaName,
    cuisines,
    cloudinaryImageId,
    id,
  } = productData.info;

  return (
    <Link to={"/restaurant/" + id}>
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-72 hover:shadow-xl hover:scale-105 transform transition duration-300">
        <img
          className="w-full h-44 object-cover"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
        />
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{cuisines.join(", ")}</p>
          <div className="flex items-center justify-between">
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium">
              ⭐ {avgRating}
            </span>
            <span className="text-gray-500 text-sm">{totalRatingsString}</span>
          </div>
          <p className="text-sm text-gray-500">📍 {areaName}</p>
        </div>
      </div>
    </Link>
  );
};

export default ResturantCard;
