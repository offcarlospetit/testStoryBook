import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import ErrorTef from './ErrorTef';
test('Empty component should render correctly', () => {
  render(
    <ErrorTef
      title="Test error Tef"
      message="Text message"
      txtBtn="Button test"
    />,
  );
});
