import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Promotoras() {
  const icon: string = `
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 14.5C11 13.6716 11.6716 13 12.5 13H24.3208V21.2085C24.3208 22.0369 23.6492 22.7085 22.8208 22.7085C21.9924 22.7085 21.3208 22.0369 21.3208 21.2085V16H12.5C11.6716 16 11 15.3284 11 14.5Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1284 21.2085V14.5H18.1284V21.2085H15.1284Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 24.7246C11 22.2393 13.0147 20.2246 15.5 20.2246H23.9491C26.4344 20.2246 28.4491 22.2393 28.4491 24.7246V40.3983C28.4491 42.8836 26.4344 44.8983 23.9491 44.8983H15.5C13.0147 44.8983 11 42.8836 11 40.3983V24.7246ZM15.5 23.2246C14.6716 23.2246 14 23.8962 14 24.7246V40.3983C14 41.2267 14.6716 41.8983 15.5 41.8983H23.9491C24.7775 41.8983 25.4491 41.2267 25.4491 40.3983V24.7246C25.4491 23.8962 24.7775 23.2246 23.9491 23.2246H15.5Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2568 28.3848H16.0322C15.2038 28.3848 14.5322 27.7132 14.5322 26.8848V26.8848C14.5322 26.0563 15.2038 25.3848 16.0322 25.3848H21.2568V39.7376H16.0322C15.2038 39.7376 14.5322 39.0661 14.5322 38.2376V38.2376C14.5322 37.4092 15.2038 36.7376 16.0322 36.7376H18.2568V28.3848Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.7576 16.5161L34.9969 36.2219H39.027L41.2663 16.5161H32.7576ZM29.7136 16.2984C29.545 14.8154 30.7051 13.5161 32.1976 13.5161H41.8264C43.3189 13.5161 44.4789 14.8154 44.3104 16.2984L41.9574 37.0041C41.8139 38.2675 40.7449 39.2219 39.4734 39.2219H34.5505C33.279 39.2219 32.2101 38.2675 32.0665 37.0041L29.7136 16.2984Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.4181 21.1906C40.1284 20.9125 38.0467 22.5432 37.7686 24.833C37.4904 27.1227 39.1212 29.2044 41.4109 29.4825L41.0492 32.4606C37.1147 31.9827 34.3125 28.4058 34.7904 24.4712C35.2683 20.5367 38.8453 17.7346 42.7798 18.2125L42.4181 21.1906Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.6738 41.8984V38.0786H32.6738V42.3984C32.6738 43.7791 33.7931 44.8984 35.1738 44.8984H38.3342C39.7149 44.8984 40.8342 43.7791 40.8342 42.3984V38.0786H37.8342V41.8984H35.6738Z" fill="#1976D2"/>
</svg>

  `;
  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
