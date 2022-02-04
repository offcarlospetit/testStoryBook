
import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function MovementChargeHealth() {
  const icon: string = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="14" r="14" fill="#C55B88"/>
  <rect width="18.6667" height="18.6667" transform="translate(4.66699 4.6665)" fill="#C55B88"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55556 7H19.4444C20.3 7 21 7.7 21 8.55556V19.4444C21 20.3 20.3 21 19.4444 21H8.55556C7.7 21 7 20.3 7 19.4444L7.00778 8.55556C7.00778 7.7 7.7 7 8.55556 7ZM15.5556 15.5556H18.6667V12.4444H15.5556V9.33333H12.4444V12.4444H9.33333V15.5556H12.4444V18.6667H15.5556V15.5556Z" fill="white"/>
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}

