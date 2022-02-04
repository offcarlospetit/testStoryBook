import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function TvCable() {
  const icon: string = `
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 19.3999C9.5 18.5715 10.1716 17.8999 11 17.8999H43C43.8284 17.8999 44.5 18.5715 44.5 19.3999V42.8666C44.5 43.695 43.8284 44.3666 43 44.3666H11C10.1716 44.3666 9.5 43.695 9.5 42.8666V19.3999ZM12.5 20.8999V41.3666H41.5V20.8999H12.5Z" fill="#1976D2"/>
<path d="M37.5 26C37.2033 26 36.9133 26.088 36.6666 26.2528C36.42 26.4176 36.2277 26.6519 36.1142 26.926C36.0006 27.2001 35.9709 27.5017 36.0288 27.7926C36.0867 28.0836 36.2296 28.3509 36.4393 28.5607C36.6491 28.7704 36.9164 28.9133 37.2074 28.9712C37.4983 29.0291 37.7999 28.9994 38.074 28.8858C38.3481 28.7723 38.5824 28.58 38.7472 28.3334C38.912 28.0867 39 27.7967 39 27.5C39 27.1022 38.842 26.7206 38.5607 26.4393C38.2794 26.158 37.8978 26 37.5 26Z" fill="#1976D2"/>
<path d="M37.5 32C37.2033 32 36.9133 32.088 36.6666 32.2528C36.42 32.4176 36.2277 32.6519 36.1142 32.926C36.0006 33.2001 35.9709 33.5017 36.0288 33.7926C36.0867 34.0836 36.2296 34.3509 36.4393 34.5607C36.6491 34.7704 36.9164 34.9133 37.2074 34.9712C37.4983 35.0291 37.7999 34.9994 38.074 34.8858C38.3481 34.7723 38.5824 34.58 38.7472 34.3334C38.912 34.0867 39 33.7967 39 33.5C39 33.1022 38.842 32.7206 38.5607 32.4393C38.2794 32.158 37.8978 32 37.5 32Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.4612 12.0238C20.0004 11.3949 20.9473 11.322 21.5763 11.8611L27.9883 17.3572L33.4061 11.9394C33.9919 11.3536 34.9417 11.3536 35.5275 11.9394C36.1132 12.5252 36.1132 13.4749 35.5275 14.0607L29.1275 20.4607C28.5732 21.0149 27.6857 21.049 27.0906 20.5389L19.6239 14.1389C18.9949 13.5998 18.9221 12.6528 19.4612 12.0238Z" fill="#1976D2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 25C21.7289 25 19.5756 25.2677 18.0429 25.5231C17.465 25.6193 17 26.1401 17 26.8423V35.1577C17 35.8599 17.465 36.3807 18.0429 36.4769C19.5756 36.7323 21.7289 37 24 37C26.2711 37 28.4244 36.7323 29.9571 36.4769C30.535 36.3807 31 35.8599 31 35.1577V26.8423C31 26.1401 30.535 25.6193 29.9571 25.5231C28.4244 25.2677 26.2711 25 24 25ZM17.55 22.5638C19.1824 22.2919 21.5102 22 24 22C26.4898 22 28.8176 22.2919 30.45 22.5638C32.5879 22.9199 34 24.7914 34 26.8423V35.1577C34 37.2086 32.5879 39.0801 30.45 39.4362C28.8176 39.7081 26.4898 40 24 40C21.5102 40 19.1824 39.7081 17.55 39.4362C15.4121 39.0801 14 37.2086 14 35.1577V26.8423C14 24.7914 15.4121 22.9199 17.55 22.5638Z" fill="#1976D2"/>
</svg>

  `;
  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
