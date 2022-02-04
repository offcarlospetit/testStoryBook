import { render, fireEvent, act } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import ButtonGroup from './ButtonGroup';

describe('ButtonGroupUI component', () => {
  test('Should render correctly', () => {
    render(
      <ButtonGroup
        buttons={['Nacional', 'Internacional']}
        selectedIndex={0}
        onPress={$event => console.log($event)}
      />,
    );
  });
  test('Given a buttonsWhitMetricData, should render correctly', async () => {
    const { getByText, debug } = render(
      <ButtonGroup
        buttonsWhitMetricData={[
          { name: 'btn1' },
          {
            name: 'btn2aa',
            metricEventName: 'metricEventName',
            metricEventPayload: 'metricEventPayload',
          },
        ]}
        selectedIndex={0}
        onPress={$event => console.log($event)}
      />,
    );
    await act(async () => {
      const btn = getByText('btn1');
      fireEvent.press(btn);
    });
    debug();
  });
  test('Given a , should render correctly', () => {
    render(
      <ButtonGroup
        buttonsWhitMetricData={[]}
        selectedIndex={0}
        onPress={$event => console.log($event)}
      />,
    );
  });
});
