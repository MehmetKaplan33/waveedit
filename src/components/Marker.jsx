import React from "react";

export const Marker = ({ markerFill }) => {
  return (
    <svg
      width="12"
      height="24"
      viewBox="0 0 12 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="11.5"
        fill={markerFill || "#3B82F6"}
        stroke="url(#paint0_linear_4_51)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4_51"
          x1="12"
          y1="0"
          x2="12"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0885417" stopColor="#3B82F6" />
          <stop offset="0.854167" stopColor="#2563EB" />
        </linearGradient>
      </defs>
    </svg>
  );
};