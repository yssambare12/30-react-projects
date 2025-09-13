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
      <div className="bg-white shadow-lg rounded-2xl p-4 w-72 hover:scale-105 transform transition duration-200">
        <img
          className="w-full h-44 object-cover rounded-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt={name}
        />
        <div className="mt-4 p-2 space-y-1">
          <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          <h3 className="font-semibold text-lg text-gray-800">{id}</h3>
          <p className="text-sm text-gray-600">{cuisines.join(", ")}</p>
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-lg font-medium">
              ⭐ {avgRating}
            </span>
            <span className="text-gray-500">{totalRatingsString}</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">📍 {areaName}</p>
        </div>
      </div>
    </Link>
  );
};

export default ResturantCard;
