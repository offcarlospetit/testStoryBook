import React from 'react'
import {SvgXml} from 'react-native-svg'

export default function Deposit() {
    const icon: string = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#F5F7FA"/>
    <path d="M11.8667 11.2667C10.3534 10.8733 9.86671 10.4667 9.86671 9.83333C9.86671 9.10667 10.54 8.6 11.6667 8.6C12.8534 8.6 13.2934 9.16667 13.3334 10H14.8067C14.76 8.85333 14.06 7.8 12.6667 7.46V6H10.6667V7.44C9.37338 7.72 8.33338 8.56 8.33338 9.84667C8.33338 11.3867 9.60671 12.1533 11.4667 12.6C13.1334 13 13.4667 13.5867 13.4667 14.2067C13.4667 14.6667 13.14 15.4 11.6667 15.4C10.2934 15.4 9.75338 14.7867 9.68005 14H8.21338C8.29338 15.46 9.38671 16.28 10.6667 16.5533V18H12.6667V16.5667C13.9667 16.32 15 15.5667 15 14.2C15 12.3067 13.38 11.66 11.8667 11.2667Z" fill="#4BAC92"/>
    </svg>`
    
    const IconSvg = () => <SvgXml xml={icon} width='100%' height='100%'/>
    return <IconSvg/>
  }