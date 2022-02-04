import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import InfoCreditCard from './InfoCreditCard';

describe('InfoCreditCard Component', () => {
  test('Should render correctly', () => {
    render(
      <InfoCreditCard
        isLocked={false}
        isFavorite={true}
        maskedPan={'maskedPan'}
        creditCardCode={'210001'}
        disableSharing={false}
      />,
    );
  });
  test('Given isLocked true, should render correctly', () => {
    render(
      <InfoCreditCard
        isLocked={true}
        isFavorite={true}
        maskedPan={'maskedPan'}
        creditCardCode={'210031'}
        textLocked={'textLocked'}
        disableSharing={true}
      />,
    );
  });
});
