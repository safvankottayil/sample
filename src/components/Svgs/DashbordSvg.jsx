import React from "react";

function Dachbord({Active}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill={Active=='black'?'none':Active}
    >
      <path
        d="M22.5498 9.19548V4.65548C22.5498 3.24548 21.9098 2.67548 20.3198 2.67548H16.2798C14.6898 2.67548 14.0498 3.24548 14.0498 4.65548V9.18548C14.0498 10.6055 14.6898 11.1655 16.2798 11.1655H20.3198C21.9098 11.1755 22.5498 10.6055 22.5498 9.19548Z"
        stroke= {Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.5498 20.4455V16.4055C22.5498 14.8155 21.9098 14.1755 20.3198 14.1755H16.2798C14.6898 14.1755 14.0498 14.8155 14.0498 16.4055V20.4455C14.0498 22.0355 14.6898 22.6755 16.2798 22.6755H20.3198C21.9098 22.6755 22.5498 22.0355 22.5498 20.4455Z"
        stroke= {Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.0498 9.19548V4.65548C11.0498 3.24548 10.4098 2.67548 8.81981 2.67548H4.7798C3.1898 2.67548 2.5498 3.24548 2.5498 4.65548V9.18548C2.5498 10.6055 3.1898 11.1655 4.7798 11.1655H8.81981C10.4098 11.1755 11.0498 10.6055 11.0498 9.19548Z"
        stroke= {Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.0498 20.4455V16.4055C11.0498 14.8155 10.4098 14.1755 8.81981 14.1755H4.7798C3.1898 14.1755 2.5498 14.8155 2.5498 16.4055V20.4455C2.5498 22.0355 3.1898 22.6755 4.7798 22.6755H8.81981C10.4098 22.6755 11.0498 22.0355 11.0498 20.4455Z"
        stroke= {Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Dachbord;
