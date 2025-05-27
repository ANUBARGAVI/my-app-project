'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';

type ColorProps = {
  width?: number | string;
  height?: number | string;
  iconSize?: number; // for the inner circle
};

const Color: React.FC<ColorProps> = ({
  width = '23vw',
  height = '55vh',
  iconSize = 20,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const squareTopRef = useRef<HTMLDivElement>(null);
  const squareBottomRef = useRef<HTMLDivElement>(null);
  const circleTopRef = useRef<HTMLDivElement>(null);
  const circleBottomRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const handleMouseEnter = () => {
    gsap.to(containerRef.current, {
      backgroundColor: '#000000',
      duration: 0.5,
    });
    gsap.to(headingRef.current, {
      color: '#ffffff',
      duration: 0.3,
    });
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
    gsap.to(containerRef.current, {
      backgroundColor: '#f97316',
      duration: 0.5,
    });
    gsap.to(headingRef.current, {
      color: '#6d2e09',
      duration: 0.3,
    });
    gsap.to(squareTopRef.current, {
      x: 0,
      y: 0,
      backgroundColor: '#ff8c19' ,
      border: 'none',
      duration: 0.5,
    });
    gsap.to(circleTopRef.current, {
      backgroundColor: '#A3450E',
      border: 'none',
      duration: 0.5,
    });
    gsap.to(squareBottomRef.current, {
      x: 0,
      y: 0,
      backgroundColor: '#6d2e09' ,
      border: 'none',
      duration: 0.5,
    });
    gsap.to(circleBottomRef.current, {
      backgroundColor: '#ff8c19',
      border: 'none',
      duration: 0.5,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative bg-orange-500 p-4 cursor-pointer"
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        marginTop: '-20vh',
      }}
    >
      <h2
        ref={headingRef}
        className="text-2xl font-bold"
        style={{ color: '#6d2e09' }}
      >
        Color
      </h2>

      {/* Top square */}
      <div
        ref={squareTopRef}
        className="absolute bottom-[55px] right-[70px] w-10 h-10 bg-[#ff8c19] flex items-center justify-center"
      >
        <div
          ref={circleTopRef}
          style={{
            width: iconSize,
            height: iconSize,
            minWidth: iconSize,
            minHeight: iconSize,
          }}
          className="rounded-full bg-[#A3450E]"
        />
      </div>

      {/* Bottom square */}
      <div
        ref={squareBottomRef}
        className="absolute bottom-4 right-[30px] w-10 h-10 bg-[#6d2e09] flex items-center justify-center"
      >
        <div
          ref={circleBottomRef}
          style={{
            width: iconSize,
            height: iconSize,
            minWidth: iconSize,
            minHeight: iconSize,
          }}
          className="rounded-full bg-[#ff8c19]"
        />
      </div>
    </div>
  );
};

export default Color;
