

'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';

const Color = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const squareTopRef = useRef<HTMLDivElement>(null);
  const squareBottomRef = useRef<HTMLDivElement>(null);
  const circleTopRef = useRef<HTMLDivElement>(null);
  const circleBottomRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null); // ✅ heading ref

  const handleMouseEnter = () => {
    // Container background to black
    gsap.to(containerRef.current, {
      backgroundColor: '#000000',
      duration: 0.5,
    });

    // Heading color to white
    gsap.to(headingRef.current, {
      color: '#ffffff',
      duration: 0.3,
    });

    // Top square animation
    gsap.to(squareTopRef.current, {
      x: 60,
      y: 0,
      backgroundColor: 'black',
      border: '2px solid white',
      duration: 0.5,
    });
    gsap.to(circleTopRef.current, {
      backgroundColor: 'transparent',
      border: '2px solid white',
      duration: 0.5,
    });

    // Bottom square animation
    gsap.to(squareBottomRef.current, {
      x: -18,
      y: 0,
      backgroundColor: 'black',
      border: '2px solid white',
      duration: 0.5,
    });
    gsap.to(circleBottomRef.current, {
      backgroundColor: 'transparent',
      border: '2px solid white',
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    // Container background back to orange
    gsap.to(containerRef.current, {
      backgroundColor: '#f97316', // bg-orange-500
      duration: 0.5,
    });

    // Heading color back to #3A1907
    gsap.to(headingRef.current, {
      color: '#3A1907',
      duration: 0.3,
    });

    // Reset top square
    gsap.to(squareTopRef.current, {
      x: 0,
      y: 0,
      backgroundColor: '#5C260A',
      border: 'none',
      duration: 0.5,
    });
    gsap.to(circleTopRef.current, {
      backgroundColor: '#A3450E',
      border: 'none',
      duration: 0.5,
    });

    // Reset bottom square
    gsap.to(squareBottomRef.current, {
      x: 0,
      y: 0,
      backgroundColor: '#3A1907',
      border: 'none',
      duration: 0.5,
    });
    gsap.to(circleBottomRef.current, {
      backgroundColor: '#D65D0E',
      border: 'none',
      duration: 0.5,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative bg-orange-500 p-4 h-[300px] w-[320px] cursor-pointer"
    >
      <h2
        ref={headingRef}
        className="text-2xl font-bold"
        style={{ color: '#3A1907' }} // ✅ Initial color
      >
        Color
      </h2>

      {/* Top square */}
      <div
        ref={squareTopRef}
        className="absolute bottom-[55px] right-[70px] w-10 h-10 bg-[#5C260A] flex items-center justify-center"
      >
        <div
          ref={circleTopRef}
          className="w-5 h-5 rounded-full bg-[#A3450E]"
        />
      </div>

      {/* Bottom square */}
      <div
        ref={squareBottomRef}
        className="absolute bottom-4 right-[30px] w-10 h-10 bg-[#3A1907] flex items-center justify-center"
      >
        <div
          ref={circleBottomRef}
          className="w-5 h-5 rounded-full bg-[#D65D0E]"
        />
      </div>
    </div>
  );
};

export default Color;
