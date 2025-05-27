// "use client";
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";

// type TypographyProps = {
//   width?: number | string;
//   height?: number | string;
//   svgSize?: number | string;
// };

// const Typography: React.FC<TypographyProps> = ({
//   width = '23vw',
//   height = '41vh',
//   svgSize = '80%',
// }) => {
//   const textRef = useRef<SVGTextElement>(null);

//   useEffect(() => {
//     const letters = textRef.current;

//     const handleEnter = () => {
//       gsap.to(letters, {
//         fill: "#000000",
//         stroke: "#ffffff",
//         strokeWidth: 4,
//         scale: 1,
//         duration: 0.3,
//         ease: "power3.out",
//       });
//     };

//     const handleLeave = () => {
//       gsap.to(letters, {
//         fill: "#4e0119",
//         stroke: "transparent",
//         strokeWidth: 0,
//         scale: 1,
//         duration: 0.3,
//         ease: "power3.out",
//       });
//     };

//     const container = document.querySelector(".typography-container");
//     if (container) {
//       container.addEventListener("mouseenter", handleEnter);
//       container.addEventListener("mouseleave", handleLeave);
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener("mouseenter", handleEnter);
//         container.removeEventListener("mouseleave", handleLeave);
//       }
//     };
//   }, []);

//   return (
//     <div
//       className="
//         typography-container group relative bg-orange-600 p-6
//         flex flex-col items-start justify-start
//         transition-colors duration-500 hover:bg-black
//         overflow-hidden
//       "
//       style={{
//         width: typeof width === "number" ? `${width}px` : width,
//         height: typeof height === "number" ? `${height}px` : height,
//         margin: "0 5vw",
//         padding: "0 2rem ",
//       }}
//     >
//       <h2
//         className="
//           text-2xl font-bold tracking-wide leading-tight text-[#4e0119]
//           transition-colors duration-500
//           group-hover:text-white
//           mb-4
//         "
//       >
//         Typography
//       </h2>

//       <svg
//         className="absolute bottom-2 right-2 overflow-visible"
//         width={svgSize}
//         height={svgSize}
//         viewBox="0 0 160 160"
//       >
//         <text
//           ref={textRef}
//           x="40"
//           y="160"
//           fontSize="80"
//           fontFamily="Arial, sans-serif"
//           fontWeight="bold"
//           fill="#4e0119"
//           style={{ transformOrigin: "left center" , padding :"0 1rem"} }
//         >
//           Aa
//         </text>
//       </svg>
//     </div>
//   );
// };

// export default Typography;

"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

type TypographyProps = {
  width?: number | string;
  height?: number | string;
  svgSize?: number | string;
};

const Typography: React.FC<TypographyProps> = ({
  width = "23vw",
  height = "41vh",
  svgSize = "80%",
}) => {
  const textRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    const letters = textRef.current;

    const handleEnter = () => {
      gsap.to(letters, {
        fill: "#000000",
        stroke: "#ffffff",
        strokeWidth: 4,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(letters, {
        fill: "#4e0119",
        stroke: "transparent",
        strokeWidth: 0,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const container = document.querySelector(".typography-container");
    if (container) {
      container.addEventListener("mouseenter", handleEnter);
      container.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleEnter);
        container.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, []);

  return (
    <div
      className="
        typography-container group relative bg-orange-600
        hover:bg-black transition-colors duration-500
        overflow-hidden
        flex flex-col
      "
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        margin: "0 5vw",
        padding: "1rem",
      }}
    >
      <h2
        className="
          text-2xl font-bold tracking-wide leading-tight text-[#4e0119]
          transition-colors duration-500
          group-hover:text-white
          m-0 p-0
        "
        style={{
          alignSelf: "flex-start",
        }}
      >
        Typography
      </h2>

      <svg
        className="absolute bottom-2 right-2 overflow-visible"
        width={svgSize}
        height={svgSize}
        viewBox="0 0 160 160"
      >
        <text
          ref={textRef}
          x="40"
          y="160"
          fontSize="80"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fill="#4e0119"
          style={{
            transformOrigin: "left center",
          }}
        >
          Aa
        </text>
      </svg>
    </div>
  );
};

export default Typography;
