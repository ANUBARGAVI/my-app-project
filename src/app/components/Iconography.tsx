"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";

type IconographyProps = {
  /** CSS width/height for the outer container, e.g. "100%", "300px", etc. */
  width?: string;
  height?: string;
  /** Pixel size for the square SVG icon. */
  iconSize?: number;
};

const Iconography: React.FC<IconographyProps> = ({
  width = "100%",
  height = "100vh",
  iconSize = 200, // default icon is now 600px
}) => {
  const [hovered, setHovered] = useState(false);
  const shackleRef = useRef<SVGPathElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    gsap.to(shackleRef.current, {
      y: -8,
      rotation: -25,
      transformOrigin: "center bottom",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    gsap.to(shackleRef.current, {
      y: 0,
      rotation: 0,
      transformOrigin: "center bottom",
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  const strokeColor = hovered ? "#ffffff" : "#175641";

  return (
    <div
      className="p-4 flex flex-col items-start justify-start transition-colors duration-500"
      style={{
        width,
        height,
        overflow: "hidden",
        backgroundColor: hovered ? "#000000" : "#b4dc19",
        color: hovered ? "#ffffff" : "#175641",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-2xl font-bold mb-4 transition-colors duration-500">
        Iconography
      </h2>

      <div className="flex items-start gap-4 w-full">
        <svg
          viewBox="0 0 64 64"
          style={{
            width: iconSize,
            maxWidth: iconSize,
            height: iconSize,
            flexShrink: 0,
            display: "block",
          }}
        >
          {/* Shackle (lock top) */}
          <path
            ref={shackleRef}
            d="M24 32 C24 20, 40 20, 40 32"
            stroke={strokeColor}
            strokeWidth="4"
            fill="none"
          />
          {/* Body (lock base) */}
          <rect
            x="20"
            y="32"
            width="24"
            height="24"
            rx="4"
            fill="none"
            stroke={strokeColor}
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
};

export default Iconography;