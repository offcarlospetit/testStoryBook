import React from 'react'
import {SvgXml} from 'react-native-svg'

interface nativeSvgIconProps {
  color?: string;
}

export default function Back({ color = '#AFBACC'}: nativeSvgIconProps) {  
  const icon: string = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.0002 23.3333L15.6452 21.6883L9.13516 15.1666L23.3335 15.1666L23.3335 12.8333L9.13516 12.8333L15.6452 6.31165L14.0002 4.66665L4.66683 14L14.0002 23.3333Z" fill="${color}"/>
  </svg>`
  
  const IconSvg = () => <SvgXml xml={icon} width='100%' height='100%'/>
  return <IconSvg/>
}