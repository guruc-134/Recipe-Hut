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
          y1={46}
          x2={32}
          y2={33}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d1a788" />
          <stop offset={1} stopColor="#f2d3b8" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-2"
          y1={63}
          y2={46}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-3"
          x1={31.85}
          y1={29}
          x2={31.85}
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d4d8e1" />
          <stop offset={1} stopColor="#f3f4f5" />
        </linearGradient>
        <style>{".prefix__cls-6{fill:#e8c4a6}"}</style>
      </defs>
      <title>{"Ice Cream"}</title>
      <g id="prefix__Ice_Cream" data-name="Ice Cream">
        <path d="M46 33H18a2 2 0 010-4h28a2 2 0 010 4z" fill="#fce2d0" />
        <path
          d="M46 33l-2 13H20c-.48-3.14-1.46-9.5-2-13z"
          fill="url(#prefix__linear-gradient)"
        />
        <path
          d="M42.5 46c-.58 4-1.34 9.09-2.5 17H24c-1.23-8.36-1.93-13.06-2.5-17z"
          fill="url(#prefix__linear-gradient-2)"
        />
        <path fill="#cba07a" d="M40.44 60L40 63H24l-.44-3h16.88z" />
        <path
          d="M46 29H20c-5 0-5-10 2-10-4 0-4-7 3-7 2 0 6-1 6-6s-2-5-2-5 8.75 0 9.88 9a15.7 15.7 0 01.12 2c5.06 1 6 4.06 4 7 3.55 1.19 5.72 5.45 3 10z"
          fill="url(#prefix__linear-gradient-3)"
        />
        <path
          className="prefix__cls-6"
          d="M46 33l-.31 2H18.31L18 33h28zM42.5 46l-.29 2H21.79l-.29-2h21z"
        />
        <path
          d="M46.85 27.19A9.46 9.46 0 0146 29H20a3.21 3.21 0 01-2.9-1.78A2 2 0 0118 27c30.58 0 28.26-.08 28.85.19z"
          fill="#c7cdd8"
        />
        <path
          d="M47.45 28.39a7.39 7.39 0 00-3-9.86c1.39-3 .25-6.11-4.43-7.33C39.52.43 29.66 0 29 0a1 1 0 10-.12 2c1.26.51 2.86 9-3.91 9-6.11 0-7.95 5-5.93 7.62a6.69 6.69 0 00-2.42 9.72 3 3 0 00.47 5.51L19 46.15a1 1 0 001 .85h.64L23 63.15a1 1 0 001 .85h16a1 1 0 001-.85L43.36 47H44a1 1 0 001-.85l1.89-12.3a3 3 0 00.56-5.46zM22 20h12a1 1 0 000-2H22c-2.69 0-2.58-5 3-5 2.6 0 7-1.47 7-7a11.3 11.3 0 00-.49-3.6C34 3.13 37.59 5.19 38 11h-4a1 1 0 000 2h4.89c3.07.64 5.09 2.22 3.55 5H38a1 1 0 000 2h4.81c2.85 1.05 4.49 4.37 2.6 8H20c-3.65 0-3.69-8 2-8zm17.14 42H24.86l-2.2-15h18.68zm4-17H20.86l-1.69-11h25.66zM46 32H18a1 1 0 010-2h28a1 1 0 010 2z"
          fill="#231f20"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
