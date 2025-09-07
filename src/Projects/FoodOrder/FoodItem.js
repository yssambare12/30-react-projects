const FoodItem = ({ foodData }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/15/f186bba3-fa72-417b-bbb6-1f6edbd86deb_9a288cdc-9612-4954-8018-3b68d3c013f2.JPG"
        alt="Mix Veg Raita"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {foodData.card.info.name}
        </h2>
        <h3 className="text-lg text-gray-600 mt-2">Price - ₹100</h3>
        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-xl font-medium hover:bg-green-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
