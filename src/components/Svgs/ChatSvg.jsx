import React from "react";

function Chat({ Active }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={Active=='white'?Active:"none"}
    >
      <path
        d="M17 9.67548C17 13.5455 13.64 16.6755 9.5 16.6755L8.57001 17.7955L8.02 18.4555C7.55 19.0155 6.65 18.8955 6.34 18.2255L5 15.2755C3.18 13.9955 2 11.9655 2 9.67548C2 5.80548 5.36 2.67548 9.5 2.67548C12.52 2.67548 15.13 4.34548 16.3 6.74548C16.75 7.63548 17 8.62548 17 9.67548Z"
        stroke={Active=='white'?'':Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.9998 13.5355C21.9998 15.8255 20.8198 17.8555 18.9998 19.1355L17.6598 22.0854C17.3498 22.7554 16.4498 22.8855 15.9798 22.3155L14.4998 20.5355C12.0798 20.5355 9.91982 19.4655 8.56982 17.7955L9.49982 16.6755C13.6398 16.6755 16.9998 13.5455 16.9998 9.67548C16.9998 8.62548 16.7498 7.63548 16.2998 6.74548C19.5698 7.49548 21.9998 10.2555 21.9998 13.5355Z"
        stroke={Active=='white'?'':Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 9.67548H12"
        stroke={Active=='white'?'#176AF2':Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Chat;
