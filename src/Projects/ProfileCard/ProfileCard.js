import { useState } from "react";
import UserProfileShow from "./UserProfileShow";

const UserProfile = () => {
  const [userName, setUserName] = useState("");
  const [surName, setSurName] = useState("");
  const [userBio, setUserBio] = useState("");

  const [userArry, setUserArray] = useState([]);

  const submitUserDetails = () => {
    if (!userName || !surName || !userBio) return;

    const userObj = {
      name: userName,
      surname: surName,
      bio: userBio,
    };

    setUserArray([...userArry, userObj]);

    setUserName("");
    setSurName("");
    setUserBio("");
  };

  return (
    <div className="p-6 m-6 max-w-5xl mx-auto">
      <div className="flex flex-wrap gap-2 items-center justify-center mb-6">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border p-2 rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
          placeholder="Name"
        />
        <input
          type="text"
          value={surName}
          onChange={(e) => setSurName(e.target.value)}
          className="border p-2 rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
          placeholder="Surname"
        />
        <input
          type="text"
          value={userBio}
          onChange={(e) => setUserBio(e.target.value)}
          placeholder="Your Bio"
          className="border p-2 rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 w-64"
        />
        <button
          onClick={submitUserDetails}
          className="px-4 py-2 bg-red-500 rounded-lg text-white hover:bg-red-600 transition-colors"
        >
          Submit
        </button>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {userArry.map((usercard, index) => (
          <UserProfileShow key={index} userData={usercard} />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
