import React from "react";

function SettingsSvg({ Active }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M3.5498 9.78548V15.5555C3.5498 17.6755 3.5498 17.6755 5.5498 19.0255L11.0498 22.2055C11.8798 22.6855 13.2298 22.6855 14.0498 22.2055L19.5498 19.0255C21.5498 17.6755 21.5498 17.6755 21.5498 15.5655V9.78548C21.5498 7.67548 21.5498 7.67548 19.5498 6.32548L14.0498 3.14548C13.2298 2.66548 11.8798 2.66548 11.0498 3.14548L5.5498 6.32548C3.5498 7.67548 3.5498 7.67548 3.5498 9.78548Z"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5498 15.6755C14.2067 15.6755 15.5498 14.3323 15.5498 12.6755C15.5498 11.0186 14.2067 9.67548 12.5498 9.67548C10.893 9.67548 9.5498 11.0186 9.5498 12.6755C9.5498 14.3323 10.893 15.6755 12.5498 15.6755Z"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default SettingsSvg;
