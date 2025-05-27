// 'use client';
// import React, { useRef } from 'react';
// import { gsap } from 'gsap';

// const Framework = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const path1Ref = useRef<SVGPathElement>(null);
//   const path2Ref = useRef<SVGPathElement>(null);

//   const handleMouseEnter = () => {
//     gsap.to(containerRef.current, {
//       backgroundColor: '#000000',
//       duration: 0.5,
//     });

//     // Top-left to right-middle with loop
//     gsap.to(path1Ref.current, {
//       attr: {
//         d: 'M20,40 C60,0 100,-10 140,40 C160,70 200,90 230,100',
//         markerEnd: 'url(#arrow)',
//       },
//       stroke: 'white',
//       duration: 0.6,
//     });

//     // Bottom-left to right-middle with upward curve
//     gsap.to(path2Ref.current, {
//       attr: {
//         d: 'M20,180 C80,160 160,130 230,100',
//         markerEnd: 'url(#arrow)',
//       },
//       stroke: 'white',
//       duration: 0.6,
//     });
//   };

//   const handleMouseLeave = () => {
//     gsap.to(containerRef.current, {
//       backgroundColor: '#1E3A8A',
//       duration: 0.5,
//     });

//     gsap.to(path1Ref.current, {
//       attr: {
//         d: 'M20,40 L230,100',
//         markerEnd: '',
//       },
//       stroke: '#cbd5e1',
//       duration: 0.5,
//     });

//     gsap.to(path2Ref.current, {
//       attr: {
//         d: 'M20,180 L230,100',
//         markerEnd: '',
//       },
//       stroke: '#cbd5e1',
//       duration: 0.5,
//     });
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="p-4 h-[300px] w-[260px] rounded-md transition-colors duration-300"
//       style={{ backgroundColor: '#1E3A8A' }}
//     >
//       <h2 className="text-2xl font-bold mb-4 text-white">Framework</h2>
//       <svg width="260" height="200">
//         {/* Arrowhead marker */}
//         <defs>
//           <marker
//             id="arrow"
//             markerWidth="8"
//             markerHeight="8"
//             refX="5"
//             refY="4"
//             orient="auto"
//             markerUnits="strokeWidth"
//           >
//             <path d="M0,0 L8,4 L0,8 Z" fill="white" />
//           </marker>
//         </defs>

//         {/* Dots */}
//         <circle cx="20" cy="40" r="6" fill="#cbd5e1" />
//         <circle cx="20" cy="180" r="6" fill="#cbd5e1" />
//         <circle cx="230" cy="100" r="6" fill="#cbd5e1" />

//         {/* Paths */}
//         <path
//           ref={path1Ref}
//           d="M20,40 L230,100"
//           stroke="#cbd5e1"
//           strokeWidth="2"
//           fill="none"
//         />
//         <path
//           ref={path2Ref}
//           d="M20,180 L230,100"
//           stroke="#cbd5e1"
//           strokeWidth="2"
//           fill="none"
//         />
//       </svg>
//     </div>
//   );
// };

// export default Framework;

// 'use client';
// import React, { useRef } from 'react';
// import { gsap } from 'gsap';

// type FrameworkProps = {
//   width?: number | string;
//   height?: number | string;
//   svgSize?: number | string;
// };

// const Framework: React.FC<FrameworkProps> = ({
//   width = '23vw',
//   height = '60vh',
//   svgSize = 200,
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const path1Ref = useRef<SVGPathElement>(null);
//   const path2Ref = useRef<SVGPathElement>(null);

//   const handleMouseEnter = () => {
//     gsap.to(containerRef.current, {
//       backgroundColor: '#000000',
//       duration: 0.5,
//     });

//     gsap.to(path1Ref.current, {
//       attr: {
//         d: 'M20,40 C60,0 100,-10 140,40 C160,70 200,90 230,100',
//         markerEnd: 'url(#arrow)',
//       },
//       stroke: 'white',
//       duration: 0.6,
//     });

//     gsap.to(path2Ref.current, {
//       attr: {
//         d: 'M20,180 C80,160 160,130 230,100',
//         markerEnd: 'url(#arrow)',
//       },
//       stroke: 'white',
//       duration: 0.6,
//     });
//   };

//   const handleMouseLeave = () => {
//     gsap.to(containerRef.current, {
//       backgroundColor: '#1E3A8A',
//       duration: 0.5,
//     });

//     gsap.to(path1Ref.current, {
//       attr: {
//         d: 'M20,40 L230,100',
//         markerEnd: '',
//       },
//       stroke: '#cbd5e1',
//       duration: 0.5,
//     });

//     gsap.to(path2Ref.current, {
//       attr: {
//         d: 'M20,180 L230,100',
//         markerEnd: '',
//       },
//       stroke: '#cbd5e1',
//       duration: 0.5,
//     });
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="rounded-md transition-colors duration-300"
//       style={{
//         backgroundColor: '#1E3A8A',
//         width: typeof width === 'number' ? `${width}px` : width,
//         height: typeof height === 'number' ? `${height}px` : height,
//         padding: '2rem',
//         margin: '0 5px'
//       }}
//     >
//       <h2 className="text-2xl font-bold mb-4 text-white">Framework</h2>
//       <svg
//         width={svgSize}
//         height={svgSize}
//         style={{ display: 'block', maxWidth: '100%', height: 'auto' , fontWeight: '800',  }}
//       >
//         {/* Arrowhead marker */}
//         <defs>
//           <marker
//             id="arrow"
//             markerWidth="8"
//             markerHeight="8"
//             refX="5"
//             refY="4"
//             orient="auto"
//             markerUnits="strokeWidth"
//           >
//             <path d="M0,0 L8,4 L0,8 Z" fill="white" />
//           </marker>
//         </defs>

//         {/* Dots */}
//         <circle cx="20" cy="40" r="6" fill="#cbd5e1" />
//         <circle cx="20" cy="180" r="6" fill="#cbd5e1" />
//         <circle cx="230" cy="100" r="6" fill="#cbd5e1" />

//         {/* Paths */}
//         <path
//           ref={path1Ref}
//           d="M20,40 L230,100"
//           stroke="#cbd5e1"
//           strokeWidth="2"
//           fill="none"
//         />
//         <path
//           ref={path2Ref}
//           d="M20,180 L230,100"
//           stroke="#cbd5e1"
//           strokeWidth="2"
//           fill="none"
//         />
//       </svg>
//     </div>
//   );
// };

// export default Framework;

'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';

type FrameworkProps = {
  width?: number | string;
  height?: number | string;
  svgWidth?: number | string;
  svgHeight?: number | string;
};

const Framework: React.FC<FrameworkProps> = ({
  width = '22vw',
  height = '60vh',
  svgWidth = 250,
  svgHeight = 200,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);

  const handleMouseEnter = () => {
    gsap.to(containerRef.current, {
      backgroundColor: '#000000',
      duration: 0.5,
    });

    gsap.to(path1Ref.current, {
      attr: {
        d: 'M20,40 C60,0 100,-10 140,40 C160,70 200,90 230,100',
        markerEnd: 'url(#arrow)',
      },
      stroke: 'white',
      duration: 0.6,
    });

    gsap.to(path2Ref.current, {
      attr: {
        d: 'M20,180 C80,160 160,130 230,100',
        markerEnd: 'url(#arrow)',
      },
      stroke: 'white',
      duration: 0.6,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(containerRef.current, {
      backgroundColor: '#283750',
      duration: 0.5,
    });

    gsap.to(path1Ref.current, {
      attr: {
        d: 'M20,40 L230,100',
        markerEnd: '',
      },
      stroke: '#cbd5e1',
      duration: 0.5,
    });

    gsap.to(path2Ref.current, {
      attr: {
        d: 'M20,180 L230,100',
        markerEnd: '',
      },
      stroke: '#cbd5e1',
      duration: 0.5,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="rounded-md transition-colors duration-300"
      style={{
        backgroundColor: '#283750',
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        padding: '2rem',
        margin: '0 5px',
      }}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">Framework</h2>
      <svg
        width={typeof svgWidth === 'number' ? svgWidth : '260'}
        height={typeof svgHeight === 'number' ? svgHeight : '200'}
        style={{
          display: 'block',
          maxWidth: '100%',
          height: 'auto',
          fontWeight: '800',
        }}
      >
        {/* Arrowhead marker */}
        <defs>
          <marker
            id="arrow"
            markerWidth="8"
            markerHeight="8"
            refX="5"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="white" />
          </marker>
        </defs>

        {/* Dots */}
        <circle cx="20" cy="40" r="6" fill="#cbd5e1" />
        <circle cx="20" cy="180" r="6" fill="#cbd5e1" />
        <circle cx="230" cy="100" r="6" fill="#cbd5e1" />

        {/* Paths */}
        <path
          ref={path1Ref}
          d="M20,40 L230,100"
          stroke="#cbd5e1"
          strokeWidth="2"
          fill="none"
        />
        <path
          ref={path2Ref}
          d="M20,180 L230,100"
          stroke="#cbd5e1"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Framework;
