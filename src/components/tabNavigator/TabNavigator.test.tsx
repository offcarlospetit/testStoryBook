import { render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import TabNavigator from './TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { metricsToolMock } from '../../utils/MetricsToolMock';
import MetricsProvider from '../metricsProvider/MetricsProvider';

const TabStack = createBottomTabNavigator();

describe('TabNavigator component', () => {
  test('Should render correctly', async () => {
    render(
      <NavigationContainer>
        <TabStack.Navigator
          tabBar={props => <TabNavigator {...props} tabMetricEventMap={{}} />}
        >
          <TabStack.Screen name="Text" component={CustomView} />
          <TabStack.Screen name="Transferir" component={CustomView} />
          <TabStack.Screen name="Pagos" component={CustomView} />
          <TabStack.Screen name="Invertir" component={CustomView} />
          <TabStack.Screen name="Menu" component={CustomView} />
        </TabStack.Navigator>
      </NavigationContainer>,
    );
  });
  test('Given a metricsTool and a TabNavigator component with tabMetricEventMap, expect it to be render correctly', async () => {
    render(
      <MetricsProvider metricsTool={metricsToolMock}>
        <NavigationContainer>
          <TabStack.Navigator
            tabBar={props => (
              <TabNavigator
                {...props}
                tabMetricEventMap={{
                  Pagos: {
                    name: 'name',
                  },
                }}
              />
            )}
          >
            <TabStack.Screen name="Text" component={CustomView} />
            <TabStack.Screen name="Transferir" component={CustomView} />
            <TabStack.Screen name="Pagos" component={CustomView} />
            <TabStack.Screen name="Invertir" component={CustomView} />
            <TabStack.Screen name="Menu" component={CustomView} />
          </TabStack.Navigator>
        </NavigationContainer>
        ,
      </MetricsProvider>,
    );
  });
});

const CustomView = () => <View></View>;
