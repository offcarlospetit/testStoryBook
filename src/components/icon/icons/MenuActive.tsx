import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function MenuActive() {
  const icon: string = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 25V22.1436H5V25H25Z" fill="#1976D2"/>
<path d="M25 19.2851V16.4276H5V19.2851H25Z" fill="#1976D2"/>
<path d="M25 13.5702V10.7127H5V13.5702H25Z" fill="#1976D2"/>
<path d="M25 7.85635V5H5V7.85635H25Z" fill="#1976D2"/>
</svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
