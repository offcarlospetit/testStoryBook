import React from 'react'
import {SvgXml} from 'react-native-svg'

export default function ReceiptAllWrong() {
  const icon: string = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M63 4L63 45.7126C63 47.2644 60.9499 47.8211 60.165 46.4825C58.9768 44.4559 56.1751 44.1386 54.5638 45.8482L53.3069 47.1818C52.164 48.3943 50.236 48.3943 49.0931 47.1818L48.4385 46.4872C46.4648 44.3932 43.1352 44.3932 41.1615 46.4872L40.5831 47.1009C39.3989 48.3573 37.4011 48.3573 36.2169 47.1009L35.6385 46.4872C33.6648 44.3932 30.3352 44.3932 28.3615 46.4872L27.7831 47.1009C26.5989 48.3573 24.6011 48.3573 23.4169 47.1009L22.8385 46.4872C20.8648 44.3932 17.5352 44.3932 15.5615 46.4872L14.9069 47.1818C13.764 48.3943 11.836 48.3943 10.6931 47.1818L9.4362 45.8482C7.82486 44.1386 5.02324 44.4559 3.83497 46.4825C3.05007 47.8211 1 47.2644 1 45.7126L1 4C1 2.34314 2.34314 1 4 1L60 1C61.6569 1 63 2.34314 63 4Z" fill="white" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M56 26L8 26" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M56 34L8 34" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M56 18L8 18" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M48 32C39.168 32 32 39.168 32 48C32 56.832 39.168 64 48 64C56.832 64 64 56.832 64 48C64 39.168 56.832 32 48 32Z" fill="#EE9800"/>
  <path d="M48 54C47.448 54 47 54.448 47 55C47 55.552 47.448 56 48 56C48.552 56 49 55.552 49 55C49 54.448 48.552 54 48 54Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M48 40C48.5523 40 49 40.5373 49 41.2L49 50.8C49 51.4627 48.5523 52 48 52C47.4477 52 47 51.4627 47 50.8L47 41.2C47 40.5373 47.4477 40 48 40Z" fill="white"/>
  </svg>`
  
  const IconSvg = () => <SvgXml xml={icon} width='100%' height='100%'/>
  return <IconSvg/>
}