import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import DebitCard from './DebitCard';

describe('DebitCard Component', () => {
  test('DebitCard component should render correctly', () => {
    render(
      <DebitCard
        errorBalance={false}
        onPressVisibility={() => jest.fn()}
        hideBalance={false}
        messageError={'Test Error'}
        errorInfoCta={'Test Error'}
        accountName={'Test Account'}
        accountNumber={'1234567890'}
        isFavorite={true}
        isDebit={true}
        overdraft={'12000'}
        currency={'CLP'}
        balance={'12000'}
      />,
    );
  });
  test('Given a errorBalance component, expected render correctly', () => {
    render(
      <DebitCard
        errorBalance={<></>}
        onPressVisibility={() => jest.fn()}
        hideBalance={false}
        messageError={'Test Error'}
        errorInfoCta={'Test Error'}
        accountName={'Test Account'}
        accountNumber={'1234567890'}
        isFavorite={true}
        isDebit={true}
        overdraft={'12000'}
        currency={'CLP'}
        balance={'12000'}
      />,
    );
  });
});
