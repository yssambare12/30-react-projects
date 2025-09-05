import { useState } from "react";

const Contactform = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [textCount, setTextCount] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const alertmassage = () => {
    if (firstName || lastName) {
      alert("Hello " + firstName + " " + lastName);
    } else {
      alert("Add something in first name or Last Name");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Contact Us Form
        </h2>

        {/* Contact Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alertmassage();
          }}
          className="flex flex-col"
        >
          <input
            className="border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            type="text"
            placeholder="Your First Name"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            autoComplete="on"
          />
          <input
            className="border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            type="text"
            placeholder="Your Last Name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
          <div className="flex items-center border border-gray-300 rounded-lg mb-3 focus-within:ring-2 focus-within:ring-purple-400 transition">
            <input
              className="flex-grow p-3 rounded-l-lg focus:outline-none"
              type={showPassword ? "text" : "password"}
              placeholder="Add your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="px-3 text-gray-600 hover:text-purple-600 transition cursor-pointer"
              title={showPassword ? "Hide Password" : "Show Password"}
            >
              {showPassword ? "👁️" : "🙈"}
            </button>
          </div>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
          >
            Submit Name
          </button>
        </form>

        {/* Character Counter Section */}
        <div className="mt-8 border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Character Counter
          </h2>
          <input
            className="border border-gray-300 rounded-lg p-3 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            type="text"
            value={textCount}
            placeholder="Type something..."
            onChange={(e) => setTextCount(e.target.value)}
          />
          <p className="text-gray-600">
            Characters:{" "}
            <span className="font-bold text-pink-600">{textCount.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
