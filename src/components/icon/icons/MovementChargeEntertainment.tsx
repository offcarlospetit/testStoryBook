
import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function MovementChargeEntertainment() {
  const icon: string = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="14" r="14" fill="#E46B45"/>
  <rect width="18.6667" height="18.6667" transform="translate(4.66699 4.6665)" fill="#E46B45"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 11.6666H13.2222V6.22217H14.7778V11.6666C14.7778 13.3855 13.3856 14.7777 11.6667 14.7777V21.7777H10.1111V14.7777C8.39222 14.7777 7 13.3855 7 11.6666V6.22217H8.55556V11.6666H10.1111V6.22217H11.6667V11.6666ZM17.1111 15.5555V9.33328C17.1111 7.96439 18.8533 6.22217 21 6.22217V21.7777H19.4444V15.5555H17.1111Z" fill="white"/>
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}

