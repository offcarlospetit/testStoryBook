import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function TelefoniaCelular() {
  const icon: string = `
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34 13H20C19.4477 13 19 13.4477 19 14V41C19 41.5523 19.4477 42 20 42H34C34.5523 42 35 41.5523 35 41V14C35 13.4477 34.5523 13 34 13ZM20 10C17.7909 10 16 11.7909 16 14V41C16 43.2091 17.7909 45 20 45H34C36.2091 45 38 43.2091 38 41V14C38 11.7909 36.2091 10 34 10H20Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.5 16C23.5 15.1716 24.1716 14.5 25 14.5H29.5C30.3284 14.5 31 15.1716 31 16C31 16.8284 30.3284 17.5 29.5 17.5H25C24.1716 17.5 23.5 16.8284 23.5 16Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.5 39C25.5 38.1716 26.1716 37.5 27 37.5H27.5C28.3284 37.5 29 38.1716 29 39C29 39.8284 28.3284 40.5 27.5 40.5H27C26.1716 40.5 25.5 39.8284 25.5 39Z" fill="#1976D2"/>
</svg>

  `;
  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
