'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';

const Logo = () => {
  const logoRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);

  const handleMouseEnter = () => {
    gsap.to(containerRef.current, {
      backgroundColor: '#000',
      duration: 0.5,
    });

    gsap.to(textRef.current, {
      color: '#fff',
      duration: 0.5,
    });

    gsap.to(svgPathRef.current, {
      fill: '#000',
      stroke: '#fff',
      strokeWidth: 2,
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(containerRef.current, {
      backgroundColor: 'rgb(6, 182, 212)', // cyan-400
      duration: 0.5,
    });

    gsap.to(textRef.current, {
      color: 'rgb(14, 116, 144)', // sky-900
      duration: 0.5,
    });

    gsap.to(svgPathRef.current, {
      fill: 'currentColor',
      stroke: 'none',
      duration: 0.5,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative bg-cyan-400 text-sky-900 p-4 h-48 w-48 rounded-lg cursor-pointer"
    >
      <h2 ref={textRef} className="absolute top-2 left-2 text-lg font-bold">Logo</h2>

      <svg
        ref={logoRef}
        viewBox="0 0 128 128"
        className="absolute bottom-2 right-2 w-10 h-10"
      >
        <path
          ref={svgPathRef}
          d="M32 10L64 30L32 50L0 30L32 10ZM96 10L128 30L96 50L64 30L96 10ZM0 66L32 86L64 66L32 46L0 66ZM96 86L128 66L96 46L64 66L96 86ZM32 90L64 110L96 90L64 70L32 90Z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    </div>
  );
};

export default Logo;
