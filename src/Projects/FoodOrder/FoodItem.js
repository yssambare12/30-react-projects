const FoodItem = ({ foodData }) => {
  const { name, category, price, imageId } = foodData.card.info;
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
        alt={name}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-4">
        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
          {category}
        </span>
        <h2 className="text-xl font-bold text-gray-800 mt-2">{name}</h2>
        <p className="text-lg text-gray-600 mt-1">
          ₹{price ? price / 100 : "N/A"}
        </p>
        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-xl font-semibold hover:bg-green-600 transition">
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
