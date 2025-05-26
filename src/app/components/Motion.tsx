"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";

const DOT_SIZE = 20;

const Motion = () => {
  const graphRef = useRef<SVGSVGElement>(null);

  const handleMouseEnter = () => {
    gsap.to(graphRef.current, {
      skewX: 20,
      skewY: 10,
      transformOrigin: "50% 50%",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(graphRef.current, {
      skewX: 0,
      skewY: 0,
      transformOrigin: "50% 50%",
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      className="relative w-full h-[400px] bg-purple-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top left label */}
      <span className="absolute top-4 left-4 text-purple-800 font-bold text-lg select-none">
        Motion
      </span>
      {/* Bottom right label */}
      <span className="absolute bottom-4 right-4 text-purple-800 font-bold text-lg select-none">
        SVG2SVG
      </span>
      {/* SVG Graph */}
      <svg
        ref={graphRef}
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        className="absolute inset-0"
      >
        {/* Diagonal lines */}
        <line
          x1={40}
          y1={40}
          x2={360}
          y2={360}
          stroke="#7c3aed"
          strokeWidth={4}
        />
        <line
          x1={360}
          y1={40}
          x2={40}
          y2={360}
          stroke="#7c3aed"
          strokeWidth={4}
        />
        {/* Four square dots */}
        <rect
          x={30}
          y={30}
          width={DOT_SIZE}
          height={DOT_SIZE}
          fill="#7c3aed"
        />
        <rect
          x={350}
          y={30}
          width={DOT_SIZE}
          height={DOT_SIZE}
          fill="#7c3aed"
        />
        <rect
          x={30}
          y={350}
          width={DOT_SIZE}
          height={DOT_SIZE}
          fill="#7c3aed"
        />
        <rect
          x={350}
          y={350}
          width={DOT_SIZE}
          height={DOT_SIZE}
          fill="#7c3aed"
        />
      </svg>
    </div>
  );
};

export default Motion;