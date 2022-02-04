import React from 'react'
import {SvgXml} from 'react-native-svg'

export default function ChargeDebitArrow() {
    const icon: string = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.24264 0.757364L1.24264 2.25289L7.16644 2.2582L0.712314 8.71231L1.77298 9.77297L8.2271 3.31885L8.2324 9.24264H9.72793V0.757364H1.24264Z" fill="white"/>
    </svg>`
    
    const IconSvg = () => <SvgXml xml={icon} width='100%' height='100%'/>
    return <IconSvg/>
  }