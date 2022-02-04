
import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function MovementChargeTransportation() {
  const icon: string = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="14" r="14" fill="#27A1DC"/>
  <rect width="18.6667" height="18.6667" transform="translate(4.66699 3.5)" fill="#27A1DC"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2778 7.38867C18.7911 7.38867 19.2267 7.71534 19.3822 8.17423L21 12.8331V19.0553C21 19.4831 20.65 19.8331 20.2222 19.8331H19.4444C19.0167 19.8331 18.6667 19.4831 18.6667 19.0553V18.2776H9.33333V19.0553C9.33333 19.4831 8.98333 19.8331 8.55556 19.8331H7.77778C7.35 19.8331 7 19.4831 7 19.0553V12.8331L8.61778 8.17423C8.78111 7.71534 9.20889 7.38867 9.72222 7.38867H18.2778ZM8.55556 14.7776C8.55556 15.4231 9.07667 15.9442 9.72222 15.9442C10.3678 15.9442 10.8889 15.4231 10.8889 14.7776C10.8889 14.132 10.3678 13.6109 9.72222 13.6109C9.07667 13.6109 8.55556 14.132 8.55556 14.7776ZM18.2778 15.9442C17.6322 15.9442 17.1111 15.4231 17.1111 14.7776C17.1111 14.132 17.6322 13.6109 18.2778 13.6109C18.9233 13.6109 19.4444 14.132 19.4444 14.7776C19.4444 15.4231 18.9233 15.9442 18.2778 15.9442ZM9.72222 8.55534L8.55556 12.0553H19.4444L18.2778 8.55534H9.72222Z" fill="white"/>
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
