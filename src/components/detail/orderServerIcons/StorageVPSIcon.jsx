// StorageVPSIcon.js
import React from "react";

function StorageVPSIcon(props) {
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <path d="M8 21V9l4 4 4-4v12" />
    </svg>
  );
}

export default StorageVPSIcon;
