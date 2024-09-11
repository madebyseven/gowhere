import React from "react";

const ButtonBtn = (props) => {
  return (
    <div>
      <button
        type="button"
        className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
      >
        {props.label}
      </button>
    </div>
  );
};

export default ButtonBtn;
