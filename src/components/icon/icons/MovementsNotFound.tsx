import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function MovementsNotFound() {
  const icon: string = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32Z" fill="#EBEFF5"/>
  <path d="M60 43.8691H4C3.44772 43.8691 3 44.3169 3 44.8691V57.9996C3 58.5519 3.44771 58.9996 4 58.9996H60C60.5523 58.9996 61 58.5519 61 57.9996V44.8691C61 44.3169 60.5523 43.8691 60 43.8691Z" fill="white" stroke="#7F90AF" stroke-width="2"/>
  <rect x="43" y="9" width="6" height="7" fill="white"/>
  <rect x="21.9131" y="48.9121" width="20.1739" height="5.04348" rx="2.52174" fill="#EBEFF5" stroke="#7F90AF" stroke-width="2"/>
  <path d="M6.78223 43.87L10.4469 16.9957C10.5145 16.5003 10.9377 16.1309 11.4377 16.1309H52.5615C53.0616 16.1309 53.4848 16.5003 53.5523 16.9957L57.217 43.87" stroke="#7F90AF" stroke-width="2"/>
  <path d="M10.4479 16.9957L6.7832 43.87H57.218L53.5533 16.9957C53.4858 16.5003 53.0626 16.1309 52.5625 16.1309H11.4387C10.9386 16.1309 10.5154 16.5003 10.4479 16.9957Z" fill="white" stroke="#7F90AF" stroke-width="2"/>
  <rect x="37.0439" y="1" width="17.6522" height="7.56522" rx="1" fill="white" stroke="#7F90AF" stroke-width="2"/>
  <rect x="35.7822" y="21.1738" width="13.8696" height="8.82609" rx="1" fill="#DDE3ED" stroke="#7F90AF" stroke-width="2"/>
  <path d="M43.3477 8.56445V16.1297" stroke="#7F90AF" stroke-width="2"/>
  <path d="M48.3916 8.56445V16.1297" stroke="#7F90AF" stroke-width="2"/>
  <path d="M50.9133 36.3047H48.3916" stroke="#7F90AF" stroke-width="2" stroke-linecap="round"/>
  <path d="M43.3479 36.3047H40.8262" stroke="#7F90AF" stroke-width="2" stroke-linecap="round"/>
  <path d="M35.7825 36.3047H33.2607" stroke="#7F90AF" stroke-width="2" stroke-linecap="round"/>
  <path d="M28.2173 36.3047L23.1738 36.3047" stroke="#7F90AF" stroke-width="2" stroke-linecap="round"/>
  <path d="M28.2173 31.2617L23.1738 31.2617" stroke="#7F90AF" stroke-width="2" stroke-linecap="round"/>
  <path d="M18.1304 36.3047L13.0869 36.3047" stroke="#7F90AF" stroke-width="2" stroke-linecap="round"/>
  <path d="M18.1304 31.2617L13.0869 31.2617" stroke="#7F90AF" stroke-width="2" stroke-linecap="round"/>
  <path d="M30.7391 24.957L13.0869 24.957" stroke="#7F90AF" stroke-width="2" stroke-linecap="round"/>
  <path d="M29.4786 4.26172V24.9574H14.3482V9.82694H9.30469V4.78346C9.30469 3.39074 10.4337 2.26172 11.8264 2.26172H27.4786C28.5832 2.26172 29.4786 3.15715 29.4786 4.26172Z" fill="#EBEFF5"/>
  <path d="M14.3482 9.82694V4.78346C14.3482 3.39074 13.2191 2.26172 11.8264 2.26172V2.26172M14.3482 9.82694V24.9574H29.4786V4.26172C29.4786 3.15715 28.5832 2.26172 27.4786 2.26172H11.8264M14.3482 9.82694H9.30469V4.78346C9.30469 3.39074 10.4337 2.26172 11.8264 2.26172V2.26172" stroke="#7F90AF" stroke-width="2" stroke-linecap="round"/>
  <path d="M25.0709 9.6769H21.089C20.8621 9.65871 20.634 9.69002 20.4204 9.76866C20.2069 9.8473 20.0129 9.9714 19.852 10.1324C19.691 10.2934 19.567 10.4874 19.4884 10.701C19.4097 10.9147 19.3784 11.1429 19.3966 11.3698C19.3966 13.2244 25.0709 14.6435 25.0709 16.4981C25.075 16.7215 25.0339 16.9435 24.9503 17.1507C24.8667 17.3579 24.7422 17.5461 24.5842 17.7042C24.4263 17.8622 24.2381 17.9867 24.031 18.0704C23.8238 18.154 23.6019 18.195 23.3786 18.191H19.3966" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.7578 9.67118V7.30469" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.7578 20.0827V18.1895" stroke="#7F90AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
