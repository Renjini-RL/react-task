import React from "react";

function GreenButton({ title }) {
  return (
    <div className="w-full ">
      <div className="w-full bg-[#109b78] px-4 py-[2px] rounded-full border-2 border-gray-500 text-white text-center font-medium">
        {title}
      </div>
    </div>
  );
}

export default GreenButton;
