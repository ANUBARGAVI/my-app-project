'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

type MotionProps = {
  width?: number | string;
  height?: number | string;
  svgSize?: number | string;
};

const Motion: React.FC<MotionProps> = ({
  width = '23vw',
  height = '65vh',
  svgSize = 180,
}) => {
  const leftBottom = useRef<SVGCircleElement>(null);
  const rightBottom = useRef<SVGCircleElement>(null);
  const leftTop = useRef<SVGCircleElement>(null);
  const rightTop = useRef<SVGCircleElement>(null);
  const curve = useRef<SVGPathElement>(null);
  const lineTop = useRef<SVGLineElement>(null);
  const lineBottom = useRef<SVGLineElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    // Animate circles (rod ends)
    tl.to(leftBottom.current, { attr: { cx: 5 }, duration: 0.5, ease: 'power2.out' }, 0);
    tl.to(rightBottom.current, { attr: { cx: 45 }, duration: 0.5, ease: 'power2.out' }, 0);
    tl.to(leftTop.current, { attr: { cx: 75 }, duration: 0.5, ease: 'power2.out' }, 0);
    tl.to(rightTop.current, { attr: { cx: 115 }, duration: 0.5, ease: 'power2.out' }, 0);

    // Animate lines to connect circle edges (radius = 5)
    tl.to(lineBottom.current, {
      attr: { x1: 10, x2: 40 },
      duration: 0.5,
      ease: 'power2.out',
    }, 0);

    tl.to(lineTop.current, {
      attr: { x1: 80, x2: 110 },
      duration: 0.5,
      ease: 'power2.out',
    }, 0);

    // Animate curve to start/end at circle edges
    tl.to(curve.current, {
      attr: { d: 'M10 90 C 40 60, 80 60, 110 30' },
      duration: 0.5,
      ease: 'power2.out'
    }, 0);

    // Style changes
    tl.to(container.current, { backgroundColor: '#000000', duration: 0.5 }, 0);
    tl.to(title.current, { color: '#ffffff', duration: 0.5 }, 0);

    // Lines and path color change to white
    tl.to([lineTop.current, lineBottom.current, curve.current], { stroke: '#ffffff', duration: 0.5 }, 0);

    // Circles stroke/fill changes
    tl.to([leftBottom.current, rightBottom.current, leftTop.current, rightTop.current], {
      fill: 'transparent',
      stroke: '#ffffff',
      strokeWidth: 2,
      duration: 0.5,
    }, 0);

    const el = container.current;
    if (!el) return;

    const onMouseEnter = () => tl.play();
    const onMouseLeave = () => tl.reverse();

    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div
  ref={container}
  className="rounded-md p-4 bg-[#c8aff0] text-[#682760]
             flex flex-col items-start justify-start
             cursor-pointer transition-colors duration-300"
  style={{
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    marginLeft: '4.5vw',
    marginTop: '-20vh',
  }}
>
  <h2
    ref={title}
    className="text-2xl font-bold m-0 p-0"
    style={{ alignSelf: "flex-start" }}
  >
    Motion
  </h2>


      <svg
        viewBox="0 0 120 120"
        className="block"
        style={{
          width: typeof svgSize === 'number' ? `${svgSize}px` : svgSize,
          height: typeof svgSize === 'number' ? `${svgSize}px` : svgSize,
        }}
      >
        {/* Rod lines adjusted for circle edges */}
        <line ref={lineBottom} x1="20" y1="90" x2="30" y2="90" stroke="#682760" strokeWidth="2" />
        <line ref={lineTop} x1="90" y1="30" x2="100" y2="30" stroke="#682760" strokeWidth="2" />

        {/* Circles (animated) */}
        <circle ref={leftBottom} cx="15" cy="90" r="5" fill="#682760" />
        <circle ref={rightBottom} cx="35" cy="90" r="5" fill="#682760" />
        <circle ref={leftTop} cx="85" cy="30" r="5" fill="#682760" />
        <circle ref={rightTop} cx="105" cy="30" r="5" fill="#682760" />

        {/* Curve adjusted for circle edges */}
        <path
          ref={curve}
          d="M20 90 C 45 60, 75 60, 100 30"
          stroke="#682760"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Motion;
