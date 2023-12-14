import React from "react";

function DotSvg({ fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="6"
      viewBox="0 0 7 6"
      fill={fill}
    >
      <path
        d="M6.5498 3C6.5498 4.65685 5.20666 6 3.5498 6C1.89295 6 0.549805 4.65685 0.549805 3C0.549805 1.34315 1.89295 0 3.5498 0C5.20666 0 6.5498 1.34315 6.5498 3Z"
        fill={fill}
      />
    </svg>
  );
}

export default DotSvg;
