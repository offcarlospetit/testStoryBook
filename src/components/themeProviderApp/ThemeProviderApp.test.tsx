import { render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import ThemeProviderApp from './ThemeProviderApp';

test('Surface component should render correctly', () => {
  render(
    <ThemeProviderApp>
      <View />
    </ThemeProviderApp>,
  );
});
