
import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function MovementDebitArrowDeposit() {
  const icon: string = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.7339 8.5317L15.2551 8.54807L15.3161 14.5368L8.86199 8.08265L7.82507 9.16653L14.2792 15.6206L8.42176 15.6908L8.4385 17.2028L16.8288 17.1099L16.7339 8.5317Z" fill="#6DCDAA"/>
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}

