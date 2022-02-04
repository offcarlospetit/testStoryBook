import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import MaskedPanLocked from './MaskedPanLocked';

describe('DebitCard Component', () => {
  test('MaskedPanLocked component should render correctly', () => {
    render(
      <MaskedPanLocked textLocked='Text pasado por parametro' />,
    );
  });
  test('MaskedPanLocked component should render correctly, text default', () => {
    render(
      <MaskedPanLocked />,
    );
  });

});
