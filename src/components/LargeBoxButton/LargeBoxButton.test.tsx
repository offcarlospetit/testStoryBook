import { render, act, fireEvent } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import LargeBoxButton from './LargeBoxButton';
import { metricsToolMock } from '../../utils/MetricsToolMock';
import MetricsProvider from '../metricsProvider/MetricsProvider';

describe('LargeBoxButton component', () => {
  test('Should render correctly', async () => {
    render(
      <LargeBoxButton
        title="accounts"
        iconName="person-money"
      />,
    );
  });
  test('Given a metricsTool and the Button component with metricEventName, expect it to be executed once logEvent', async () => {
    const metricsTool = {
      logEvent: jest.fn((name, payload) =>
        metricsToolMock.logEvent(name, payload),
      ),
    };
    const given = {
      metricsTool,
      metricEventName: 'eventName',
    };

    const onPress = jest.fn();

    const { getByText, debug } = render(
      <MetricsProvider metricsTool={given.metricsTool}>
        <LargeBoxButton
          title="accounts"
          iconName="person-money"
          metricEventName={given.metricEventName}
          onPress={onPress}
        />
      </MetricsProvider>,
    );

    debug();

    await act(async () => {
      const btn = getByText('accounts');
      fireEvent.press(btn);
    });
    expect(metricsTool.logEvent).toBeCalledWith(
      given.metricEventName,
      undefined,
    );
  });
});
