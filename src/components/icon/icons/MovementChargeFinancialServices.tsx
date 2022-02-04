
import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function MovementChargeFinancialServices() {
  const icon: string = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="14" r="14" fill="#216694"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.22266 8.16672L13.6115 4.27783L21.0004 8.16672V9.72228H6.22266V8.16672ZM7.77821 11.2778V16.7223H10.1115V11.2778H7.77821ZM12.4449 11.2778V16.7223H14.7782V11.2778H12.4449ZM21.0004 18.2778V20.6112H6.22266V18.2778H21.0004ZM17.1115 11.2778V16.7223H19.4449V11.2778H17.1115Z" fill="white"/>
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}

