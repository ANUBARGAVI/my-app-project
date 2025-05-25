"use client";
import React from "react";

const Typography = () => {
  return (
    <div
      className="
        group relative bg-orange-600 p-4 h-full
        flex flex-col items-start justify-start
        transition-colors duration-300
        hover:bg-black
      "
    >
      {/* Top-left heading */}
      <h2
        className="
          text-xl font-bold text-[#641B2E]
          transition-colors duration-300
          group-hover:text-white
        "
      >
        Typography
      </h2>

      {/* “Aa” changes to bigger and solid white on hover */}
      <div
        className="
          absolute bottom-4 right-4
          font-bold
          text-[4rem]
          transition-all duration-300
          group-hover:text-white
          group-hover:text-[5rem]
          opacity-100
        "
        style={{
          color: "#641B2E",
          WebkitTextStroke: "0px",
          textShadow: "none",
        }}
      >
        Aa
      </div>
    </div>
  );
};

export default Typography;
