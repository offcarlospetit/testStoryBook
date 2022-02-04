import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Radio from './Radio';

describe('Radio tests', () => {
  test('Radio component should render correctly', () => {
    render(<Radio primaryText="" secondaryText="" selected={true} />);
  });
  test('Radio component should render correctly', () => {
    render(
    <Radio 
      primaryText="" 
      secondaryText="" 
      selected={true} 
      bottomText='abc'
      isLoadingBottomText={true}
    />);
  });
});
