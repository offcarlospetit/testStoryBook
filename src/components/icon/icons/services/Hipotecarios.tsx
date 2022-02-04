import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Hipotecarios() {
  const icon: string = `
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 28.7832C13.8284 28.7832 14.5 29.4548 14.5 30.2832V43.0001C14.5 43.8285 13.8284 44.5001 13 44.5001C12.1716 44.5001 11.5 43.8285 11.5 43.0001V30.2832C11.5 29.4548 12.1716 28.7832 13 28.7832Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 32.4023C11.5 31.5739 12.1716 30.9023 13 30.9023H20.4182C21.9402 30.9023 23.4 31.507 24.4762 32.5832C25.1911 33.2981 25.6979 34.1822 25.9577 35.1413H29.9558C31.4779 35.1413 32.9376 35.7459 34.0139 36.8222C35.0902 37.8985 35.6948 39.3582 35.6948 40.8803C35.6948 41.7087 35.0232 42.3803 34.1948 42.3803H13C12.1716 42.3803 11.5 41.7087 11.5 40.8803V32.4023ZM14.5 33.9023V39.3803H32.2476C32.1453 39.224 32.0266 39.0776 31.8926 38.9435C31.3789 38.4299 30.6823 38.1413 29.9558 38.1413H24.6571C23.8287 38.1413 23.1571 37.4697 23.1571 36.6413C23.1571 35.9149 22.8686 35.2182 22.3549 34.7046C21.8413 34.1909 21.1446 33.9023 20.4182 33.9023H14.5Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.918 36.6416C18.918 35.8132 19.5895 35.1416 20.418 35.1416H24.6569C25.4854 35.1416 26.1569 35.8132 26.1569 36.6416C26.1569 37.47 25.4854 38.1416 24.6569 38.1416H20.418C19.5895 38.1416 18.918 37.47 18.918 36.6416Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.7168 21.3652C26.5452 21.3652 27.2168 22.0368 27.2168 22.8652V28.1639C27.2168 28.3282 27.2821 28.4858 27.3982 28.602C27.5144 28.7181 27.672 28.7834 27.8363 28.7834H36.3142C36.4785 28.7834 36.6361 28.7181 36.7522 28.602C36.8684 28.4858 36.9337 28.3282 36.9337 28.1639V22.8652C36.9337 22.0368 37.6052 21.3652 38.4337 21.3652C39.2621 21.3652 39.9337 22.0368 39.9337 22.8652V28.1639C39.9337 29.1239 39.5523 30.0445 38.8736 30.7233C38.1948 31.4021 37.2741 31.7834 36.3142 31.7834H27.8363C26.8763 31.7834 25.9557 31.4021 25.2769 30.7233C24.5981 30.0445 24.2168 29.1239 24.2168 28.1639V22.8652C24.2168 22.0368 24.8884 21.3652 25.7168 21.3652Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.6505 12.4282C30.315 11.8306 31.177 11.5 32.0707 11.5C32.9644 11.5 33.8264 11.8306 34.4909 12.4282L43.6755 20.69C44.2914 21.2441 44.3416 22.1925 43.7875 22.8084C43.2335 23.4243 42.2851 23.4745 41.6692 22.9204L32.4849 14.6589C32.3712 14.5566 32.2237 14.5 32.0707 14.5C31.9179 14.5 31.7706 14.5564 31.6569 14.6585C31.6568 14.6586 31.657 14.6584 31.6569 14.6585L22.4812 22.92C21.8656 23.4743 20.9171 23.4246 20.3628 22.8089C19.8085 22.1933 19.8582 21.2448 20.4739 20.6905L29.6505 12.4282Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.5532 12.8867C41.3816 12.8867 42.0532 13.5583 42.0532 14.3867V19.8974C42.0532 20.7258 41.3816 21.3974 40.5532 21.3974C39.7248 21.3974 39.0532 20.7258 39.0532 19.8974V14.3867C39.0532 13.5583 39.7248 12.8867 40.5532 12.8867Z" fill="#1976D2"/>
</svg>

  `;
  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}