import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Credito() {
  const icon: string = `
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 26.9146C15.8284 26.9146 16.5 27.5861 16.5 28.4146V42.6667C16.5 43.4951 15.8284 44.1667 15 44.1667C14.1716 44.1667 13.5 43.4951 13.5 42.6667V28.4146C13.5 27.5861 14.1716 26.9146 15 26.9146Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 30.79C13.5 29.9616 14.1716 29.29 15 29.29H23.3137C24.9715 29.29 26.5614 29.9486 27.7336 31.1208C28.5454 31.9326 29.1108 32.9446 29.3818 34.0407H34.0028C35.6606 34.0407 37.2505 34.6993 38.4227 35.8715C39.595 37.0438 40.2535 38.6337 40.2535 40.2914C40.2535 41.1199 39.5819 41.7914 38.7535 41.7914H15C14.1716 41.7914 13.5 41.1199 13.5 40.2914C13.5 39.463 14.1716 38.7914 15 38.7914H36.8868C36.7349 38.4996 36.5384 38.2298 36.3014 37.9929C35.6918 37.3832 34.865 37.0407 34.0028 37.0407H28.0644C27.236 37.0407 26.5644 36.3692 26.5644 35.5407C26.5644 34.6786 26.222 33.8518 25.6123 33.2421C25.0027 32.6325 24.1759 32.29 23.3137 32.29H15C14.1716 32.29 13.5 31.6185 13.5 30.79Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.8135 35.541C21.8135 34.7126 22.485 34.041 23.3135 34.041H28.0642C28.8926 34.041 29.5642 34.7126 29.5642 35.541C29.5642 36.3694 28.8926 37.041 28.0642 37.041H23.3135C22.485 37.041 21.8135 36.3694 21.8135 35.541Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.7504 15.2202C35.224 14.9724 34.6454 14.8551 34.0638 14.8784C34.0438 14.8792 34.0238 14.8796 34.0038 14.8796C32.9846 14.8796 32.1196 15.1908 31.5433 15.6225C30.9675 16.0537 30.752 16.5347 30.752 16.94C30.752 17.3449 30.9678 17.8268 31.5444 18.2589C32.1214 18.6913 32.9865 19.0027 34.0038 19.0027C35.6068 19.0027 37.117 19.487 38.2604 20.343C39.4046 21.1994 40.2534 22.4981 40.2534 24.0608C40.2534 25.623 39.4051 26.9225 38.2615 27.7801C37.1253 28.6321 35.6265 29.1175 34.0335 29.1234C32.9794 29.1609 31.9313 28.9461 30.9767 28.4966C30.0129 28.0428 29.1729 27.3633 28.528 26.5155C28.0264 25.8562 28.1543 24.9151 28.8137 24.4135C29.473 23.912 30.4141 24.0399 30.9157 24.6992C31.2682 25.1626 31.7275 25.5342 32.2546 25.7824C32.7818 26.0306 33.3612 26.1481 33.9437 26.1247C33.9637 26.1239 33.9838 26.1235 34.0038 26.1235C35.0211 26.1235 35.8854 25.8121 36.4616 25.38C37.0375 24.9482 37.2534 24.4663 37.2534 24.0608C37.2534 23.6557 37.038 23.1753 36.4627 22.7447C35.8867 22.3135 35.0221 22.0027 34.0038 22.0027C32.3999 22.0027 30.889 21.5166 29.7454 20.6596C28.6014 19.8023 27.752 18.5028 27.752 16.94C27.752 15.3775 28.6006 14.0783 29.7448 13.2213C30.8815 12.3699 32.3808 11.8856 33.9741 11.8796C35.0274 11.8423 36.0745 12.057 37.0282 12.506C37.9912 12.9593 38.8305 13.6382 39.4749 14.4851C39.9765 15.1443 39.8488 16.0855 39.1895 16.5871C38.5302 17.0888 37.5891 16.961 37.0875 16.3017C36.7354 15.8391 36.2768 15.468 35.7504 15.2202Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.0029 26.1274C34.8314 26.1274 35.5029 26.799 35.5029 27.6274V30.0028C35.5029 30.8312 34.8314 31.5028 34.0029 31.5028C33.1745 31.5028 32.5029 30.8312 32.5029 30.0028V27.6274C32.5029 26.799 33.1745 26.1274 34.0029 26.1274Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.0029 9.5C34.8314 9.5 35.5029 10.1716 35.5029 11V13.3754C35.5029 14.2038 34.8314 14.8754 34.0029 14.8754C33.1745 14.8754 32.5029 14.2038 32.5029 13.3754V11C32.5029 10.1716 33.1745 9.5 34.0029 9.5Z" fill="#1976D2"/>
</svg>

  `;
  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}