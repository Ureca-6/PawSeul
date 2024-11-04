import * as React from 'react';
const SvgMiniLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 43 25"
    {...props}
  >
    <path fill="url(#mini_logo_svg__a)" d="M0 0h42.222v25H0z" />
    <defs>
      <pattern
        id="mini_logo_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#mini_logo_svg__b"
          transform="matrix(.0026 0 0 .00439 0 .12)"
        />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="mini_logo_svg__b"
        width={385}
        height={173}
      />
    </defs>
  </svg>
);
export default SvgMiniLogo;
