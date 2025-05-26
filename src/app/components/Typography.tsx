"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Typography = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current;

    const handleEnter = () => {
      gsap.to(letters, {
        fill: "#000000",
        stroke: "#ffffff",
        strokeWidth: 4,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(letters, {
        fill: "#641B2E",
        stroke: "transparent",
        strokeWidth: 0,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const container = document.querySelector(".typography-container");
    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      className="
        typography-container group relative bg-orange-600 p-6 h-56
        flex flex-col items-start justify-start
        transition-colors duration-500 hover:bg-black
        overflow-hidden
      "
    >
      <h2
        className="
          text-4xl font-extrabold tracking-wide leading-tight text-[#641B2E]
          transition-colors duration-500
          group-hover:text-white
          mb-4
        "
      >
        Typography
      </h2>

      <svg
        className="absolute bottom-2 right-2 overflow-visible"
        width="140"
        height="160"
        viewBox="0 0 160 160"
      >
        <text
          ref={textRef}
          x="40"
          y="160"  // pushed further down from 145 to 160
          fontSize="80"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fill="#641B2E"
          style={{ transformOrigin: "left center" }}
        >
          Aa
        </text>
      </svg>
    </div>
  );
};

export default Typography;
