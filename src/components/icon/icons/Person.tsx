import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Person() {
  const icon: string = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3776 6.15536C11.3776 7.72691 10.1047 8.9998 8.53313 8.9998C6.96157 8.9998 5.68868 7.72691 5.68868 6.15536C5.68868 4.5838 6.96157 3.31091 8.53313 3.31091C10.1047 3.31091 11.3776 4.5838 11.3776 6.15536ZM2.84424 13.2665C2.84424 11.3749 6.63446 10.422 8.53313 10.422C10.4318 10.422 14.222 11.3749 14.222 13.2665V14.6887H2.84424V13.2665Z" fill="#4DA0E3"/>
  </svg>
  `;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
