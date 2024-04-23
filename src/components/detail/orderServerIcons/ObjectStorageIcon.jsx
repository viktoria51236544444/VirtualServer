// ObjectStorageIcon.js
import React from "react";

function ObjectStorageIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
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
      <path d="M12 5v13M5 12l7 7 7-7" />
    </svg>
  );
}

export default ObjectStorageIcon;
