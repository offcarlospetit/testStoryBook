import React from 'react';
import { render } from '@testing-library/react-native';
import Divider from './Divider';

describe('Divider Component', () => {
  test('Should renders correctly', () => {
    render(
      <Divider/>,
    );
  });
});