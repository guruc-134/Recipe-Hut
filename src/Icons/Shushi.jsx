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
          x1={31.98}
          y1={37}
          x2={31.98}
          y2={23}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d4d8e1" />
          <stop offset={1} stopColor="#f3f4f5" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-3"
          x1={31.93}
          y1={29.94}
          x2={31.93}
          y2={14.99}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#da5466" />
          <stop offset={1} stopColor="#f4929c" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-4"
          x1={32}
          y1={43}
          x2={32}
          y2={37}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d1a788" />
          <stop offset={1} stopColor="#f2d3b8" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-5"
          x1={9}
          y1={49}
          x2={9}
          y2={43}
          xlinkHref="#prefix__linear-gradient-4"
        />
        <linearGradient
          id="prefix__linear-gradient-6"
          x1={55}
          y1={49}
          x2={55}
          y2={43}
          xlinkHref="#prefix__linear-gradient-4"
        />
        <style>
          {
            ".prefix__cls-1{fill:url(#prefix__linear-gradient)}.prefix__cls-6{fill:#cba07a}.prefix__cls-9{fill:#231f20}"
          }
        </style>
      </defs>
      <title>{"Sushi"}</title>
      <g id="prefix__Sushi">
        <path
          className="prefix__cls-1"
          d="M51.67 29.88a7.24 7.24 0 01.24 1.79C51.91 36.31 43 37 32 37s-20-.69-20-5.33a7.77 7.77 0 01.23-1.78L32 23z"
        />
        <path
          className="prefix__cls-1"
          d="M51.67 29.88a7.24 7.24 0 01.24 1.79C51.91 36.31 43 37 32 37s-20-.69-20-5.33a7.77 7.77 0 01.23-1.78L32 23z"
        />
        <path
          d="M51.91 31.67C51.91 36.31 43 37 32 37s-20-.69-20-5.33a6.78 6.78 0 01.11-1.16C13.19 34.4 21.67 35 32 35s18.79-.61 19.83-4.5a8.16 8.16 0 01.08 1.17z"
          fill="#c7cdd8"
        />
        <path
          d="M49.71 29.8c-1.61-.31-10.45-3.73-16-4.36-4.73-.62-12.38 2.06-17.7 3.83-3.36 1.24-6 1-5.31-2.58 1.82-9.89 20.13-15.16 34-9.15a19.27 19.27 0 015.13 3.28 10.55 10.55 0 013.44 5.87c.51 3.25-1.63 3.5-3.56 3.11z"
          fill="url(#prefix__linear-gradient-3)"
        />
        <path
          d="M53.28 27.48c.16 3.17-3 2.6-4.91 2C32.24 24.09 32 24 15.48 29.44c-1.92.64-5.07 1.21-4.91-2 1 .81 3 .4 4.36 0 17-5.49 17.43-5.34 34 0 1.35.44 3.31.85 4.35.04z"
          fill="#cf4055"
        />
        <path fill="url(#prefix__linear-gradient-4)" d="M1 37h62v6H1z" />
        <path className="prefix__cls-6" d="M1 41h62v2H1z" />
        <path fill="url(#prefix__linear-gradient-5)" d="M5 43h8v6H5z" />
        <path fill="url(#prefix__linear-gradient-6)" d="M51 43h8v6h-8z" />
        <path className="prefix__cls-6" d="M5 47h8v2H5zM51 47h8v2h-8z" />
        <path
          className="prefix__cls-9"
          d="M19 31a1 1 0 000 2 1 1 0 000-2zM23 29a1 1 0 000 2 1 1 0 000-2zM23 33a1 1 0 000 2 1 1 0 000-2z"
        />
        <path
          className="prefix__cls-9"
          d="M63 36H49.64c2.82-1.29 3.54-3.08 3.17-5.48 1.45-.8 1.65-2.4 1.36-4-3-16.69-41.49-16.49-44.49 0-.3 1.67-.07 3.28 1.45 4-.34 2.36.37 4.15 3.18 5.44H1a1 1 0 00-1 1v6a1 1 0 001 1h3v5a1 1 0 001 1h8a1 1 0 001-1V44h36v5a1 1 0 001 1h8a1 1 0 001-1v-5h3a1 1 0 001-1v-6a1 1 0 00-1-1zm-10.8-9.13c.32 1.78-.15 2.38-2.29 1.95A24 24 0 0050 22.5a9 9 0 012.2 4.37zm-30.59-.47a23.89 23.89 0 00-4.83-6.4 21.2 21.2 0 013.55-1.84A20.81 20.81 0 0124 25.74c-.85.26-1.63.44-2.39.66zm4.28-1.16a23.53 23.53 0 00-3.57-7.78 28.73 28.73 0 013.1-.8 20.73 20.73 0 013.14 8c-.86.17-1.76.34-2.67.58zm4.65-.84a23.22 23.22 0 00-3-8.1 32.67 32.67 0 013.57-.3 20.24 20.24 0 012.53 8.42 11.57 11.57 0 00-3.1-.02zm5.12.35A22.88 22.88 0 0033.4 16c1.09.05 2.19.15 3.28.31A20.54 20.54 0 0138 25.25c-.79-.19-1.58-.36-2.34-.5zm3.31-8a30.91 30.91 0 013.66 1.06 20.72 20.72 0 01.45 8.83c-1-.31-2.06-.62-3.13-.91a22.5 22.5 0 00-.95-8.96zm6 2a18.83 18.83 0 012.64 1.54 21.14 21.14 0 01.39 7.96c-.74-.26-1.78-.61-3-1a23.08 23.08 0 00-.08-8.47zm-29.8 2.44A21.38 21.38 0 0119.66 27l-2.28.74a23.53 23.53 0 00-3.88-4.82 12.93 12.93 0 011.62-1.7zm-3.25 7.46c-.77-.67.05-3.07.54-4.05a23.18 23.18 0 013 3.77c-.23.1-2.78 1.01-3.59.31zm1.17 3c0-1.26-.15-.32 2.75-1.28 4-1.34 11.9-4 16.08-4.08 5.64 0 15.58 4.08 16.19 4.08 3 1 2.85 0 2.85 1.28C50.91 35.49 41.34 36 32 36s-19-.51-19-4.33zM12 48H6v-4h6zm46 0h-6v-4h6zm4-6H2v-4h60z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
