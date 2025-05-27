'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Color tokens
const IDENTITY_ON_PINK = "#892055";
const IDENTITY_PINK = "#ffafa5";

type ImageryProps = {
  width?: number | string;
  height?: number | string;
};

const Imagery: React.FC<ImageryProps> = ({
  width = '28vw', // default 24rem (w-96)
  height = '40vh', // default 12rem (h-48)
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<SVGRectElement>(null);
  const hillRef = useRef<SVGPathElement>(null);
  const moonCircleRef = useRef<SVGCircleElement>(null);
  const maskCircleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });

    const container = containerRef.current;
    if (!container) return;
    const text = container.querySelector("h2");

    const handleMouseEnter = () => {
      gsap.to(container, { backgroundColor: "#000", duration: 0.5 });
      gsap.to(text, { color: "#fff", duration: 0.5 });

      gsap.to(rectRef.current, { fill: "transparent", stroke: "#fff", duration: 0.5 });
      gsap.to(hillRef.current, { stroke: "#fff", fill: "transparent", duration: 0.5 });

      gsap.to(moonCircleRef.current, {
        y: -10,
        fill: "#fff",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(maskCircleRef.current, {
        x: -10,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(container, { backgroundColor: IDENTITY_ON_PINK, duration: 0.5 });
      gsap.to(text, { color: IDENTITY_PINK, duration: 0.5 });

      gsap.to(rectRef.current, { fill: IDENTITY_ON_PINK, stroke: "none", duration: 0.5 });
      gsap.to(hillRef.current, { fill: "#c1277a", stroke: "none", duration: 0.5 });

      gsap.to(moonCircleRef.current, {
        y: 0,
        fill: IDENTITY_ON_PINK,
        duration: 0.3,
        ease: "power2.inOut",
      });

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
      className="relative rounded-lg p-6 overflow-hidden "
      style={{
        backgroundColor: IDENTITY_ON_PINK,
        color: IDENTITY_PINK,
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        marginTop: "-3.5vw",
      }}
    >
      <h2 className="text-2xl font-bold mb-4" style={{ color: IDENTITY_PINK }}>
        Imagery
      </h2>
      <div className="absolute bottom-4 right-4" style={{ width: 80, height: 80 }}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            ref={rectRef}
            width="100"
            height="100"
            fill={IDENTITY_ON_PINK}
            opacity={1}
          />
          <g>
            <circle
              ref={moonCircleRef}
              cx="70"
              cy="35"
              r="10"
              fill={IDENTITY_ON_PINK}
            />
            <circle
              ref={maskCircleRef}
              cx="70"
              cy="35"
              r="10"
              fill="#000"
            />
          </g>
          <path
            ref={hillRef}
            d="M0,60 Q25,45 50,60 Q75,75 100,55 L100,100 L0,100 Z"
            fill="#c1277a"
          />
        </svg>
      </div>
    </div>
  );
};

export default Imagery;
