import { render, act, fireEvent } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Surface from './Surface';
import { metricsToolMock } from '../../utils/MetricsToolMock';
import MetricsProvider from '../metricsProvider/MetricsProvider';
import Text from '../text/Text';

describe('Surface component', () => {
  test('Should render correctly', async () => {
    render(<Surface />);
  });
  test('Given a metricsTool and the Surface component with metricEventName, expect it to be executed once logEvent', async () => {
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
        <Surface metricEventName={'eventName'} onPress={() => {}}>
          <Text>Surface</Text>
        </Surface>
      </MetricsProvider>,
    );
    await act(async () => {
      const transferButton = getByText('Surface');
      fireEvent.press(transferButton);
    });
    expect(metricsTool.logEvent).toBeCalledWith(
      given.metricEventName,
      undefined,
    );
  });
});
