import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import AdBanner from './AdBanner';

test('Ad Banner component should render correctly ✔️', () => {
  render(
    <AdBanner
      title={'¿Tienes sugerencias?'}
      description={'Completa nuestro formulario y ayúdanos a mejorar.'}
    />,
  );
});
