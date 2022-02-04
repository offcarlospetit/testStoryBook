import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function DeviceCompatibility() {
  const icon: string = `<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60.5" cy="60" r="44" fill="#EBEFF5"/>
    <path d="M32.5109 97.1852V68.1482L38.0101 72.5926L47.2719 64.8889L49.2979 75.5556L51.324 68.1482L55.376 69.6297L57.6915 66.0741L61.4541 78.8148L72.1631 77.0371L74.768 59.2593L77.9518 61.0371V97.1852C77.9518 101.689 74.0927 103.605 72.1631 104H39.1678C33.6107 104 32.4144 99.4568 32.5109 97.1852Z" fill="white" stroke="#1976D2" stroke-width="2" stroke-linejoin="round"/>
    <path d="M31.9733 23.1111V57.4814L38.6303 61.6296L47.6027 55.1111V43.8518L50.7864 55.1111L54.5026 59.2592L57.7328 49.1852L58.8905 55.1111L63.8109 59.2592L65.2116 70.5185L69.2636 69.6296L68.0781 61.6296L70.4678 47.7037L78.2825 52.4444V23.1111C78.2825 18.3704 74.2305 16.3951 72.2044 16H38.6303C32.6101 16 31.6839 20.7407 31.9733 23.1111Z" fill="white" stroke="#1976D2" stroke-width="2" stroke-linejoin="round"/>
    <path d="M64.343 23.1111L45.8193 23.1111" stroke="#1976D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M30.1902 60.3751L24.5 56.2963" stroke="#1976D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M79.9724 60.4445L85.9472 64.0717" stroke="#1976D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M30.1902 66.3704L24.5 70.4492" stroke="#1976D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M79.9724 54.5802L86.4999 52.1481" stroke="#1976D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <ellipse cx="55.0813" cy="95.4075" rx="3.47319" ry="3.55555" fill="white" stroke="#1976D2" stroke-width="2"/>
    <path d="M80.5 56C67.252 56 56.5 66.752 56.5 80C56.5 93.248 67.252 104 80.5 104C93.748 104 104.5 93.248 104.5 80C104.5 66.752 93.748 56 80.5 56Z" fill="#D9534F"/>
    <path d="M71.9286 71.4286L89.0714 88.5714M89.0714 71.4286L71.9286 88.5714" stroke="white" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
