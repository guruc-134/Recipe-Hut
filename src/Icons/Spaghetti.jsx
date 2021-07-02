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
          id="prefix__a"
          x1={16}
          y1={51}
          x2={35.75}
          y2={51}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e9a254" />
          <stop offset={1} stopColor="#f4bb79" />
        </linearGradient>
        <linearGradient
          id="prefix__c"
          x1={47}
          y1={55}
          x2={47}
          y2={42.99}
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__d"
          x1={14.89}
          y1={55}
          x2={14.89}
          y2={42.01}
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__e"
          x1={32.1}
          y1={50.81}
          x2={32.1}
          y2={36}
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__f"
          x1={14.01}
          y1={6}
          x2={64.01}
          y2={6}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#a0a6ba" />
          <stop offset={1} stopColor="#c6ccda" />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={17.95}
          y1={42.76}
          x2={17.95}
          y2={37}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#da5466" />
          <stop offset={1} stopColor="#f4929c" />
        </linearGradient>
        <linearGradient
          id="prefix__g"
          x1={40.08}
          y1={46.23}
          x2={40.08}
          y2={39.01}
          xlinkHref="#prefix__b"
        />
        <linearGradient
          id="prefix__h"
          x1={20}
          y1={55}
          x2={20}
          y2={49}
          xlinkHref="#prefix__b"
        />
        <linearGradient
          id="prefix__i"
          x1={32}
          y1={63}
          x2={32}
          y2={55}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d4d8e1" />
          <stop offset={1} stopColor="#f3f4f5" />
        </linearGradient>
      </defs>
      <title>{"Sapgetti"}</title>
      <path
        d="M35.75 50.81A11.84 11.84 0 0035 55H16.54a4 4 0 013.81-6 12 12 0 0115.4 1.81z"
        fill="url(#prefix__a)"
      />
      <path
        d="M59 55H35a12 12 0 019-11.61A12 12 0 0159 55z"
        fill="url(#prefix__c)"
      />
      <path
        d="M25.8 47.07a11.69 11.69 0 00-5.45 2 4 4 0 00-3.81 6H4c-1.06-12.14 14.78-17.94 21.8-8z"
        fill="url(#prefix__d)"
      />
      <path
        d="M44 43.38a12.1 12.1 0 00-8.23 7.43 11.87 11.87 0 00-9.95-3.74 12 12 0 00-5.59-4.31 12 12 0 0118.86-3.65A4 4 0 0144 43.38z"
        fill="url(#prefix__e)"
      />
      <path
        d="M63.88 5.2C63.35 3.8 62 4 60.89 4 31.55 4 33 4.2 32.64 3.58 32.11 2.61 31.1 1 30 1H15a1 1 0 000 2h11a1 1 0 010 2H15a1 1 0 000 2h11a1 1 0 010 2H15a1 1 0 000 2h15c1.1 0 2.11-1.61 2.64-2.58.36-.6-1.48-.42 29.5-.42a2 2 0 001.74-2.8z"
        fill="url(#prefix__f)"
      />
      <path
        d="M21.91 40.17a11.48 11.48 0 00-1.7 2.59 12 12 0 00-6-.62 4 4 0 117.74-2z"
        fill="url(#prefix__b)"
      />
      <path
        d="M44 43.38a12.57 12.57 0 00-5.18 2.85 7.88 7.88 0 00-2.64-4.34c1.27-4.55 8.21-3.44 7.82 1.49z"
        fill="url(#prefix__g)"
      />
      <path
        d="M62.69 56a10.54 10.54 0 01-9.94 7h-41.5a10.55 10.55 0 01-9.94-7 10.93 10.93 0 009.27 5h42.84a11 11 0 009.27-5z"
        fill="#c7cdd8"
      />
      <path d="M23.46 55h-6.92a4 4 0 116.92 0z" fill="url(#prefix__h)" />
      <path
        d="M63 55a10.57 10.57 0 01-10.25 8h-41.5A10.57 10.57 0 011 55z"
        fill="url(#prefix__i)"
      />
      <path
        d="M63 54h-3a13 13 0 00-15-11.82 5 5 0 00-5.57-4.13A12.94 12.94 0 0025 36.48V11h5a3 3 0 002.64-1.58.93.93 0 01.82-.42c29.72 0 28.46.34 29.65-.87A3 3 0 0060.89 3C31.07 3 33 3.18 32.64 2.58A3 3 0 0030 1h-5a1 1 0 00-2 0h-2a1 1 0 00-2 0h-2a1 1 0 00-2 0 1 1 0 000 2v2a1 1 0 000 2v2a1 1 0 000 2v26a4.91 4.91 0 00-2 4.34A13 13 0 003 54H1a1 1 0 00-1 1.24A11.54 11.54 0 0011.25 64h41.5A11.54 11.54 0 0064 55.24 1 1 0 0063 54zm-5 0h-2a9 9 0 00-17.88 0h-2A11 11 0 0158 54zm-6.1 0a5 5 0 00-9.8 0h-2a7 7 0 0113.84 0zm-2.08 0h-5.64a3 3 0 015.64 0zM17.2 54a3 3 0 115.6 0zM9 54a7 7 0 0110.65-6 5 5 0 00-2.73 1.06A5 5 0 0011 54zm15.92-9.43A7 7 0 0137.67 46 14 14 0 0036 48.11 5 5 0 0026.41 46c-.34 0-.17-.18-1.49-1.43zm9.08 3.5a13 13 0 00-5.32-2 3 3 0 015.32 2zm.61 3a12.68 12.68 0 00-.5 2.39 9 9 0 00-9.84-3.06 4.94 4.94 0 00-1.48-1.57 10.91 10.91 0 0111.81 2.26zM13 54a3 3 0 012.39-2.94A5 5 0 0015 53c0 1.26.64 1-2 1zm11.93-1.69a7 7 0 017 1.69h-7a4.05 4.05 0 000-1.69zm18-9.66a13 13 0 00-3.65 1.89 9 9 0 00-2-2.91A3 3 0 0143 42.65zm-5.81-3.76a5 5 0 00-1.4 1.48 9 9 0 00-12.4 2.91 11.82 11.82 0 00-1.73-1 11 11 0 0115.56-3.39zM23 37.76c-1.33 1-.16.65-2-.74V11h2zM26 3a1 1 0 010 2h-1V3zm0 4a1 1 0 010 2h-1V7zm-3 2h-2V7h2zm7.88-5.47A2.89 2.89 0 0033.46 5h27.43a1 1 0 01.8 1.71c-.42.44 1.44.29-28.23.29a2.89 2.89 0 00-2.58 1.47A1 1 0 0130 9c-1.76 0-1 .25-1-1a3 3 0 00-.78-2A3 3 0 0029 4c0-1.26-.75-1 1-1a1 1 0 01.88.53zM23 3v2h-2V3zm-6 0h2v2h-2zm0 4h2v2h-2zm0 4h2v25.11a4.81 4.81 0 00-2 0zm-2 30a3 3 0 015.81-1 12.46 12.46 0 00-1.08 1.6C16.6 40.63 15 41.2 15 41zm8.91 5.38a12.42 12.42 0 00-2.13.72A9 9 0 007 54H5a11 11 0 0118.91-7.62zM52.75 62h-41.5a9.55 9.55 0 01-8.88-6h59.26a9.55 9.55 0 01-8.88 6z"
        fill="#231f20"
      />
    </svg>
  )
}

export default SvgComponent
