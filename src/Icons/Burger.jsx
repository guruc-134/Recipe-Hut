import * as React from "react"

function Burger(props) {
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
          x1={0.98}
          y1={38.98}
          x2={63}
          y2={38.98}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#9b756d" />
          <stop offset={1} stopColor="#bc9388" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-2"
          x1={1.02}
          y1={29}
          x2={62.98}
          y2={29}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#da5466" />
          <stop offset={1} stopColor="#f4929c" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-3"
          x1={32}
          y1={45}
          x2={32}
          y2={60}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d1a788" />
          <stop offset={1} stopColor="#f2d3b8" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-5"
          x1={3}
          y1={35.5}
          x2={60.99}
          y2={35.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fbcc88" />
          <stop offset={1} stopColor="#ffe5c3" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-6"
          x1={1}
          y1={45.5}
          x2={62.99}
          y2={45.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#8cdd79" />
          <stop offset={1} stopColor="#d4e6b6" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-7"
          y1={27}
          y2={4}
          xlinkHref="#prefix__linear-gradient-3"
        />
        <style>
          {
            ".prefix__cls-4{fill:url(#prefix__linear-gradient-3)}.prefix__cls-5{fill:#cba07a}.prefix__cls-10{fill:#231f20}"
          }
        </style>
      </defs>
      <title>{"Burger"}</title>
      <g id="prefix__Burger">
        <path
          d="M63 38v2a3 3 0 01-3 3H4a3 3 0 01-3-3c0-1.83-.23-3.18 1-4.27S-1.19 35 60 35a3 3 0 013 3z"
          fill="url(#prefix__linear-gradient)"
        />
        <path
          d="M62 35.73A3.93 3.93 0 0159.07 37H44.83c-4.45 4.44-4.84 5.27-6.28 5l-21.77-5H4.93A3.93 3.93 0 012 35.73 3 3 0 014 35c61 0 56.75-.31 58 .73z"
          fill="#8a6762"
        />
        <path
          d="M61 31H3a2 2 0 010-4h58a2 2 0 010 4z"
          fill="url(#prefix__linear-gradient-2)"
        />
        <path
          className="prefix__cls-4"
          d="M61 48a12 12 0 01-12 12H15A12 12 0 013 48c0-1 .46-1.28 2-3h54c1.52 1.71 2 2 2 3z"
        />
        <path
          className="prefix__cls-4"
          d="M61 48a12 12 0 01-12 12H15A12 12 0 013 48c0-1 .46-1.28 2-3h54c1.52 1.71 2 2 2 3z"
        />
        <path
          className="prefix__cls-5"
          d="M61 48a12 12 0 01-12 12H15A12 12 0 013 48a1.87 1.87 0 01.2-.85A12 12 0 0015 57h34a12 12 0 0011.81-9.84A2 2 0 0161 48z"
        />
        <path
          d="M59.07 35H44l-5 5-22-5H4.93c-2.57 0-2.58-4 0-4h54.14c2.6 0 2.53 4 0 4z"
          fill="url(#prefix__linear-gradient-5)"
        />
        <path
          d="M61.73 46.14c-1.91.45-2.33 1.86-4.94 1.86-3.1 0-3.1-2-6.2-2s-3.1 2-6.21 2-3.09-2-6.19-2-3.1 2-6.2 2-3.1-2-6.2-2-3.1 2-6.2 2-3.1-2-6.2-2-3.1 2-6.2 2c-2.6 0-3-1.41-4.92-1.86A1.59 1.59 0 012.58 43h58.84a1.59 1.59 0 01.31 3.14z"
          fill="url(#prefix__linear-gradient-6)"
        />
        <path
          d="M57.93 27H6.07A4.07 4.07 0 012 22.93 18.94 18.94 0 0120.93 4h22.14A18.94 18.94 0 0162 22.93 4.07 4.07 0 0157.93 27z"
          fill="url(#prefix__linear-gradient-7)"
        />
        <path
          className="prefix__cls-5"
          d="M62 22.93A4.07 4.07 0 0157.93 27H6.07A4.07 4.07 0 012 22.93a19.81 19.81 0 01.11-2.05 4.08 4.08 0 004 3.12h51.82a4.07 4.07 0 004-3.12 19.81 19.81 0 01.07 2.05z"
        />
        <path
          d="M61 32.93C61 33 63.84 33 3 33a2 2 0 011.93-2h54.14A1.94 1.94 0 0161 32.93z"
          fill="#ffd39f"
        />
        <path
          className="prefix__cls-10"
          d="M61.68 34.38a3.13 3.13 0 00.12-2.5 3 3 0 000-5.75 5 5 0 001.2-3.2A20 20 0 0043.07 3H20.93A20 20 0 001 22.93a5 5 0 001.17 3.2 3 3 0 000 5.75 3.12 3.12 0 00.12 2.5A4 4 0 000 38c0 2-.2 3.21 1 4.58a2.58 2.58 0 001.17 4.56A3.09 3.09 0 002 48a13 13 0 0013 13h34a13 13 0 0013-13c0-.82-.27-.84 0-.89a2.58 2.58 0 001-4.53c1.2-1.37 1-2.58 1-4.58a4 4 0 00-2.32-3.62zm-18.07-.3c-.26.11.07-.17-4.93 4.82C15.79 33.7 17.17 34 17 34H4.93a1 1 0 010-2h54.14a1 1 0 010 2c-16.29 0-15.18 0-15.46.08zM20.93 5h22.14A18 18 0 0161 22.93 3.08 3.08 0 0157.93 26H6.07A3.08 3.08 0 013 22.93 18 18 0 0120.93 5zM3 28h58a1 1 0 010 2H3a1 1 0 010-2zM2 38a2 2 0 012-2h12.89l21.89 5c.73.16.5.15 5.63-5H60a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2zm47 21H15A11 11 0 014 48.12a5.58 5.58 0 003.19.88c3.38 0 3.59-2 6.2-2s2.83 2 6.2 2 3.59-2 6.2-2 2.83 2 6.2 2 3.59-2 6.2-2 2.78 2 6.19 2 3.62-2 6.21-2 2.83 2 6.2 2a5.71 5.71 0 003.2-.88A11 11 0 0149 59zm12.5-13.84c-2.22.53-2.41 1.84-4.71 1.84-2.6 0-2.83-2-6.2-2s-3.6 2-6.21 2-2.82-2-6.19-2-3.59 2-6.19 2-2.83-2-6.2-2-3.59 2-6.2 2-2.8-2-6.2-2-3.59 2-6.2 2c-2.29 0-2.5-1.32-4.7-1.84A.58.58 0 012.58 44h58.84a.58.58 0 01.08 1.16z"
        />
        <path
          className="prefix__cls-10"
          d="M32 10a1 1 0 000-2 1 1 0 000 2zM28 17a1 1 0 000-2 1 1 0 000 2zM20 17a1 1 0 000-2 1 1 0 000 2zM12 17a1 1 0 000-2 1 1 0 000 2zM36 17a1 1 0 000-2 1 1 0 000 2zM44 17a1 1 0 000-2 1 1 0 000 2zM52 17a1 1 0 000-2 1 1 0 000 2zM24 10a1 1 0 000-2 1 1 0 000 2zM16 10a1 1 0 000-2 1 1 0 000 2zM40 10a1 1 0 000-2 1 1 0 000 2zM48 10a1 1 0 000-2 1 1 0 000 2z"
        />
      </g>
    </svg>
  )
}

export default Burger