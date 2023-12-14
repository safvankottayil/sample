import React from "react";

function Automations({ Active }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M5.5498 9.67548V16.6755"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.7998 9.17548C7.59473 9.17548 9.0498 7.7204 9.0498 5.92548C9.0498 4.13055 7.59473 2.67548 5.7998 2.67548C4.00488 2.67548 2.5498 4.13055 2.5498 5.92548C2.5498 7.7204 4.00488 9.17548 5.7998 9.17548Z"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.5498 22.6755C7.20666 22.6755 8.5498 21.3323 8.5498 19.6755C8.5498 18.0186 7.20666 16.6755 5.5498 16.6755C3.89295 16.6755 2.5498 18.0186 2.5498 19.6755C2.5498 21.3323 3.89295 22.6755 5.5498 22.6755Z"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.5498 22.6755C21.2067 22.6755 22.5498 21.3323 22.5498 19.6755C22.5498 18.0186 21.2067 16.6755 19.5498 16.6755C17.893 16.6755 16.5498 18.0186 16.5498 19.6755C16.5498 21.3323 17.893 22.6755 19.5498 22.6755Z"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.67969 9.67548C6.12969 11.4255 7.72969 12.7255 9.61969 12.7155L13.0497 12.7055C15.6697 12.6955 17.8997 14.3755 18.7197 16.7155"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Automations;
