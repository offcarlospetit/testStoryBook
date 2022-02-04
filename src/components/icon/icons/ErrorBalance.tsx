import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function ErrorBalance() {
  const icon: string = `<svg width="66" height="60" viewBox="0 0 66 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle opacity="0.6" cx="30" cy="30" r="30" fill="#1976D2"/>
  <path d="M59 11L59 46.7178C59 48.1127 57.1755 48.6394 56.4321 47.4591C55.2771 45.6253 52.722 45.3308 51.1801 46.8537L49.952 48.0666C48.87 49.1352 47.13 49.1352 46.048 48.0666L45.5135 47.5387C43.566 45.6153 40.434 45.6153 38.4865 47.5387L38.1081 47.9124C36.9396 49.0665 35.0604 49.0665 33.8919 47.9124L33.5135 47.5387C31.566 45.6153 28.434 45.6153 26.4865 47.5387L26.1081 47.9124C24.9396 49.0665 23.0604 49.0665 21.8919 47.9124L21.5135 47.5387C19.566 45.6153 16.434 45.6153 14.4865 47.5387L13.952 48.0666C12.87 49.1352 11.13 49.1352 10.048 48.0666L8.81994 46.8537C7.27803 45.3308 4.72289 45.6253 3.56789 47.4591C2.82445 48.6394 0.999997 48.1127 0.999997 46.7178L1 11C1 9.34314 2.34315 7.99999 4 7.99999L56 8C57.6569 8 59 9.34314 59 11Z" fill="#1568C3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M52 19L8 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M52 27L8 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M52 35L8 35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M52 32C44.272 32 38 38.272 38 46C38 53.728 44.272 60 52 60C59.728 60 66 53.728 66 46C66 38.272 59.728 32 52 32Z" fill="#EE9800"/>
  <path d="M52 51.25C51.517 51.25 51.125 51.642 51.125 52.125C51.125 52.608 51.517 53 52 53C52.483 53 52.875 52.608 52.875 52.125C52.875 51.642 52.483 51.25 52 51.25Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M52 39C52.4832 39 52.875 39.4701 52.875 40.05L52.875 48.45C52.875 49.0299 52.4832 49.5 52 49.5C51.5168 49.5 51.125 49.0299 51.125 48.45L51.125 40.05C51.125 39.4701 51.5168 39 52 39Z" fill="white"/>
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
