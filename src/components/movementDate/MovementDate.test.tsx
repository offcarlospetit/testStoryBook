import React from 'react';
import { render } from '@testing-library/react-native';
import MovementDate from './MovementDate';

describe('MovementDate Component', () => {
  test('MovementDate component should render correctly', () => {
    render(<MovementDate title={'title'} />);
  });
});
