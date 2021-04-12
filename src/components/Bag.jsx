import * as React from 'react';

function SvgBag(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M447.988 139.696A4 4 0 00444 136h-72v-20C372 52.036 319.96 0 256 0S140 52.036 140 116v20H68a4 4 0 00-3.988 3.696l-28 368a3.988 3.988 0 001.056 3.02A3.988 3.988 0 0040 512h432a4 4 0 003.988-4.3l-28-368.004zM172 116c0-46.316 37.68-84 84-84s84 37.684 84 84v20H172v-20zm-16 132c-22.06 0-40-17.944-40-40 0-15.964 8-30.348 24-36.66V208c0 8.824 7.18 16 16 16s16-7.176 16-16v-36.636c16 6.312 24 20.804 24 36.636 0 22.056-17.94 40-40 40zm200 0c-22.06 0-40-17.944-40-40 0-15.964 8-30.348 24-36.66V208c0 8.824 7.18 16 16 16s16-7.176 16-16v-36.636c16 6.312 24 20.804 24 36.636 0 22.056-17.94 40-40 40z" />
    </svg>
  );
}

export default SvgBag;
