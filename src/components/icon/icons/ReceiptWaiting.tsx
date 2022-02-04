import React from 'react'
import {SvgXml} from 'react-native-svg'

export default function ReceiptWaiting() {
  const icon: string = `<svg width="67" height="61" viewBox="0 0 67 61" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="30.5" cy="30" r="30" fill="#EBEFF5"/>
  <path d="M59.5 11L59.5 46.7178C59.5 48.1127 57.6755 48.6394 56.9321 47.4591C55.7771 45.6253 53.222 45.3308 51.6801 46.8537L50.452 48.0666C49.37 49.1352 47.63 49.1352 46.548 48.0666L46.0135 47.5387C44.066 45.6153 40.934 45.6153 38.9865 47.5387L38.6081 47.9124C37.4396 49.0665 35.5604 49.0665 34.3919 47.9124L34.0135 47.5387C32.066 45.6153 28.934 45.6153 26.9865 47.5387L26.6081 47.9124C25.4396 49.0665 23.5604 49.0665 22.3919 47.9124L22.0135 47.5387C20.066 45.6153 16.934 45.6153 14.9865 47.5387L14.452 48.0666C13.37 49.1352 11.63 49.1352 10.548 48.0666L9.31994 46.8537C7.77803 45.3308 5.22289 45.6253 4.06789 47.4591C3.32445 48.6394 1.5 48.1127 1.5 46.7178L1.5 11C1.5 9.34314 2.84315 7.99999 4.5 7.99999L56.5 8C58.1569 8 59.5 9.34314 59.5 11Z" fill="white" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M52.5 19L8.5 19" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M52.5 27L8.5 27" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M52.5 35L8.5 35" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M52.5 33C44.772 33 38.5 39.272 38.5 47C38.5 54.728 44.772 61 52.5 61C60.228 61 66.5 54.728 66.5 47C66.5 39.272 60.228 33 52.5 33Z" fill="#1C7CD5"/>
  <path d="M52.5 45L52.5 53" stroke="white" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M52.5 40.6L52.5 41" stroke="white" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `
  
  const IconSvg = () => <SvgXml xml={icon} width='100%' height='100%'/>
  return <IconSvg/>
}