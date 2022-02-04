import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function TCInfinite() {
  const icon: string = `<svg width="66" height="18" viewBox="0 0 66 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect y="1" width="28" height="16" rx="4" fill="url(#paint0_linear)"/>
  <path d="M46.7333 14.8412H43.979L45.7017 4.19287H48.4558L46.7333 14.8412Z" fill="#00579F"/>
  <path d="M56.7177 4.45334C56.1744 4.23789 55.3128 4 54.2473 4C51.5274 4 49.6121 5.4499 49.6003 7.52283C49.5778 9.05223 50.9717 9.9017 52.0142 10.4116C53.0798 10.9327 53.442 11.2729 53.442 11.7373C53.4312 12.4507 52.581 12.7795 51.788 12.7795C50.6884 12.7795 50.0992 12.61 49.2038 12.2131L48.8411 12.043L48.4557 14.4333C49.1017 14.7275 50.2918 14.9886 51.5274 15C54.4174 15 56.2988 13.5725 56.3211 11.3635C56.3321 10.1513 55.5961 9.22252 54.0092 8.46354C53.0459 7.97632 52.456 7.6478 52.456 7.14929C52.4672 6.6961 52.9549 6.23192 54.0424 6.23192C54.9377 6.20918 55.5956 6.42434 56.094 6.63964L56.3431 6.75271L56.7177 4.45334Z" fill="#00579F"/>
  <path d="M60.3783 11.0689C60.6051 10.4571 61.4779 8.08955 61.4779 8.08955C61.4665 8.11228 61.7043 7.46652 61.8403 7.0701L62.0328 7.98762C62.0328 7.98762 62.5544 10.5365 62.6676 11.0689C62.2372 11.0689 60.9223 11.0689 60.3783 11.0689ZM63.7781 4.19287H61.6477C60.9907 4.19287 60.4916 4.38529 60.2081 5.07636L56.1171 14.841H59.007C59.007 14.841 59.4828 13.5268 59.5851 13.2437C59.9021 13.2437 62.7134 13.2437 63.1213 13.2437C63.2003 13.6176 63.4499 14.841 63.4499 14.841H66.0001L63.7781 4.19287Z" fill="#00579F"/>
  <path d="M41.6786 4.19287L38.9813 11.454L38.6866 9.98135C38.1879 8.28211 36.624 6.43593 34.8787 5.51796L37.3493 14.8299H40.2618L44.591 4.19287H41.6786Z" fill="#00579F"/>
  <path d="M36.4766 4.19287H32.0453L32 4.40802C35.4567 5.29167 37.746 7.42166 38.6866 9.9818L37.7232 5.08796C37.5647 4.40787 37.0773 4.2153 36.4766 4.19287Z" fill="#FAA61A"/>
  <defs>
  <linearGradient id="paint0_linear" x1="10.6207" y1="9.47059" x2="27.8198" y2="0.648642" gradientUnits="userSpaceOnUse">
  <stop stop-color="#162638"/>
  <stop offset="1" stop-color="#295387"/>
  </linearGradient>
  </defs>
  </svg>
  `;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
