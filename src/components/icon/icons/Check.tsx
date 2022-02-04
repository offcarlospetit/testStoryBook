import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Check() {
  const icon: string = `
  <svg width={28} height={28} fill="none" viewBox="0 0 28 28">
    <path
      fill="#fff"
      d="M10.26 18.52l-4.047-4.047a1.162 1.162 0 10-1.645 1.644l4.876 4.877c.455.455 1.19.455 1.645 0L23.433 8.651a1.162 1.162 0 00-.823-1.986 1.16 1.16 0 00-.822.34L10.26 18.522z"
    />
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
