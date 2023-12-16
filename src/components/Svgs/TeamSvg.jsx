import React from "react";

function Team({ Active,width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width?width:'25'}
      height={width?width:'25'}
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M9.70986 11.5455C9.60986 11.5355 9.48986 11.5355 9.37986 11.5455C6.99986 11.4655 5.10986 9.51548 5.10986 7.11548C5.10986 4.66548 7.08986 2.67548 9.54986 2.67548C11.9999 2.67548 13.9899 4.66548 13.9899 7.11548C13.9799 9.51548 12.0899 11.4655 9.70986 11.5455Z"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.9598 4.67548C18.8998 4.67548 20.4598 6.24548 20.4598 8.17548C20.4598 10.0655 18.9598 11.6055 17.0898 11.6755C17.0098 11.6655 16.9198 11.6655 16.8298 11.6755"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.70978 15.2355C2.28978 16.8555 2.28978 19.4955 4.70978 21.1055C7.45978 22.9455 11.9698 22.9455 14.7198 21.1055C17.1398 19.4855 17.1398 16.8455 14.7198 15.2355C11.9798 13.4055 7.46978 13.4055 4.70978 15.2355Z"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.8899 20.6755C19.6099 20.5255 20.2899 20.2355 20.8499 19.8055C22.4099 18.6355 22.4099 16.7055 20.8499 15.5355C20.2999 15.1155 19.6299 14.8355 18.9199 14.6755"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Team;
