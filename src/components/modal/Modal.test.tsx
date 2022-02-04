import { render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import Modal from './Modal';
test('Modal component should render correctly', () => {
  render(
    <Modal
      isVisible={true}
      onBackButtonPress={() => jest.fn()}
      onBackdropPress={() => jest.fn()}
    >
      <View></View>
    </Modal>,
  );
});
