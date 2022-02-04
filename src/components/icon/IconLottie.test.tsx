import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import IconLottie from './IconLottie';

test('IconLottie component should render correctly', () => {
  render(
    <IconLottie
      name='checkTicket'
    />,
  );
});
