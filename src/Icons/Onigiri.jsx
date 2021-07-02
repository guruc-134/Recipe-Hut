import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__linear-gradient"
          x1={32}
          y1={43.77}
          x2={32}
          y2={8}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d4d8e1" />
          <stop offset={1} stopColor="#f3f4f5" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-3"
          x1={32}
          y1={44}
          x2={32}
          y2={26}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#474f72" />
          <stop offset={1} stopColor="#878c9f" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-4"
          x1={32}
          y1={50}
          x2={32}
          y2={44}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d1a788" />
          <stop offset={1} stopColor="#f2d3b8" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-5"
          x1={9}
          y1={56}
          x2={9}
          y2={50}
          xlinkHref="#prefix__linear-gradient-4"
        />
        <linearGradient
          id="prefix__linear-gradient-6"
          x1={55}
          y1={56}
          x2={55}
          y2={50}
          xlinkHref="#prefix__linear-gradient-4"
        />
        <style>
          {
            ".prefix__cls-1{fill:url(#prefix__linear-gradient)}.prefix__cls-7{fill:#cba07a}.prefix__cls-10{fill:#231f20}"
          }
        </style>
      </defs>
      <title>{"Onigiri"}</title>
      <g id="prefix__Onigiri">
        <path
          className="prefix__cls-1"
          d="M24 43.77c-5.93-.57-11-2.58-11-9.64C13 24.19 24 8 32 8s19 16.19 19 26.13c0 7.06-5.07 9.07-11 9.64z"
        />
        <path
          className="prefix__cls-1"
          d="M24 43.77c-5.93-.57-11-2.58-11-9.64C13 24.19 24 8 32 8s19 16.19 19 26.13c0 7.06-5.07 9.07-11 9.64z"
        />
        <path
          d="M40 43.77H24c-7.24-.7-11.72-3.64-10.93-11 .63 5.92 5.41 7.7 10.93 8.23h16c5.52-.53 10.3-2.31 10.93-8.25.79 7.4-3.72 10.33-10.93 11.02z"
          fill="#c7cdd8"
        />
        <path
          fill="none"
          stroke="#231f20"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M32.41 44h-.82"
        />
        <path fill="url(#prefix__linear-gradient-3)" d="M24 26h16v18H24z" />
        <path fill="#42455e" d="M24 41h16v3H24z" />
        <path fill="url(#prefix__linear-gradient-4)" d="M1 44h62v6H1z" />
        <path className="prefix__cls-7" d="M1 48h62v2H1z" />
        <path fill="url(#prefix__linear-gradient-5)" d="M5 50h8v6H5z" />
        <path fill="url(#prefix__linear-gradient-6)" d="M51 50h8v6h-8z" />
        <path className="prefix__cls-7" d="M5 54h8v2H5zM51 54h8v2h-8z" />
        <path
          className="prefix__cls-10"
          d="M63 43H47c13.6-7-4-36-15-36S3.37 36 17 43H1a1 1 0 00-1 1v6a1 1 0 001 1h3v5a1 1 0 001 1h8a1 1 0 001-1v-5h36v5a1 1 0 001 1h8a1 1 0 001-1v-5h3a1 1 0 001-1v-6a1 1 0 00-1-1zm-38 0V27h14v16zm-11-8.87C14 24.27 24.93 9 32 9s18 15.27 18 25.13c0 5.09-2.71 7.68-9 8.52V26a1 1 0 00-1-1H24a1 1 0 00-1 1v16.65c-6.29-.84-9-3.43-9-8.52zM12 55H6v-4h6zm46 0h-6v-4h6zm4-6H2v-4h60z"
        />
        <path
          className="prefix__cls-10"
          d="M17 35a1 1 0 000 2 1 1 0 000-2zM20 34a1 1 0 000-2 1 1 0 000 2zM20 38a1 1 0 000 2 1 1 0 000-2z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
