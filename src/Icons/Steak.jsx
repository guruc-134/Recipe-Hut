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
          y1={63}
          x2={32}
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d4d8e1" />
          <stop offset={1} stopColor="#f3f4f5" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-2"
          x1={40.53}
          y1={43.75}
          x2={40.53}
          y2={13}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#9b756d" />
          <stop offset={1} stopColor="#bc9388" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-3"
          x1={18.51}
          y1={29.83}
          x2={18.51}
          y2={22.17}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e9a254" />
          <stop offset={1} stopColor="#f4bb79" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-4"
          x1={20.5}
          y1={24.02}
          x2={20.5}
          y2={20}
          xlinkHref="#prefix__linear-gradient-3"
        />
        <linearGradient
          id="prefix__linear-gradient-5"
          x1={23.49}
          y1={32.89}
          x2={23.49}
          y2={26.84}
          xlinkHref="#prefix__linear-gradient-3"
        />
        <linearGradient
          id="prefix__linear-gradient-6"
          x1={12}
          y1={37.5}
          x2={23}
          y2={37.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#da5466" />
          <stop offset={1} stopColor="#f4929c" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-7"
          x1={20.62}
          y1={39.5}
          x2={31}
          y2={39.5}
          xlinkHref="#prefix__linear-gradient-6"
        />
        <linearGradient
          id="prefix__linear-gradient-8"
          x1={27}
          y1={46.25}
          x2={37.13}
          y2={46.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#6ab891" />
          <stop offset={1} stopColor="#85cba9" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-9"
          x1={35.21}
          y1={48.55}
          x2={42.89}
          y2={48.55}
          xlinkHref="#prefix__linear-gradient-8"
        />
        <style>
          {".prefix__cls-4{fill:#8a6762}.prefix__cls-12{fill:#231f20}"}
        </style>
      </defs>
      <title>{"Steak"}</title>
      <g id="prefix__Steak">
        <circle cx={32} cy={32} r={31} fill="url(#prefix__linear-gradient)" />
        <circle cx={32} cy={32} r={19} fill="#c7cdd8" />
        <path
          d="M37.08 43.55c-6.22-1.13-3-7.25-3-11.38 0-4.63-6.87-7.16-4.63-13.88C30.17 16 32 13 40 13c7 0 11 5 12 13 .94 7.55-4.41 19.43-14.92 17.55z"
          fill="url(#prefix__linear-gradient-2)"
        />
        <path
          className="prefix__cls-4"
          d="M34 31.36c-.65-3.77-5.64-6.27-4.92-11.47.65 4.84 5.5 6.34 4.92 11.47zM37.08 43.55C33.91 43 33 41.1 33.29 38c.25 2.13 1.66 3.17 3.79 3.56 8.81 1.58 14.44-6.6 15-14.87.51 7.79-4.92 18.67-15 16.86zM33.29 38c-.26-2 .44-4.46.66-6.63.34 1.45-.47 4.48-.66 6.63z"
        />
        <path
          d="M26.26 26c-9.19 2.39 13.37-3.46-14.51 3.79l-1-3.87 14.51-3.79z"
          fill="url(#prefix__linear-gradient-3)"
        />
        <path
          d="M28 20v4h-2.27l-.48-1.83C16.84 24.37 19.6 24 13 24v-4z"
          fill="url(#prefix__linear-gradient-4)"
        />
        <path
          d="M31.26 29l-1 3.86c-16.4-4.44-14.43-3.82-14.43-4.12 7.47-1.95 7.3-1.93 7.4-1.93z"
          fill="url(#prefix__linear-gradient-5)"
        />
        <circle
          cx={17.5}
          cy={37.5}
          r={5.5}
          fill="url(#prefix__linear-gradient-6)"
        />
        <path
          d="M31 39.5A5.5 5.5 0 0120.62 42a5.5 5.5 0 001.76-7A5.51 5.51 0 0131 39.5z"
          fill="url(#prefix__linear-gradient-7)"
        />
        <path
          d="M27 52a21.31 21.31 0 011.17-7.7 5.44 5.44 0 002.64-3.39 3.87 3.87 0 012.56-.43c.34 1.49 1.35 2.64 3.71 3.07C37.7 47.29 31.79 52.8 27 52z"
          fill="url(#prefix__linear-gradient-8)"
        />
        <path
          d="M38.31 53.87a23.76 23.76 0 01-3.1-5.53 6.23 6.23 0 001.87-4.79 11.65 11.65 0 005.59-.32c.87 3.48-.89 8.93-4.36 10.64z"
          fill="url(#prefix__linear-gradient-9)"
        />
        <path
          className="prefix__cls-12"
          d="M32 0a32 32 0 1032 32A32 32 0 0032 0zm0 62a30 30 0 1130-30 30 30 0 01-30 30z"
        />
        <path
          className="prefix__cls-12"
          d="M53 25.88c-1.29-10.26-7.08-15.43-17.3-13.52A19.9 19.9 0 0016.82 19H13a1 1 0 00-1 1c0 4.36-.07 4.17.19 4.55-3.11.81-2.8.22-1.41 5.53a1 1 0 001.22.72c.15 0-.16.57.1 3.09a6.49 6.49 0 003.77 9.89A19.89 19.89 0 0026 51.06c0 .76-.17 1.76.81 1.93a8.62 8.62 0 005.26-1c5 0 2.52-1.54 5.41 2.46 1.16 1.61 4.75-1.88 5.91-6a19.93 19.93 0 008.44-14A20.66 20.66 0 0053 25.88zm-2 .24c.83 6.7-3.63 16.62-11.58 16.62-5.51 0-5.62-2.18-4.81-7 .74-4.38.7-5.37-2.13-9.18-1.7-2.28-3.3-4.44-2.14-7.93.47-1.4 1.54-4.63 9.66-4.63 7.85 0 10.32 6.59 11 12.12zm-27.81 1.76L30 29.73l-.52 1.93-10.19-2.77zm3.7-1.07c.56-.46.37-.92.13-1.81 1 0 1.45.1 1.81-.47a19.63 19.63 0 002.05 3.19c.21.28.81.39-3.99-.91zM31.32 14a7.66 7.66 0 00-3.15 5c-.29-.05 1 0-8.6 0a17.84 17.84 0 0111.75-5zM14 21h13v2h-.5l-.28-1.08A1 1 0 0025 21.2c-8.26 2.16-5.82 1.8-11 1.8zm-2 5.67l12.58-3.28.5 1.94-12.62 3.28zm3.46 3.24c.28.09.06 0 14.54 3.94a1 1 0 00.76-.09c.49-.29.41-.4 1.44-4.21 1.18 1.94 1 2.92.49 5.82-.78 4.62-.11 4-.65 4.11a6.5 6.5 0 00-9.29-5.85A6.46 6.46 0 0014 32a15.8 15.8 0 01.1-1.78zm6.52 12.33a6.47 6.47 0 001.71-6.83 4.49 4.49 0 11-1.71 6.83zM13 37.5a4.5 4.5 0 114.5 4.5 4.51 4.51 0 01-4.5-4.5zm5.53 6.41a6.06 6.06 0 001.75-.55A6.47 6.47 0 0025.5 46c1.73 0 1-1 .64 3a18 18 0 01-7.61-5.09zM29 45a6.46 6.46 0 002.63-3.34 2.71 2.71 0 011-.2 4.73 4.73 0 003.47 2.91c-.22 2.8-4.32 6.69-8.1 6.74A19.93 19.93 0 0129 45zm9.59 7.56a23 23 0 01-2.23-4 7.83 7.83 0 001.73-3.83 12.27 12.27 0 003.77-.2c.23 2.71-1.04 6.36-3.27 8zm5.28-7a9.89 9.89 0 00-.07-1.65 12 12 0 003.29-2.08 17.86 17.86 0 01-3.22 3.68z"
        />
        <path
          className="prefix__cls-12"
          d="M34.21 25.21l.54-.55 2.09 2.09-1.05 1a1 1 0 001.42 1.42l1-1.05 2.09 2.09-1.05 1a1 1 0 001.42 1.42l1-1.05 2.09 2.09-2.09 2.09-3.29-3.3A1 1 0 0037 34l3.3 3.29-2.05 2A1 1 0 0039 41c.52 0 .52-.1 2.75-2.34.62.63.77.84 1.25.84a1 1 0 00.71-1.71l-.55-.54 2.09-2.09c.35.35.54.59 1 .59A1 1 0 0047 34l-.3-.29 1.05-1a1 1 0 00-1.42-1.42l-1 1.05-2.09-2.09 2.09-2.09 1 1.05a1 1 0 001.42-1.42l-1.05-1 2.05-2a1 1 0 00-1.42-1.42l-2 2.05-2.09-2.09 2.09-2.09c1.23 1.23 1.44 1.59 2 1.59A1 1 0 0048 21c-1.39-1.39-1.35-1.23-1.25-1.33a1 1 0 00-1.42-1.42c-.1.1.06.15-1.33-1.25a1 1 0 00-1.42 1.42l1.3 1.29-2.09 2.09-2.09-2.09 1.55-1.54a1 1 0 00-1.42-1.42l-1.54 1.55L36 16a1 1 0 00-1.42 1.42l2.3 2.29-2.09 2.09-.29-.3A1 1 0 0033 23l.3.29-.55.54a1 1 0 001.46 1.38zm9.63 1.54l-2.09 2.09-2.09-2.09 2.09-2.09zm-5.59-5.59l2.09 2.09-2.09 2.09-2.09-2.09z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
