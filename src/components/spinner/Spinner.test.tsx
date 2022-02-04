import {render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Spinner from './Spinner';

describe('Spinner component with variants', () => {
  test('Spinner component should render correctly loader', () => {
    render(<Spinner name="loader" isVisible={true} />);
  });
});
