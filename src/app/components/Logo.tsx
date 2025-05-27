// // 'use client';
// // import React, { useRef } from 'react';
// // import gsap from 'gsap';

// // type LogoProps = {
// //   width?: number | string;
// //   height?: number | string;
// //   svgSize?: number | string;
// // };

// // const Logo: React.FC<LogoProps> = ({
// //   width = '23vw',   // default 12rem (w-48)
// //   height = '55vh',  // default 12rem (h-48)
// //   svgSize = 40,
// // }) => {
// //   const logoRef = useRef<SVGSVGElement>(null);
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const textRef = useRef<HTMLHeadingElement>(null);
// //   const svgPathRef = useRef<SVGPathElement>(null);

// //   const handleMouseEnter = () => {
// //     gsap.to(containerRef.current, {
// //       backgroundColor: '#000',
// //       duration: 0.5,
// //     });

// //     gsap.to(textRef.current, {
// //       color: '#fff',
// //       duration: 0.5,
// //     });

// //     gsap.to(svgPathRef.current, {
// //       fill: '#000',
// //       stroke: '#fff',
// //       strokeWidth: 2,
// //       duration: 0.5,
// //     });
// //   };

// //   const handleMouseLeave = () => {
// //     gsap.to(containerRef.current, {
// //       backgroundColor: 'rgb(6, 182, 212)', // cyan-400
// //       duration: 0.5,
// //     });

// //     gsap.to(textRef.current, {
// //       color: 'rgb(14, 116, 144)', // sky-900
// //       duration: 0.5,
// //     });

// //     gsap.to(svgPathRef.current, {
// //       fill: 'currentColor',
// //       stroke: 'none',
// //       duration: 0.5,
// //     });
// //   };

// //   return (
// //     <div
// //       ref={containerRef}
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //       className="bg-cyan-400 text-sky-900 p-4 rounded-lg cursor-pointer flex flex-col gap-2"
// //       style={{
// //         width: typeof width === 'number' ? `${width}px` : width,
// //         height: typeof height === 'number' ? `${height}px` : height,
// //         overflow: 'hidden',
// //         margin: '0 5vw',

// //       }}
// //     >
// //       <h2 ref={textRef} className="text-lg font-bold mb-2">Logo</h2>
// //       <svg
// //         ref={logoRef}
// //         viewBox="0 0 128 128"
// //         style={{
// //           width: typeof svgSize === 'number' ? `${svgSize}px` : svgSize,
// //           height: typeof svgSize === 'number' ? `${svgSize}px` : svgSize,
// //           display: 'block',
// //         }}
// //       >
// //         <path
// //           ref={svgPathRef}
// //           d="M32 10L64 30L32 50L0 30L32 10ZM96 10L128 30L96 50L64 30L96 10ZM0 66L32 86L64 66L32 46L0 66ZM96 86L128 66L96 46L64 66L96 86ZM32 90L64 110L96 90L64 70L32 90Z"
// //           fill="currentColor"
// //           stroke="none"
// //         />
// //       </svg>
// //     </div>
// //   );
// // };

// // export default Logo;

// 'use client';
// import React, { useRef } from 'react';
// import gsap from 'gsap';

// type LogoProps = {
//   width?: number | string;
//   height?: number | string;
//   svgSize?: number | string;
// };

// const Logo: React.FC<LogoProps> = ({
//   width = '23vw',
//   height = '55vh',
//   svgSize = 40,
// }) => {
//   const logoRef = useRef<SVGSVGElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLHeadingElement>(null);
//   const svgPathRef = useRef<SVGPathElement>(null);

//   const handleMouseEnter = () => {
//     gsap.to(containerRef.current, {
//       backgroundColor: '#000',
//       duration: 0.5,
//     });

//     gsap.to(textRef.current, {
//       color: '#fff',
//       duration: 0.5,
//     });

//     gsap.to(svgPathRef.current, {
//       fill: '#000',
//       stroke: '#fff',
//       strokeWidth: 2,
//       duration: 0.5,
//     });
//   };

//   const handleMouseLeave = () => {
//     gsap.to(containerRef.current, {
//       backgroundColor: 'rgb(6, 182, 212)', // cyan-400
//       duration: 0.5,
//     });

//     gsap.to(textRef.current, {
//       color: 'rgb(14, 116, 144)', // sky-900
//       duration: 0.5,
//     });

//     gsap.to(svgPathRef.current, {
//       fill: 'currentColor',
//       stroke: 'none',
//       duration: 0.5,
//     });
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="relative bg-cyan-400 text-sky-900 p-4 rounded-lg cursor-pointer flex flex-col gap-2"
//       style={{
//         width: typeof width === 'number' ? `${width}px` : width,
//         height: typeof height === 'number' ? `${height}px` : height,
//         overflow: 'hidden',
//         margin: '0 5vw',
//       }}
//     >
//       <h2 ref={textRef} className="text-lg font-bold mb-2">Logo</h2>

//       {/* SVG moved to bottom right */}
//       <svg
//         ref={logoRef}
//         viewBox="0 0 128 128"
//         className="absolute bottom-4 right-4"
//         style={{
//           width: typeof svgSize === 'number' ? `${svgSize}px` : svgSize,
//           height: typeof svgSize === 'number' ? `${svgSize}px` : svgSize,
//         }}
//       >
//         <path
//           ref={svgPathRef}
//           d="M32 10L64 30L32 50L0 30L32 10ZM96 10L128 30L96 50L64 30L96 10ZM0 66L32 86L64 66L32 46L0 66ZM96 86L128 66L96 46L64 66L96 86ZM32 90L64 110L96 90L64 70L32 90Z"
//           fill="currentColor"
//           stroke="none"
//         />
//       </svg>
//     </div>
//   );
// };

// export default Logo;

'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';

type LogoProps = {
  width?: number | string;
  height?: number | string;
  svgSize?: number | string;
};

const Logo: React.FC<LogoProps> = ({
  width = '23vw',
  height = '55vh',
  svgSize = 60, // increased from 40 to 60
}) => {
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
      backgroundColor: '#3dd3ee',
      duration: 0.5,
    });

    gsap.to(textRef.current, {
      color: '#055463',
      duration: 0.5,
    });

    gsap.to(svgPathRef.current, {
      fill: '#055463',
      stroke: 'none',
      duration: 0.5,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative bg-[#3dd3ee] text-[#055463] p-4 rounded-lg cursor-pointer flex flex-col gap-2"
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        overflow: 'hidden',
        margin: '0 5vw',
      }}
    >
      {/* <h2 ref={textRef} className="text-lg font-bold mb-2">Logo</h2> */}
      <h2
  ref={textRef}
  className="text-lg font-bold mb-2"
  style={{
    fontFamily: 'Arial, sans-serif',
    fontWeight: 700,
  }}
>
  Logo
</h2>


      {/* SVG in bottom right, larger with scale */}
      <svg
        ref={logoRef}
        viewBox="0 0 128 128"
        className="absolute bottom-4 right-8 scale-150"
        style={{
          width: typeof svgSize === 'number' ? `${svgSize}px` : svgSize,
          height: typeof svgSize === 'number' ? `${svgSize}px` : svgSize,
        }}
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
