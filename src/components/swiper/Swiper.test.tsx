import React from 'react';
import { View } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

import Swiper from './Swiper';
import Text from '../text/Text';

describe('Swiper Component', () => {
  test('Should renders correctly', () => {
    render(
      <Swiper
        initialScrollIndex={1}
        getCurrentIndex={() => {}}
        data={[
          { id: 1, name: 1 },
          { id: 2, name: 2 },
        ]}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        bounces={true}
      />,
    );
  });
  test('Given renders correctly in onScroll', () => {
    const { getByTestId } = render(
      <Swiper
        initialScrollIndex={1}
        getCurrentIndex={() => {}}
        data={[
          { id: 1, name: 1 },
          { id: 2, name: 2 },
        ]}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        bounces={true}
        testID={'swiper'}
      />,
    );
    fireEvent.scroll(getByTestId('swiper'), {
      nativeEvent: {
        contentSize: { height: 600, width: 400 },
        contentOffset: { y: 150, x: 0 },
        layoutMeasurement: { height: 100, width: 100 },
      },
    });
  });
});
