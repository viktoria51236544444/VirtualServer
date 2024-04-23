// CloudVDSIcon.js
import React from "react";

function CloudVDSIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "" }}
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 8V12M4 8V12M14 6H10M14 18H10M14 12H10M4 18V16C4 14.9391 4.42143 13.9217 5.17157 13.1716C5.92172 12.4214 6.93913 12 8 12H16C17.0609 12 18.0783 12.4214 18.8284 13.1716C19.5786 13.9217 20 14.9391 20 16V18M20 18H20.01M20 18L20 18Z" />
    </svg>
  );
}

export default CloudVDSIcon;
