'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Logo = () => {
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.set(logoRef.current, {
        opacity: 0,
        rotateX: -90, // initial pivot (like a flap closed)
        transformOrigin: 'center bottom', // pivot from bottom edge
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
      className="relative bg-cyan-400 text-sky-900 p-4 h-48 flex items-center justify-center w-48 rounded-lg cursor-pointer [perspective:800px]"
    >
      <h2 className="text-2xl font-bold">Logo</h2>

      <img
        ref={logoRef}
        src="dropbox.svg"
        alt="Dropbox Logo"
        className="absolute bottom-2 left-2 w-8 h-8"
        style={{
          opacity: 0,
          transformStyle: 'preserve-3d',
        }}
      />
    </div>
  );
};

export default Logo;