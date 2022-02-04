import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import GenericCardStatus from './GenericCardStatus';

test('GenericCardStatus debit component should render correctly', () => {
  render(
    <GenericCardStatus
      title='Tarjeta de Débito' 
      cardNumber='4012 74XX XXXX 5185'
      isActive={true}
      type='debit'
      activeStatusLabel='Activa'
      blockedStatusLabel='Bloqueada'
      onPress={() => null}
    />
  );
});

test('GenericCardStatus credit component should render correctly', () => {
  render(
    <GenericCardStatus
      cardNumber='4012 74XX XXXX 5185'
      productTypeCode='210015'
      type='credit'
      isActive={true}
      activeStatusLabel='Activa'
      blockedStatusLabel='Bloqueada'
      onPress={() => null}
    />
  );
});

