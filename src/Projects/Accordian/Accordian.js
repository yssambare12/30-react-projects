import { useState } from "react";
import { accordionData } from "./accordian_data";

const Accordian = () => {
  const [open, setOpen] = useState(null);

  const openPanel = (index) => {
    setOpen(index === open ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto bg-violet-100 p-6 rounded-2xl shadow-lg">
      {accordionData.map((item, index) => {
        return (
          <div
            key={item.id}
            className="mb-3 border border-violet-300 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => openPanel(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-violet-900 bg-violet-200 hover:bg-violet-300 transition-colors"
            >
              {item.title}
              <span
                className={`transform transition-transform ${
                  index === open ? "rotate-180" : "rotate-0"
                }`}
              >
                ⬇️
              </span>
            </button>

            {index === open && (
              <div className="px-4 py-3 text-gray-700 bg-white">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
