import React from "react";

function SmailSvg({width}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width?width:'24'}
      height={width?width:'24'}
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M12.5198 22C18.0426 22 22.5198 17.5228 22.5198 12C22.5198 6.47715 18.0426 2 12.5198 2C6.99693 2 2.51978 6.47715 2.51978 12C2.51978 17.5228 6.99693 22 12.5198 22Z"
        stroke="#1C1C1C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.75977 16C8.80977 17.51 10.5698 18.5 12.5498 18.5C14.5298 18.5 16.2798 17.51 17.3398 16"
        stroke="#1C1C1C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default SmailSvg;
