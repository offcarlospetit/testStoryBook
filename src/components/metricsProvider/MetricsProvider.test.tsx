import { render, act, fireEvent } from '@testing-library/react-native';
import React from 'react';
import MetricsProvider from './MetricsProvider';
import Button from '../button/Button';
import { metricsToolMock } from '../../utils/MetricsToolMock';

describe('MetricsProvider', () => {
  test('Should render correctly', async () => {
    render(<MetricsProvider metricsTool={metricsToolMock} />);
  });
  test('Given a component with metricEventName, expect it to be executed once logEvent', async () => {
    const metricsTool = {
      logEvent: jest.fn((name, payload) =>
        metricsToolMock.logEvent(name, payload),
      ),
    };
    const given = {
      metricsTool,
      metricEventName: 'eventName',
    };
    const { getByText } = render(
      <MetricsProvider metricsTool={given.metricsTool}>
        <Button
          title={'title'}
          onPress={() => {}}
          metricEventName={'eventName'}
        />
      </MetricsProvider>,
    );
    await act(async () => {
      const transferButton = getByText('title');
      fireEvent.press(transferButton);
    });
    expect(metricsTool.logEvent).toBeCalledWith(
      given.metricEventName,
      undefined,
    );
  });
});
