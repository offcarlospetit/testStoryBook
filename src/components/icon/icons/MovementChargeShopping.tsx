
import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function MovementChargeShopping() {
  const icon: string = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="14" r="14" fill="#505FE7"/>
  <rect width="18.6667" height="18.6667" transform="translate(4.66699 3.5)" fill="#505FE7"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2222 6.61133H7.77778V8.16688H20.2222V6.61133ZM21 14.3891V12.8335L20.2222 8.94466H7.77778L7 12.8335V14.3891H7.77778V19.0558H15.5556V14.3891H18.6667V19.0558H20.2222V14.3891H21ZM9.33333 17.5002H14V14.3891H9.33333V17.5002Z" fill="white"/>
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}

