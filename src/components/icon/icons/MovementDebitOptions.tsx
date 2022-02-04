
import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function MovementDebitOptions() {
  const icon: string = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0003 9.33268C15.2837 9.33268 16.3337 8.28268 16.3337 6.99935C16.3337 5.71602 15.2837 4.66602 14.0003 4.66602C12.717 4.66602 11.667 5.71602 11.667 6.99935C11.667 8.28268 12.717 9.33268 14.0003 9.33268ZM14.0003 11.666C12.717 11.666 11.667 12.716 11.667 13.9993C11.667 15.2827 12.717 16.3327 14.0003 16.3327C15.2837 16.3327 16.3337 15.2827 16.3337 13.9993C16.3337 12.716 15.2837 11.666 14.0003 11.666ZM11.667 20.9993C11.667 19.716 12.717 18.666 14.0003 18.666C15.2837 18.666 16.3337 19.716 16.3337 20.9993C16.3337 22.2827 15.2837 23.3327 14.0003 23.3327C12.717 23.3327 11.667 22.2827 11.667 20.9993Z" fill="white"/>
  </svg>`;

  const IconSvg = () => <SvgXml xml={icon} width="100%" height="100%" />;
  return <IconSvg />;
}
