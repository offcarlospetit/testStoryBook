import React from 'react';
import { SvgXml } from 'react-native-svg';
import Colors from '../../../constants/colors';
interface nativeSvgIconProps {
  color?: string;
}
export default function Elipse({
  color = Colors.PrimaryBlue50,
}: nativeSvgIconProps) {
  const icon: string = `
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="4" cy="4" r="4" fill="${color}"/>
  </svg>
  
  `;
  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
