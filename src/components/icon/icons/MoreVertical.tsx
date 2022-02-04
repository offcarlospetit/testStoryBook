import React from 'react';
import { SvgXml } from 'react-native-svg';
import Colors from '../../../constants/colors';
interface nativeSvgIconProps {
  color?: string;
}
export default function MoreVertical({
  color = Colors.PrimaryBlue50,
}: nativeSvgIconProps) {
  const icon: string = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
    <title></title>
    <g id="icomoon-ignore">
    </g>
    <path fill="${color}" d="M512 341.333c46.933 0 85.333-38.4 85.333-85.333s-38.4-85.333-85.333-85.333c-46.933 0-85.333 38.4-85.333 85.333s38.4 85.333 85.333 85.333zM512 426.667c-46.933 0-85.333 38.4-85.333 85.333s38.4 85.333 85.333 85.333c46.933 0 85.333-38.4 85.333-85.333s-38.4-85.333-85.333-85.333zM426.667 768c0-46.933 38.4-85.333 85.333-85.333s85.333 38.4 85.333 85.333c0 46.933-38.4 85.333-85.333 85.333s-85.333-38.4-85.333-85.333z"></path>
    </svg>
  `;
  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
