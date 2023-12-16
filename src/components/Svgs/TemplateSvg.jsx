import React from "react";

function Template({Active,width}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width?width:'25'}
      height={width?width:'25'}
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M2.5498 9.17548C2.5498 5.67548 4.5498 4.17548 7.5498 4.17548H17.5498C20.5498 4.17548 22.5498 5.67548 22.5498 9.17548V16.1755C22.5498 19.6755 20.5498 21.1755 17.5498 21.1755H7.5498"
        stroke={Active}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5498 9.67548L14.4198 12.1755C13.3898 12.9955 11.6998 12.9955 10.6698 12.1755L7.5498 9.67548"
        stroke={Active}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.5498 17.1755H8.5498"
        stroke={Active}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.5498 13.1755H5.5498"
        stroke={Active}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Template;
