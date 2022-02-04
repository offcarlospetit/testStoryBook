
import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function MovementDebitArrowCharge() {
  const icon: string = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.5317 8.439L8.54807 9.91779L14.5368 9.85674L8.08265 16.3109L9.16653 17.3478L15.6206 10.8937L15.6908 16.7511L17.2028 16.7344L17.1099 8.34404L8.5317 8.439Z" fill="#EE9800"/>
  </svg>`;
  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}

