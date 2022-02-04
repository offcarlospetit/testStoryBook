import React from 'react';
import { SvgXml } from 'react-native-svg';
import Colors from '../../../constants/colors';
interface nativeSvgIconProps {
  color?: string;
}
export default function AlertWarning({
  color = Colors.SemanticWarningYellow50,
}: nativeSvgIconProps) {
  const icon: string = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1673 17.5L10.0007 1.66663L0.833984 17.5H19.1673ZM10.834 15H9.16732V13.3333H10.834V15ZM9.16732 11.6666H10.834V8.33329H9.16732V11.6666Z" fill="${color}"/>
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
