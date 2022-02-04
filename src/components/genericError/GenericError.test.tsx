import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import GenericError from './GenericError';
test('GenericError component should render correctly', () => {
  render(
    <GenericError
      type="error"
      title="Test error title"
      message="Test error message"
      iconName="close"
    />,
  );
});
