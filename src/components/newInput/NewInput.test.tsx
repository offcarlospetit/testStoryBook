import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import NewInput from './NewInput';
import { metricsToolMock } from '../../utils/MetricsToolMock';
import MetricsProvider from '../metricsProvider/MetricsProvider';

describe('NewInput component', () => {
  test('Should render correctly', async () => {
    render(<NewInput />);
  });
  test('Given a metricsTool and the NewInput component with metricEventName, expect it to be executed once logEvent', async () => {
    const metricsTool = {
      logEvent: jest.fn((name, payload) =>
        metricsToolMock.logEvent(name, payload),
      ),
    };
    const given = {
      metricsTool,
      metricEventName: 'eventName',
    };
    const { getByTestId } = render(
      <MetricsProvider metricsTool={metricsTool}>
        <NewInput
          testID="NewInput"
          placeholder={'placeholder'}
          keyboardType="numeric"
          inputSize="big"
          autoFocus={true}
          maxLength={10}
          onFocus={() => {}}
          value="value"
          metricEvent={{
            onFocus: {
              name: 'eventName',
            },
          }}
        />
      </MetricsProvider>,
    );
    fireEvent(getByTestId('NewInput'), 'onFocus');
    expect(metricsTool.logEvent).toBeCalledWith(
      given.metricEventName,
      undefined,
    );
  });
});
