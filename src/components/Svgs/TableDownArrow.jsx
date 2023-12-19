import React from "react";

function TableDownArrow({ width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width?width:'17'}
      height={width?width-1:'16'}
      viewBox="0 0 17 16"
      fill="none"
    >
      <path
        d="M12.5057 9.62L8.45899 13.6667L4.41232 9.62"
        stroke="#1C1C1C"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.45898 2.33331V13.5533"
        stroke="#1C1C1C"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default TableDownArrow;
