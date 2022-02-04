
import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function MovementChargeTravel() {
  const icon: string = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="14" r="14" fill="#E6B815"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.401 10.1735C21.0232 10.0024 21.6688 10.3757 21.8321 10.998C21.9954 11.6202 21.6299 12.258 20.9999 12.4369L8.1121 15.8824L7.51321 14.848L6.09766 12.3902L7.22543 12.0869L8.75766 13.2846L12.6232 12.2502L9.40321 6.67352L10.9043 6.27686L16.271 11.278L20.401 10.1735ZM21.3888 18.278H6.61099V19.8335H21.3888V18.278Z" fill="white"/>
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}

