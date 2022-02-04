import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import CreditCardPaymentResume from './CreditCardPaymentResume';

describe('CreditCardPaymentResume tests', () => {
  const onPress = jest.fn();
  test('CreditCardPaymentResume component should render correctly', () => {
    render(
      <CreditCardPaymentResume
        cardTitle="string"
        onPress={onPress}
        textButton="string"
        rows={[
          {
            key: '1',
            value: '1',
          },
        ]}
        cardType="210001"
        maskedPan="string"
      />,
    );
  });
  test('Tap on specific radio button should call a function', () => {
    const { getByTestId } = render(
      <CreditCardPaymentResume
        cardTitle="string"
        onPress={onPress}
        textButton="string"
        rows={[
          {
            key: '1',
            value: '1',
          },
        ]}
        cardType="210001"
        maskedPan="string"
      />,
    );
    const changeCreditCard = getByTestId('select-credit-card');
    fireEvent.press(changeCreditCard);
    expect(onPress).toBeCalled();
  });
});
