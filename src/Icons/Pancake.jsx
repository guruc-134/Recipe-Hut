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
          y1={43}
          x2={32}
          y2={37}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d1a788" />
          <stop offset={1} stopColor="#f2d3b8" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-2"
          x1={32}
          y1={37}
          x2={32}
          y2={31}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-3"
          x1={32}
          y1={31.04}
          x2={32}
          y2={24.94}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-4"
          x1={32}
          y1={25}
          x2={32}
          y2={19}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-5"
          x1={32}
          y1={38.98}
          x2={32}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fbcc88" />
          <stop offset={1} stopColor="#ffe5c3" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-6"
          x1={32}
          y1={51}
          x2={32}
          y2={42.96}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d4d8e1" />
          <stop offset={1} stopColor="#f3f4f5" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-7"
          x1={32}
          y1={19}
          x2={32}
          y2={13}
          xlinkHref="#prefix__linear-gradient-5"
        />
        <style>{".prefix__cls-5{fill:#cba07a}"}</style>
      </defs>
      <title>{"Pancake"}</title>
      <g id="prefix__Pancake">
        <path
          d="M55 37c4.26 0 5.4 6 2 6H7c-3.4 0-2.26-6 2-6z"
          fill="url(#prefix__linear-gradient)"
        />
        <path
          d="M55 31c4.26 0 5.4 6 2 6H7c-3.4 0-2.26-6 2-6z"
          fill="url(#prefix__linear-gradient-2)"
        />
        <path
          d="M7 31c-2.29 0-2.65-3-.83-4.83C7.81 24.55 4.87 25 55 25c3.38 0 4.94 3.92 3.41 5.41-.83.86 2.43.59-51.41.59z"
          fill="url(#prefix__linear-gradient-3)"
        />
        <path
          d="M57 25c3.38 0 2.29-6-2-6H9c-4.25 0-5.42 6-2 6z"
          fill="url(#prefix__linear-gradient-4)"
        />
        <path
          className="prefix__cls-5"
          d="M57 25H7c-1.35 0-2.43-1.24-1.82-3.18A2 2 0 007 23c50.93 0 51.12.53 51.82-1.18.61 1.94-.48 3.18-1.82 3.18zM57 31H7c-1.35 0-2.43-1.24-1.82-3.18A2 2 0 007 29c50.93 0 51.12.53 51.82-1.18.61 1.94-.48 3.18-1.82 3.18zM57 37H7c-1.35 0-2.43-1.24-1.82-3.18A2 2 0 007 35c50.93 0 51.12.53 51.82-1.18.61 1.94-.48 3.18-1.82 3.18zM57 43H7c-1.35 0-2.43-1.24-1.82-3.18A2 2 0 007 41c50.93 0 51.12.53 51.82-1.18.61 1.94-.48 3.18-1.82 3.18z"
        />
        <path
          d="M15 19a3 3 0 013 3v15a2 2 0 004 0v-8a2 2 0 014 0v2a2 2 0 004 0v-7a2 2 0 014 0v3a2 2 0 004 0 2 2 0 014 0v5a2 2 0 004 0V22a3 3 0 013-3z"
          fill="url(#prefix__linear-gradient-5)"
        />
        <path
          d="M11.25 51h41.5A10.57 10.57 0 0063 43c0-.1 1.26 0-62 0a10.56 10.56 0 0010.25 8z"
          fill="url(#prefix__linear-gradient-6)"
        />
        <path
          d="M62.69 44a10.54 10.54 0 01-9.94 7h-41.5a10.55 10.55 0 01-9.94-7 10.93 10.93 0 009.27 5h42.84a11 11 0 009.27-5z"
          fill="#c7cdd8"
        />
        <path fill="url(#prefix__linear-gradient-7)" d="M26 13h12v6H26z" />
        <path fill="#f6b756" d="M26 17h12v2H26z" />
        <path
          d="M63.79 42.38c-.39-.5-.6-.38-4-.38a4.62 4.62 0 00-1.23-4.46c2.09-1.33 1.66-4.28 0-6 2.08-1.32 1.67-4.27 0-6 3-1.93.87-7.54-3.59-7.54H39v-5a1 1 0 00-1-1H26a1 1 0 00-1 1v5H9c-4.52 0-6.58 5.64-3.59 7.53-1.68 1.75-2.07 4.69 0 6-1.68 1.75-2.07 4.69 0 6A4.64 4.64 0 004.18 42H1a1 1 0 00-1 1.24A11.54 11.54 0 0011.25 52h41.5A11.54 11.54 0 0064 43.24a1 1 0 00-.21-.86zM25 30h-2v-1a1 1 0 011.71-.73c.34.3.29.61.29 1.73zm-2 2h2.17a3 3 0 005.66 0H41c0 4 6 3.92 6 0h8c2.46 0 3.61 2.82 2.69 3.71-.4.41 1.72.29-34.69.29zm18-2H31v-4h2v1c0 4 6 3.93 6 0a1 1 0 012 0zm-10-6a1 1 0 012 0zm26.69 5.71c-.36.38.29.29-10.69.29v-4h8c2.46 0 3.61 2.82 2.69 3.71zM55 20c2.46 0 3.61 2.82 2.69 3.71-.36.38.29.29-10.69.29v-2a2 2 0 012-2zm-28-6h10v4H27zm18.54 6c-.72 1.23-.54 1.08-.54 12a1 1 0 01-2 0v-5a3 3 0 00-6 0 1 1 0 01-2 0v-3c0-3.92-6-4-6 0v7a1 1 0 01-2 0v-2c0-3.92-6-4-6 0v8a1 1 0 01-2 0c0-15.95.21-15.71-.54-17zM7 36c-1.91 0-1-4 2-4h8v4zm0-6c-1.39 0-1.22-2-.13-3.12S8.53 26 17 26v4zm-.13-9.12C8 19.73 8.74 20 15 20a2 2 0 012 2v2H7c-1.39 0-1.22-2-.13-3.12zM9 38h8.17a3 3 0 005.66 0H55c2.46 0 3.61 2.82 2.69 3.71-.42.43 2.74.29-50.69.29-1.91 0-1-4 2-4zm43.75 12h-41.5a9.55 9.55 0 01-8.88-6h59.26a9.55 9.55 0 01-8.88 6z"
          fill="#231f20"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
