'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Imagery = () => {
  const containerRef = useRef(null);
  const rectRef = useRef(null);
  const hillRef = useRef(null);
  const moonCircleRef = useRef(null);
  const maskCircleRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });

    const container = containerRef.current;
    const text = container.querySelector("h2"); // Select the heading

    const handleMouseEnter = () => {
      gsap.to(container, { backgroundColor: "#000", duration: 0.5 });
      gsap.to(text, { color: "#fff", duration: 0.5 }); // Text to white on hover

      gsap.to(rectRef.current, { fill: "transparent", stroke: "#fff", duration: 0.5 });
      gsap.to(hillRef.current, { stroke: "#fff", fill: "transparent", duration: 0.5 });

      // Moon jump and color change
      gsap.to(moonCircleRef.current, {
        y: -10,
        fill: "#fff",
        duration: 0.3,
        ease: "power2.out",
      });

      // Reveal crescent
      gsap.to(maskCircleRef.current, {
        x: -10,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(container, { backgroundColor: "#8b1c64", duration: 0.5 });
      gsap.to(text, { color: "#f8b0b0", duration: 0.5 }); // Text back to original color

      gsap.to(rectRef.current, { fill: "#f8b0b0", stroke: "none", duration: 0.5 });
      gsap.to(hillRef.current, { fill: "#c1277a", stroke: "none", duration: 0.5 });

      // Reset moon
      gsap.to(moonCircleRef.current, {
        y: 0,
        fill: "#8b1c64", // Original moon color
        duration: 0.3,
        ease: "power2.inOut",
      });

      // Reset crescent mask
      gsap.to(maskCircleRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#8b1c64] text-[#f8b0b0] h-48 w-96 rounded-lg p-6 overflow-hidden transition-colors"
    >
      <h2 className="text-2xl font-bold">Imagery</h2>

      {/* Bottom-right icon */}
      <div className="absolute bottom-4 right-4 w-20 h-20">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background rectangle */}
          <rect
            ref={rectRef}
            width="100"
            height="100"
            fill="#f8b0b0"
          />

          {/* Moon Group */}
          <g>
            {/* Full Moon */}
            <circle
              ref={moonCircleRef}
              cx="70"
              cy="35"
              r="10"
              fill="#8b1c64"
            />
            {/* Crescent Mask */}
            <circle
              ref={maskCircleRef}
              cx="70"
              cy="35"
              r="10"
              fill="#000"
            />
          </g>

          {/* Hills */}
          <path
            ref={hillRef}
            d="M0,60 
               Q25,45 50,60 
               Q75,75 100,55 
               L100,100 
               L0,100 
               Z"
            fill="#c1277a"
          />
        </svg>
      </div>
    </div>
  );
};

export default Imagery;
