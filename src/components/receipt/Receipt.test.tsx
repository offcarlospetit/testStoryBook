import { render } from '@testing-library/react-native';
import React from 'react';
import Receipt from './Receipt';
import { View } from 'react-native';

test('Receipt component should render correctly', () => {
  render(
    <Receipt
      type="success"
      title="Test title"
      message="Test message"
      iconName="receipt-success"
      ammount="12000"
      rows={[]}
      shareButtonProps={{
        isVisibleShareButton: true,
        shareButtonTitle: 'Compartir', 
        shareButtonMetricEventName: 'TEST',
        shareButtonOnPress: () => null
      }}
    >
      <View></View>
    </Receipt>,
  );
});
