import React from "react";

function InputField({ placeholder }) {
  return (
    <div>
      <input
        type="text"
        className="border-2 border-gray-500 rounded-full outline-none px-4 py-[2px] w-full"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
