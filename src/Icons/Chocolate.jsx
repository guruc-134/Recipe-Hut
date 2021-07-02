import * as React from "react"

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
      <defs>
        <linearGradient
          id="prefix__linear-gradient"
          x1={32}
          y1={30}
          x2={32}
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#9b756d" />
          <stop offset={1} stopColor="#bc9388" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-2"
          x1={32}
          y1={63}
          x2={32}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#da5466" />
          <stop offset={1} stopColor="#f4929c" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-3"
          x1={32}
          y1={55}
          x2={32}
          y2={21.53}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fbcc88" />
          <stop offset={1} stopColor="#ffe5c3" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-4"
          x1={33}
          y1={42}
          x2={33}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d4d8e1" />
          <stop offset={1} stopColor="#f3f4f5" />
        </linearGradient>
        <style>
          {
            ".prefix__cls-3{fill:#8a6762}.prefix__cls-5{fill:#e8677d}.prefix__cls-10{fill:#231f20}"
          }
        </style>
      </defs>
      <title>{"Chocolate"}</title>
      <g id="prefix__Chocolate">
        <path fill="url(#prefix__linear-gradient)" d="M15 29.77V1h34v29" />
        <path d="M50 19v44H14V32z" fill="url(#prefix__linear-gradient-2)" />
        <path
          className="prefix__cls-3"
          d="M29 5h6v8h-6zM39 5h6v8h-6zM35 22.68V17h-6c0 8.61 0 8 .06 8M19 5h6v8h-6zM19 17h6v8h-6zM39 20.69V17h6v1.38"
        />
        <path
          d="M43 21.53V55H21V29.6c.86-.5-1.65.46 22-8.07z"
          fill="url(#prefix__linear-gradient-3)"
        />
        <path
          className="prefix__cls-5"
          d="M21 29.6v7.93a6.76 6.76 0 01-2.07-1c-1.63 1.43-3.14 3.4-4.93 5V32c8.32-3 8.2-3.1 7-2.4zM50 19v10.46a13.81 13.81 0 01-5.83-2.13c-.33.17-.73.4-1.17.67v-6.47z"
        />
        <path
          d="M43 21.53V28c-2.41 1.47-6 4.28-6 8v2c-2.57 0-5.27.44-8.81-4-1.75 2.53-4.19 4.32-7.19 3.53V29.6c.86-.5-1.65.46 22-8.07z"
          fill="#ffd39f"
        />
        <path
          d="M57 26a11.09 11.09 0 01-12.63-1S35 29 35 36c-4 0-7-6-7-6s-3.5 9.5-9 4c-3.37 2-6.66 8-10 8l1.51-9A3.53 3.53 0 0114 30c9-1.87 28.46-10.73 36-13a4.6 4.6 0 014.22 2.74z"
          fill="url(#prefix__linear-gradient-4)"
        />
        <path fill="#cf4055" d="M14 60h36v3H14z" />
        <path fill="#f6b756" d="M21 52h22v3H21z" />
        <path
          className="prefix__cls-10"
          d="M29 14h6a1 1 0 001-1V5a1 1 0 00-1-1h-6a1 1 0 00-1 1v8a1 1 0 001 1zm1-8h4v6h-4zM39 14h6a1 1 0 001-1V5a1 1 0 00-1-1h-6a1 1 0 00-1 1v8a1 1 0 001 1zm1-8h4v6h-4zM19 14h6a1 1 0 001-1V5a1 1 0 00-1-1h-6a1 1 0 00-1 1v8a1 1 0 001 1zm1-8h4v6h-4z"
        />
        <path
          className="prefix__cls-10"
          d="M57.91 25.59c-2.86-6.44-3-7.48-4.85-8.69A5.66 5.66 0 0050 16V1a1 1 0 00-1-1H15a1 1 0 00-1 1c0 30.1.05 28-.11 28a4.52 4.52 0 00-4.37 3.79c-1.61 9.66-1.71 9.36-1.28 9.86A1 1 0 009 43a6.38 6.38 0 004-1.9V63a1 1 0 001 1h36a1 1 0 001-1V28.53a11.93 11.93 0 006.5-1.66 1 1 0 00.41-1.28zM16 2h32v14.6c-2.4.83-2 .85-2 .4a1 1 0 00-1-1h-6a1 1 0 00-1 1v3.41l-2 .79V17a1 1 0 00-1-1h-6a1 1 0 00-1 1v7.33c-2.36.9-2 .79-2 .67v-8a1 1 0 00-1-1h-6a1 1 0 00-1 1v8a1 1 0 001 1h4.53c-2.76 1-5.36 1.87-7.53 2.47zm28 16.06l-4 1.56V18c4.45 0 4 0 4 .06zm-14 5.5V18h4v4zM24 24h-4v-6h4zm-9 38V39.15a36.6 36.6 0 013.91-3.88A6.8 6.8 0 0020 36v19a1 1 0 001 1h22a1 1 0 001-1c0-30.9-.12-28.65.25-28.84a13.2 13.2 0 004.75 2.1V62zm13.11-29.87C31.57 37.3 36 38 36 36c0-3.93 3.43-6.89 6-8.55V54H22V36.69c2.74.24 4.79-2.13 6.11-4.56zM45 24.25a1 1 0 00-1-.17c-.39.17-9 3.93-9.91 10.78-2.39-.72-4.5-4-5.18-5.31a1 1 0 00-1.83.1c-.45 1.24-2.09 4.55-4.19 5a2.47 2.47 0 01-1.52-.18c-1.53-.66-1.83-2-2.87-1.34-2.91 1.76-5.73 6.19-8.24 7.51l1.26-7.53A2.52 2.52 0 0114 31c3.74 0 30.53-11.28 36.14-13a3.73 3.73 0 011.83.58c1.2.78 1.21 1.27 3.74 7A10 10 0 0145 24.25z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
