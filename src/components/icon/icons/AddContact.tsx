import React from 'react'
import {SvgXml} from 'react-native-svg'

export default function AddContact() {
  const icon: string = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 10C14.3417 10 15.8334 8.50837 15.8334 6.66671C15.8334 4.82504 14.3417 3.33337 12.5 3.33337C10.6584 3.33337 9.16671 4.82504 9.16671 6.66671C9.16671 8.50837 10.6584 10 12.5 10ZM5.00004 8.33337V5.83337H3.33337V8.33337H0.833374V10H3.33337V12.5H5.00004V10H7.50004V8.33337H5.00004ZM5.83337 15C5.83337 12.7834 10.275 11.6667 12.5 11.6667C14.725 11.6667 19.1667 12.7834 19.1667 15V16.6667H5.83337V15Z" fill="#7F90AF"/>
  </svg>`
  
  const IconSvg = () => <SvgXml xml={icon} width='100%' height='100%'/>
  return <IconSvg/>
}