const UserProfileShow = ({ userData }) => {
  const { name, surname, bio } = userData;
  return (
    <div className="w-80 bg-white shadow-lg rounded-2xl p-6 m-4 flex flex-col items-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
        {name.charAt(0).toUpperCase()}
      </div>

      <h1 className="text-xl font-semibold text-gray-800">
        {name} {surname}
      </h1>

      <p className="text-gray-600 mt-2 text-center">{bio}</p>

      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
        Connect
      </button>
    </div>
  );
};

export default UserProfileShow;
