import React from 'react';

const Chevron = ({ ...props }) => {
  return (
    <svg
      width={24}
      height={24}
      stroke-width="3"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
      {...props}
    >
      <path
        d="M6 9l6 6 6-6"
        // stroke="#000000"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

export default Chevron;
