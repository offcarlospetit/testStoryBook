import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function TarjetaCredito() {
  const icon: string = `
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 20C10.5 17.5147 12.5147 15.5 15 15.5H40C42.4853 15.5 44.5 17.5147 44.5 20V36.7333C44.5 39.2186 42.4853 41.2333 40 41.2333H15C12.5147 41.2333 10.5 39.2186 10.5 36.7333V20ZM15 18.5C14.1716 18.5 13.5 19.1716 13.5 20V36.7333C13.5 37.5618 14.1716 38.2333 15 38.2333H40C40.8284 38.2333 41.5 37.5618 41.5 36.7333V20C41.5 19.1716 40.8284 18.5 40 18.5H15Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 23.2002C10.5 22.3718 11.1716 21.7002 12 21.7002H43C43.8284 21.7002 44.5 22.3718 44.5 23.2002C44.5 24.0286 43.8284 24.7002 43 24.7002H12C11.1716 24.7002 10.5 24.0286 10.5 23.2002Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7002 29.3999C16.7002 28.5715 17.3718 27.8999 18.2002 27.8999H29.5669C30.3953 27.8999 31.0669 28.5715 31.0669 29.3999C31.0669 30.2283 30.3953 30.8999 29.5669 30.8999H18.2002C17.3718 30.8999 16.7002 30.2283 16.7002 29.3999Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7002 33.5332C16.7002 32.7048 17.3718 32.0332 18.2002 32.0332H25.4335C26.262 32.0332 26.9335 32.7048 26.9335 33.5332C26.9335 34.3616 26.262 35.0332 25.4335 35.0332H18.2002C17.3718 35.0332 16.7002 34.3616 16.7002 33.5332Z" fill="#1976D2"/>
</svg>

  `;
  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}