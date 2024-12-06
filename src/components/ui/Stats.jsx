import React from "react";

const Stats = ({ img, value, label }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-lg shadow-xl">
      {/* Icon */}
      <div className="h-20 w-20 flex items-center justify-center">
        <img
          src={img}
          alt={label}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Value */}
      <p className="mt-4 text-2xl font-bold text-white">{value}</p>

      {/* Label */}
      <p className="mt-2 text-lg text-gray-300 text-center">{label}</p>
    </div>
  );
};

export default Stats;
