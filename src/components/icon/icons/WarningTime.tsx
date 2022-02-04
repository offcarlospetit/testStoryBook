import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function WarningTime() {
  const icon: string = `<svg width="66" height="60" viewBox="0 0 66 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="30" fill="#EBEFF5"/>
<path d="M59 11L59 46.7178C59 48.1127 57.1755 48.6394 56.4321 47.4591C55.2771 45.6253 52.722 45.3308 51.1801 46.8537L49.952 48.0666C48.87 49.1352 47.13 49.1352 46.048 48.0666L45.5135 47.5387C43.566 45.6153 40.434 45.6153 38.4865 47.5387L38.1081 47.9124C36.9396 49.0665 35.0604 49.0665 33.8919 47.9124L33.5135 47.5387C31.566 45.6153 28.434 45.6153 26.4865 47.5387L26.1081 47.9124C24.9396 49.0665 23.0604 49.0665 21.8919 47.9124L21.5135 47.5387C19.566 45.6153 16.434 45.6153 14.4865 47.5387L13.952 48.0666C12.87 49.1352 11.13 49.1352 10.048 48.0666L8.81994 46.8537C7.27803 45.3308 4.72289 45.6253 3.56789 47.4591C2.82445 48.6394 0.999997 48.1127 0.999997 46.7178L1 11C1 9.34314 2.34315 7.99999 4 7.99999L56 8C57.6569 8 59 9.34314 59 11Z" fill="white" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M52 19L8 19" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M52 27L8 27" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M52 35L8 35" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M52 32C44.272 32 38 38.272 38 46C38 53.728 44.272 60 52 60C59.728 60 66 53.728 66 46C66 38.272 59.728 32 52 32Z" fill="#EE9800"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M51.3333 38C52.0697 38 52.6667 38.597 52.6667 39.3333V45.3333H58.6667C59.403 45.3333 60 45.9303 60 46.6667C60 47.403 59.403 48 58.6667 48H51.3333C50.597 48 50 47.403 50 46.6667V39.3333C50 38.597 50.597 38 51.3333 38Z" fill="white"/>
</svg>
`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
