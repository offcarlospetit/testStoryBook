import React from 'react'
import {SvgXml} from 'react-native-svg'

export default function SearchWithoutResults() {
  const icon: string = `<svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="44" cy="43.9999" r="43.6364" fill="#EBEFF5"/>
  <path d="M60.3636 64.4546L76.8807 80.9717" stroke="#1976D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.36365 34.3635C1.36365 32.7067 2.70679 31.3635 4.36365 31.3635H83.6364C85.2932 31.3635 86.6364 32.7067 86.6364 34.3635V53.6363C86.6364 55.2931 85.2932 56.6363 83.6364 56.6363H4.36365C2.70679 56.6363 1.36365 55.2931 1.36365 53.6363V34.3635Z" fill="white" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.0909 43.9999C18.0909 47.4023 18.7611 50.7715 20.0631 53.9149C21.3652 57.0583 23.2736 59.9145 25.6795 62.3204C28.0854 64.7263 30.9416 66.6347 34.085 67.9368C37.2285 69.2388 40.5976 69.909 44 69.909C47.4024 69.909 50.7715 69.2388 53.915 67.9368C57.0584 66.6347 59.9146 64.7263 62.3205 62.3204C64.7264 59.9145 66.6348 57.0583 67.9369 53.9149C69.2389 50.7715 69.9091 47.4023 69.9091 43.9999C69.9091 40.5975 69.2389 37.2284 67.9369 34.0849C66.6348 30.9415 64.7264 28.0853 62.3205 25.6794C59.9146 23.2735 57.0584 21.3651 53.915 20.063C50.7715 18.761 47.4024 18.0908 44 18.0908C40.5976 18.0908 37.2285 18.761 34.085 20.063C30.9416 21.3651 28.0854 23.2735 25.6795 25.6794C23.2736 28.0853 21.3652 30.9415 20.0631 34.0849C18.7611 37.2284 18.0909 40.5975 18.0909 43.9999Z" fill="white" stroke="#1976D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M35.8182 38.5568C35.8159 37.014 36.25 35.5019 37.0703 34.1951C37.8905 32.8884 39.0636 31.8402 40.4541 31.1716C41.8446 30.503 43.3958 30.2412 44.9287 30.4165C46.4616 30.5917 47.9137 31.1969 49.1174 32.162C50.3211 33.1272 51.2273 34.4131 51.7315 35.8713C52.2357 37.3294 52.3173 38.9005 51.9669 40.403C51.6164 41.9056 50.8483 43.2784 49.751 44.3631C48.6538 45.4477 47.2721 46.2 45.7657 46.5331C45.2714 46.6306 44.8258 46.8951 44.5034 47.2822C44.181 47.6693 44.0016 48.1554 43.9951 48.6591V51.086" stroke="#1976D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M44 56.2727C44.2697 56.2727 44.5333 56.3527 44.7576 56.5025C44.9818 56.6524 45.1566 56.8653 45.2598 57.1145C45.363 57.3637 45.39 57.6379 45.3374 57.9024C45.2848 58.1669 45.1549 58.4099 44.9642 58.6006C44.7735 58.7913 44.5305 58.9212 44.266 58.9738C44.0015 59.0264 43.7273 58.9994 43.4781 58.8962C43.229 58.793 43.016 58.6182 42.8662 58.3939C42.7163 58.1697 42.6364 57.906 42.6364 57.6363C42.6364 57.2747 42.78 56.9278 43.0358 56.6721C43.2915 56.4164 43.6383 56.2727 44 56.2727Z" fill="#1976D2" stroke="#1976D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
  
  const IconSvg = () => <SvgXml xml={icon} width='100%' height='100%'/>
  return <IconSvg/>
}