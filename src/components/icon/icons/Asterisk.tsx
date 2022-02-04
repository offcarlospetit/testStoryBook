import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Asterisk() {
  const icon: string = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.18457 1.36898L7.97796 2.75936L4.9146 4L8 5.21925L7.16253 6.65241L4.49587 4.77005L4.84848 8H3.19559L3.52617 4.77005L0.859504 6.6738L0 5.21925L3.06336 3.97861L0 2.78075L0.815427 1.34759L3.54821 3.25134L3.19559 0H4.87052L4.49587 3.25134L7.18457 1.36898Z" fill="#4DA0E3"/>
  </svg>  
  `;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}