import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import IconCard from './IconCard';
import Colors from '../../constants/colors';


test('IconCard should render correctly with description', () => {
  render(
    <IconCard
      iconName="agua"
      color={Colors.TemporalGreen}
      onPress={() => console.log('Pressed')}
      backgroundColor={Colors.TemporalGreen10}
      description="Chatear con servicio al cliente"
    />,
  );
});

test('IconCard should render correctly without description', async () => {
  render(
    <IconCard
      iconName="agua"
      color={Colors.TemporalGreen}
      onPress={() => console.log('Pressed')}
      backgroundColor={Colors.TemporalGreen10}
    />,
  );
});
