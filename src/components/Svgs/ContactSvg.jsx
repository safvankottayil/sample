import React from "react";

function Contact({ Active }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M21.6297 9.25551V16.0955C21.6297 17.2155 21.0297 18.2555 20.0597 18.8255L14.1197 22.2555C13.1497 22.8155 11.9497 22.8155 10.9697 22.2555L5.02972 18.8255C4.05972 18.2655 3.45972 17.2255 3.45972 16.0955V9.25551C3.45972 8.13551 4.05972 7.09547 5.02972 6.52547L10.9697 3.09548C11.9397 2.53548 13.1397 2.53548 14.1197 3.09548L20.0597 6.52547C21.0297 7.09547 21.6297 8.12551 21.6297 9.25551Z"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5497 11.6755C13.8365 11.6755 14.8797 10.6323 14.8797 9.34546C14.8797 8.05864 13.8365 7.0155 12.5497 7.0155C11.2629 7.0155 10.2197 8.05864 10.2197 9.34546C10.2197 10.6323 11.2629 11.6755 12.5497 11.6755Z"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5498 17.3354C16.5498 15.5354 14.7598 14.0755 12.5498 14.0755C10.3398 14.0755 8.5498 15.5354 8.5498 17.3354"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Contact;
