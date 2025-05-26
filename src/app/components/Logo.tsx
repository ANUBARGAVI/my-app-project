'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Logo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.set(logoRef.current, {
        opacity: 0,
        rotateX: -90,
        transformOrigin: 'center bottom',
      });
    }
  }, []);

  const handleMouseEnter = () => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className="relative bg-cyan-400 text-sky-900 p-4 h-48 w-48 rounded-lg cursor-pointer [perspective:800px]"
    >
      {/* Top-left logo text */}
      <h2 className="absolute top-2 left-2 text-lg font-bold">Logo</h2>

      {/* Bottom-right animated SVG */}
      <img
        ref={logoRef}
        src="dropbox.svg"
        alt="Dropbox Logo"
        className="absolute bottom-2 right-2 w-8 h-8"
        style={{
          opacity: 0,
          transformStyle: 'preserve-3d',
        }}
      />
    </div>
  );
};

export default Logo;
