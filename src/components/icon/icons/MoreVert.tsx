import React from 'react'
import {SvgXml} from 'react-native-svg'

interface nativeSvgIconProps {
  color?: string;
}

export default function MoreVert({ color = '#fff'}: nativeSvgIconProps) { 
  const icon: string = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0003 9.33366C15.2837 9.33366 16.3337 8.28366 16.3337 7.00033C16.3337 5.71699 15.2837 4.66699 14.0003 4.66699C12.717 4.66699 11.667 5.71699 11.667 7.00033C11.667 8.28366 12.717 9.33366 14.0003 9.33366ZM14.0003 11.667C12.717 11.667 11.667 12.717 11.667 14.0003C11.667 15.2837 12.717 16.3337 14.0003 16.3337C15.2837 16.3337 16.3337 15.2837 16.3337 14.0003C16.3337 12.717 15.2837 11.667 14.0003 11.667ZM11.667 21.0003C11.667 19.717 12.717 18.667 14.0003 18.667C15.2837 18.667 16.3337 19.717 16.3337 21.0003C16.3337 22.2837 15.2837 23.3337 14.0003 23.3337C12.717 23.3337 11.667 22.2837 11.667 21.0003Z" fill="${color}"/>
  </svg>
  `
  const IconSvg = () => <SvgXml xml={icon} width='100%' height='100%'/>
  return <IconSvg/>
}