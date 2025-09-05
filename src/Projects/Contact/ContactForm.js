import { useState } from "react";

const Contactform = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [textCount, setTextCount] = useState("");

  const alertmassage = () => {
    if (firstName || lastName) {
      alert("Hello " + firstName + " " + lastName);
    } else {
      alert("Add something in first name or Last Name");
    }
  };

  return (
    <div className="m-4 p-4 shadow-lg flex flex-col items-center justify-center">
      <h2>Contact Us Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alertmassage();
        }}
        className="flex flex-col items-center"
      >
        <input
          className="border rounded-sm m-2 p-1"
          type="text"
          placeholder="Your Name"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
        />
        <input
          className="border rounded-sm m-2 p-1"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
        <button type="submit">Submit Name</button>
      </form>

      {/* Character Counter Section */}
      <div className="mt-6">
        <h2>Character Counter</h2>
        <input
          className="border rounded-sm m-2 p-1"
          type="text"
          value={textCount}
          placeholder="Type something..."
          onChange={(e) => setTextCount(e.target.value)}
        />
        <p>Characters: {textCount.length}</p>
      </div>
    </div>
  );
};

export default Contactform;
