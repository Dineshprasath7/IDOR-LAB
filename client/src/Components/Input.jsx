import React from "react";

const Input = ({ name, type = "text", onChange}) => {
  return (
    <div className="mr-10">
  <input
    type={type}
    placeholder={name}
    className="mt-8 border-b-2 border-green-400 focus:outline-none p-2 w-60 ml-4 bg-gray-700 text-green-300 focus:bg-gray-800 active:bg-gray-800 focus:border-green-400 placeholder-green-400"
    onChange={(e) => onChange(e.target.value)}
    required
  ></input>
</div>

  );
};

export default Input;
