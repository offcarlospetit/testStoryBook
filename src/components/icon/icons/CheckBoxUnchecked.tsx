import React from 'react';
import { SvgXml } from 'react-native-svg';
import Colors from '../../../constants/colors';
interface nativeSvgIconProps {
  color?: string;
}
export default function CheckBoxUnchecked({
  color = Colors.NeutralLightGrey50,
}: nativeSvgIconProps) {
  const icon: string = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="23" height="23" rx="3.5" fill="white" stroke="${color}"/>
</svg>

  `;
  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
