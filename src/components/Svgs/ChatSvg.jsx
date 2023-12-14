import React from "react";

function Chat({ Active }) {
  return (
    <svg
      className=""
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M22.5497 13.5355C22.5497 15.8255 21.3697 17.8555 19.5497 19.1355L18.2097 22.0855C17.8997 22.7555 16.9997 22.8855 16.5297 22.3155L15.0497 20.5355C13.1897 20.5355 11.4797 19.9055 10.1797 18.8555L10.7797 18.1455C15.3997 17.7955 19.0497 14.1355 19.0497 9.67547C19.0497 8.91547 18.9397 8.16547 18.7397 7.44547C21.0097 8.64547 22.5497 10.9255 22.5497 13.5355Z"
        fill={Active}
      />
      <path
        d="M16.8498 6.74548C15.6798 4.34548 13.0698 2.67548 10.0498 2.67548C5.9098 2.67548 2.5498 5.80548 2.5498 9.67548C2.5498 11.9655 3.7298 13.9955 5.5498 15.2755L6.8898 18.2255C7.1998 18.8955 8.09981 19.0155 8.56981 18.4555L9.1198 17.7955L10.0498 16.6755C14.1898 16.6755 17.5498 13.5455 17.5498 9.67548C17.5498 8.62548 17.2998 7.63548 16.8498 6.74548ZM12.5498 10.4255H7.5498C7.1398 10.4255 6.7998 10.0855 6.7998 9.67548C6.7998 9.26548 7.1398 8.92548 7.5498 8.92548H12.5498C12.9598 8.92548 13.2998 9.26548 13.2998 9.67548C13.2998 10.0855 12.9598 10.4255 12.5498 10.4255Z"
        fill={Active}
      />
    </svg>
  );
}

export default Chat;
