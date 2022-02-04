import { render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import ContainerCard from './ContainerCard';

describe('ContainerCard component with variants', () => {
  test('ContainerCard component should render correctly creditCard', () => {
    render(
      <ContainerCard type="creditCard">
        <View />
      </ContainerCard>,
    );
  });
  test('ContainerCard component should render correctly debitCard', () => {
    render(
      <ContainerCard type="debitCard">
        <View />
      </ContainerCard>,
    );
  });
});
