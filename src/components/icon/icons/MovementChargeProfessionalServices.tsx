
import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function MovementChargeProfessionalServices() {
  const icon: string = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="14" r="14" fill="#785454"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2227 8.94461H17.1115V7.38905L15.556 5.8335H12.4449L10.8893 7.38905V8.94461H7.77821C6.92266 8.94461 6.22266 9.64461 6.22266 10.5002V12.8335C6.22266 13.6968 6.91488 14.3891 7.77821 14.3891H12.4449V12.8335H15.556V14.3891H20.2227C21.0782 14.3891 21.7782 13.6891 21.7782 12.8335V10.5002C21.7782 9.64461 21.0782 8.94461 20.2227 8.94461ZM12.4449 15.9446V15.1668H7.00821L7.00043 18.2779C7.00043 19.1413 7.69266 19.8335 8.55599 19.8335H19.4449C20.3082 19.8335 21.0004 19.1413 21.0004 18.2779V15.1668H15.556V15.9446H12.4449ZM12.4449 8.94461H15.556V7.38905H12.4449V8.94461Z" fill="white"/>
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}

