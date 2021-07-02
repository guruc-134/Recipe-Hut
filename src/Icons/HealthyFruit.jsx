import * as React from "react"

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
      <defs>
        <style>
          {".prefix__cls-4{fill:#6ab891}.prefix__cls-5{fill:#4da67f}"}
        </style>
      </defs>
      <title>{"Healthy Fruit"}</title>
      <g id="prefix__Healthy_Fruit" data-name="Healthy Fruit">
        <path
          d="M127 57.51c.75 22.7-19.62 53.49-34.7 53.49-9.85 0-8.38-1.67-13.25-1.67S75.58 111 65.79 111C50.43 111 31 80.35 31 59.33c0-17.58 7.18-35 24.82-35C66.92 24.33 74.86 28 79 28c5.16-.26 12.25-3.65 22.59-3.65 16.89-.89 24.92 15.89 25.38 33.11z"
          fill="#8cdd79"
        />
        <path
          d="M92.27 111c-9.85 0-8.38-1.67-13.25-1.67S75.58 111 65.79 111c-14.56 0-36.34-30.57-34.68-55.38C32.36 76.5 51.09 105 65.76 105c9.81 0 8.37-1.67 13.26-1.67s3.3 1.67 13.22 1.67c15.78 0 33.52-30.16 34.68-49.38C128.55 80 107.1 111 92.27 111z"
          fill="#7ece67"
        />
        <path
          d="M116.07 59.33c0-11.6-3.65-24-13.9-24a1 1 0 010-2c11.72 0 15.9 13.43 15.9 26a1 1 0 01-2 0z"
          fill="#e7f4ce"
        />
        <path
          className="prefix__cls-4"
          d="M79 28h10a23 23 0 0023-23h-10a23 23 0 00-23 23z"
        />
        <path
          className="prefix__cls-5"
          d="M112 5a23 23 0 01-23 23H79a22.79 22.79 0 01.2-3H89a23 23 0 0022.8-20z"
        />
        <path
          className="prefix__cls-5"
          d="M78.57 27.35C79.11 26.72 91.91 12 103.16 12a1 1 0 010 2c-10.33 0-23 14.51-23.07 14.65a1 1 0 01-1.52-1.3z"
        />
        <path
          d="M78 29V15.33A12.31 12.31 0 0065.75 3a1 1 0 010-2A14.31 14.31 0 0180 15.33V29a1 1 0 01-2 0z"
          fill="#9b756d"
        />
        <circle className="prefix__cls-4" cx={31} cy={97} r={30} />
        <path
          className="prefix__cls-5"
          d="M31 127A30 30 0 011.14 94a30 30 0 0059.72 0A30 30 0 0131 127z"
        />
        <path
          fill="#f3f4f5"
          d="M25.5 110.93L12.88 98.31l4.24-4.24 8.38 8.38 19.38-19.38 4.24 4.24-23.62 23.62z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
