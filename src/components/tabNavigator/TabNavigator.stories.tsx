import React from 'react';
import {View} from 'react-native';
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import TabNavigator from './TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import IconSvg from '../icon/IconSvg';

const TabStack = createBottomTabNavigator();

const tabNavigator = storiesOf('Molecules/TabNavigator', module);

tabNavigator.addDecorator(withKnobs);

tabNavigator.add('Primary Menu', () => (
  <NavigationContainer>
    <TabStack.Navigator
      tabBar={props => <TabNavigator {...props} tabMetricEventMap={{}} />}>
      <TabStack.Screen name="Account" component={CustomView} />
      <TabStack.Screen name="Tef" component={CustomView} />
      <TabStack.Screen name="Payment" component={CustomView} />
      <TabStack.Screen name="Investment" component={CustomView} />
      <TabStack.Screen name="Menu" component={CustomView} />
    </TabStack.Navigator>
  </NavigationContainer>
));

const CustomView = () => <View></View>;
