import { render, act, fireEvent } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import AliasButton from './AliasButton';
import { metricsToolMock } from '../../utils/MetricsToolMock';
import MetricsProvider from '../metricsProvider/MetricsProvider';

const metricsTool = {
  logEvent: jest.fn((name, payload) =>
    metricsToolMock.logEvent(name, payload),
  ),
};

const given = {
  metricsTool,
  metricEventName: 'eventName',
};

describe('AliasButton component', () => {
  test('Should render correctly', async () => {
    render(
      <MetricsProvider metricsTool={given.metricsTool}>
        <AliasButton text="Text Example" />
      </MetricsProvider>,
    );
  });
  test('Given a metricsTool and the Button component with metricEventName, expect it to be executed once logEvent', async () => {
    const { getByText } = render(
      <MetricsProvider metricsTool={given.metricsTool}>
        <AliasButton
          text="Text Example"
          metricEventName={given.metricEventName}
          onPress={() => { }}
        />
      </MetricsProvider>,
    );

    await act(async () => {
      const btn = getByText('Text Example');
      fireEvent.press(btn);
    });
    expect(metricsTool.logEvent).toBeCalledWith(
      given.metricEventName,
      undefined,
    );
  });
});

