import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import IconFont from './IconFont';
import Color from '../../constants/colors'

test('IconFont component should render correctly', () => {
  render(
    <IconFont
      name='invesment'
      size={60}
      color={Color.PrimaryBlue50}
    />,
  );
});
