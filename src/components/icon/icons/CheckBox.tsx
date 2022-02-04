import React from 'react';
import { SvgXml } from 'react-native-svg';
import Colors from '../../../constants/colors';
interface nativeSvgIconProps {
  color?: string;
}
export default function CheckBox({
  color = Colors.PrimaryBlue50,
}: nativeSvgIconProps) {
  const icon: string = `
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <title></title>
  <g id="icomoon-ignore">
  </g>
  <path fill="${color}" stroke="${color}" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="85.3333" d="M170.667 42.667h682.667c70.692 0 128 57.308 128 128v682.667c0 70.692-57.308 128-128 128h-682.667c-70.692 0-128-57.308-128-128v-682.667c0-70.692 57.308-128 128-128z"></path>
  <path fill="#fff" stroke="#fff" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="42.6667" d="M409.596 654.34l-118.443-118.443c-13.312-13.312-34.816-13.312-48.128 0s-13.312 34.816 0 48.128l142.677 142.677c13.312 13.312 34.816 13.312 48.128 0l361.131-361.133c13.312-13.312 13.312-34.816 0-48.128s-34.816-13.312-48.128 0l-337.237 336.898z"></path>
  <path fill="none" stroke="${color}" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="42.6667" d="M123.729 123.734h776.533v776.533h-776.533v-776.533z"></path>
  </svg>
  
  `;
  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
