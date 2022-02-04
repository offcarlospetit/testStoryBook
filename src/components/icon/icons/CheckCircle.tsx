import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function CheckCircle() {
  const icon: string = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66602 10.0001C1.66602 5.40008 5.39935 1.66675 9.99935 1.66675C14.5993 1.66675 18.3327 5.40008 18.3327 10.0001C18.3327 14.6001 14.5993 18.3334 9.99935 18.3334C5.39935 18.3334 1.66602 14.6001 1.66602 10.0001ZM4.16602 10.0001L8.33268 14.1667L15.8327 6.66675L14.6577 5.48341L8.33268 11.8084L5.34102 8.82508L4.16602 10.0001Z" fill="#5CB85C"/>
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
