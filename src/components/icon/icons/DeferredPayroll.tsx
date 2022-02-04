import React from 'react'
import {SvgXml} from 'react-native-svg'

export default function DeferredPayroll() {
  const icon: string = `
  <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="33" cy="33" r="24" fill="#EBEFF5"/>
    <path d="M56.25 20.25V27.75H9.75V20.25H56.25Z" fill="white" stroke="#7F90AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M54.75 35.25H11.25C10.4216 35.25 9.75 34.5784 9.75 33.75V27.75H56.25V33.75C56.25 34.5784 55.5784 35.25 54.75 35.25Z" fill="white" stroke="#7F90AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.75 20.25V34.5" stroke="#7F90AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.75 20.25V34.5" stroke="#7F90AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M37.5 20.25V34.5" stroke="#7F90AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M46.5 20.25V34.5" stroke="#7F90AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.25 12.75H54.75C55.5784 12.75 56.25 13.4216 56.25 14.25V20.25H9.75V14.25C9.75 13.4216 10.4216 12.75 11.25 12.75Z" fill="#EBEFF5" stroke="#7F90AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.1733 43.1738H20.4777" stroke="#7F90AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.2178 47.3477L20.4786 47.3477" stroke="#7F90AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.3037 51.5215L20.4776 51.5215" stroke="#7F90AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="25.5" y="39.75" width="22.4994" height="12.0649" rx="2.25" fill="white" stroke="#7F90AF" stroke-width="1.5" stroke-linejoin="round"/>
    <rect x="30" y="44.25" width="22.4994" height="12.0649" rx="2.25" fill="#EBEFF5" stroke="#7F90AF" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="41.28" cy="50.28" r="2.28" fill="#C8D1E0" stroke="#7F90AF" stroke-width="1.5"/>
    <path d="M27.7822 16.7607H38.217" stroke="#7F90AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.3479 9.75V14.9674M48.6522 9.75V14.9674" stroke="#7F90AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `
  const IconSvg = () => <SvgXml xml={icon} width='100%' height='100%'/>
  return <IconSvg/>
}