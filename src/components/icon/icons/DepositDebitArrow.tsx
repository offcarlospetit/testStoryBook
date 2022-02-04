import React from 'react'
import {SvgXml} from 'react-native-svg'

export default function DepositDebitArrow() {
    const icon: string = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.72799 1.24264L8.23246 1.24264L8.22717 7.16644L1.77305 0.712318L0.712391 1.77298L7.16651 8.2271L1.24273 8.23241L1.24273 9.72794L9.728 9.72793L9.72799 1.24264Z" fill="white"/>
    </svg>`
    const IconSvg = () => <SvgXml xml={icon} width='100%' height='100%'/>
    return <IconSvg/>
  }