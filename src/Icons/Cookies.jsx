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
          x1={42.01}
          y1={42.97}
          x2={42.01}
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d1a788" />
          <stop offset={1} stopColor="#f2d3b8" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-2"
          x1={42}
          y1={24}
          x2={42}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#9b756d" />
          <stop offset={1} stopColor="#bc9388" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-3"
          x1={44}
          y1={11}
          x2={44}
          y2={5}
          xlinkHref="#prefix__linear-gradient-2"
        />
        <linearGradient
          id="prefix__linear-gradient-4"
          x1={31}
          y1={14}
          x2={31}
          y2={10}
          xlinkHref="#prefix__linear-gradient-2"
        />
        <linearGradient
          id="prefix__linear-gradient-5"
          x1={51.5}
          y1={34}
          x2={51.5}
          y2={29}
          xlinkHref="#prefix__linear-gradient-2"
        />
        <linearGradient
          id="prefix__linear-gradient-6"
          x1={56}
          y1={19}
          x2={56}
          y2={15}
          xlinkHref="#prefix__linear-gradient-2"
        />
        <linearGradient
          id="prefix__linear-gradient-7"
          x1={22}
          y1={63}
          x2={22}
          y2={21}
          xlinkHref="#prefix__linear-gradient"
        />
        <linearGradient
          id="prefix__linear-gradient-8"
          x1={34}
          y1={46}
          x2={34}
          y2={38}
          xlinkHref="#prefix__linear-gradient-2"
        />
        <linearGradient
          id="prefix__linear-gradient-9"
          x1={11}
          y1={52}
          x2={11}
          y2={46}
          xlinkHref="#prefix__linear-gradient-2"
        />
        <linearGradient
          id="prefix__linear-gradient-10"
          x1={8}
          y1={37.5}
          x2={8}
          y2={32.5}
          xlinkHref="#prefix__linear-gradient-2"
        />
        <linearGradient
          id="prefix__linear-gradient-11"
          x1={21}
          y1={42.5}
          x2={21}
          y2={37.5}
          xlinkHref="#prefix__linear-gradient-2"
        />
        <linearGradient
          id="prefix__linear-gradient-12"
          x1={19}
          y1={28}
          x2={19}
          y2={24}
          xlinkHref="#prefix__linear-gradient-2"
        />
        <linearGradient
          id="prefix__linear-gradient-13"
          x1={24}
          y1={57}
          x2={24}
          y2={53}
          xlinkHref="#prefix__linear-gradient-2"
        />
        <style>
          {".prefix__cls-7{fill:#cba07a}.prefix__cls-15{fill:#231f20}"}
        </style>
      </defs>
      <title>{"Cookies"}</title>
      <g id="prefix__Cookies">
        <path
          d="M63 22a21 21 0 01-20 21L21 21a20.51 20.51 0 016.15-13.85C40.32-6 63 3.37 63 22z"
          fill="url(#prefix__linear-gradient)"
        />
        <circle cx={42} cy={20} r={4} fill="url(#prefix__linear-gradient-2)" />
        <circle cx={44} cy={8} r={3} fill="url(#prefix__linear-gradient-3)" />
        <circle cx={31} cy={12} r={2} fill="url(#prefix__linear-gradient-4)" />
        <circle
          cx={51.5}
          cy={31.5}
          r={2.5}
          fill="url(#prefix__linear-gradient-5)"
        />
        <circle cx={56} cy={17} r={2} fill="url(#prefix__linear-gradient-6)" />
        <path
          className="prefix__cls-7"
          d="M63 20.43a21 21 0 01-13.71 18.24 4 4 0 01-5.14-2.57C41 25.49 29.64 19.35 21.14 21c0-.24-.05-.48-.07-.72C21 21.41 18.69 18.69 43 43a21 21 0 0020-22.57z"
        />
        <path
          d="M43 42a21 21 0 01-21 21C3.24 63-6 40.26 7.15 27.15S43 23.37 43 42z"
          fill="url(#prefix__linear-gradient-7)"
        />
        <path
          className="prefix__cls-7"
          d="M22 63C8.73 63 .24 51.62 1.06 40.31a21 21 0 0041.88.15A21 21 0 0122 63z"
        />
        <circle cx={34} cy={42} r={4} fill="url(#prefix__linear-gradient-8)" />
        <circle cx={11} cy={49} r={3} fill="url(#prefix__linear-gradient-9)" />
        <circle
          cx={8}
          cy={35}
          r={2.5}
          fill="url(#prefix__linear-gradient-10)"
        />
        <circle
          cx={21}
          cy={40}
          r={2.5}
          fill="url(#prefix__linear-gradient-11)"
        />
        <circle cx={19} cy={26} r={2} fill="url(#prefix__linear-gradient-12)" />
        <circle cx={24} cy={55} r={2} fill="url(#prefix__linear-gradient-13)" />
        <path
          className="prefix__cls-15"
          d="M64 22A21.62 21.62 0 0050.4 1.73a21.91 21.91 0 00-30.32 18.34 21.53 21.53 0 00-13.64 6.37C-7.34 40.22 2.39 64 22 64a22 22 0 0021.91-20.06C54.11 43.41 64 34.2 64 22zM22 62A19.64 19.64 0 013.57 49.67 20 20 0 1122 62zm22-20.13A22 22 0 0022.09 20 19.91 19.91 0 0149.63 3.58C68.89 11.55 64.55 39.85 44 41.87z"
        />
        <path
          className="prefix__cls-15"
          d="M34 37a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zM11 45a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2zM11.5 35A3.5 3.5 0 108 38.5a3.5 3.5 0 003.5-3.5zM8 33.5a1.5 1.5 0 010 3 1.5 1.5 0 010-3zM24.5 40a3.5 3.5 0 10-3.5 3.5 3.5 3.5 0 003.5-3.5zM21 38.5a1.5 1.5 0 010 3 1.5 1.5 0 010-3zM22 26a3 3 0 10-3 3 3 3 0 003-3zm-3-1a1 1 0 010 2 1 1 0 010-2zM24 52a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 010-2 1 1 0 010 2zM42 15a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zM44 12a4 4 0 10-4-4 4 4 0 004 4zm0-6a2 2 0 11-2 2 2 2 0 012-2zM31 9a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 010-2 1 1 0 010 2zM51.5 28a3.5 3.5 0 103.5 3.5 3.5 3.5 0 00-3.5-3.5zm0 5a1.5 1.5 0 010-3 1.5 1.5 0 010 3zM56 14a3 3 0 103 3 3 3 0 00-3-3zm0 4a1 1 0 010-2 1 1 0 010 2z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
