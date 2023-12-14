import React from "react";

function Broadcast({ Active }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M12.5498 14.6755C13.6544 14.6755 14.5498 13.78 14.5498 12.6755C14.5498 11.5709 13.6544 10.6755 12.5498 10.6755C11.4452 10.6755 10.5498 11.5709 10.5498 12.6755C10.5498 13.78 11.4452 14.6755 12.5498 14.6755Z"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5498 18.6755C21.8098 17.0055 22.5498 14.9255 22.5498 12.6755C22.5498 10.4255 21.8098 8.34548 20.5498 6.67548"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.5498 6.67548C3.2898 8.34548 2.5498 10.4255 2.5498 12.6755C2.5498 14.9255 3.2898 17.0055 4.5498 18.6755"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.3499 16.2755C18.0999 15.2755 18.5499 14.0255 18.5499 12.6755C18.5499 11.3255 18.0999 10.0755 17.3499 9.07547"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.74982 9.07547C6.99982 10.0755 6.5498 11.3255 6.5498 12.6755C6.5498 14.0255 6.99982 15.2755 7.74982 16.2755"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Broadcast;
