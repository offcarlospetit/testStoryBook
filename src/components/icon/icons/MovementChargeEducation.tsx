
import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function MovementChargeEducation() {
  const icon: string = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="14" r="14" fill="#449875"/>
  <rect width="18.6667" height="18.6667" transform="translate(4.66699 4.6665)" fill="#449875"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.44434 11.6667L13.9999 7L22.5554 11.6667V17.8889H20.9999V12.5144L13.9999 16.3333L5.44434 11.6667ZM8.55545 18.0289V14.9178L13.9999 17.8889L19.4443 14.9178V18.0289L13.9999 21L8.55545 18.0289Z" fill="white"/>
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}

