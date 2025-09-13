const FoodItem = ({ foodData }) => {
  const { name, category, price, imageId } = foodData.card.info;
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
          imageId
        }
        alt="Mix Vege Raita"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3>{category}</h3>
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <h3 className="text-lg text-gray-600 mt-2">
          Price - ₹{price ? price / 100 : "N/A"}
        </h3>
        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-xl font-medium hover:bg-green-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
