import React from 'react';

type DropboxIconProps = {
  width?: number | string;
  height?: number | string;
  svgSize?: number | string;
};

const DropboxIcon: React.FC<DropboxIconProps> = ({
  width = '5vw',
  height = '13vh',
  svgSize = '40',
}) => {
  return (
    <div
      className="bg-blue-600 text-white flex items-center justify-center rounded"
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        minWidth: typeof width === 'number' ? `${width}px` : width,
        minHeight: typeof height === 'number' ? `${height}px` : height,
        padding: 8,
        marginTop: '-64vh',
        marginLeft: '127%',
      }}
    >
      <svg
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: typeof svgSize === 'number' ? `${svgSize}px` : svgSize,
          height: typeof svgSize === 'number' ? `${svgSize}px` : svgSize,
        }}
        fill="currentColor"
      >
        <path d="M32 10L64 30L32 50L0 30L32 10ZM96 10L128 30L96 50L64 30L96 10ZM0 66L32 86L64 66L32 46L0 66ZM96 86L128 66L96 46L64 66L96 86ZM32 90L64 110L96 90L64 70L32 90Z" />
      </svg>
    </div>
  );
};

export default DropboxIcon;
