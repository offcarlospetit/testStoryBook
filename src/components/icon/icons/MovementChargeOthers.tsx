
import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function MovementChargeOthers() {
  const icon: string = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="14" r="14" fill="#8BA9B7"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.33388 12.4443C8.47832 12.4443 7.77832 13.1443 7.77832 13.9999C7.77832 14.8554 8.47832 15.5554 9.33388 15.5554C10.1894 15.5554 10.8894 14.8554 10.8894 13.9999C10.8894 13.1443 10.1894 12.4443 9.33388 12.4443ZM18.6672 12.4443C17.8117 12.4443 17.1117 13.1443 17.1117 13.9999C17.1117 14.8554 17.8117 15.5554 18.6672 15.5554C19.5228 15.5554 20.2228 14.8554 20.2228 13.9999C20.2228 13.1443 19.5228 12.4443 18.6672 12.4443ZM12.445 13.9999C12.445 13.1443 13.145 12.4443 14.0005 12.4443C14.8561 12.4443 15.5561 13.1443 15.5561 13.9999C15.5561 14.8554 14.8561 15.5554 14.0005 15.5554C13.145 15.5554 12.445 14.8554 12.445 13.9999Z" fill="white"/>
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}

