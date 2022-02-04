import { render, act, fireEvent } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import BoxButton from './BoxButton';
import { metricsToolMock } from '../../utils/MetricsToolMock';
import MetricsProvider from '../metricsProvider/MetricsProvider';

describe('BoxButton component', () => {
  test('Should render correctly', async () => {
    render(
      <BoxButton
        title="PRONTO"
        description="Bloquear tarjetas"
        iconName="block-card"
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
        <BoxButton
          title="PRONTO"
          description="Bloquear tarjetas"
          iconName="block-card"
          metricEventName={given.metricEventName}
          onPress={onPress}
        />
      </MetricsProvider>,
    );

    debug();

    await act(async () => {
      const btn = getByText('Bloquear tarjetas');
      fireEvent.press(btn);
    });
    expect(metricsTool.logEvent).toBeCalledWith(
      given.metricEventName,
      undefined,
    );
  });
});
