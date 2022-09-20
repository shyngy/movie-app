import React from 'react';

const LoadingItem = () => (
  <svg
    role="img"
    width="480"
    height="280"
    aria-labelledby="loading-aria"
    viewBox="0 0 480 280"
    preserveAspectRatio="none"
  >
    <title id="loading-aria">Loading...</title>
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      clipPath="url(#clip-path)"
      fill="url(#fill)"
    />
    <defs>
      <clipPath id="clip-path">
        <rect x="0" y="14" rx="2" ry="2" width="185" height="280" />
        <rect x="300" y="191" rx="0" ry="0" width="5" height="12" />
        <rect x="205" y="15" rx="2" ry="2" width="280" height="28" />
        <rect x="205" y="52" rx="2" ry="2" width="121" height="18" />
        <rect x="205" y="82" rx="2" ry="2" width="70" height="20" />
        <rect x="292" y="82" rx="2" ry="2" width="70" height="20" />
        <rect x="205" y="117" rx="2" ry="2" width="280" height="122" />
        <rect x="205" y="255" rx="0" ry="0" width="263" height="29" />
      </clipPath>
      <linearGradient id="fill">
        <stop
          offset="0.599964"
          stopColor="#f3f3f3"
          stopOpacity="1"
        >
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          />
        </stop>
        <stop
          offset="1.59996"
          stopColor="#ecebeb"
          stopOpacity="1"
        >
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          />
        </stop>
        <stop
          offset="2.59996"
          stopColor="#f3f3f3"
          stopOpacity="1"
        >
          <animate
            attributeName="offset"
            values="0; 0; 3"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
    </defs>
  </svg>
);

export default LoadingItem;
