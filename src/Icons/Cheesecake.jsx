import * as React from "react"

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
      <defs>
        <linearGradient
          id="prefix__linear-gradient"
          x1={32}
          y1={55}
          x2={32}
          y2={49}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d4d8e1" />
          <stop offset={1} stopColor="#f3f4f5" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-2"
          x1={32.01}
          y1={49}
          x2={32.01}
          y2={27}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d1a788" />
          <stop offset={1} stopColor="#f2d3b8" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-3"
          x1={28.5}
          y1={45}
          x2={28.5}
          y2={30}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fbcc88" />
          <stop offset={1} stopColor="#ffe5c3" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-4"
          x1={12}
          y1={32}
          x2={45}
          y2={32}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e9a254" />
          <stop offset={1} stopColor="#f4bb79" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-5"
          x1={32}
          y1={30}
          x2={32}
          y2={18}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#da5466" />
          <stop offset={1} stopColor="#f4929c" />
        </linearGradient>
        <style>{".prefix__cls-10{fill:#231f20}"}</style>
      </defs>
      <title>{"Cheese cake"}</title>
      <g id="prefix__Cheese_cake" data-name="Cheese cake">
        <path
          fill="url(#prefix__linear-gradient)"
          d="M63 49v1l-17 3-2 2H20l-2-2-17-3v-1h62z"
        />
        <path fill="#c7cdd8" d="M46 53l-2 2H20l-2-2h28z" />
        <path
          d="M49.81 27H48a3 3 0 00-3 3v12a3 3 0 01-3 3H12v4h37V33.58a2.21 2.21 0 011.5-2.08c2.34-.78 1.85-4.5-.69-4.5z"
          fill="url(#prefix__linear-gradient-2)"
        />
        <path
          d="M14 30h31v12a3 3 0 01-3 3H12V32a2 2 0 012-2z"
          fill="url(#prefix__linear-gradient-3)"
        />
        <path d="M45 40v2a3 3 0 01-3 3H12v-2h30a3 3 0 003-3z" fill="#f6b756" />
        <path
          d="M14 30h31v4H12v-2a2 2 0 012-2z"
          fill="url(#prefix__linear-gradient-4)"
        />
        <circle cx={32} cy={24} r={6} fill="url(#prefix__linear-gradient-5)" />
        <path
          d="M32 30a6 6 0 01-5.91-7c1.1 6.64 10.72 6.63 11.82 0A6 6 0 0132 30z"
          fill="#cf4055"
        />
        <path fill="#cba07a" d="M12 47h37v2H12z" />
        <path
          className="prefix__cls-10"
          d="M63 48H50V33.58a1.19 1.19 0 01.82-1.13c3.42-1.15 2.61-6.45-1-6.45H48a4 4 0 00-3.86 3h-7.25a7 7 0 00-3.31-11.81c.92-2.55 3.33-6.07 9.6-7.21a1 1 0 00-.36-2c-7.54 1.37-10.27 5.92-11.26 9a7 7 0 00-4.45 12H14a3 3 0 00-3 3V48H1a1 1 0 00-1 1v1a1 1 0 00.83 1l16.69 3 1.77 1.78c.42.42-.26.29 12.71.29 12.76 0 12.29.13 12.71-.29L46.48 54l16.69-3c1-.16.83-1.08.83-2a1 1 0 00-1-1zM13 35h31v7a2 2 0 01-2 2H13zm14-11a5 5 0 014.08-4.91C31 19.64 31 20 31 20a1 1 0 002 0 7.48 7.48 0 01.08-.88A5 5 0 1127 24zm-14 8a1 1 0 011-1h30v2H13zm0 14h29a4 4 0 004-4V30a2 2 0 012-2c1.69 0 3-.3 3 1.42a1.19 1.19 0 01-.82 1.13 3.2 3.2 0 00-2.18 3V48H13zm32.83 6c-.45.07-.54.27-2.24 2H20.41c-1.65-1.65-1.79-1.91-2.24-2L6.75 50h50.5z"
        />
        <path
          className="prefix__cls-10"
          d="M18 40a1 1 0 000 2 1 1 0 000-2zM23 37a1 1 0 000 2 1 1 0 000-2zM28 40a1 1 0 000 2 1 1 0 000-2zM33 37a1 1 0 000 2 1 1 0 000-2zM38 40a1 1 0 000 2 1 1 0 000-2z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
