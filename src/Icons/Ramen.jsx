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
          x1={28.32}
          y1={34}
          x2={28.32}
          y2={26}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e9a254" />
          <stop offset={1} stopColor="#f4bb79" />
        </linearGradient>
        <linearGradient
          id="prefix__c"
          x1={28.15}
          y1={28.5}
          x2={52}
          y2={28.5}
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__b"
          x1={39}
          y1={10}
          x2={39}
          y2={6}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d1a788" />
          <stop offset={1} stopColor="#f2d3b8" />
        </linearGradient>
        <linearGradient id="prefix__d" y1={6} y2={2} xlinkHref="#prefix__b" />
        <linearGradient
          id="prefix__e"
          x1={28}
          y1={58}
          x2={28}
          y2={34}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#da5466" />
          <stop offset={1} stopColor="#f4929c" />
        </linearGradient>
        <linearGradient
          id="prefix__f"
          x1={14.27}
          y1={34}
          x2={14.27}
          y2={21.99}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d4d8e1" />
          <stop offset={1} stopColor="#f3f4f5" />
        </linearGradient>
        <linearGradient
          id="prefix__g"
          x1={14}
          x2={14}
          y2={28.93}
          xlinkHref="#prefix__a"
        />
      </defs>
      <title>{"Artboard 2"}</title>
      <path
        d="M36 34H23.81a12.11 12.11 0 00-3.18-6.74C27.14 23.9 36 27.62 36 34z"
        fill="url(#prefix__a)"
      />
      <path
        d="M52 34H36c0-3.83-3.36-7-7.85-7.81C36.86 19.38 52 24.17 52 34z"
        fill="url(#prefix__c)"
      />
      <path fill="url(#prefix__b)" d="M63 10L15 9V6h48v4z" />
      <path fill="url(#prefix__d)" d="M63 2L15 3v3h48V2z" />
      <path fill="#cf4055" d="M39 56.59V63H17v-6.41" />
      <path
        d="M55 34c0 5.28-.63 7-1.9 10.15C49.41 52.29 40.7 58 30.55 58h-5.1C11.66 58 1 47.62 1 35.43V34z"
        fill="url(#prefix__e)"
      />
      <path
        d="M54.49 40a19.57 19.57 0 01-1.33 4H2.84a19.57 19.57 0 01-1.33-4z"
        fill="#e8677d"
      />
      <path
        d="M23.81 34H5.08c-.94-4.61-.08-9.55 3.15-11.32C13.84 19.59 23.3 27.43 23.81 34z"
        fill="url(#prefix__f)"
      />
      <path
        d="M23.81 34H5.08a19.66 19.66 0 01-.29-2h18.62a8.65 8.65 0 01.4 2z"
        fill="#c7cdd8"
      />
      <path d="M19 34a5 5 0 10-10 0z" fill="url(#prefix__g)" />
      <path d="M19 34H9a5 5 0 01.38-2h9.23a5 5 0 01.39 2z" fill="#dd8b37" />
      <path
        d="M63.7 1.29C63.25.84 65.5 1 32 1.65V1a1 1 0 00-2 0v.69h-2V1a1 1 0 00-2 0v.77h-2V1a1 1 0 00-2 0v.85h-2V1a1 1 0 00-2 0v.94L15 2a1 1 0 00-1 1v6a1 1 0 001 1l3 .06V14a4 4 0 01-4 4 1 1 0 00-1 1c0 2.42 7 .5 7-5v-3.9l2 .05v15.49c-.38.12-.75.26-1.11.41-3.7-4-9.23-6.4-13.14-4.25C4.24 23.74 3.31 28.62 3.9 33H1a1 1 0 00-1 1 24.94 24.94 0 00.43 5.73A24 24 0 0016 57.32V63a1 1 0 001 1h22a1 1 0 001-1v-5.68a24.61 24.61 0 0014-12.75A23 23 0 0056 34a1 1 0 00-1-1h-2.06C52.09 24.86 41.45 19.71 32 23V10.35L63 11a1 1 0 001-1c0-8.66.11-8.32-.3-8.71zM62 3v2H32V3.65zm-32 .69V5h-2V3.73zM28 7h2v1.31h-2zm-2 1.23h-2V7h2zm0-4.46V5h-2V3.81zm-4 .08V5h-2V3.9zM16 4h2v1h-2zm0 4V7h2v1.06zm4 .08V7h2v1.15zm4 2.09h2V25a13.27 13.27 0 00-2 .17zM34.9 33h-2.12c-.85-2-4.22-4-8.78-4-1.25 0-.53.34-1.78-1.35 5.2-1.89 11.78.51 12.68 5.35zm2 0a7.45 7.45 0 00-.38-1.53c3.55-1 7.89-.29 9.83 1.53zm11.85 0c-1.26-3-7.56-5.17-13.14-3.32A9.2 9.2 0 0034.12 28c6.15-2.61 13.4.54 14.72 5.05zm-24.1 0a11 11 0 00-.58-2 9.47 9.47 0 016.28 2zm-16-9.44c4.48-2.47 12.63 3.68 13.93 9.44h-2.67c-1.08-6.82-10.81-6.59-11.83 0H5.92c-.68-4.32.43-8.14 2.79-9.44zM17.89 33h-7.78a4 4 0 017.78 0zM52.5 43h-49a19 19 0 01-.7-2h50.4a19 19 0 01-.7 2zM38 62H18v-4c4.39 1.24 7.41 1 12.55 1A27.41 27.41 0 0038 58zm-7.45-5c-7.14 0-7.76.2-13.28-1.36A22.79 22.79 0 014.44 45h47.12c-4.1 7.63-12.43 12-21.01 12zM54 35.43a19.36 19.36 0 01-.34 3.57H2.34A19.82 19.82 0 012 35c57.47 0 52-.21 52 .43zM50.93 33c-1.28-6.5-11.16-10.38-18.61-6.38a10.92 10.92 0 00-1.73-.8C38.61 21.44 50 25.41 50.93 33zM30 23.83a15 15 0 00-2 1.24v-14.8h2v13.56zM62 9l-30-.65V7h30z"
        fill="#231f20"
      />
    </svg>
  )
}

export default SvgComponent
