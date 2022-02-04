import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function Corporaciones() {
  const icon: string = `
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4442 22.9312H27.1553C27.9185 22.9312 28.6505 23.2343 29.1902 23.774C29.7299 24.3137 30.0331 25.0457 30.0331 25.8089V43.0312C30.0331 43.8596 29.3615 44.5312 28.5331 44.5312H14.0664C13.238 44.5312 12.5664 43.8596 12.5664 43.0312V25.8089C12.5664 25.0457 12.8696 24.3137 13.4093 23.774C13.949 23.2343 14.6809 22.9312 15.4442 22.9312ZM15.5664 25.9312H27.0331V41.5312H15.5664V25.9312Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.9446 13.5447C24.6134 12.8758 25.5206 12.5 26.4666 12.5H38.8666C39.8125 12.5 40.7197 12.8758 41.3886 13.5447C42.0575 14.2135 42.4332 15.1207 42.4332 16.0667V43.0312C42.4332 43.8597 41.7617 44.5312 40.9332 44.5312H32.6666C31.8381 44.5312 31.1666 43.8597 31.1666 43.0312C31.1666 42.2028 31.8381 41.5312 32.6666 41.5312H39.4332V16.0667C39.4332 15.9164 39.3735 15.7722 39.2673 15.666C39.161 15.5597 39.0169 15.5 38.8666 15.5H26.4666C26.3163 15.5 26.1721 15.5597 26.0659 15.666C25.9596 15.7722 25.8999 15.9164 25.8999 16.0667V20.2979C25.8999 21.1263 25.2283 21.7979 24.3999 21.7979C23.5715 21.7979 22.8999 21.1263 22.8999 20.2979V16.0667C22.8999 15.1207 23.2757 14.2135 23.9446 13.5447Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 43.0312C10.5 42.2028 11.1716 41.5312 12 41.5312H14.0667C14.8951 41.5312 15.5667 42.2028 15.5667 43.0312C15.5667 43.8597 14.8951 44.5312 14.0667 44.5312H12C11.1716 44.5312 10.5 43.8597 10.5 43.0312Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.4336 43.0312C39.4336 42.2028 40.1052 41.5312 40.9336 41.5312H43.0003C43.8287 41.5312 44.5003 42.2028 44.5003 43.0312C44.5003 43.8597 43.8287 44.5312 43.0003 44.5312H40.9336C40.1052 44.5312 39.4336 43.8597 39.4336 43.0312Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.9004 18.1021C22.9004 17.2736 23.572 16.6021 24.4004 16.6021H30.6004C31.4288 16.6021 32.1004 17.2736 32.1004 18.1021C32.1004 18.9305 31.4288 19.6021 30.6004 19.6021H24.4004C23.572 19.6021 22.9004 18.9305 22.9004 18.1021Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5664 28.5645C12.5664 27.736 13.238 27.0645 14.0664 27.0645H17.1664C17.9948 27.0645 18.6664 27.736 18.6664 28.5645C18.6664 29.3929 17.9948 30.0645 17.1664 30.0645H14.0664C13.238 30.0645 12.5664 29.3929 12.5664 28.5645Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2664 38.3311C20.1161 38.3311 19.972 38.3908 19.8657 38.497C19.7594 38.6033 19.6997 38.7474 19.6997 38.8977V41.5311H20.833V38.8977C20.833 38.7474 20.7733 38.6033 20.6671 38.497C20.5608 38.3908 20.4167 38.3311 20.2664 38.3311ZM17.7444 36.3757C18.4132 35.7068 19.3204 35.3311 20.2664 35.3311C21.2123 35.3311 22.1195 35.7068 22.7884 36.3757C23.4573 37.0446 23.833 37.9518 23.833 38.8977V43.0311C23.833 43.8595 23.1615 44.5311 22.333 44.5311H18.1997C17.3713 44.5311 16.6997 43.8595 16.6997 43.0311V38.8977C16.6997 37.9518 17.0755 37.0446 17.7444 36.3757Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.7332 36.2646C34.5829 36.2646 34.4388 36.3243 34.3325 36.4306C34.2262 36.5369 34.1665 36.681 34.1665 36.8313V41.5313H35.2998V36.8313C35.2998 36.681 35.2401 36.5369 35.1339 36.4306C35.0276 36.3243 34.8835 36.2646 34.7332 36.2646ZM32.2112 34.3093C32.88 33.6404 33.7872 33.2646 34.7332 33.2646C35.6791 33.2646 36.5863 33.6404 37.2552 34.3093C37.9241 34.9782 38.2998 35.8854 38.2998 36.8313V43.0313C38.2998 43.8597 37.6283 44.5313 36.7998 44.5313H32.6665C31.8381 44.5313 31.1665 43.8597 31.1665 43.0313V36.8313C31.1665 35.8854 31.5423 34.9782 32.2112 34.3093Z" fill="#1976D2"/>
</svg>

  `;
  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
