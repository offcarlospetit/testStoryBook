import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function TransfersActive() {
  const icon: string = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.625 18.75H26.5625" stroke="#1976D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.8125 15L26.5625 18.75L22.8125 22.5" stroke="#1976D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.6875 11.25H3.75" stroke="#1976D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.1875 15L3.4375 11.25L7.1875 7.5" stroke="#1976D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
