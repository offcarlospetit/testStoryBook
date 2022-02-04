import { render, act, fireEvent } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Button from './Button';
import { metricsToolMock } from '../../utils/MetricsToolMock';
import MetricsProvider from '../metricsProvider/MetricsProvider';

describe('Button component', () => {
  test('Should render correctly', async () => {
    render(<Button />);
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

    const { getByText } = render(
      <MetricsProvider metricsTool={given.metricsTool}>
        <Button
          title="title"
          metricEventName={given.metricEventName}
          onPress={() => {}}
        />
      </MetricsProvider>,
    );

    await act(async () => {
      const btn = getByText('title');
      fireEvent.press(btn);
    });
    expect(metricsTool.logEvent).toBeCalledWith(
      given.metricEventName,
      undefined,
    );
  });
});
