import React from 'react';
import { render } from '@testing-library/react-native';
import ModalCustomMessage from './ModalCustomMessage';

test('ModalCustomMessage component should render correctly', () => {
  render(
    // @ts-ignore
    <ModalCustomMessage
      visible={true}
      title="Test title"
      message={'Test message'}
      txtBtn={'Test button'}
      onPress={() => jest.fn()}
    />,
  );
});
