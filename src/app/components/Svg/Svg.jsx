import React from "react";

export function LockSvg({ color }) {
  return (
    <>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_0_1026)">
          <path
            d="M9.31819 5H9.79413C9.92035 5 10.0414 5.05268 10.1307 5.14645C10.2199 5.24022 10.2701 5.36739 10.2701 5.5V10.5C10.2701 10.6326 10.2199 10.7598 10.1307 10.8536C10.0414 10.9473 9.92035 11 9.79413 11H2.17912C2.0529 11 1.93184 10.9473 1.84258 10.8536C1.75333 10.7598 1.70319 10.6326 1.70319 10.5V5.5C1.70319 5.36739 1.75333 5.24022 1.84258 5.14645C1.93184 5.05268 2.0529 5 2.17912 5H2.65506V4.5C2.65506 4.04037 2.74123 3.58525 2.90866 3.16061C3.07609 2.73597 3.32149 2.35013 3.63085 2.02513C3.94022 1.70012 4.30749 1.44231 4.71169 1.26642C5.11589 1.09053 5.54912 1 5.98662 1C6.42413 1 6.85736 1.09053 7.26156 1.26642C7.66576 1.44231 8.03303 1.70012 8.3424 2.02513C8.65176 2.35013 8.89716 2.73597 9.06459 3.16061C9.23202 3.58525 9.31819 4.04037 9.31819 4.5V5ZM8.36631 5V4.5C8.36631 3.83696 8.1156 3.20107 7.66932 2.73223C7.22304 2.26339 6.61776 2 5.98662 2C5.35549 2 4.75021 2.26339 4.30393 2.73223C3.85765 3.20107 3.60694 3.83696 3.60694 4.5V5H8.36631ZM5.51069 7V9H6.46256V7H5.51069Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_0_1026">
            <rect
              width="11.4225"
              height="12"
              fill="white"
              transform="translate(0.275391)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export function FavoriteSvg({ color }) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_0_1029)">
        <path
          d="M9.49735 13.695L4.07484 16.656L5.28574 10.71L0.722778 6.594L6.89412 5.88L9.49735 0.375L12.1006 5.88L18.2719 6.594L13.709 10.71L14.9199 16.656L9.49735 13.695ZM9.49735 11.976L12.7625 13.7587L12.0329 10.179L14.7799 7.70025L11.0642 7.2705L9.49735 3.95625L7.93049 7.27125L4.21477 7.70025L6.96177 10.179L6.23216 13.7587L9.49735 11.976Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_0_1029">
          <rect
            width="18.4517"
            height="18"
            fill="white"
            transform="translate(0.271484)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ArrowSvg({ color }) {
  return (
    <>
      <svg
        width="51"
        height="50"
        viewBox="0 0 51 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.5186 33.3333L40.0834 24.9999M40.0834 24.9999L31.5186 16.6666M40.0834 24.9999H10.9167"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

export function CrossSvg() {
  return (
    <>
      <svg
        role="presentation"
        focusable="false"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke="none"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="square"
        >
          <g transform="translate(1.000000, 1.000000)" stroke="#c3cbff">
            <path d="M0,11 L22,11"></path>
            <path d="M11,0 L11,22"></path>
          </g>
        </g>
      </svg>
    </>
  );
}
