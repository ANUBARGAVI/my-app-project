import React from 'react';

const DropboxIcon = () => {
  return (
    <div className="bg-blue-600 text-white p-2 flex items-center justify-center w-10 h-10 rounded">
      <svg
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="currentColor"
      >
        <path d="M32 10L64 30L32 50L0 30L32 10ZM96 10L128 30L96 50L64 30L96 10ZM0 66L32 86L64 66L32 46L0 66ZM96 86L128 66L96 46L64 66L96 86ZM32 90L64 110L96 90L64 70L32 90Z" />
      </svg>
    </div>
  );
};

export default DropboxIcon;
