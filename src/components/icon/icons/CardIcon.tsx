import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function CardIcon() {
  const icon: string = `
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25 5H9C7.89 5 7.01 5.89 7.01 7L7 19C7 20.11 7.89 21 9 21H25C26.11 21 27 20.11 27 19V7C27 5.89 26.11 5 25 5ZM25 19H9V13H25V19ZM9 9H25V7H9V9Z" fill="#4DA0E3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 9C3.44772 9 3 9.44772 3 10V21C3 23.2091 4.79086 25 7 25H23C23.5523 25 24 24.5523 24 24C24 23.4477 23.5523 23 23 23H7C5.89543 23 5 22.1046 5 21V10C5 9.44772 4.55228 9 4 9Z" fill="#4DA0E3"/>
</svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
