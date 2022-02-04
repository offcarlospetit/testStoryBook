import React from 'react';
import { render } from '@testing-library/react-native';
import ModalErrorServices from './ModalErrorServices';

test('ModalErrorServices component should render correctly', () => {
  render(
    // @ts-ignore
    <ModalErrorServices
      visible={true}
      title="Test title"
      message={'Test message'}
      txtBtn={'Test button'}
      onPress={() => jest.fn()}
    />,
  );
});
