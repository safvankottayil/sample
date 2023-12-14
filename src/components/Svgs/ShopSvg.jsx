import React from "react";

function Shop({ Active }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M3.55981 11.8955V16.3855C3.55981 20.8755 5.35981 22.6755 9.84981 22.6755H15.2398C19.7298 22.6755 21.5298 20.8755 21.5298 16.3855V11.8955"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5498 12.6755C14.3798 12.6755 15.7298 11.1855 15.5498 9.35548L14.8898 2.67548H10.2198L9.54979 9.35548C9.36979 11.1855 10.7198 12.6755 12.5498 12.6755Z"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.8599 12.6755C20.8799 12.6755 22.3599 11.0355 22.1599 9.02548L21.8799 6.27548C21.5199 3.67548 20.5199 2.67548 17.8999 2.67548H14.8499L15.5499 9.68548C15.7199 11.3355 17.2099 12.6755 18.8599 12.6755Z"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.18969 12.6755C7.83969 12.6755 9.32969 11.3355 9.48969 9.68548L9.70969 7.47548L10.1897 2.67548H7.13969C4.51969 2.67548 3.51969 3.67548 3.15969 6.27548L2.88969 9.02548C2.68969 11.0355 4.16969 12.6755 6.18969 12.6755Z"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5498 17.6755C10.8798 17.6755 10.0498 18.5055 10.0498 20.1755V22.6755H15.0498V20.1755C15.0498 18.5055 14.2198 17.6755 12.5498 17.6755Z"
        stroke={Active}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Shop;
