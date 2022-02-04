import React from 'react';
import { render } from '@testing-library/react-native';
import MovementsSearch from './MovementsSearch';

test('MovementsSearch component should render correctly', () => {
  render(
    <MovementsSearch title='Movimientos' icon='search' />,
  );
});
