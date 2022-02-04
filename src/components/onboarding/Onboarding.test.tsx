import {render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import type {Slide} from './Onboarding';
import Onboarding from './Onboarding';

const slides_test: Array<Slide> = [
  {
    key: 'one',
    title: 'Sed ut perspiciatis',
    secondTitle: '',
    textDesc:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
    textDescSecondary:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
    textItems: [],
    banner: 'slide1',
  },
  {
    key: 'two',
    title: 'Sed ut perspiciatis unde omnis',
    secondTitle: '',
    textDesc: '',
    titleStyle: {},
    textItems: [
      {
        title: 'Sed ut perspiciatis unde ',
        description: '',
        iconName: 'exchange-arrow',
      },
      {
        title: 'Sed ut perspiciatis unde omnis',
        description: '',
        iconName: 'wallet',
      },
      {
        title: 'Sed ut perspiciatis unde omnis ',
        description: '',
        iconName: 'pagar-tarjeta',
      },
      {
        title: 'Sed ut perspiciatis unde omnis iste',
        description: '',
        iconName: 'saldos-movimientos',
      },
    ],
    banner: 'slide2',
  },
  {
    key: 'three',
    title: 'Sed ut perspiciatis ',
    secondTitle: 'Sed ut perspiciatis ',
    textDesc:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
    textDescSecondary: 'Texto.',
    textItems: [],
    banner: 'slide3',
  },
];

test('Container component should render correctly.', () => {
  render(
    <Onboarding
      slides={slides_test}
      onSkip={() => console.warn('Skip')}
      onDone={() => console.warn('Done')}
    />,
  );
});
