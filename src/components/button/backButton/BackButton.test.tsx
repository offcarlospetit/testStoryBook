import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';
import BackButton from './BackButton';

test('BackButton component should render correctly', () => {
  render(
    <BackButton
      color={'white'}
      onPress={() => null}
    />
  );
});

