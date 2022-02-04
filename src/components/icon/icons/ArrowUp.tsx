import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function ArrowUp() {
  const icon: string = `<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.833008 11.0007L2.71301 12.8807L10.1663 5.44065V21.6673H12.833V5.44065L20.273 12.894L22.1663 11.0007L11.4997 0.333984L0.833008 11.0007Z" fill="#1976D2"/>
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
