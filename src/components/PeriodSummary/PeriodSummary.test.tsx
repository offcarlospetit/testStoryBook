import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import PeriodSummary from './PeriodSummary';

const testFunction = () => null;

test('PeriodSummary component should render correctly', () => {
  render(
    <PeriodSummary
      isOpen={false}
      title = 'Resumen del periodo'
      subTitle = '21 abr - 21 may 2021'
      continueButtonText = 'Continuar'
      totalChargesLabel = 'Total cargos'
      totalChargesValue = '$300.000'
      totalPaymentsLabel = 'Total Abonos'
      totalPaymentsValue = '$40.000'
      totalPeriodLabel = 'Total periodo'
      totalPeriodValue = '$260.000'
      closeModalCallback={testFunction}
    />,
  );
});

test('PeriodSummary component should render correctly with undefined values', () => {
  render(
    <PeriodSummary      
      isOpen
      closeModalCallback={testFunction}
    />,
  );
});
