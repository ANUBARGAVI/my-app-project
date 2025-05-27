'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

type VoiceToneProps = {
  width?: number | string;
  height?: number | string;
  size?: number | string; // for icon/quote size
};

const VoiceTone: React.FC<VoiceToneProps> = ({
  width = '28vw',
  height = '40vh',
  size = 'clamp(4rem, 20vw, 10rem)',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteContainerRef = useRef<HTMLDivElement>(null);
  const leftQuoteRef = useRef<HTMLSpanElement>(null);
  const rightQuoteRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      gsap.set(containerRef.current, { backgroundColor: '#fad24b' });
    }
    if (leftQuoteRef.current && rightQuoteRef.current) {
      gsap.set([leftQuoteRef.current, rightQuoteRef.current], {
        color: '#684505',
        WebkitTextStroke: '0px transparent',
        opacity: 1,
      });
    }
    if (rightQuoteRef.current) {
      gsap.set(rightQuoteRef.current, { y: 20 });
    }
    if (titleRef.current) {
      gsap.set(titleRef.current, { color: '#684505' });
    }
  }, []);

  const handleMouseEnter = () => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.out' } });
    tl.to(containerRef.current, { backgroundColor: '#000000' }, 0);
    tl.to(titleRef.current, { color: '#FFFFFF' }, 0);
    tl.to(leftQuoteRef.current, {
      x: 20,
      color: 'transparent',
      WebkitTextStroke: '2px white',
    }, 0);
    tl.to(rightQuoteRef.current, {
      x: -20,
      y: 20,
      color: 'transparent',
      WebkitTextStroke: '2px white',
    }, 0);
  };

  const handleMouseLeave = () => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.out' } });
    tl.to(containerRef.current, { backgroundColor: '#fad24b' }, 0);
    tl.to(titleRef.current, { color: '#8B4513' }, 0);
    tl.to(leftQuoteRef.current, {
      x: 0,
      color: '#8B4513',
      WebkitTextStroke: '0px transparent',
    }, 0);
    tl.to(rightQuoteRef.current, {
      x: 0,
      y: 20,
      color: '#8B4513',
      WebkitTextStroke: '0px transparent',
    }, 0);
  };

  return (
    <div
      ref={containerRef}
      className="text-white p-6  rounded-lg w-full  mx-auto h-full"
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        margin: '0',
      }}
    >
      <h2
        ref={titleRef}
        className="text-lg font-bold  mb-1 select-none"
      >
        Voice & Tone
      </h2>

      <div
        ref={quoteContainerRef}
        className="flex justify-between items-center space-x-10 px-2 cursor-pointer select-none overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span
          ref={leftQuoteRef}
          className="leading-none font-serif flex-shrink-0"
          style={{
            fontSize: typeof size === 'number' ? `${size}px` : size,
            fontWeight: 700,
            lineHeight: '0.5',
          }}
        >
          “
        </span>
        <span
          ref={rightQuoteRef}
          className="leading-none font-serif relative flex-shrink-0"
          style={{
            fontSize: typeof size === 'number' ? `${size}px` : size,
            fontWeight: 900,
            lineHeight: '1',
            top: '20px',
          }}
        >
          ”
        </span>
      </div>
    </div>
  );
};

export default VoiceTone;
