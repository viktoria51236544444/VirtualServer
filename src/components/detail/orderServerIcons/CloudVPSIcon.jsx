// CloudVPSIcon.js
import React from "react";
function CloudVPSIcon(props) {
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
      <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4l2 3h6a2 2 0 012 2v11a2 2 0 01-2 2z" />
    </svg>
  );
}

export default CloudVPSIcon;
