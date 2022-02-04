import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function ArrowBackward() {
  const icon: string = `<svg
  width="20"
  height="18"
  fill="none"
  viewBox="0 0 20 18"
>
  <path
    fill="#fff"
    d="M2.077 10.167A1.17 1.17 0 01.91 9a1.17 1.17 0 011.167-1.167h13.032L9.426 2.128a1.162 1.162 0 01.822-1.986c.309 0 .605.123.823.341l7.677 7.7c.454.455.454 1.19 0 1.645l-7.689 7.689a1.162 1.162 0 01-1.645 0 1.176 1.176 0 010-1.657l5.694-5.693H2.076z"
  ></path>
</svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
