import { useState } from "react";
import { accordionData } from "./accordian_data";

const Accordian = () => {
  const [open, setOpen] = useState(null);

  const openPanel = (index) => {
    setOpen(index === open ? null : index);
  };

  const [showpara, setShowPara] = useState(null);

  const visibilityParagraph = () => {
    setShowPara(!showpara);
  };

  return (
    <>
      <div className="max-w-xl mx-auto bg-violet-100 p-6 mt-4 rounded-2xl shadow-lg">
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
      <div className="flex flex-col items-center justify-center m-4 p-4">
        <button
          onClick={() => visibilityParagraph()}
          className="m-2 p-2 bg-red-500 rounded-lg text-white shadow-lg cursor-pointer"
        >
          Show Paragraph
        </button>
        {showpara && (
          <p className="">
            Note that the development build is not optimized. To create a
            production build, use npm run build.
          </p>
        )}
      </div>
    </>
  );
};

export default Accordian;
